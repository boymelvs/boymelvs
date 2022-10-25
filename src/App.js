import React, { useState, useEffect } from "react";
import Headers from "./components/Headers";
import MainContent from "./components/MainContent";
import Footers from "./components/Footers";

const App = () => {
     const [scrollYValue, setScrollYvalue] = useState(0);
     const [id, setId] = useState("");

     useEffect(() => {
          const handleScroll = () => {
               setScrollYvalue(window.scrollY);
          };

          window.addEventListener("scroll", handleScroll, { capture: true });

          return () => {
               window.removeEventListener("scroll", handleScroll, { capture: true });
          };
     }, []);

     const getId = (value) => {
          setId(value);
     };

     return (
          <>
               <Headers id={id} scrollYValue={scrollYValue} />
               <MainContent scrollYValue={scrollYValue} getId={getId} />
               <Footers />
          </>
     );
};

export default App;
