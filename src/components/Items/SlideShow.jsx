import {useEffect, useState} from 'react'
import './SlideShow.css'
import {motion} from 'framer-motion'

export default function SlideShow({images}) {
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