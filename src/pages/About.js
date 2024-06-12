import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function About(){

    useEffect(() => {
        AOS.init();
    }, []);

    const images = [
        require("./images/ws.jpeg"),
        require("./images/Hike.jpeg"),
        require("./images/halfdome.jpeg"),
        require("./images/stars.jpeg")
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
           
    return(
        <>
                
                <div data-aos="fade-up" >
                    <h1 className="about-header"> about.</h1>
                    <div className="box-div">
                    <div className="about-bio">
                        <div className="bio-blurb">
                                    I'm a junior at <span className='text-gradient'> Columbia University in New York City.</span> studying computer science. 
                                    I specialize in low-level systems programming, artificial intelligence, robotics, and a bit of web development. 
                                    <br/>
                                    <br/>
                                    At school, I am deeply involved in the <span className='text-gradient'> Columbia Space Initiative</span>. As the software lead for the CubeSat team, I have played a part in the development of 
                                    <span className='text-gradient'> LIONESS</span>, a 6U cubesat selected to be launched by NASA in 2027. Additionally, I serve on the club's admin team as an <span className='text-gradient'>Operations Director</span> and a SEDS representative. 
                                    <br/>
                                    <br/>
                                    Professionally, I intend on pursuing a career in robotics after earning my graduate degree in the field. I am interested in the use of <span className='text-gradient'>astrorobotics</span> for space exploration, 
                                    as well as for automating tasks her on Earth. I plan on starting my own robotics company after gaining experience in the field. 
                                    <br/>
                                    <br/>
                                    My <a href = "/projects" className='text-gradient'> projects </a> page includes details of all of my academic and personal projects. Most of them are centered around software development, but there are a few random fun ones in there as well. Check them out! 
                                    <br/>
                                    <br/>
                                    Outside of my professional life, I enjoy <span className='text-gradient'>hiking, backpacking, and mountaineering</span> I plan on backpacking every national park in the United States.
                                    My favorite trip so far is my Summer 2024 trip to Yosemite where I spent 5 days in the mountains and even summited <span className='text-gradient'>Half Dome</span>. 
                                    To the right are some of my favorite photos from my adventures. 
                                    <br/>
                                    <br/>
                                    I am also passionate about physical fitness. I am currently training for the NYC 5k, and hope to run a marathon in 2026. 
                        </div>
                    </div>

                    <section className="carousel" aria-label="Newest Photos">
                        <img className="carousel-image" src={images[currentIndex]} alt="Carousel" />
                        <div className="carousel-controls">
                            <button className="prev" onClick={prevImage}>‹</button>
                            <button className="next" onClick={nextImage}>›</button>
                        </div>  
                    </section>
                </div>
            </div>        
        </>
    );
}