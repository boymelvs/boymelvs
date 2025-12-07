const DemoPages = (props, { getState, setState, juris }) => {
     return {
          main: {
               className: "main",
               children: [
                    {
                         section: {
                              className: "case-study-container",
                              children: [
                                   {
                                        div: {
                                             className: "case-study-title",
                                             children: [
                                                  {
                                                       h1: { text: "Real Estate AI Inquiry Assistant" },
                                                  },
                                                  {
                                                       p: { className: "subtitle", text: "Messenger + n8n Automation | 24/7 Inquiry Handling | Auto-Reply | Lead Capture" },
                                                  },
                                             ],
                                        },
                                   }, // title

                                   {
                                        div: {
                                             className: "case-study-intro",
                                             children: [
                                                  {
                                                       h2: { text: "Overview" },
                                                  },
                                                  {
                                                       p: {
                                                            children: [
                                                                 "The Real Estate AI Inquiry Assistant is a fully automated messaging system built using ",
                                                                 { span: { text: "n8n + Messenger API + Google API + AI. ", style: { fontWeight: "700" } } },
                                                                 "It responds instantly to property inquiries, sends pricing, collects lead details, and pre - qualifies buyers—all without manual intervention.",
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       p: {
                                                            text: "This project was designed to help real estate agents avoid missed inquiries, speed up response time, and improve lead quality.",
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // overview

                                   {
                                        div: {
                                             className: "gallery",
                                             children: [
                                                  {
                                                       h2: { text: "Workflow & UI Screenshots" },
                                                  },
                                                  {
                                                       div: {
                                                            className: "case-study-grid",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "case-study-card",
                                                                           children: [
                                                                                {
                                                                                     img: {
                                                                                          src: "/assets/images/RealEstate_Inquiry_Assistant_tempv2.0.png",
                                                                                          alt: "Messenger Bot Demo Screenshot",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      div: {
                                                                           className: "case-study-card",
                                                                           children: [
                                                                                {
                                                                                     img: {
                                                                                          src: "/assets/images/RealEstate_Inquiry_Assistant_tempv2.0.png",
                                                                                          alt: "n8n Workflow Screenshot",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // Workflow & UI Screenshots

                                   {
                                        div: {
                                             className: "problem",
                                             children: [
                                                  {
                                                       h2: { text: "Client Problem" },
                                                  },
                                                  {
                                                       p: { text: "Real estate agents receive dozens of inquiries daily on Messenger. However, most of them:" },
                                                  },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: { text: "Cannot reply instantly." },
                                                                 },
                                                                 {
                                                                      li: { text: "Need to manually send pricing and details each time." },
                                                                 },
                                                                 {
                                                                      li: { text: "Lose warm leads when they reply late." },
                                                                 },
                                                                 {
                                                                      li: { text: "Have no system to pre-qualify buyers." },
                                                                 },
                                                                 {
                                                                      li: { text: "Use notebooks or screenshots to track leads." },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //problem

                                   {
                                        div: {
                                             className: "solution",
                                             children: [
                                                  {
                                                       h2: { text: "My Solution" },
                                                  },
                                                  {
                                                       p: {
                                                            text: " I built an AI-powered automation system using n8n that answers inquiries 24/7. The bot provides instant information, collects data, and updates the agent's lead sheet automatically.",
                                                       },
                                                  },
                                                  { h3: { text: "Key Features" } },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: { text: "Instant AI replies to property inquiries." },
                                                                 },
                                                                 {
                                                                      li: { text: "Automatically sends sample Pag-IBIG & Bank Financing computations." },
                                                                 },
                                                                 {
                                                                      li: { text: "Provides property details, maps, amenities, and requirements." },
                                                                 },
                                                                 {
                                                                      li: { text: "Collects name, contact number, and preferred schedule." },
                                                                 },
                                                                 {
                                                                      li: { text: "Logs buyer details to Google Sheets / CRM." },
                                                                 },
                                                                 {
                                                                      li: { text: "Auto follow-up messages after 12-24 hours." },
                                                                 },
                                                                 {
                                                                      li: { text: "Supports unlimited properties and pages." },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //solution

                                   {
                                        div: {
                                             className: "tech-use",
                                             children: [
                                                  {
                                                       h2: { text: "Tools Used" },
                                                  },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "n8n", style: { fontWeight: "700" } },
                                                                                },
                                                                                " - main automation engine",
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Facebook Messenger Graph API", style: { fontWeight: "700" } },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "OpenAI / Gemini AI", style: { fontWeight: "700" } },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Google Drive, Google Sheets API", style: { fontWeight: "700" } },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Webhook triggers" },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // tech use

                                   {
                                        div: {
                                             className: "outcome",
                                             children: [
                                                  {
                                                       h2: { text: "Outcome" },
                                                  },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                "Response time improved from minutes → ",
                                                                                { span: { text: "instant replies", style: { fontWeight: "700" } } },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                "Agents save ",
                                                                                { span: { text: "2-4 hours per day", style: { fontWeight: "700" } } },
                                                                                " from repetitive messages",
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                "Significant increase in ",
                                                                                { span: { text: "qualified leads", style: { fontWeight: "700" } } },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           text: "Better follow-up, higher engagement",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //outcome

                                   {
                                        div: {
                                             className: "demo",
                                             children: [
                                                  {
                                                       div: {
                                                            children: [
                                                                 {
                                                                      h2: { text: "Demo" },
                                                                 },
                                                                 {
                                                                      p: { text: "You may try the demo version of this chatbot here:" },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            children: [
                                                                 {
                                                                      a: {
                                                                           href: "",
                                                                           className: "btn btn-primary",
                                                                           text: "Try the Demo Chatbot",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //demo
                              ],
                         },
                    },
               ],
          },
     };
};

export default DemoPages;
