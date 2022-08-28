import React, { useEffect, useRef } from "react";
import SkillList from "../component/SkillList";

const Skills = ({ getSkills }) => {
   const skillsSection = useRef("");

   useEffect(() => {
      getSkills(skillsSection.current);
   }, [getSkills]);

   const skillSet = SkillList.map((skill) => {
      return (
         <div className="skill-card " key={skill.id}>
            <img src={skill.image} alt={skill.name} />
            <h3>{skill.name}</h3>
         </div>
      );
   });

   return (
      <>
         <section id="skills" ref={skillsSection}>
            <h2 className="featured-skills">SKILLS & TOOLS</h2>
            <div className="skills-content">
               <div className="skills-subtitle">
                  <span> Tools that I used to create, build, </span>
                  <span>run, test, design, edit and deploy a website </span>
               </div>

               <div className="skills-list">{skillSet}</div>
            </div>
         </section>
      </>
   );
};

export default Skills;
