import React, { useEffect, useRef } from "react";
import check from "../../images/accept.png";

const About = ({ getAbout }) => {
   const aboutSection = useRef("");

   useEffect(() => {
      getAbout(aboutSection.current);
   }, [getAbout]);

   return (
      <>
         <section id="about" ref={aboutSection}>
            <h2 className="featured-about">ABOUT ME</h2>
            <div className="about-content">
               <div className="about-subtitle">
                  <span> Who is melvin? </span>
               </div>

               <div className="about-list">
                  <p className="about-para">
                     A former OFW. Career shifter and has strong desire to become a Full-Stack Web Developer. I am a self-taught Front-End Developer, currently developing more
                     skills using ReactJS and NodeJS.
                  </p>

                  <p>
                     With no real-life job experience in web development. I enrolled in KODEGOPH bootcamp to learn how web developer world works and looking for job opportunity
                     where I can implement and improve my skills simultaneously.
                  </p>

                  <div className="recognition">
                     <span> Awards and Recognition </span>

                     <ul>
                        <li>
                           <img src={check} alt="Check Icon" />
                           <a
                              href="https://www.freecodecamp.org/certification/boymelvs/javascript-algorithms-and-data-structures"
                              target="_blank"
                              rel="noreferrer noopener"
                              className="certificate"
                           >
                              JavaScript Algorithms and Data Structures
                           </a>
                           -
                           <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer noopener" className="freecodecamp">
                              FREECODECAMP
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default About;
