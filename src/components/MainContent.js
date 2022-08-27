import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contacts from "./sections/Contacts";

const MainContent = () => {
   return (
      <>
         <main className="my-main">
            <Home />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contacts />
         </main>
      </>
   );
};

export default MainContent;
