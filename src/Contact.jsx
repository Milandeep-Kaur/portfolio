import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";


const Contact= ()=>{
    const handleClick = (url) => {
      window.open(`https://${url}`, "_blank", "noopener,noreferrer");
    };
   
    const handleEmailClick = () => {
      const email = "kmilandeep015@gmail.com";
      const subject = encodeURIComponent("Let's Connect!");
      const body = encodeURIComponent("Hello, I would like to discuss...");
      const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;
      window.open(mailtoURL, "_blank", "noopener,noreferrer");
    };

    return(
        <>
         <motion.div id="contact" className="contact-page" >
  		   
           <motion.div className="contact-heading-box" initial={{opacity:0 , y:-30}} whileInView={{opacity :1 , y:0}} transition={{duration:1}}>
  	     		
            {/* <h1>Contact Me</h1> */}
  	     		
  	    </motion.div>

  	     	<div className="contact-content-box">
              
             <div className="contact-content">
                 <motion.div className="contact-description" initial={{opacity:0 , x:-30}} whileInView={{opacity :1 , x:0}} transition={{duration:1}}>
              	   <h1>Let’s Turn Ideas</h1>
              	   <h1>Into Action💡</h1>
              	   <p>Whether it’s a collab, a project, or just a friendly hello — I’m all ears (and pixels).</p>
                 </motion.div>
              
                 <motion.div className="contact-information" initial={{opacity:0 , x:-30}} whileInView={{opacity :1 , x:0}} transition={{duration:1,delay:0.3}}>
              	   <h2>kmilandeep015@gmail.com</h2>
              	   <h2>78885xxxxx</h2>
                 </motion.div>
              
                 <div className="contact-sites">
              	   <motion.button onClick={handleEmailClick} initial={{opacity:0 , x:-30}} whileInView={{opacity :1 , x:0}} transition={{duration:1,delay:0.5}}>Get In Touch</motion.button>
                   <motion.button onClick={() => handleClick("https://github.com/Milandeep-Kaur/")} initial={{opacity:0 , x:-30}} whileInView={{opacity :1 , x:0}} transition={{duration:1,delay:0.8}}><FaGithub /></motion.button>
                   <motion.button onClick={() => handleClick("https://www.linkedin.com/in/milandeep-kaur-884909223/")} initial={{opacity:0 , x:-30}} whileInView={{opacity :1 , x:0}} transition={{duration:1,delay:1.2}}><IoLogoLinkedin /></motion.button>
                   <motion.button onClick={() => handleClick("wa.me/917888515686?text=Hello%20there!")} initial={{opacity:0 , x:-30}} whileInView={{opacity :1 , x:0}} transition={{duration:1,delay:1.5}}><IoLogoWhatsapp /></motion.button>
                 </div>
               </div>
  	     	</div>
  	     </motion.div>
           <footer className="contact-footer">
            <p>Built with ❤️ by <span>Milandeep Kaur</span></p>
            </footer>

         
        </>
    );
};

export default Contact;
