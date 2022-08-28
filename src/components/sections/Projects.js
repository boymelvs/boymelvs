import React, { useState, useEffect } from "react";
import Card from "../component/Card";
import ProjectList from "../component/ProjectList";

const Projects = () => {
   const [len, setLen] = useState(8);
   const [isActive, setActive] = useState(false);
   const [result, setResult] = useState([]);

   useEffect(() => {
      const sampleProject = [];

      for (let i = 0; i < len; i++) {
         sampleProject.push(ProjectList[i]);
      }

      setLen(isActive ? ProjectList.length : 8);
      setResult(sampleProject);
   }, [len, isActive]);

   const clickHandle = () => {
      setActive(!isActive);
   };

   return (
      <>
         <section id="projects">
            <h2 className="featured-projects">PROJECTS</h2>

            <div className="projects-content">
               <div className="projects-subtitle">
                  <span className="top"> Website that I created while </span>
                  <span className="bottom">learning as full-stack developer</span>
               </div>

               <div className="slider">
                  <div className="card-slide">
                     <Card projectList={result} />
                  </div>

                  <div className="see-all" onClick={clickHandle}>
                     {isActive ? "SEE LESS" : "SEE ALL..."}
                  </div>

                  {/* <input type="button" value="<" className="btn btn-prev" id="btn-prev" aria-label="button previous" /> */}
                  {/* <input type="button" value=">" className="btn btn-next" id="btn-next" aria-label="button next" /> */}
               </div>
            </div>
         </section>
      </>
   );
};

export default Projects;
