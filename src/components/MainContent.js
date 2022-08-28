import React, { useState, useEffect } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contacts from "./sections/Contacts";

const MainContent = ({ scrollYValue, getId }) => {
   const [homeLocation, setHomeLocation] = useState(0);
   const [aboutLocation, setAboutLocation] = useState(0);
   const [expLocation, setExpLocation] = useState(0);
   const [projectLocation, setProjectLocation] = useState(0);
   const [skillsLocation, setSkillsLocation] = useState(0);
   const [contactsLocation, setContactsLocation] = useState(0);

   const sendId = (location) => {
      if (scrollYValue >= location.offsetTop - location.clientHeight / 4) {
         getId(location.id);
      }
   };

   useEffect(() => {
      sendId(homeLocation);
      sendId(aboutLocation);
      sendId(expLocation);
      sendId(projectLocation);
      sendId(skillsLocation);
      sendId(contactsLocation);
   });

   return (
      <>
         <main className="my-main">
            <Home getHome={setHomeLocation} />
            <About getAbout={setAboutLocation} />
            <Experience getExp={setExpLocation} />
            <Projects getProject={setProjectLocation} />
            <Skills getSkills={setSkillsLocation} />
            <Contacts getContacts={setContactsLocation} />
         </main>
      </>
   );
};

export default MainContent;
