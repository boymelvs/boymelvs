const DemoChatbotPages = (props, { getState, setState, RouteManager }) => {
     RouteManager.scrollUp();

     const refreshUrl = () => {
          return "https://docs.google.com/spreadsheets/d/1RLkDF_PVKWzefHOKDHyl9ndFFLgisT9U_iaZOjCfSGE/preview";
     };

     setInterval(() => {
          const iframe = document.getElementById("leadSheet");
          iframe.src = iframe.src.split("?")[0] + "?t=" + new Date().getTime();
     }, 10000);

     return {
          main: {
               className: "main",
               children: [
                    {
                         dv: {
                              className: "demo-instructions",
                              children: [
                                   {
                                        h2: { text: "AI Real-Time Property Chatbot Demo" },
                                   },
                                   {
                                        p: {
                                             children: [
                                                  "This demo showcases an AI-powered real estate assistant built using ",
                                                  { span: { text: "n8n + Google Sheets API. ", style: { fontWeight: "700" } } },
                                                  "It simulates how inquiries from potential buyers or                renters are processed, responded to, and automatically recorded.",
                                             ],
                                        },
                                   },

                                   {
                                        h3: {
                                             text: "What You Will See",
                                        },
                                   },

                                   {
                                        ul: {
                                             children: [
                                                  {
                                                       li: {
                                                            children: [
                                                                 {
                                                                      span: { text: "Left:", style: { fontWeight: "700" } },
                                                                 },
                                                                 " Property Listing Sheet used by the AI-powered real estate assistant.",
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       li: {
                                                            children: [
                                                                 {
                                                                      span: { text: "Right:", style: { fontWeight: "700" } },
                                                                 },
                                                                 " Lead Capture Sheet updated in real time.",
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       li: {
                                                            children: [
                                                                 {
                                                                      span: { text: "Bottom:", style: { fontWeight: "700" } },
                                                                 },
                                                                 " Chatbox powered by an n8n workflow + Google Sheet.",
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   },

                                   {
                                        h3: {
                                             text: "How It Works",
                                        },
                                   },

                                   {
                                        ol: {
                                             children: [
                                                  {
                                                       li: { text: "You type a message." },
                                                  },
                                                  {
                                                       li: { text: "Message is sent to n8n webhook." },
                                                  },
                                                  {
                                                       li: {
                                                            children: [
                                                                 "n8n returns JSON: ",
                                                                 {
                                                                      p: { className: "json", text: `[{ "json": {"reply": "Hello, how can I help you?" }}]` },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       li: { text: "AI reply appears in chat" },
                                                  },
                                                  {
                                                       li: { text: "Lead info is written to the Google Sheet." },
                                                  },
                                                  {
                                                       li: { text: `Type "delete" to remove lead info to Google Sheet.` },
                                                  },
                                             ],
                                        },
                                   },

                                   {
                                        h3: {
                                             text: "Purpose of This Demo",
                                        },
                                   },

                                   {
                                        ul: {
                                             children: [
                                                  {
                                                       li: { text: "Demonstrates AI-assisted real estate conversation." },
                                                  },

                                                  {
                                                       li: { text: "Shows how leads can be captured automatically." },
                                                  },

                                                  {
                                                       li: { text: "Displays real-time updating Google Sheet." },
                                                  },
                                             ],
                                        },
                                   },
                              ],
                         },
                    }, //instructions

                    {
                         div: {
                              className: "dashboard-container",
                              children: [
                                   {
                                        div: {
                                             className: "panel sheet-panel",
                                             children: [
                                                  {
                                                       h3: { text: "🏡 Property Listings" },
                                                  },
                                                  {
                                                       iframe: {
                                                            src: "https://docs.google.com/spreadsheets/d/1Z969hPDITEMo2lGwLsMigD5rGC9_uCPBGvSaQYwDxqY/preview",
                                                            width: "100%",
                                                            height: "400",
                                                            frameborder: "0",
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //Property Listing Sheet

                                   {
                                        div: {
                                             className: "panel sheet-panel",
                                             children: [
                                                  {
                                                       h3: { text: "🧾 Lead Capture (Real-Time)" },
                                                  },
                                                  {
                                                       div: {
                                                            id: "",
                                                            className: "leadSheetContainer",
                                                            children: [
                                                                 {
                                                                      iframe: {
                                                                           id: "leadSheet",
                                                                           src: "https://docs.google.com/spreadsheets/d/1RLkDF_PVKWzefHOKDHyl9ndFFLgisT9U_iaZOjCfSGE/preview",
                                                                           width: "100%",
                                                                           height: "400",
                                                                           frameborder: "0",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //Lead Capture Sheet
                              ],
                         },
                    }, //dashboard

                    {
                         div: {
                              className: "panel chat-panel",
                              children: [
                                   {
                                        div: {
                                             className: "chat-input",
                                             children: [
                                                  {
                                                       iframe: {
                                                            src: "https://mnfm.cloud/webhook/81e21c32-9a42-49ba-abfd-2a3335cfaac2/chat",
                                                            width: "400",
                                                            height: "600",
                                                            title: "Chat",
                                                       },
                                                  },
                                             ],
                                        },
                                   },
                              ],
                         },
                    }, //chat-panel
               ],
               style: {
                    gap: "1rem",
                    marginBottom: "5rem",
               },
          },
     };
};

export default DemoChatbotPages;
