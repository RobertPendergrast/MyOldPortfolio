import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Contact(){
    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
    <>
        <div data-aos="fade-up" >
                <h1 className='projects-title'>contact.</h1>    
                <h2>Let's get in touch!</h2>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
        </div> 
    </>
    );
}