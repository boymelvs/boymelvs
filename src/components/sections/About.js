import React, { useEffect, useRef } from "react";
import awards from "../component/Awards";

const About = ({ getAbout }) => {
     const aboutSection = useRef("");

     useEffect(() => {
          getAbout(aboutSection.current);
     }, [getAbout]);

     const results = awards.map((award) => {
          return (
               <li key={award.id}>
                    &#10003;
                    <a href={award.certificateLink} target="_blank" rel="noreferrer noopener" className="certificate">
                         {award.course}
                    </a>
                    -
                    <a href={award.schoolLink} target="_blank" rel="noreferrer noopener" className="freecodecamp">
                         {award.school}
                    </a>
               </li>
          );
     });

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
                                   A former hard-working OFW. A team player who can collaborate with different people. I am a self-taught Web Developer,continuously developing and enhance my skills using ReactJS, NodeJS(express js) and MySQL. And also looking for job opportunity where I can implement and my skills.
                              </p>

                              <div className="recognition">
                                   <span> Awards and Recognition </span>

                                   <ul>{results}</ul>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default About;
