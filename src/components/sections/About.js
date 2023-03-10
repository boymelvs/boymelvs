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
                    <a href={award.schoolLink} target="_blank" rel="noreferrer noopener" className="certificate">
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
                                   A former hard-working OFW. Trainable, fast learner, a team player who can collaborate with different people. I am a self-taught Web Developer, continuously developing and enhance my skills in Javascript, Typescript, ReactJS, NodeJS(express js), MySQL and other Web Developement Technologies.
                              </p>

                              <p className="about-para">
                                   The more I learned, the more I realized that this is what I want to do for a living. After much consideration, I've made the decision to switch careers and pursue web development full-time.
                              </p>

                              <p className="about-para">
                                   What I love most about coding is the challenge of problem-solving. I find it deeply satisfying to tackle complex issues and come up with solutions that meet both the user's needs and the project's requirements.
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
