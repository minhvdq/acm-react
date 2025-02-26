import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Modal, Button } from 'react-bootstrap';
import Card from './Card';
import members from './members.json'
import NavBar from '../Items/NavBar';
import FooterPage from '../Items/Footer';
import ParticlesComponent from '../Events/particles';

import homeUrl from '../../utils/config';

const images = [
    `${homeUrl}/board/ycpteam.jpg`,
    `${homeUrl}/board/mugshirt.jpg`,
    `${homeUrl}/board/soldering.jpg`
  ];
  
  const Slideshow = () => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
  //   const nextSlide = () => setIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   const prevSlide = () => setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="position-relative rounded-3 overflow-hidden shadow-lg slideshow-container">
          <motion.img
            key={index}
            src={images[index]}
            alt="slideshow"
            className="img-fluid slideshow-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
          
          
        </div>
        <div className="d-flex mt-3">
          {images.map((_, i) => (
            <div
              key={i}
              className={`mx-1 rounded-circle dot ${i === index ? "bg-light" : "bg-secondary"}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    );
  };

export default function BoardPage() {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const coreTeam = members.coreTeam
    const webmasterTeam = members.webmasterTeam
    const exCoreTeam = members.exCoreTeam
    console.log('core team ', coreTeam)

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPerson(null);
        window.scrollTo(0, scrollPosition);
    };

    const handleCardClick = (person) => {
        setSelectedPerson(person);
        setShowModal(true);
    };

    return (
        <>
        <ParticlesComponent id="particles" />
            {/* Hero Section with NavBar and Slideshow */}
            <div className="d-flex flex-column min-vh-100 text-white">
                {/* NavBar at the top of the hero section */}
                <NavBar />

                {/* Hero Content (centered within the remaining space) */}
                <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 p-3">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            {/* Left Column: Text Content */}
                            <div className="col-lg-6 col-md-12 text-lg-start text-center">
                                <h1 className="display-4 fw-bold">
                                    OUR <span style={{ color: "#eb6600" }}>TEAM</span>
                                </h1>
                                <h2 className="h4 mt-5">Who we are?</h2>
                                <p className="mt-3 fs-5" style={{ maxWidth: "400px" }}>
                                    We are Gettysburg ACM—talented developers at Gettysburg College. We strive to make a huge impact through technology.
                                </p>
                            </div>

                            {/* Right Column: Slideshow */}
                            <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 d-flex justify-content-center">
                                <Slideshow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Members Section */}
            <div className="d-flex justify-content-center text-white">
                <section id="Member-display-wrapper" className="container px-4 py-5">
                    <div className="d-flex flex-column gap-5">
                        {/* Leads Team Section */}
                        <div>
                            <div className="mt-10 mb-5">
                                <h2 className="font-weight-bold display-4">Core Team</h2>
                                <div className="row g-4">
                                    {coreTeam.map(member => (
                                        <Card key={member.name} person={member} cl='#C75C5C' onClick={() => {handleCardClick(member)}} />
                                    ))}
                                </div>
                            </div>
                            <br />

                            {/* Another Team Section (if needed) */}
                            <div className="mt-5 mb-5">
                                <h2 className="font-weight-bold display-4">Development Team</h2>
                                <div className="row g-4">
                                    {webmasterTeam.map(member => (
                                        <Card key={member.name} person={member} cl='#00559B' onClick={() => {handleCardClick(member)}} />
                                    ))}
                                </div>
                            </div>
                            <br />

                            <div className="mt-5 mb-5">
                                <h2 className="font-weight-bold display-4">Advisory Team</h2>
                                <div className="row g-4">
                                    {exCoreTeam.map(member => (
                                        <Card key={member.name} person={member} cl='#B53E00' onClick={() => {handleCardClick(member)}} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                centered
                size="lg"
                className="custom-modal"
                >
                <Modal.Header closeButton className="border-0">
                    <Modal.Title className="w-100 text-center">
                    {selectedPerson?.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 mb-3 text-center">
                        <img
                            src={`${homeUrl}${selectedPerson?.photo}`}
                            alt={selectedPerson?.name}
                            className="img-fluid rounded shadow"
                        />
                        </div>
                        <div className="col-md-8">
                        <p className="mb-2">
                            <strong>Class:</strong> {selectedPerson?.class} {selectedPerson?.year}
                        </p>
                        <p className="mb-3">
                            <strong>Description:</strong> {selectedPerson?.description}
                        </p>
                        <div className="d-flex justify-content-center gap-4 mt-4">
                            {selectedPerson?.github ? <a
                            href={`${selectedPerson.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img
                                src={`${homeUrl}/github.png`}
                                alt="Instagram logo"
                                width="50"
                                height="50"
                                className="img-fluid"
                            />
                            </a> : <></>}
                            {selectedPerson?.linkedin ? <a
                            href={selectedPerson?.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img
                                src={`${homeUrl}/linkedin.png`}
                                alt="LinkedIn logo"
                                width="50"
                                height="50"
                                className="img-fluid"
                            />
                            </a> : <></>}
                            { selectedPerson?.email ? <a
                            href={selectedPerson.email}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img
                                src={`${homeUrl}/gmail.png`}
                                alt="Gmail logo"
                                width="50"
                                height="50"
                                className="img-fluid"
                            />
                            </a> : <></>}
                        </div>
                        </div>
                    </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0 justify-content-center">
                    <Button variant="secondary" onClick={handleCloseModal} className="px-4">
                    Close
                    </Button>
                </Modal.Footer>
                </Modal>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                textAlign: 'center', 
                gap: '10px', // Adds space between text and button,
                marginTop: '10vh',
                marginBottom: '15vh'
            }}>
                <p style={{ margin: 0, color: 'white', fontSize: '2rem' }}>Ready to be on board?</p>
                <button style={{ 
                    backgroundColor: '#EB6620', 
                    color: 'white', 
                    border: 'none', 
                    padding: '10px 20px', 
                    borderRadius: '5px', 
                    cursor: 'pointer', 
                    fontSize: '16px'
                }}>
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeWbKtDuQhjYmWE2I6GjMVqm0aQgkCpOjsujopyWAWCuaEiuw/viewform?usp=dialog" 
                        target="_blank" 
                        style={{
                            textDecoration: 'none', 
                            color: 'white', 
                            display: 'block', 
                            width: '100%', 
                            height: '100%'
                        }}
                    >
                        APPLY
                    </a>
                </button>
            </div>
            <FooterPage />
        </>
    );
}