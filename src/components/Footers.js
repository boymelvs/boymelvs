import React from "react";
import copyright from "../images/copyright.svg";

const Footers = () => {
   return (
      <>
         <footer className="my-footer">
            <div className="copyright">
               <img src={copyright} alt="copyright" /> 2022 Melvin Enmocino
            </div>
         </footer>
      </>
   );
};

export default Footers;
