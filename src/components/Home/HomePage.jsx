import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Items/NavBar'
// import './animation.css';


export default function HomePage() {
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

    useEffect(() => {
        // showAnimation()
        if(!window.localStorage.getItem("animationShowed") ){
            showAnimation();
            setTimeout( () => {
                window.localStorage.setItem("animationShowed", true)
            }, 3000)
            
        }else{
            document.querySelector('.animation-screen').style.display = 'none'
            document.querySelector('.animation-screen').style.opacity = '1'
        }
       
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
                <div style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}>
                    <NavBar />
                    <h1>Main Content</h1>
                </div>
                
            </div>
        </div>
    )
}
