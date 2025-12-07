import Headers from "./components/Headers/Headers.js";
import Main from "./components/Main/Main.js";
import Footers from "./components/Footers/Footers.js";

const All = (props, { getState, setState, juris }) => {
     juris.registerComponent("Headers", Headers);
     juris.registerComponent("Main", Main);
     juris.registerComponent("Footers", Footers);

     return [{ Headers: {} }, { Main: {} }, { Footers: {} }];
};

export default All;
