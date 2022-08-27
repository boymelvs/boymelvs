import React from "react";

const Card = ({ projectList }) => {
   const projects = projectList.map((project) => {
      let tagList = project.tags.map((tag, index) => {
         return <span key={index}>{tag}</span>;
      });

      return (
         <div className="card" key={project.id}>
            <div className="card-title">
               <div className="project-title">{project.title}</div>
               <div className="short-description">{project.description}</div>
            </div>

            <div className="card-image">
               <img src={project.image} alt={project.alt} className="card-img" />

               <div className="visit-btn">
                  <a href={project.url} target="_blank" rel="noreferrer noopener" className="visit">
                     Visit Live
                  </a>
               </div>
            </div>

            <div className="card-tag">{tagList}</div>
         </div>
      );
   });

   return <>{projects}</>;
};

export default Card;
