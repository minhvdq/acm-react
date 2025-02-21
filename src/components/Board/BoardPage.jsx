import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './BoardPage.css'

const images = [
  "/FirstMeeting.jpg",
  "/KakaoTalk.jpg",
  "/Soldering.jpg"
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
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-black text-white p-3">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-lg-start text-center">
            <h1 className="display-4 fw-bold">
              OUR <span style={{ color: "#eb6600" }}>TEAM</span>
            </h1>
            <h2 className="h4 mt-5">Who we are?</h2>
            <p className="mt-3 fs-5" style={{ maxWidth: "400px" }}>
              We are Gettysburg ACM—talented developers at Gettysburg College. We strive to make a huge impact through technology.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 d-flex justify-content-center">
            <Slideshow />
          </div>
        </div>
      </div>
    </div>
  );
}
