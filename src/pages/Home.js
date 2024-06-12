import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home(){
    useEffect(() => {
        AOS.init();
    }, []);
    
    
    return(
    <div className="container">
        <div className="home-page">
            <div data-aos="fade-up" className="title-section">
                <h1  className = "title"> <span style={{color:"#EEEEEE"}}>hello.</span> <br /> <span style={{color:"#53C8E1"}}>I'm Robert</span></h1>
                <div className='words'>
                 <h2 className = "slogan"><span style={{color:"#4B6BBE"}}>Engineer</span>,   
                 <span style={{color:"#4B6BBE"}}> Space Enthusiast</span>, and <span style={{color:"#4B6BBE"}}>Computer Science Student</span>.</h2>
                </div>
            </div>
            <div data-aos="fade-up" className="image-section">
                <img className= "photoMe" src={require('./images/EpicPicture.png')}  alt="New York City"/>
            </div>
        </div>
    </div>    
    
    );
    
        
    
}