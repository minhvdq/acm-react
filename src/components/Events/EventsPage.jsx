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

const EventsPage = () => {
    const [eventsData, setEventsData] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        getEvents().then(events => {
            setEventsData(events.filter(event => event.on_campus === 1));
        }).catch(e => {
            console.log("Error fetching events: " + e);
        });
    }, []);

    const images = [
        `${homeUrl}/events/soldering.jpg`,
        `${homeUrl}/events/panelTalk.jpg`,
        `${homeUrl}/events/mugShirt.jpg`
    ];

    const handleEventClick = (event) => {
        setScrollPosition(window.scrollY);
        setSelectedEvent(event);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedEvent(null);
        window.scrollTo(0, scrollPosition);
    };

    const formatDate = (dateString) => {
        return dayjs(dateString).format('MMMM D, YYYY h:mm A');
    };

    const generateICS = (event) => {
        const start = dayjs(event.start_time).format('YYYYMMDDTHHmmss');
        const end = dayjs(event.end_time).format('YYYYMMDDTHHmmss');
        const now = dayjs().format('YYYYMMDDTHHmmss');

        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//MyEvents//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${event.event_id}-${start}
DTSTAMP:${now}Z
DTSTART:${start}Z
DTEND:${end}Z
SUMMARY:${event.name}
DESCRIPTION:${event.description.replace(/\r\n/g, '\\n')}
LOCATION:${event.location.place_name}, ${event.location.address}
END:VEVENT
END:VCALENDAR`;

        return icsContent;
    };

    const handleDownloadCalendar = () => {
        if (selectedEvent) {
            const icsContent = generateICS(selectedEvent);
            const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${selectedEvent.name}.ics`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    };

    const sortedEvents = [...eventsData].sort((a, b) => new Date(b.start_time) - new Date(a.start_time));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#111', color: '#fff' }}>
            <NavBar />
            <div style={{ flexGrow: 1 }}>
                <div className="d-flex flex-column min-vh-100 text-white hero-section">
                    <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 p-3">
                        <div className="container text-center">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 text-lg-start text-center">
                                    <h1 className="display-4 fw-bold">
                                        OUR <span style={{ color: "#eb6600" }}>EVENTS</span>
                                    </h1>
                                    <p className="mt-3 fs-5" style={{ maxWidth: "400px" }}>
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
                    <div className="main-timeline">
                        <ParticlesComponent id="particles" />
                        {sortedEvents.map((event, index) => (
                            <motion.div
                                key={event.event_id}
                                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="timeline-content-wrapper">
                                    <Card
                                        title={
                                            <div style={{ color: '#eb6600' }}>
                                                <Space>
                                                    <ClockCircleOutlined />
                                                    {dayjs(event.start_time).format('MMM D, YYYY')}
                                                </Space>
                                            </div>
                                        }
                                        className="timeline-card"
                                        hoverable
                                        onClick={() => handleEventClick(event)}
                                        style={{ borderColor: '#eb6600', borderWidth: '2px' }}
                                    >
                                        <div className="enhanced-card-body">
                                            <div className="card-poster-section">
                                                {event.poster_data ? (
                                                    <img
                                                        alt={event.name}
                                                        src={`${event.poster_data}`}
                                                        className="enhanced-card-image"
                                                    />
                                                ) : (
                                                    <div className="enhanced-card-placeholder">No Poster</div>
                                                )}
                                            </div>
                                            <div className="enhanced-card-text-content">
                                                <h3 className="event-title">{event.name}</h3>
                                                <p className="event-location">
                                                    <EnvironmentOutlined style={{ color: '#eb6600' }} /> {event.location.place_name}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                        <div className="timeline-line"></div>
                    </div>
                    <Modal show={showModal} onHide={handleCloseModal} centered size="lg" dialogClassName="custom-modal-dialog">
                        <Modal.Header closeButton className="modal-header-custom">
                            <Modal.Title className="modal-title-custom">{selectedEvent?.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modal-body-custom">
                            <div className="modal-content-container">
                                <div className="modal-poster-section">
                                    {selectedEvent?.poster_data ? (
                                        <img
                                            alt={selectedEvent.name}
                                            src={`${selectedEvent.poster_data}`}
                                            className="modal-image"
                                        />
                                    ) : (
                                        <div className="modal-placeholder">No Poster Available</div>
                                    )}
                                </div>
                                <div className="modal-details-section">
                                    <p><strong>Description:</strong></p>
                                    <p>{selectedEvent?.description}</p>
                                    <p><strong>Start Time:</strong> {selectedEvent?.start_time ? formatDate(selectedEvent.start_time) : 'N/A'}</p>
                                    <p><strong>End Time:</strong> {selectedEvent?.end_time ? formatDate(selectedEvent.end_time) : 'N/A'}</p>
                                    <p>
                                        <strong>Location:</strong>
                                        {selectedEvent?.location ? (
                                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedEvent.location.address)}`} target="_blank" rel="noopener noreferrer">
                                                {selectedEvent.location.place_name}, {selectedEvent.location.address}
                                            </a>
                                        ) : 'N/A'}
                                    </p>
                                    {selectedEvent?.deadline && (
                                        <p><strong>Deadline to RSVP:</strong> {formatDate(selectedEvent.deadline)}</p>
                                    )}
                                    {selectedEvent?.is_colloquium === 1 && <p><strong>This is a Colloquium</strong></p>}
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer-custom">
                            {selectedEvent?.register_link && (
                                <Button variant="primary" className="btn-register" onClick={() => window.open(selectedEvent.register_link, '_blank')}>
                                    Register Event
                                </Button>
                            )}
                            <Button variant="success" onClick={handleDownloadCalendar}>
                                Download to Calendar
                            </Button>
                            <Button variant="info" className="btn-gallery" onClick={() => alert("Gallery button clicked!")}>
                                Gallery
                            </Button>
                            <Button variant="secondary" className="btn-close-modal" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <FooterPage />
        </div>
    );
};

export default EventsPage;