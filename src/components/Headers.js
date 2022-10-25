import React from "react";
import Logo from "./component/Logo";
import Nav from "./component/Nav";
import Burger from "./component/Burger";

const Headers = ({ id, scrollYValue }) => {
     return (
          <>
               <header className={`my-header ${scrollYValue > 50 && "active"}`}>
                    <Logo />
                    <Nav id={id} />
                    <Burger />
               </header>
          </>
     );
};

export default Headers;
