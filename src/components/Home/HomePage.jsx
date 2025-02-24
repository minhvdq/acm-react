import { useEffect, useRef, useState  } from 'react';
import anime from 'animejs/lib/anime.es.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Items/NavBar'
import { motion } from "framer-motion";
import FooterPage from '../Items/Footer';
import './style.css';
import './animation.css';




export default function HomePage() {

    const canvasRef = useRef(null);

    const images = [
        'src/images/kkt.jpg',
        'src/images/kk2.jpg',
        'src/images/kkt3.jpg'
    ]

    /**
     * Sliceshow components
     * @returns 
     */
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

    /**
     * Function to run introduction animation
     */
    const showAnimation = () => {
        document.querySelector('.animation-screen').style.display = 'flex'
        document.body.style.overflow = 'hidden'
        anime.set('#logo-text-wrapper', { opacity: 0 });
        anime.set('.gbacmlogo', { opacity: 0 });
        anime.set('.main-content', { opacity: 0 })

        anime.timeline({ loop: false })
            // Step 1: ACM letters animate in
            .add({
                targets: '.ml10 .letter',
                rotateY: [-90, 0],
                opacity: [0, 1],
                duration: 1400,
                easing: "easeInOutQuad",
                delay: (el, i) => 50 * i
            })
            // Step 2: ACM text fades out gradually
            .add({
                targets: '.ml10',
                opacity: [1, 0.3, 0],
                duration: 800,
                easing: "easeInOutQuad",
                delay: 1200,
                complete: () => {
                    document.querySelector('.acm-text-container').style.display = 'none';
                }
            })
            // Step 3: Fade in Gettysburg logo in the center smoothly
            .add({
                targets: '.gbacmlogo',
                opacity: [0, 1],
                duration: 700,
                easing: "easeInOutQuad",
                begin: () => {
                    document.querySelector('.gbacmlogo').style.display = 'block';
                }
            })
            // Step 4: Move the Gettysburg logo slightly to the left
            .add({
                targets: '.gbacmlogo',
                translateX: [120, 0], // Move left slightly
                // translateX: ["0", "0px"], // Move left slightly
                duration: 900,
                easing: "easeInOutQuad"
            }, "-=200")
            // Step 5: Fade in the Gettysburg College text smoothly
            .add({
                targets: '#logo-text-wrapper',
                opacity: [0, 1],
                translateX: [-120, 0], // Slide in from the left
                duration: 1500,
                easing: "easeInOutExpo",
                complete: () => {
                    document.querySelector('#logo-text-wrapper').style.display = 'block'
                    document.body.style.overflow = 'auto'
                }
            })
            .add({
                targets: '.animation-screen',
                opacity: 0,
                complete: () => {
                    document.querySelector('.animation-screen').style.display = 'none'
                },
                easing: "easeOutExpo"
            }).add({
                targets: '.main-content',
                complete: () => {
                    document.querySelector('.main-content').style.display = 'block' 
                },
                opacity: 1,
                easing: "easeOutExpo"
            })
    }

    const showBackgroundAnimation = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

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
    }

    useEffect(() => {
        
        // check local storage
        if(!window.sessionStorage.getItem("animationShowed") ){ // 
            showAnimation();
            setTimeout( () => {
                window.sessionStorage.setItem("animationShowed", true)
            }, 3000)
            
        }else{
            document.querySelector('.animation-screen').style.display = 'none'
            document.querySelector('.animation-screen').style.opacity = '1'
        }

        showBackgroundAnimation()
       
    }, [])

    return (
        <div>
            {/* Hero Section */}
            <div className="animation-screen" style={{
                backgroundColor: "black",
                // display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                textAlign: "center",
                position: "relative",
                display: 'none'
            }}>
                {/* ACM Text Animation */}
                <div className="acm-text-container" style={{textAlign: 'left'}}>
                    <h1 className="ml10">
                        <span className="text-wrapper">
                            <span key={200} style={{ color: "#eb6620" }} className="letter">A</span>
                            {[...("SSOCIATION FOR")].map((char, index) => (
                                <span key={index + 300} className="letter" style={{ color: 'white', whiteSpace: 'pre' }}>
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            ))}
                        </span>
                        <br />
                        <span className="text-wrapper">
                            <span key={201} style={{ color: "#eb6620" }} className="letter">C</span>
                            {[...("OMPUTING")].map((char, index) => (
                                <span key={index + 400} className="letter" style={{ color: 'white', whiteSpace: 'pre' }}>
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            ))}
                        </span>
                        <br />
                        <span className="text-wrapper">
                            <span key={202} style={{ color: "#eb6620" }} className="letter">M</span>
                            {[...("ACHINERY")].map((char, index) => (
                                <span key={index + 500} className="letter" style={{ color: 'white', whiteSpace: 'pre' }}>
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            ))}
                        </span>
                    </h1>
                </div>

                {/* Gettysburg Logo and Text */}
                <div className='gbacmlogo' style={{ display: 'none' }}>
                    <div className="container align-items-center justify-content-center">
                        <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                            {/* Logo Section */}
                            <div className="col-auto" id="logo-wrapper">
                                <img src="/cS-mug2.png" alt="logo" height="300px" width="300px" />
                            </div>

                            {/* Gettysburg College Text */}
                            <div className="col-auto" id="logo-text-wrapper" style={{ textAlign: "left", opacity: 0 }}>
                                <div className="row" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", paddingLeft: 0 }}>
                                    <h1 style={{
                                        fontFamily: "Times New Roman, Garamond, serif",
                                        fontSize: "64px",
                                        fontWeight: "bold",
                                        color: "white",
                                        marginBottom: "-10px", // Pull "COLLEGE" closer
                                        textAlign: "left"
                                    }}>
                                        Gettysburg
                                    </h1>
                                    <h2 style={{
                                        fontFamily: "Times New Roman, Garamond, serif",
                                        fontSize: "24px",
                                        fontWeight: "lighter",
                                        letterSpacing: "4px",
                                        color: "white",
                                        textAlign: "right",
                                        width: "100%"
                                    }}>
                                        COLLEGE
                                    </h2>
                                </div>

                                {/* ACM Shortened Text */}
                                <div className="row" style={{ display: "flex" }}>
                                    <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#eb6620" }}>A C M</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className='main-content'>
            <div className="position-relative min-vh-100">
                {/* Background Canvas (Remains Fixed) */}
                <canvas
                    ref={canvasRef}
                    style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: -1,
                    }}
                />

                {/* Section 1: Hero Section with Fixed Navbar */}
                <section className="position-relative d-flex flex-column justify-content-center align-items-center text-white text-center min-vh-100">
                    {/* Navbar at the Top */}
                    <div className="position-absolute top-0 w-100">
                    <NavBar />
                    </div>

                    {/* Hero Content */}
                    <div className="container mt-5">
                    <div className="row align-items-center">
                        {/* Left Side: Welcome Text */}
                        <div className="col-lg-6 text-lg-start text-center px-4">
                        <h1 className="display-4 fw-bold">Welcome to ACM<br/> at Gettysburg</h1>
                        <h3 className="lead mt-1">
                            Innovate. Code. Connect. 
                        </h3>
                        <button className="btn btn-primary btn-lg mt-3" onClick={() => (window.location.href = "#/Contact")}>
                            Contact Us!
                        </button>
                        </div>

                        {/* Right Side: Slideshow */}
                        <div className="col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
                        <Slideshow />
                        </div>
                    </div>
                    </div>
                </section>

                {/* Section 2: About Us (Full Screen, Right-Aligned) */}
                <section className="d-flex align-items-center justify-content-center text-white min-vh-100">
                    <div className="container">
                        <div className="row align-items-center">
                        {/* Left Side: Image */}
                        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                            <img 
                            src="src/images/kkt.jpg" 
                            alt="group-photo" 
                            className="img-fluid rounded shadow" 
                            width="85%" 
                            height="85%" 
                            />
                        </div>

                        {/* Right Side: Text */}
                        <div id="about" className="col-lg-6 p-4 rounded shadow-sm">
                            <h2 className="fw-bold">About Us</h2>
                            <p>
                            The Chapter is organized and will be operated exclusively for educational and scientific purposes
                            to promote an increased knowledge of and greater interest in the science, design, development, construction,
                            languages, management, and applications of modern computing.
                            <br /><br />
                            Chapters are the "local neighborhoods" of ACM. Professional and student chapters worldwide serve as nodes
                            of activity for ACM members and the computing community, offering seminars, lectures, and opportunities to
                            meet peers and experts in various fields of interest.
                            </p>
                        </div>
                        </div>
                    </div>
                </section> 
                <FooterPage />
                </div>
            </div>
        </div>
    )
}

