import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SlideShow({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Increased from 5000ms to 8000ms (8 seconds)

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => setIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevSlide = () => setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  return (
    <div className="slideshow-wrapper">
      <div className="slideshow-container">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`slide ${index + 1}`}
            className="slideshow-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        
        {/* Circular navigation buttons */}
        <button 
          className="nav-circle prev-circle" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &lsaquo;
        </button>
        <button 
          className="nav-circle next-circle" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &rsaquo;
        </button>
      </div>
      
      <div className="slideshow-dots">
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
}