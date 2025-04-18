import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import './Experience.css';
import nielet from './nielet.png';
import writo2 from './writo2.png';

const Experience = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 1.2 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 1.2 },
    },
  };

  return (
    <>
      <Element className="experience-section" name="experience">
        <h2 className="section-title">Experience</h2>

        <motion.div
          className="experience-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          
        >
          <motion.div className="experience-card" variants={slideInLeft}>
          <div className="card-image">
            <img src={nielet} alt="Experience" />
          </div>
          <div className="card-content">
            <h3 className="company">National Institute of Electronics & Information Technology</h3>
            <h4 className="role">Web Developer Intern</h4>
            <span className="duration">June 2023 - July 2023</span>
            <p className="description">
              Built a Complaint Redressal System using PHP and SQL that handled complaints. Users could log in, file complaints, and track progress, while admins could resolve issues faster.
            </p>
            </div>
          </motion.div>

          <motion.div className="experience-card" variants={slideInRight}>
          <div className="card-image">
            <img src={writo2} alt="Experience" />
          </div>
          <div className="card-content">
            <h3 className="company">Freelance Graphic Designer</h3>
            <h4 className="role">UI/UX + Poster Design</h4>
            <span className="duration">June 2024 - July 2024</span>
            <p className="description">
              Created marketing materials and social media posters using Canva and Figma for educational clients.
            </p>
            </div>
          </motion.div>


          <motion.div className="experience-card" variants={slideInLeft}>
          <div className="card-image">
            <img src={writo2} alt="Experience" />
          </div>
          <div className="card-content">
            <h3 className="company">Writo Education Pvt. Ltd.</h3>
            <h4 className="role">Web Developer Intern</h4>
            <span className="duration">July 2024 - Dec 2024</span>
            <p className="description">
              Built test series platform for NEET & JEE using React, Node.js, MongoDB. Developed admin dashboard, test logic, and result tracking.
            </p>
            </div>
          </motion.div>
        </motion.div>
      </Element>
    </>
  );
};

export default Experience;
