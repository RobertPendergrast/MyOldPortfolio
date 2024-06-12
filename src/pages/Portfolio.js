import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Portfolio(){
    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
    <>
        <div data-aos="fade-up" >
                <h1 className='projects-title'>projects.</h1>    
                <div className='projects-body'>
                    <div data-aos="fade-left" className='project-box'>
                        <div className='project-image'>
                            <div className='image-1'></div>
                        </div>
                        <div className='project-description'>
                            <div className='description-text'>
                                <p> <a href = "https://columbianewsservice.com/2023/04/27/columbia-universitys-first-student-organized-satellite-team-gets-nasa-funding/" className='text-gradient'>LIONESS Satellite</a><br/> <br/> 
                                    Lead software engineer for a team of ~20 students involved with the design and development of a 6U CubeSat. The satellite is purposed with taking long exposure images of low-redshift galaxies to study galactic formation. LIONESS (Line Imaging Orbiter for Nanosatellite-Enabled Spectrographic Surveys) is scheduled to launch by NASA in 2027. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" className='project-box'>
                        <div className='project-description'>
                            <div className='description-text'>                            
                            <p> <span className='text-gradient'>HTTP Web Server</span><br/> <br/>
                                    Designed and implemented a HTTP/1.0 webserver from scratch in C with the Sockets API.
                                    The server makes connections with a simultaneously running database server to query data based on client input. The data is then sent to the browser.
                                    Available upon request.
                                </p>
                            </div>

                        </div>
                        <div className='project-image'>
                            <div className='image-2'></div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='project-box'>
                        <div className='project-image'>
                            <div className='image-3'></div>
                        </div>
                        <div className='project-description'>
                        <div className='description-text'>                            
                        <p> <a href = "https://web-dev-six-omega.vercel.app/" className='text-gradient'> My National Parks </a><br/> <br/>
                                    Developed a web application with an interactive React.js frontend to allow national parks users to journal their adventures. 
                                    Implemented backend services with Node.js and Express, including a RESTful API for handling CRUD operations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-out-left" className='project-box'>
                        <div className='project-description'>
                            <div className='description-text'>                            
                            <p> <a href = "https://github.com/RobertPendergrast/VideoGame" className='text-gradient'> Java Video Game Engine </a><br/> <br/>
                                    Wrote a video game engine from scratch in Java using Swing graphics. No other outside libraries were used for the engine. It features a Perlin Noise terrain generation algorithm, object detection and collisions, and realistic movement physics. 
                                </p>
                            </div>
                        </div>
                        <div className='project-image'>
                            <div className='image-4'></div>
                        </div>
                    </div>
                    <div data-aos="fade-up-right" className='project-box'>
                        <div className='project-image'>
                            <div className='image-5'></div>
                        </div>
                        <div className='project-description'>
                        <div className='description-text'>                            
                        <p> <a href = "https://scratch.mit.edu/users/AgentQuirt/projects/" className='text-gradient'> Online Game Developer </a><br/> <br/>
                                    Developed over 30 games on the online coding editor Scratch. Amassed over 5000 followers with over 1 million people playing my games. Had over a dozen projects placed on the front page.
                                    Chosen to be a site curator.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
    </>
    );
}