import React, { useState, useEffect, useRef } from "react";
import Card from "../component/Card";
import ProjectList from "../component/ProjectList";

const Projects = ({ getProject }) => {
   const projectSection = useRef("");
   const [len, setLen] = useState(8);
   const [isActive, setActive] = useState(false);
   const [result, setResult] = useState([]);

   useEffect(() => {
      const sampleProject = [];
      getProject(projectSection.current);
      setLen(isActive ? ProjectList.length : 8);

      for (let i = 0; i < len; i++) {
         sampleProject.push(ProjectList[i]);
      }

      setResult(sampleProject);
   }, [len, isActive, getProject]);

   const clickHandle = () => {
      setActive(!isActive);
   };

   return (
      <>
         <section id="projects" ref={projectSection}>
            <h2 className="featured-projects">PROJECTS</h2>

            <div className="projects-content">
               <div className="projects-subtitle">
                  <span className="top"> Website that I created while </span>
                  <span className="bottom">learning as full-stack web developer</span>
               </div>

               <div className="slider">
                  <div className="card-slide">
                     <Card projectList={result} />
                  </div>

                  <div className="see-all" onClick={clickHandle}>
                     {isActive ? "SEE LESS..." : "SEE ALL..."}
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Projects;
