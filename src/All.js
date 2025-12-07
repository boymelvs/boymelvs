import Headers from "./components/Headers/Headers.js";
import Main from "./components/Main/Main.js";
import Footers from "./components/Footers/Footers.js";

import DemoPages from "./Pages/DemoPages.js";

const All = (props, { getState, setState, juris }) => {
     juris.registerComponent("Headers", Headers);
     juris.registerComponent("Main", Main);
     juris.registerComponent("Footers", Footers);
     juris.registerComponent("DemoPages", DemoPages);

     return [{ Headers: {} }, { DemoPages: {} }, { Footers: {} }];
};

export default All;
