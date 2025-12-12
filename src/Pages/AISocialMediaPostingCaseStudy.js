const AISocialMediaPostingCaseStudy = (props, { RouteManager }) => {
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
                                                       h1: { text: "AI Social Media Posting Automation" },
                                                  },
                                                  {
                                                       p: {
                                                            className: "subtitle",
                                                            text: "Facebook Pages + n8n Automation | AI Content Creation | Auto-Posting | Zero Manual Work",
                                                       },
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
                                                                 "The AI Social Media Posting Automation is a fully autonomous content engine built using ",
                                                                 {
                                                                      span: {
                                                                           text: "n8n + Gemini AI + Unsplash API + Google Sheets + Facebook Pages API. ",
                                                                           style: { fontWeight: "700" },
                                                                      },
                                                                 },
                                                                 "It automatically generates daily themed quotes, captions, hashtags, and background images — then creates a final graphic and publishes it directly to a Facebook page.",
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       p: {
                                                            text: "The workflow eliminates the need for daily manual content creation and helps page owners maintain consistent posting without spending hours writing or designing",
                                                       },
                                                  },

                                                  {
                                                       p: {
                                                            text: "This project was created to help content creators, small businesses, and meme/quote pages stay active every single day using a smart AI-driven system.",
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
                                                                                          src: "/assets/images/ai-social-media-posting.png",
                                                                                          alt: "AI Social Media Posting",
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
                                                                                          src: "/assets/images/UI-ai-social-media-posting.png",
                                                                                          alt: "AI Social Media Posting",
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
                                                       p: { text: "Many page owners struggle with consistent posting because:" },
                                                  },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: { text: "They run out of ideas for quotes and captions." },
                                                                 },
                                                                 {
                                                                      li: { text: "They don’t have time to design daily content." },
                                                                 },
                                                                 {
                                                                      li: { text: "They lack creative direction or inspiration." },
                                                                 },
                                                                 {
                                                                      li: { text: "They forget to post regularly." },
                                                                 },
                                                                 {
                                                                      li: { text: "They manually repeat the same steps every day." },
                                                                 },
                                                                 {
                                                                      li: { text: "They cannot maintain a unique, non-repetitive feed." },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       p: {
                                                            text: "This leads to inconsistent page activity, lower audience engagement, and slower growth.",
                                                            style: {
                                                                 marginTop: "2rem",
                                                            },
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
                                                            text: "I built an AI-powered social media automation workflow using n8n that generates and posts complete content automatically based on the theme of the day.",
                                                       },
                                                  },
                                                  { h3: { text: "The system:" } },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: { text: "Creates unique quotes based on daily themes." },
                                                                 },
                                                                 {
                                                                      li: { text: "Writes captions in a natural tone." },
                                                                 },
                                                                 {
                                                                      li: { text: "Generates relevant hashtags." },
                                                                 },
                                                                 {
                                                                      li: { text: "Pulls background images from Unsplash." },
                                                                 },
                                                                 {
                                                                      li: { text: "Ensures no duplicates are posted." },
                                                                 },
                                                                 {
                                                                      li: { text: "Saves content history to Google Sheets." },
                                                                 },
                                                                 {
                                                                      li: { text: "Automatically designs and publishes a final quote image to Facebook." },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  { h3: { text: "Key Features" } },
                                                  {
                                                       h4: { text: "Daily Theme-Based AI Content", style: { fontWeight: "600" } },
                                                  },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: { text: "Monday - Motivation." },
                                                                 },
                                                                 {
                                                                      li: { text: "Tuesday - Hugot." },
                                                                 },
                                                                 {
                                                                      li: { text: "Wednesday - Wisdom." },
                                                                 },
                                                                 {
                                                                      li: { text: "Thursday - Gratitude." },
                                                                 },
                                                                 {
                                                                      li: { text: "Friday - Faith." },
                                                                 },
                                                                 {
                                                                      li: { text: "Saturday - Weekend Vibes." },
                                                                 },
                                                                 {
                                                                      li: { text: "Sunday - Self-Care." },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            children: [
                                                                 { h4: { text: "Automatic Quote & Caption Generation" } },
                                                                 {
                                                                      ul: {
                                                                           children: [
                                                                                {
                                                                                     li: { text: "Gemini AI produces quotes, captions, and hashtags aligned with the theme." },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                            style: { marginTop: "2rem" },
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            children: [
                                                                 { h4: { text: "Automatic Image Retrieval" } },
                                                                 {
                                                                      ul: {
                                                                           children: [
                                                                                {
                                                                                     li: {
                                                                                          text: "Unsplash API provides high-quality background images matching the theme's aesthetic.",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                            style: { marginTop: "2rem" },
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            children: [
                                                                 { h4: { text: "Automatic Graphic Creation" } },
                                                                 {
                                                                      ul: {
                                                                           children: [
                                                                                {
                                                                                     li: {
                                                                                          text: "The workflow generates a finished poster-style image using a graphic automation API.",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                            style: { marginTop: "2rem" },
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            children: [
                                                                 { h4: { text: "Automatic Facebook Posting" } },
                                                                 {
                                                                      ul: {
                                                                           children: [
                                                                                {
                                                                                     li: {
                                                                                          text: "The generated image is posted directly to the Facebook Page with caption + hashtags.",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                            style: { marginTop: "2rem" },
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            children: [
                                                                 { h4: { text: "Scheduled Posting Times" } },
                                                                 {
                                                                      ul: {
                                                                           children: [
                                                                                {
                                                                                     li: {
                                                                                          text: "A cron schedule posts automatically at specific date and time.",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                            style: { marginTop: "2rem" },
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
                                                                                     span: { text: "n8n", style: { fontWeight: "600" } },
                                                                                },
                                                                                " - main automation engine",
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Google Gemini AI", style: { fontWeight: "600" } },
                                                                                },
                                                                                " - Quote, caption, hashtag creation",
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Unsplash API", style: { fontWeight: "600" } },
                                                                                },
                                                                                " - Image generation",
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Google Drive, Google Sheets API", style: { fontWeight: "600" } },
                                                                                },
                                                                                " - Duplicate prevention + content logging",
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Facebook Graph API", style: { fontWeight: "600" } },
                                                                                },
                                                                                " - Automated posting",
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Render Image API", style: { fontWeight: "600" } },
                                                                                },
                                                                                " - Automatic graphic creation",
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Cron Scheduling", style: { fontWeight: "600" } },
                                                                                },
                                                                                " - Automated posting times",
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
                                                                           text: "100% automated daily FB posting",
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           text: "No repeated quotes or images",
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           text: "Saves 2–3 hours per day for content creators",
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           text: "Keeps page active even without manual work",
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           text: "Produces clean, high-quality graphics consistently",
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           text: "Ensures theme consistency and creativity",
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           text: "Perfect for scaling into multiple pages",
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
                                                                      h2: { text: "Actual Result" },
                                                                 },
                                                                 {
                                                                      p: { text: "You may view the automated posting results on this page:" },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       div: {
                                                            children: [
                                                                 {
                                                                      a: {
                                                                           href: "https://www.facebook.com/JokesQuotesAstigNaBanat/",
                                                                           target: "_blank",
                                                                           rel: "noopenner noreferrer",
                                                                           className: "btn btn-primary",
                                                                           text: "Facebook Pages",
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

export default AISocialMediaPostingCaseStudy;
