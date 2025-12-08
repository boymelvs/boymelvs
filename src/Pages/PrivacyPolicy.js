const PrivacyPolicy = (props, { RouteManager }) => {
     RouteManager.scrollUp();

     return {
          main: {
               className: "main",
               children: [
                    {
                         h1: { className: "privacy-policy-title", text: "Privacy Policy" },
                    },
                    {
                         p: { className: "updated", text: "Last updated: January 2025" },
                    },
                    {
                         p: {
                              className: "privacy-policy-overview",
                              children: [
                                   "The ",
                                   {
                                        a: {
                                             href: "#demo-chat-real-estate-ai",
                                             text: "AI Real Estate Assistant Demo",
                                             onClick: () => {
                                                  RouteManager.navigate("#demo-chat-real-estate-ai");
                                             },
                                        },
                                   },

                                   " is created as part of a portfolio project to demonstrate how an automated chatbot can answer inquiries and capture lead information. This demo is ",
                                   { span: { text: "not a real real-estate service", style: { fontWeight: "700" } } },
                                   " and any information collected is used only for demonstration purposes.",
                              ],
                         },
                    },

                    {
                         div: {
                              className: "privacy-section",
                              children: [
                                   {
                                        h2: { text: "1. Information We Collect" },
                                   },
                                   {
                                        p: { text: "The AI assistant may ask for the following information:" },
                                   },
                                   {
                                        ul: {
                                             children: [
                                                  {
                                                       li: { text: "Name" },
                                                  },
                                                  {
                                                       li: { text: "Phone Number" },
                                                  },
                                                  {
                                                       li: { text: "Email Address" },
                                                  },
                                                  {
                                                       li: { text: "Property Preferences (location, budget, property type)" },
                                                  },
                                                  {
                                                       li: { text: "Appointment Details (optional)" },
                                                  },
                                             ],
                                        },
                                   },
                                   {
                                        p: {
                                             text: "Information is collected only when you provide it voluntarily during the chat.",
                                        },
                                   },
                              ],
                         },
                    }, //1

                    {
                         div: {
                              className: "privacy-section",
                              children: [
                                   {
                                        h2: { text: "2. How Your Information Is Used" },
                                   },
                                   {
                                        p: {
                                             text: "The collected data is used only to:",
                                        },
                                   },
                                   {
                                        ul: {
                                             children: [
                                                  {
                                                       li: {
                                                            text: "Demonstrate how AI captures leads",
                                                       },
                                                  },
                                                  {
                                                       li: {
                                                            text: "Show real-time updates inside Google Sheets",
                                                       },
                                                  },
                                                  {
                                                       li: {
                                                            text: "Display workflow automation for educational purposes",
                                                       },
                                                  },
                                             ],
                                        },
                                   },
                                   {
                                        p: { text: "No data is used for marketing or shared with third parties." },
                                   },
                              ],
                         },
                    }, //2
                    {
                         div: {
                              className: "privacy-section",
                              children: [
                                   {
                                        h2: { text: "3. Where Your Information Is Stored" },
                                   },
                                   {
                                        p: {
                                             text: "All information is stored temporarily in a Google Sheet connected to this demo. This sheet serves only as a sample data storage for the workflow demonstration.",
                                        },
                                   },
                              ],
                         },
                    }, //3
                    {
                         div: {
                              className: "privacy-section",
                              children: [
                                   {
                                        h2: { text: "4. Data Retention" },
                                   },
                                   {
                                        p: {
                                             text: `Since this is a demo environment, your information may be deleted at any time, and you may request removal of your data at any time. Or type "delete" in chatbox to remove real time`,
                                        },
                                   },
                              ],
                         },
                    }, //4
                    {
                         div: {
                              className: "privacy-section",
                              children: [
                                   {
                                        h2: { text: "5. No Real Transactions" },
                                   },
                                   {
                                        p: {
                                             text: "This AI assistant does not perform actual real estate transactions. Inquiries are not forwarded to agents, and data is not used commercially.",
                                        },
                                   },
                              ],
                         },
                    }, // 5
                    {
                         div: {
                              className: "privacy-section",
                              children: [
                                   {
                                        h2: { text: "6. Security" },
                                   },
                                   {
                                        p: {
                                             text: "The demo uses Google Sheets for storage. Although Google provides secure infrastructure, this setup is for demonstration only. Avoid entering highly sensitive or confidential information.",
                                        },
                                   },
                              ],
                         },
                    }, //6
                    {
                         div: {
                              className: "privacy-section",
                              children: [
                                   {
                                        h2: { text: "7. Your Consent" },
                                   },
                                   {
                                        p: { text: "By using this demo and entering information, you consent to:" },
                                   },
                                   {
                                        ul: {
                                             children: [
                                                  {
                                                       li: { text: "The AI capturing the information you provide" },
                                                  },
                                                  {
                                                       li: { text: "Temporary storage in Google Sheets" },
                                                  },
                                                  {
                                                       li: { text: "Displaying your data in the live demo interface" },
                                                  },
                                             ],
                                        },
                                   },
                                   {
                                        p: { text: "If you do not agree, simply do not enter your personal information." },
                                   },
                              ],
                         },
                    }, //7
                    {
                         div: {
                              className: "privacy-section",
                              children: [
                                   {
                                        h2: { text: "8. Contact" },
                                   },
                                   {
                                        p: {
                                             text: "For questions or data deletion requests, contact:",
                                        },
                                   },
                                   {
                                        div: { text: "Developer: Melvin Enmocino" },
                                   },

                                   {
                                        a: {
                                             href: "#contact",
                                             text: "Contact Here",
                                             onClick: () => {
                                                  RouteManager.navigate("#contact");
                                             },
                                        },
                                   },
                              ],
                         },
                    }, //6
               ],
               style: {
                    gap: "2rem",
                    marginBottom: "5rem",
               },
          },
     };
};

export default PrivacyPolicy;
