import React from "react";
import './Project.css';
import { Element } from "react-scroll";
import { motion } from "framer-motion";

import ecotrack from './ecotrack.png';
import doodledash from './doodledash.png';
import writo from './writo.png';
import eems from './eems.png';
import Tilt from 'react-parallax-tilt';

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" }
    }
};

const Project = () => {
    return (
        <>
        <Element className="project" name="project">
            <motion.h1
                      initial={{ opacity: 0, y: -50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                     
                      transition={{ duration: 1 }}
            >
            Things I've Built</motion.h1>
            <div className="project-container">
            <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.02}
            transitionSpeed={250}
            >
                <motion.div
                    className="project-box"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    transition={{ delay: 0.4 }}
                >
                    <img src={doodledash} className="project-icon" alt="Doodle Dash" />
                    <h3>Doodle Dash</h3>
                    <p>Doodle Dash is a real-time multiplayer game where players draw and guess on a shared whiteboard. Built with React.js, Node.js, and Socket.io, it offers a smooth and interactive gaming experience while sharpening my full-stack and real-time app development skills.</p>
                    <div className="tech">
                        <li>#React</li>
                        <li>#Canvas Api</li>
                        <li>#Css</li>
                        <li>#Node.js</li>
                        <li>#Socket.io</li>
                    </div>
                </motion.div>
                </Tilt>

                            <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.02}
            transitionSpeed={250}
            >
            <motion.div
                className="project-box"
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ delay: 0.2 }}
            >
                <img src={writo} className="project-icon" alt="Writo" />
                <h3>Writo Test Series</h3>
                <p>Developed for Writo Educ. Pvt. Ltd., this platform simulates NEET and JEE exams with features for test-taking, performance tracking, and admin management...</p>
                <div className="tech">
                <li>#React</li>
                <li>#Node.js</li>
                <li>#Css</li>
                <li>#MongoDB</li>
                <li>#Express.js</li>
                </div>
            </motion.div>
            </Tilt>

          
                <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.02}
            transitionSpeed={250}
            >
                <motion.div
                    className="project-box"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                >
                    <img src={ecotrack} className="project-icon" alt="Ecotrack" />
                    <h3>Ecotracks: Navigating Railways Through Voice</h3>
                    <p>This project leverages speech recognition to provide real-time train information through voice commands. EcoTracks responds instantly—making railway navigation more accessible, and eco-friendly, one voice at a time.</p>
                    <div className="tech">
                        <li>#Html</li>
                        <li>#Css</li>
                        <li>#JavaScript</li>
                        <li>#Php</li>
                        <li>#Railway Api</li>
                    </div>
                </motion.div>
                </Tilt>
                <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.02}
            transitionSpeed={250}
            >
                <motion.div
                    className="project-box"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    transition={{ delay: 0.6 }}
                >
                    <img src={eems} className="project-icon" alt="EEMS" />
                    <h3>Entry Exit Surveillance System</h3>
                    <p>The Entry-Exit System is a security solution designed to monitor movements at designated locations. Ideal for offices, campuses, or restricted zones, the system streamlines visitor management and improves overall security efficiency.</p>
                    <div className="tech">
                        <li>#Html</li>
                        <li>#Css</li>
                        <li>#JavaScript</li>
                        <li>#Php</li>
                        <li>#My SQL</li>
                    </div>
                </motion.div>
                </Tilt>
            </div>
        </Element>
        </>
    );
};

export default Project;
