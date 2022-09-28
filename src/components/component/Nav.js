import React, { useRef } from "react";
import resume from "../../images/cv/melvin-enmocino.pdf";

const Nav = ({ id }) => {
   const checkBox = useRef();

   const onClickMenu = () => {
      checkBox.current.checked = false;
   };

   return (
      <>
         <input type="checkbox" name="burger-checkbox" id="burger-checkbox" aria-label="burger checkbox" ref={checkBox} />
         <nav className="nav-bar">
            <ul className="menu">
               <li className={`menu-item home ${id === "home" && "active"}`} onClick={onClickMenu}>
                  <a href="#homes">Home</a>
               </li>
               <li className={`menu-item about ${id === "about" && "active"}`} onClick={onClickMenu}>
                  <a href="#about">About</a>
               </li>
               <li className={`menu-item experience ${id === "experience" && "active"}`} onClick={onClickMenu}>
                  <a href="#experience">Experiences</a>
               </li>
               <li className={`menu-item projects ${id === "projects" && "active"}`} onClick={onClickMenu}>
                  <a href="#projects">Projects</a>
               </li>
               <li className={`menu-item skills ${id === "skills" && "active"}`} onClick={onClickMenu}>
                  <a href="#skills">Skills</a>
               </li>
               <li className={`menu-item contacts ${id === "contacts" && "active"}`} onClick={onClickMenu}>
                  <a href="#contacts">Contacts</a>
               </li>

               <li className="menu-items downloadCV" onClick={onClickMenu}>
                  <a href={resume} target="_blank" rel="noopenner noreferrer">
                     Resume
                  </a>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Nav;
