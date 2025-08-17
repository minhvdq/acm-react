import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './events.css';
import { getEvents } from '../../services/event';
import ParticlesComponent from './particles';
import NavBar from '../Items/NavBar';
import FooterPage from '../Items/Footer';
import SlideShow from '../Items/SlideShow';
import homeUrl from '../../utils/config';
import { Card, Space } from 'antd';
import { ClockCircleOutlined, EnvironmentOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import Gallery from './Gallery';

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    getEvents()
      .then((events) => {
        setEventsData((events || []).filter((e) => e.on_campus === 1));
      })
      .catch((e) => console.log('Error fetching events: ' + e));
  }, []);

  const images = [
    `${homeUrl}/events/soldering.jpg`,
    `${homeUrl}/events/panelTalk.jpg`,
    `${homeUrl}/events/mugShirt.jpg`,
  ];

  const handleEventClick = (event) => {
    setScrollPosition(window.scrollY || 0);
    setSelectedEvent(event);
    setShowGallery(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
    setShowGallery(false);
    window.scrollTo(0, scrollPosition);
  };

  const formatDate = (dateString) =>
    dateString ? dayjs(dateString).format('MMMM D, YYYY h:mm A') : 'N/A';

  const esc = (s = '') =>
    String(s)
      .replace(/\\/g, '\\\\')
      .replace(/,/g, '\\,')
      .replace(/;/g, '\\;')
      .replace(/\r?\n/g, '\\n');

  const generateICS = (event) => {
    const start = dayjs(event.start_time).format('YYYYMMDDTHHmmss');
    const end = dayjs(event.end_time).format('YYYYMMDDTHHmmss');
    const now = dayjs().format('YYYYMMDDTHHmmss');

    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//MyEvents//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${event.event_id}-${start}
DTSTAMP:${now}Z
DTSTART:${start}Z
DTEND:${end}Z
SUMMARY:${esc(event.name || '')}
DESCRIPTION:${esc(event.description || '')}
LOCATION:${esc(event.location?.place_name || '')}, ${esc(event.location?.address || '')}
END:VEVENT
END:VCALENDAR`;
  };

  const handleDownloadCalendar = () => {
    if (!selectedEvent) return;
    const icsContent = generateICS(selectedEvent);
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${(selectedEvent.name || 'event').replace(/[^\w\-]+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const sortedEvents = [...eventsData].sort(
    (a, b) => new Date(b.start_time) - new Date(a.start_time)
  );

  return (
    <div className="events-root">
      <NavBar />
      <div className="events-flex-grow">
        <div className="d-flex flex-column min-vh-100 text-white hero-section">
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 p-3">
            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 text-lg-start text-center">
                  <h1 className="display-4 fw-bold">
                    OUR <span className="brand-accent">EVENTS</span>
                  </h1>
                  <p className="mt-3 fs-5 hero-subcopy">
                    Our events aim to provide students with hands-on experience in real-world scenarios.
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 d-flex justify-content-center">
                  <SlideShow images={images} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="events-page-container">
          <div className="header-section">
            <div className="header-content">
              <h1>Explore our On-Campus Events</h1>
              <p>Discover the latest events happening on campus at ACM.</p>
            </div>
          </div>

          <div className="text-center my-4">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => window.location.href = "/eventHub"}
            >
              Event Hub
            </Button>
          </div>

          <div className="main-timeline">
            <ParticlesComponent id="particles" />
            {sortedEvents.map((event, index) => (
              <motion.div
                key={event.event_id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content-wrapper">
                  <Card
                    title={
                      <div className="timeline-card-title">
                        <Space>
                          <ClockCircleOutlined />
                          {dayjs(event.start_time).format('MMM D, YYYY')}
                        </Space>
                      </div>
                    }
                    className="timeline-card"
                    hoverable
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="enhanced-card-body">
                      <div className="card-poster-section">
                        {event.poster_data ? (
                          <img
                            alt={event.name}
                            src={event.poster_data}
                            className="enhanced-card-image"
                          />
                        ) : (
                          <div className="enhanced-card-placeholder">No Poster</div>
                        )}
                      </div>
                      <div className="enhanced-card-text-content">
                        <h3 className="event-title">{event.name}</h3>
                        <p className="event-location">
                          <EnvironmentOutlined className="event-location-icon" /> {event.location?.place_name}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
            <div className="timeline-line" />
          </div>

          <Modal
            show={showModal}
            onHide={handleCloseModal}
            centered
            size="lg"
            dialogClassName="custom-modal-dialog"
          >
            <Modal.Header closeButton className="modal-header-custom">
              <Modal.Title className="modal-title-custom">
                {showGallery ? `${selectedEvent?.name} — Gallery` : selectedEvent?.name}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-body-custom">
              {showGallery ? (
                <Gallery event={selectedEvent} togglePage={() => setShowGallery(false)} />
              ) : (
                <div className="modal-content-container">
                  <div className="modal-poster-section">
                    {selectedEvent?.poster_data ? (
                      <img
                        alt={selectedEvent?.name || 'Event'}
                        src={selectedEvent?.poster_data}
                        className="modal-image"
                      />
                    ) : (
                      <div className="modal-placeholder">No Poster Available</div>
                    )}
                  </div>
                  <div className="modal-details-section">
                    {selectedEvent?.description && (
                      <>
                        <p className="mod-label"><strong>Description</strong></p>
                        <p className="mod-copy">{selectedEvent?.description}</p>
                      </>
                    )}
                    <p className="mod-copy"><strong>Start:</strong> {formatDate(selectedEvent?.start_time)}</p>
                    <p className="mod-copy"><strong>End:</strong> {formatDate(selectedEvent?.end_time)}</p>
                    <p className="mod-copy">
                      <strong>Location:</strong>{' '}
                      {selectedEvent?.location ? (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedEvent.location.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {selectedEvent.location.place_name}, {selectedEvent.location.address}
                        </a>
                      ) : (
                        'N/A'
                      )}
                    </p>
                    {selectedEvent?.deadline && (
                      <p className="mod-copy"><strong>RSVP by:</strong> {formatDate(selectedEvent.deadline)}</p>
                    )}
                    {selectedEvent?.is_colloquium === 1 && <p className="mod-copy"><strong>This is a Colloquium</strong></p>}
                  </div>
                </div>
              )}
            </Modal.Body>

            <Modal.Footer className="modal-footer-custom">
              {showGallery ? (
                <Button variant="secondary" onClick={() => setShowGallery(false)}>
                  Back to Details
                </Button>
              ) : (
                <>
                  {selectedEvent?.register_link && (
                    <Button
                      variant="primary"
                      className="btn-register"
                      onClick={() => window.open(selectedEvent.register_link, '_blank')}
                    >
                      Register Event
                    </Button>
                  )}
                  <Button variant="success" onClick={handleDownloadCalendar}>
                    Download to Calendar
                  </Button>
                  <Button
                    variant="info"
                    className="btn-gallery"
                    onClick={() => setShowGallery(true)}
                  >
                    Gallery
                  </Button>
                  <Button
                    variant="secondary"
                    className="btn-close-modal"
                    onClick={handleCloseModal}
                  >
                    Close
                  </Button>
                </>
              )}
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default EventsPage;
