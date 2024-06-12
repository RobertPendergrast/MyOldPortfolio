import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import "./pages/styles.css";
import {Route, Routes} from "react-router-dom";
import AOS from 'aos';
//in app you define your routes and stuff
AOS.init();

function App() {
  return( 
    <>
    
    <div className = "page">
      <Navbar  />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} /> //each route has a path, which is the page it is going to, the element is the component
            <Route path = "/contact" element = {<Contact />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/projects" element = {<Portfolio/>} />
            <Route path = "/Portfolio" element = {<Home />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
