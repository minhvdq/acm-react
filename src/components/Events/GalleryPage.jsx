import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams from react-router-dom
import './gallery.css';  // Make sure to import the correct CSS file
import ParticlesComponent from './particles';
import NavBar from '../Items/NavBar';
import FooterPage from '../Items/Footer';
import Slider from '../Items/Slider';  // Import the Slider component
import homeUrl from '../../utils/config';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
    const { date } = useParams();  
    const [images, setImages] = useState([]); 
    const [galleryExists, setGalleryExists] = useState(false);

    useEffect(() => {
        const checkImagesExist = async () => {
            const imagePaths = [];
            let imageCount = 1;
            let validImages = 0;

            while (imageCount <= 50) {
                const imagePath = `${homeUrl}/events/gallery/${date}/${date}-${imageCount}.jpg`;
                const img = new Image();
                img.src = imagePath;
                
                img.onload = () => {
                    imagePaths.push(imagePath);  
                    validImages += 1;
                    
                    if (validImages > 0) {
                        setImages(imagePaths);  
                        setGalleryExists(true);
                    }
                };
                
                img.onerror = () => {
                    if (validImages === 0) {
                        setGalleryExists(false);
                    }
                };

                imageCount += 1;
            }
        };

        checkImagesExist(); 
    }, [date]);  

    return (
    <div>
        <div className="gallery-page-container">
            <div className="d-flex flex-column min-vh-100 text-white">
                    {/* NavBar at the top of the hero section */}
                    <NavBar />
                    <ParticlesComponent />
                    {/* Hero Content (centered within the remaining space) */}
                    <div className="hero-content">
                        <h1 className="display-4 fw-bold">
                            Event Gallery
                        </h1>
                    </div>

                    {/* Slideshow Section */}
                    <div className="gallery-slideshow-container">
                        {galleryExists ? (
                            <Slider images={images} />
                            ) : (
                                <p className="no-images-message">No images available for this event.</p>
                            )}
                    </div>
                </div>
            </div>
        <FooterPage />
    </div>
    );
};

export default GalleryPage;
