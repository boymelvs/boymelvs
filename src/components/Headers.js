import React from "react";
import Logo from "./component/Logo";
import Nav from "./component/Nav";
import Burger from "./component/Burger";

const Headers = () => {
   return (
      <>
         <header className={`my-header ${"" > 50 && "active"}`}>
            <input type="checkbox" name="burger-checkbox" id="burger-checkbox" aria-label="burger checkbox" />
            <Logo />
            <Nav />
            <Burger />
         </header>
      </>
   );
};

export default Headers;
