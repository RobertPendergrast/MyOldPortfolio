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
                                <p> <span className='text-gradient'>Current Project: Ebay Machine Learning Challenge </span><br/> <br/> Working with a team
                                of two other students to build a model that can accurately extract and label the named 
                                entities in a dataset of item titles on eBay. Utilizing Named entity recognition over
                                a data set of 10 million unlabeled items.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-right" className='project-box'>
                        <div className='project-description'>
                            <div className='description-text'>                            
                                <p> <span className='text-gradient'>Current Project: Line Imaging Nanosatellite</span><br/> <br/>
                                Alongside a team of ~20 undergraduate students, designing, simulating, and programming
                                a spectrograph-loaded nanosatellite. Interned for NASA's/UNP mission concept program to advance 
                                the project. </p>
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
                                <p> <span className='text-gradient'>Space Invaders: Game</span><br/> <br/>
                                Combined C++ code in Arduino IDE with physical components such as
                                servo motors, Piezo electrics and LEDs to create a physical game where the player uses a 
                                laser gun to shoot moving alien spaceships. </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-out-left" className='project-box'>
                        <div className='project-description'>
                            <div className='description-text'>                            
                                <p> <span className='text-gradient'>2d Terrain Generator</span><br/> <br/>
                                An efficient terrain generation program that create randomized tile-based
                                terrain. Includes different biomes and tile types. Made using efficient object oriented 
                                programming and some fun mathematical algorithms :)  </p>
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
                                <p> <span className='text-gradient'>Slime Slash: Video Game</span><br/> <br/>
                                A simple video game created using Java Swing graphics featuring a player 
                                wielding various weapons to fight slimes that spawn periodically. This was my 
                                first real Java project that wasn’t a basic pong game or something of the sorts. 
                                (This is my way of saying the coding is VERY not efficient) </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
    </>
    );
}