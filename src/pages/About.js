import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function About(){

    useEffect(() => {
        AOS.init();
    }, []);
           
    return(
        <>
                
                <div data-aos="fade-up" >
                    <h1 className="about-header"> about.</h1>
                    <div className="box-div">
                    <div className="about-bio">
                        <div className="bio-blurb">
                                    I'm currently an undergraduate studying computer science and applied mathematics at  
                                    <span className='text-gradient'> Columbia University in New York City.</span> Having been born and raised in New Jersey (ew I know), 
                                    I spent my childhood roaming the woods, building forts, treehouses, and boats that my friends 
                                    and I would race down rivers. And so, an interest in engineering insued. 
                                    <br/>
                                    <br/>
                                    As the son of two <span className='text-gradient'>high school teachers, </span> I have always embraced learning as a fundamental part
                                    of my life. In effect, the moment I discovered computer science, I dove head first into learning
                                    all that I could and haven't stopped. Right away I began making little games on Scratch for people
                                    to play (some of which have been played by <span className='text-gradient'>hundreds of thousands</span> of people), and later moving on 
                                    to more complex projects in Java and C++.
                                    <br/>
                                    <br/>
                                    Recently I have been working on designing, simulating, and programming Columbia's own CubeSat named
                                    LIONESS, which to be <span className='text-gradient'>deployed in orbit by NASA</span> in the comming years to do research
                                    on galactic formation. It's been incredibly rewarding to work
                                    on a project that involves technical skills and that is personally interesting to me. 
                                    <br/>
                                    <br/>
                                    In my professional career, I want to combine my eye for design with my technical coding 
                                    and math abilities. I plan to travel down the road of designing intelligent systems, an 
                                    area of engineering that I find fascinating. But who knows? 
                                    <span className='text-gradient'> The future is broad and my journey has just begun.</span> 
                        </div>
                    </div>

                    <section className="carousel" aria-label="Newest Photos">
                            {/*
                            <button class="carousel-button prev">&#8656;</button>
                            <button class="carousel-button next">&#8658;</button>
                            */}
                            <ul>
                                <li class="slide" data-active>
                                    <img class="carousel-image" src={require('./images/Hike.jpeg')}  alt="Me on Hike"/>
                                </li>
                            </ul>    
                    </section>
                </div>
            </div>        
        </>
    );
}