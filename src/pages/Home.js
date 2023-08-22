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
                 <h2 className = "slogan">I am a <span style={{color:"#4B6BBE"}}>computer science student</span>,  
                 <span style={{color:"#4B6BBE"}}> math enthusiast</span>, and <span style={{color:"#4B6BBE"}}>designer</span>  (kinda).</h2>
                </div>
            </div>
            <div data-aos="fade-up" className="image-section">
                <img className= "photoMe" src={require('./images/EpicPicture.png')}  alt="New York City"/>
            </div>
        </div>
    </div>    
    
    );
    
        
    
}