import Headers from "./components/Headers/Headers.js";
import Main from "./components/Main/Main.js";
import Footers from "./components/Footers/Footers.js";

import CaseStudy from "./Pages/CaseStudy.js";
import DemoChatbotPages from "./Pages/DemoChatbotPages.js";
import PrivacyPolicy from "./Pages/PrivacyPolicy.js";

const All = (props, { getState, setState, juris }) => {
     juris.registerComponent("Headers", Headers);
     juris.registerComponent("Main", Main);
     juris.registerComponent("Footers", Footers);
     juris.registerComponent("CaseStudy", CaseStudy);
     juris.registerComponent("DemoChatbotPages", DemoChatbotPages);
     juris.registerComponent("PrivacyPolicy", PrivacyPolicy);

     return [
          {
               Headers: {},
          },
          () => {
               const link = getState("link");

               switch (link) {
                    case "#real-estate-ai":
                         return { CaseStudy: {} };

                    case "#demo-chat-real-estate-ai":
                         return { DemoChatbotPages: {} };

                    case "#privacy-policy":
                         return { PrivacyPolicy: {} };

                    default:
                         return { Main: {} };
               }
          },
          {
               Footers: {},
          },
     ];
};

export default All;
