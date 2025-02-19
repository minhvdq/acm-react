import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './events.css';
import events from './events.json';
import ParticlesComponent from './particles';

const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const timelineRef = useRef(null);

    useEffect(() => {
        const adjustTimelineContent = () => {
            if (timelineRef.current) {
                const timelineItems = timelineRef.current.querySelectorAll('.timeline');
                const isMobile = window.innerWidth <= 400;

                timelineItems.forEach((item, index) => {
                    const content = item.querySelector('.timeline-content');
                    const date = item.querySelector('.date');
                    const month = item.querySelector('.month');
                    const year = item.querySelector('.year');

                    if (isMobile) {
                        content.style.width = '90%';
                        content.style.fontSize = '12px';
                        content.style.position = 'relative';
                        content.style.margin = '10px auto';
                        content.style.textAlign = 'center';
                        content.style.left = '0';
                        content.style.display = 'block';
                        date.style.fontSize = '14px';
                        month.style.fontSize = '12px';
                        year.style.fontSize = '16px';
                    }else{
                      content.style.width = '';
                      content.style.fontSize = '';
                      content.style.position = '';
                      content.style.margin = '';
                      content.style.textAlign = '';
                      content.style.left = '';
                      content.style.display = '';
                      date.style.fontSize = '';
                      month.style.fontSize = '';
                      year.style.fontSize = '';
                    }
                });
            }
        };

        adjustTimelineContent();
        window.addEventListener('resize', adjustTimelineContent);

        return () => {
            window.removeEventListener('resize', adjustTimelineContent);
        };
    }, []);

    const handleDateClick = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedEvent(null);
    };

    return (
      <div className="events-page-container">
        <div className="main-timeline" ref={timelineRef}>
           <ParticlesComponent id="particles" />
            {events.map((event, index) => (
              /* Adding Motion*/
              <motion.div
              key={event.id}
              className="timeline"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4}}
              viewport={{ once: true }}
          >
                    <div className="icon"></div>
                    <div className="date-content" onClick={() => handleDateClick(event)}>
                    <motion.div
                            className="date-outer"
                            style={{ cursor: 'pointer' }}
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="date" style={{ fontSize: window.innerWidth <= 768 ? '14px' : '18px' }}>
                                <span className="month" style={{ fontSize: window.innerWidth <= 768 ? '12px' : '16px' }}>{event.month}</span>
                                <span className="year" style={{ fontSize: window.innerWidth <= 768 ? '16px' : '20px' }}>{event.year}</span>
                            </span>
                        </motion.div>
                    </div>
                    <motion.div
                        className="timeline-content" onClick={() => handleDateClick(event)}
                        style={{ fontSize: window.innerWidth <= 768 ? '12px' : '16px' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="title" style={{ fontSize: window.innerWidth <= 768 ? '14px' : '18px' }}>{event.title}</h3>
                        <p className="description" style={{ fontSize: window.innerWidth <= 768 ? '12px' : '16px' }}>{event.description}</p>
                    </motion.div>
                </motion.div>
            ))}

    <Modal show={showModal} onHide={handleCloseModal} centered> 
                <Modal.Header closeButton>
                    <Modal.Title>{selectedEvent?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Date:</strong> {selectedEvent?.month} {selectedEvent?.year}</p>
                    <p><strong>Description:</strong> {selectedEvent?.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </div>
    );
};

export default EventsPage;
