import {Link, useMatch, useResolvePath} from "react-router-dom";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';


export default function  Nabvar(){
    
    useEffect(() => {
        AOS.init();
    }, []);

    return <nav data-aos="fade-down" className="nav">
        <a href="/" className = "site-title">robert.</a>
        <ul>
            <li>
                <a href ="/about"  className="links" id="aboutLink">about.</a>
            </li>
            <li>
                <a href ="/projects" className = "links" id="portfolioLink">projects.</a>
            </li>
            {/*
            <li>
                <a href = "/contact" className = "links" id="contactLink">contact.</a>
            </li> */}
            

            
        </ul>
    </nav>
}

