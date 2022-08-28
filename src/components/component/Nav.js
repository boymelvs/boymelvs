import React from "react";

const Nav = ({ id }) => {
   return (
      <>
         <nav className="nav-bar">
            <ul className="menu">
               <li className={`menu-item home ${id === "home" && "active"}`}>
                  <a href="#homes">Home</a>
               </li>
               <li className={`menu-item about ${id === "about" && "active"}`}>
                  <a href="#about">About</a>
               </li>
               <li className={`menu-item experience ${id === "experience" && "active"}`}>
                  <a href="#experience">Experience</a>
               </li>
               <li className={`menu-item projects ${id === "projects" && "active"}`}>
                  <a href="#projects">Projects</a>
               </li>
               <li className={`menu-item skills ${id === "skills" && "active"}`}>
                  <a href="#skills">Skills</a>
               </li>
               <li className={`menu-item contacts ${id === "contacts" && "active"}`}>
                  <a href="#contacts">Contact</a>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Nav;
