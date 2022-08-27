import React, { useState, useEffect } from "react";
import Headers from "./components/Headers";
import MainContent from "./components/MainContent";
import Footers from "./components/Footers";

const App = () => {
   const [scrollYValue, setScrollYvalue] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         setScrollYvalue(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   // console.log(scrollYValue);

   return (
      <>
         <Headers />
         <MainContent />
         <Footers />
      </>
   );
};

export default App;
