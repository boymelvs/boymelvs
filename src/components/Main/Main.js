import Hero from "./Hero.js";
import Services from "./Services.js";
import Works from "./Works.js";
import Process from "./Process.js";
import Contacts from "./Contacts.js";

const Main = (props, { getState, setState, juris }) => {
     juris.registerComponent("Hero", Hero);
     juris.registerComponent("Services", Services);
     juris.registerComponent("Works", Works);
     juris.registerComponent("Process", Process);
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
                         Process: {},
                    },
                    {
                         Contacts: {},
                    },
               ],
          },
     };
};

export default Main;
