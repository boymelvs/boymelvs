import React from "react";
import opening from "../../images/logo/opening.png";
import melvin from "../../images/logo/melvin.png";
import port from "../../images/logo/port.png";
import closing from "../../images/logo/closing.png";

const Logo = () => {
     return (
          <>
               <div className="logo-container">
                    <a href="https://boymelvs.vercel.app/" className="logo">
                         <img src={opening} className="opening-tag" alt="Opening Html Tag Logo" />

                         <img src={melvin} className="melvin-text" alt="Melvin Text Logo" />

                         <img src={port} className="portfolio-text" alt="Portfolio Text Logo" />

                         <img src={closing} className="closing-tag" alt="Closing Html Tag Logo" />
                    </a>
               </div>
          </>
     );
};

export default Logo;
