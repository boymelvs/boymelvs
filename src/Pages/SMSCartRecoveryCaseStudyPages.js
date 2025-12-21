const SMSCartRecoveryCaseStudyPages = (props, { RouteManager }) => {
     RouteManager.scrollUp();

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
                                                       h1: { text: "SMS Abandoned Cart Recovery Automation" },
                                                  },
                                                  {
                                                       p: {
                                                            className: "subtitle",
                                                            text: "E-commerce Revenue Recovery | Automated SMS Follow-ups | Shopee & Lazada Sellers",
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // title

                                   {
                                        div: {
                                             className: "case-study-intro",
                                             children: [
                                                  { h2: { text: "Overview" } },
                                                  {
                                                       p: {
                                                            children: [
                                                                 "This project is an automated ",
                                                                 { span: { text: "SMS Abandoned Cart Recovery System", style: { fontWeight: "700" } } },
                                                                 " designed to help e-commerce sellers recover lost sales by sending timely, personalized SMS reminders to customers who did not complete their checkout.",
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       p: {
                                                            text: "The system focuses on simplicity, low cost, and high effectiveness—making it ideal for Shopee and Lazada sellers in the Philippine market.",
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // overview

                                   {
                                        div: {
                                             className: "gallery",
                                             children: [
                                                  { h2: { text: "Workflow & System Screenshots" } },
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
                                                                                          src: "/assets/images/smsrecoveryn8n.png",
                                                                                          alt: "SMS Abandoned Cart Recovery Workflow",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "case-study-card hero-right",
                                                                           ariaHidden: "true",
                                                                           children: [
                                                                                {
                                                                                     img: {
                                                                                          src: "/assets/images/smsrecoveryactual.png",
                                                                                          alt: "SMS Abandoned Cart Recovery Workflow",
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
                                   }, // gallery

                                   {
                                        div: {
                                             className: "problem",
                                             children: [
                                                  { h2: { text: "Client Problem" } },
                                                  {
                                                       p: {
                                                            text: "Many e-commerce sellers experience high cart abandonment but lack an effective follow-up system:",
                                                       },
                                                  },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 { li: { text: "Customers abandon checkout without any reminder." } },
                                                                 { li: { text: "Platform notifications are often ignored." } },
                                                                 { li: { text: "No direct way to personally re-engage customers." } },
                                                                 { li: { text: "Manual follow-ups are time-consuming." } },
                                                                 { li: { text: "Lost revenue from carts that could have been recovered." } },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // problem

                                   {
                                        div: {
                                             className: "solution",
                                             children: [
                                                  { h2: { text: "My Solution" } },
                                                  {
                                                       p: {
                                                            text: "I built a lightweight SMS automation system that automatically sends personalized reminders to customers after cart abandonment—without requiring complex platform integrations.",
                                                       },
                                                  },
                                                  { h3: { text: "Key Features" } },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 { li: { text: "Automated SMS reminders after cart abandonment." } },
                                                                 { li: { text: "Data input for easy seller onboarding." } },
                                                                 { li: { text: "Personalized messages using customer name and product." } },
                                                                 { li: { text: "Configurable follow-up timing (e.g., 1 hour, 24 hours)." } },
                                                                 { li: { text: "Direct checkout or product link in SMS." } },
                                                                 { li: { text: "No database or cron job dependency." } },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // solution

                                   {
                                        div: {
                                             className: "tech-use",
                                             children: [
                                                  { h2: { text: "Tools Used" } },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                { span: { text: "OneWaySMS API, Twilio", style: { fontWeight: "700" } } },
                                                                                " - SMS delivery gateway",
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           children: [{ span: { text: "n8n backend Automation", style: { fontWeight: "700" } } }],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           children: [{ span: { text: "HTML, CSS, JurisJS Dashboard", style: { fontWeight: "700" } } }],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [{ span: { text: "Self-hosted VPS", style: { fontWeight: "700" } } }],
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
                                                  { h2: { text: "Outcome" } },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                "SMS open rates reached approximately ",
                                                                                { span: { text: "90%", style: { fontWeight: "700" } } },
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                "Recovered ",
                                                                                { span: { text: "8-15%", style: { fontWeight: "700" } } },
                                                                                " of abandoned carts based on pilot benchmarks",
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                "Positive ROI even with ",
                                                                                { span: { text: "low daily cart volume", style: { fontWeight: "700" } } },
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           text: "Reduced manual follow-ups for sellers",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // outcome

                                   {
                                        div: {
                                             className: "comparison",
                                             children: [
                                                  { h2: { text: "Before vs After Impact" } },

                                                  {
                                                       p: {
                                                            text: "This table compares a typical small-to-mid e-commerce seller before and after implementing the SMS Abandoned Cart Recovery system, based on low-ticket products with an average order value around ₱100.",
                                                       },
                                                  },

                                                  {
                                                       table: {
                                                            className: "comparison-table",
                                                            children: [
                                                                 {
                                                                      thead: {
                                                                           children: [
                                                                                {
                                                                                     tr: {
                                                                                          children: [
                                                                                               { th: { text: "Metric" } },
                                                                                               { th: { text: "Before SMS Automation" } },
                                                                                               { th: { text: "After SMS Automation" } },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      tbody: {
                                                                           children: [
                                                                                {
                                                                                     tr: {
                                                                                          children: [
                                                                                               { td: { text: "Daily Abandoned Carts" } },
                                                                                               { td: { text: "20" } },
                                                                                               { td: { text: "20" } },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     tr: {
                                                                                          children: [
                                                                                               { td: { text: "Cart Recovery Rate" } },
                                                                                               { td: { text: "1–2%" } },
                                                                                               { td: { text: "5–8%" } },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     tr: {
                                                                                          children: [
                                                                                               { td: { text: "Recovered Orders / Day" } },
                                                                                               { td: { text: "0–1" } },
                                                                                               { td: { text: "1–2" } },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     tr: {
                                                                                          children: [
                                                                                               { td: { text: "Average Order Value" } },
                                                                                               { td: { text: "₱100" } },
                                                                                               { td: { text: "₱110" } },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     tr: {
                                                                                          children: [
                                                                                               { td: { text: "Recovered Revenue / Day" } },
                                                                                               { td: { text: "₱0 – ₱110" } },
                                                                                               { td: { text: "₱110 – ₱220" } },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     tr: {
                                                                                          children: [
                                                                                               { td: { text: "Estimated Monthly Recovery" } },
                                                                                               { td: { text: "₱900 – ₱1,800" } },
                                                                                               { td: { text: "₱3,300 – ₱6,600" } },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                                {
                                                                                     tr: {
                                                                                          children: [
                                                                                               { td: { text: "Manual Follow-ups" } },
                                                                                               { td: { text: "Manual / inconsistent" } },
                                                                                               { td: { text: "Fully automated" } },
                                                                                          ],
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       p: {
                                                            className: "note",
                                                            text: "* Figures are based on conservative benchmarks for low-ticket Shopee/Lazada sellers. Even with a ₱100 AOV, automated SMS follow-ups consistently recover otherwise lost revenue.",
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //before-after-table

                                   {
                                        div: {
                                             className: "diagram-only",
                                             children: [
                                                  { h2: { text: "System Flow Diagram" } },

                                                  {
                                                       p: {
                                                            text: "A simplified visual overview of how the SMS Abandoned Cart Recovery automation works end-to-end.",
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            className: "diagram-container",
                                                            children: [
                                                                 {
                                                                      img: {
                                                                           src: "/assets/images/smsrecoveryflowchart.png",
                                                                           alt: "SMS Abandoned Cart Recovery System Diagram",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       ul: {
                                                            className: "diagram-steps",
                                                            children: [
                                                                 { li: { text: "Customer adds product to cart" } },
                                                                 { li: { text: "Checkout is abandoned" } },
                                                                 { li: { text: "Order data exported" } },
                                                                 { li: { text: "Automation validates and personalizes message" } },
                                                                 { li: { text: "SMS sent via OneWaySMS API, Twilio" } },
                                                                 { li: { text: "Customer clicks link and completes purchase" } },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //diagram
                              ],
                         },
                    },
               ],
          },
     };
};

export default SMSCartRecoveryCaseStudyPages;
