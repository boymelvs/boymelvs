import Headers from "./components/Headers/Headers.js";
import Main from "./components/Main/Main.js";
import Footers from "./components/Footers/Footers.js";
import Resume from "./Pages/Resume.js";

import RealEstateCaseStudy from "./Pages/RealEstateCaseStudy.js";
import AISocialMediaPostingCaseStudy from "./Pages/AISocialMediaPostingCaseStudy.js";
import RAGCaseStudy from "./Pages/RAGCaseStudy.js";
import DemoRealStateChatbotPages from "./Pages/DemoRealStateChatbotPages.js";
import PrivacyPolicy from "./Pages/PrivacyPolicy.js";
import Pages404 from "./Pages/Pages404.js";

const All = (props, { getState, setState, juris }) => {
     juris.registerComponent("Headers", Headers);
     juris.registerComponent("Main", Main);
     juris.registerComponent("Footers", Footers);
     juris.registerComponent("RealEstateCaseStudy", RealEstateCaseStudy);
     juris.registerComponent("AISocialMediaPostingCaseStudy", AISocialMediaPostingCaseStudy);
     juris.registerComponent("RAGCaseStudy", RAGCaseStudy);
     juris.registerComponent("DemoRealStateChatbotPages", DemoRealStateChatbotPages);
     juris.registerComponent("PrivacyPolicy", PrivacyPolicy);
     juris.registerComponent("Pages404", Pages404);
     juris.registerComponent("Resume", Resume);

     return [
          {
               Headers: {},
          },
          () => {
               const link = getState("link", "/");

               switch (link) {
                    case "/":
                    case "#projects":
                    case "#contact":
                         return { Main: {} };

                    case "#resume":
                         return { Resume: {} };

                    case "#real-estate-ai":
                         return { RealEstateCaseStudy: {} };

                    case "#ai-social-media-posting":
                         return { AISocialMediaPostingCaseStudy: {} };

                    case "#rag-pipeline":
                         return { RAGCaseStudy: {} };

                    case "#demo-chat-real-estate-ai":
                         return { DemoRealStateChatbotPages: {} };

                    case "#privacy-policy":
                         return { PrivacyPolicy: {} };

                    default:
                         return { Pages404: {} };
               }
          },
          {
               Footers: {},
          },
     ];
};

export default All;
