import React, { useEffect, useRef, useState } from 'react';
import './style.css';

function App() { 
  const canvasRef = useRef(null);
  const [galleryImages, setGalleryImages] = useState([
    'src/images/kkt.jpg',
    'src/images/kk2.jpg',
    'src/images/kkt3.jpg'
  ]);
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Slideshow logic
    let slideIndex = 0;
    showSlides();
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }

    function showDivs(n) {
      let i;
      let x = document.getElementsByClassName("mySlides");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
    }
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 3000); // Change image every 2 seconds
    }

    class Particle {
        constructor(x, y, angle, color) {
            this.x = x;
            this.y = y;
            this.angle = angle;
            this.color = color;
            this.speed = 3;
            this.size = 2;
            this.tail = [];
            this.tailLength = 50;
            this.dead = false;
        }

        update() {
            if (Math.random() > 0.95) {
              this.angle += (Math.random() > 0.5 ? 1 : -1) * Math.PI / 4;
            }

            this.tail.push({ x: this.x, y: this.y });
            if (this.tail.length > this.tailLength) {
              this.tail.shift();
            }

            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;

            if (
              this.x < 0 ||
              this.x > canvas.width ||
              this.y < 0 ||
              this.y > canvas.height
            ) {
              this.dead = true;
            }
        }

        draw() {
            ctx.fillStyle = `hsl(${this.color}, 100%, 80%)`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();

            this.tail.forEach((point, index) => {
              const alpha = index / this.tail.length;
              ctx.fillStyle = `hsla(${this.color}, 70%, 30%, ${alpha})`;
              ctx.beginPath();
              ctx.arc(point.x, point.y, this.size, 0, Math.PI * 2);
              ctx.fill();
            });
        }
    }

    const particles = [];

    function burst(count) {
      const color = 207.1;//Math.floor(Math.random() * 360);
      for (let i = 0; i < count; i++) {
        const angle = Math.floor(Math.random() * 8) * (Math.PI / 4);
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, angle, color));
      }
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        if (particles[i].dead) {
          particles.splice(i, 1);
        } else {
          particles[i].draw();
        }
      }
      
      if (particles.length < 50) { // Keep looping with bursts of particles
        burst(25);
      }

      requestAnimationFrame(animate);
    }

    const handleKeyDown = (e) => {
      if (e.key === ' ') {
        burst(25);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    burst(50);
    animate();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  //return <canvas ref={canvasRef} style={{ display: 'block', width: '100vw', height: '100vh' }} />;
  return (
    <div className='main-page'>
    
      <div className="relative flex flex-col items-center min-h-screen bg-gray-100">
        <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} />
        <div className="item1">
            <header className="hero-title">Welcome to <br/> Our Homepage</header>
            <p className="hero-subtitle">Discover more about us and explore what <br/> we have to offer at ACM Gburg.</p>
            <button className="button-34" role="button" onClick="window.location.href='#/Contact'">Contact Us!</button>
        </div>
        <div className="slideshow-container myChangeSlide">
            {galleryImages.map((image, index) => (
                <div className="mySlides fade" key={index}>
                    <div className="numbertext">{index + 1} / {galleryImages.length}</div>
                    <picture>
                        <img src={image} className="image_setting" alt={`Gallery ${index + 1}`} />
                      <figcaption>Our Gallery</figcaption>
                    </picture>
                </div>
            ))}

            {/* Next and previous buttons */}
            <a className="prev" onClick="plusDivs(-1)">&#10094;</a>
            <a className="next" onClick="plusDivs(1)">&#10095;</a>

            {/* The dots/circles */}
            <div style={{ textAlign: 'center' }}>
                {galleryImages.map((_, index) => (
                    <span className="dot" key={index} onClick="plusDivs(index)"></span>
                ))}
            </div>
        </div>
            
        
        <div className="item3">
          <h1 className="hero-titleh1"> About Us </h1>
          <p className="hero-subtitlep2"> The Chapter is organized and will be operated exclusively <br/> for educational and scientific purposes <br/>to promote an increased knowledge of greater <br/>interest in the science, design, development, construction,<br/> languages, management and applications of <br/>modern computing. Chapters are the "local <br/> neighborhoods" of ACM. The professional and student <br/> chapters worldwide serve as nodes of activity for ACM <br/>members and the computing community at large, offering <br/>seminars, lectures, and the opportunity to meet peers <br/>and experts in many fields of interest.</p> 
          
          
        </div>
        
        
        
        {/*FOOTER*/}
        
        
        
        <footer className="aaa footer-container bg-gray-800 text-white p-6 flex justify-around items-center">
          <div className="logos flex space-x-4">
            <a className="aaa" href="https://www.gettysburg.edu/academic-programs/computer-science/" target="_blank" rel="noopener noreferrer">
              <img className="aaa msfea w-24" src="src/images/d.png" alt="ACM logo" width='100px' height='100px'/>
            </a>
            <a className="aaa" href="https://www.gettysburg.edu/" target="_blank" rel="noopener noreferrer">
              <img className="aaa msfea w-24" src="src/images/gc.png" alt="Gettysburg College logo" height='100px' />
            </a>
          </div>

          <div className="aaa center-section text-center">
            <small className="aaa block mt-2">© ACM at Gburg 2025</small>
          </div>

          <div className="aaa center-section">
            <p className="aaa">Follow us on social media</p>
            <div className="aaa social-icons flex space-x-4 mt-2">
              
              <a
                className="aaa social-icon-link text-xl text-blue-400 hover:text-blue-600"
                aria-label="Instagram"
                href="https://www.instagram.com/gburg_acm?igsh=bWNwMDM3ejVtNzZ6"
                target="_blank"
              >
                <img className="aaa" src="src/images/instagram.png" alt="Instagram logo" width='50px' height='50px'/>
              </a>
              <a
                className="aaa social-icon-link text-xl text-blue-400 hover:text-blue-600"
                aria-label="LinkedIn"
                href="https://www.linkedin.com"
                target="_blank"
              >
                <img className="aaa" src="src/images/ln.png" alt="Instagram logo" width='70px' height='70px'/> 
              </a>
              <a
                className="aaa social-icon-link text-xl text-blue-400 hover:text-blue-600"
                aria-label="Gmail"
                href="https://www.gmail.com"
                target="_blank"
              >
                <img className="aaa" src="src/images/gm.png" alt="Gmail logo" width='70px' height='70px'/> 
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
