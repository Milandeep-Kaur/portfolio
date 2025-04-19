import React from "react";

import { motion } from "framer-motion"; // Import motion from framer-motion
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { Link, Element} from "react-scroll";
import  About from './About';
import './Home.css';
import logo from './logo.png';
import resume from './resume.pdf';
import { FaRegFilePdf } from "react-icons/fa";
import Project from './Project.jsx';
// import web from "./web.png";
import developer from './developer.png';
import Experience from "./Experience.jsx";
import Contact from "./Contact.jsx";
const Home=()=>{
  const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

//for mobile
const touchX = useMotionValue(0);
const touchY = useMotionValue(0);

const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

useEffect(() => {
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

//for mobile
useEffect(() => {
  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      touchX.set(e.touches[0].clientX);
      touchY.set(e.touches[0].clientY);
    }
  };

  window.addEventListener("touchmove", handleTouchMove);
  return () => {
    window.removeEventListener("touchmove", handleTouchMove);
  };
}, []);

    return(
    <>
    <Element className="home-page" name="home">
        <div className="header">
            
            
            <div className="navbar">
            <li><Link to="home" spy={true} smooth={true} duration={500} activeClass="active" offset={-80}>
            Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} duration={500} activeClass="active" offset={-80} >
            About</Link></li>
            <li><Link to="project" spy={true} smooth={true} duration={500} activeClass="active" offset={-80}>
            Projects</Link></li>
            <li><Link to="experience" spy={true} smooth={true} duration={500} activeClass="active" offset={-100}>
            Experience</Link></li>
            <li><Link to="contact" spy={true} smooth={true} duration={500} activeClass="active" offset={-80}>
            Contact</Link></li>
          </div>

            
        </div>
        <div className="home" >
        <motion.div
            className="left-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >    
        <p>Hello 👋, I'm</p>
        <h1>Milandeep Kaur</h1>
        <p>I'm a web developer based in INDIA <br></br>and I'm very passionate and  <br></br>dedicated towards my work.</p>
        {/* <div className="resume-btn">
            <button className="download-btn"><FaRegFilePdf /> Download Resume</button>
        </div> */}
       
        
          <motion.button
                  className="download-btn"
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={resume} download><FaRegFilePdf /> Download Resume  </a>
          </motion.button>
      
        
        </motion.div>
        <motion.div
            className="right-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={developer} alt="web developer"></img>
        </motion.div>
        </div>
       
    </Element>
    <About/>
    <Project/>
    <Experience/>
    <Contact/>
    <motion.div
  className="cursor-indicator"
  style={{
    x: smoothX,
    y: smoothY,
  }}
/>
<motion.div
  className="mobile-trail"
  style={{
    x: smoothX,
    y: smoothY,
  }}
/>


    </>
    );
};
export default Home;