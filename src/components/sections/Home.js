import React, { useEffect, useRef } from "react";
import man from "../../images/intro.png";

const Home = ({ getHome }) => {
     const homeSection = useRef("");

     useEffect(() => {
          getHome(homeSection.current);
     }, [getHome]);

     return (
          <>
               <section id="home" ref={homeSection}>
                    <div className="left">
                         <h1 className="greeting">Hi, I'm Melvin</h1>
                         <div className="career">Web Developer</div>

                         <div className="cta">
                              <a href="#contacts">
                                   <input type="button" id="contact-btn" className="cta-btn contact-btn" value="Hire Me" aria-label="Get in Touch Button" />
                              </a>

                              <a href="#projects">
                                   <input type="button" id="work-btn" className="cta-btn work-btn" value="See my Works" aria-label="See my works" />
                              </a>
                         </div>
                    </div>

                    <div className="right">
                         <img src={man} alt="man" />
                    </div>
               </section>
          </>
     );
};

export default Home;
