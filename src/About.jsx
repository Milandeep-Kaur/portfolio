import React from "react";
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import './About.css';
import me from './me.png';
import { FaReact, FaHtml5, FaCss3, FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiPhpFill } from "react-icons/ri";

const skillContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each icon
      }
    }
  };
  
  const skillIcon = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };
  
const About = () => {
  return (
    <>
      <Element className="about-main" name="about">
       
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
         
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        
       
        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          
          <motion.div
            className="about-left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>
              Hi there, I'm a passionate web developer <br />
              and dedicated towards crafting clean, <br />
              user-friendly experiences. I specialize in front-end <br />
              and back-end development, interactive websites and <br />
              web applications.
            </p>
            <h2>EDUCATION</h2>
            <p>
              BTech in Computer Science & Engineering <br />
              GNDEC, Ludhiana ~ 8.45 CGPA
            </p>
            <h2>MY SKILLS</h2>
                <motion.div
                    className="skills"
                    variants={skillContainer}
                    initial="hidden"
                    whileInView="show"
                    
                    >
                    <motion.div variants={skillIcon}><FaHtml5 /></motion.div>
                    <motion.div variants={skillIcon}><FaCss3 /></motion.div>
                    <motion.div variants={skillIcon}><FaReact /></motion.div>
                    <motion.div variants={skillIcon}><SiMysql /></motion.div>
                    <motion.div variants={skillIcon}><RiPhpFill /></motion.div>
                    <motion.div variants={skillIcon}><FaJava /></motion.div>
                </motion.div>
          </motion.div>
          
          <motion.div
            className="about-right"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={me} alt="my-pic" />
          </motion.div>
        </motion.div>
      </Element>
    </>
  );
};

export default About;
