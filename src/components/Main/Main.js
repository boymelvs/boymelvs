import Hero from "./Hero.js";
import Services from "./Services.js";
import Works from "./Works.js";
import Contacts from "./Contacts.js";

const Main = (props, { getState, setState, juris }) => {
     juris.registerComponent("Hero", Hero);
     juris.registerComponent("Services", Services);
     juris.registerComponent("Works", Works);
     juris.registerComponent("Contacts", Contacts);

     return {
          main: {
               className: "main",
               children: [
                    {
                         Hero: {},
                    },
                    {
                         Services: {},
                    },
                    {
                         Works: {},
                    },
                    {
                         Contacts: {},
                    },
               ],
          },
     };
};

export default Main;
