import React from "react";

const Nav = () => {
   return (
      <>
         <nav className="nav-bar">
            <ul className="menu">
               <li className={`menu-item home `}>
                  <a href="#homes">Home</a>
               </li>
               <li className={`menu-item about `}>
                  <a href="#about">About</a>
               </li>
               <li className="menu-item projects">
                  <a href="#projects">Projects</a>
               </li>
               <li className="menu-item skills">
                  <a href="#skills">Skills</a>
               </li>
               <li className="menu-item contacts">
                  <a href="#contacts">Contact</a>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Nav;
