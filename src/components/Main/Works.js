const Works = (props, { getState, setState, juris, RouteManager }) => {
     const projects = [
          {
               id: "real-estate-ai",
               image: "/assets/images/RealEstate_Inquiry_Assistant_tempv2.0.png",
               info: {
                    title: "Real Estate AI Inquiry Assistant",
                    benefits: ["Impact: Reduced response time from minutes → instant; Agents save ~2-4 hours per day from repetitive messages"],
               },
          },

          {
               id: "ai-social-media-posting",
               image: "/assets/images/ai-social-media-posting.png",
               info: {
                    title: "AI Social Media Posting Automation",
                    benefits: ["Impact: Fully automates daily posting; Saves page owners 2-3 hours/day on writing, designing, and scheduling posts"],
               },
          },

          {
               id: "sms-abandoned-cart-recovery",
               image: "/assets/images/smsrecoveryn8n.png",
               info: {
                    title: "SMS Abandoned Cart Recovery System",
                    benefits: [
                         "Impact: Recovers 8-15% of abandoned carts, increasing sales for Shopee & Lazada sellers",
                         "Saves sellers 1-2 hours/day by automating follow-up messages",
                         "Personalized SMS with product details and checkout link improves customer engagement",
                    ],
               },
          },

          {
               id: "rag-pipeline",
               image: "/assets/images/rag-pipeline.png",
               info: {
                    title: "AI Knowledge Base Assistant (RAG Pipeline)",
                    benefits: ["Impact: Reduced support workload and human errors and faster response times for users"],
               },
          },

          {
               id: "content-repurpose-zapier",
               image: "/assets/images/zap-content-repurpose.png",
               info: {
                    title: "AI Video Content Repurposing Automation",
                    benefits: [
                         "Impact: Transforms a single uploaded video into multiple publish-ready content assets automatically. One video → blog posts + social media content with zero manual effort.",
                    ],
               },
          },
     ];

     return {
          section: {
               id: "projects",
               className: "section works",
               children: [
                    {
                         div: {
                              className: "title",
                              children: [
                                   {
                                        h2: { text: "My Projects" },
                                   },

                                   {
                                        p: { className: "expertise", text: "Selected projects using n8n, Zapier, make.com, AI, Google API, and FB API integrations" },
                                   },
                              ],
                         },
                    }, //works-title

                    {
                         div: {
                              className: "works-grid",
                              children: () => [
                                   projects.map((project, index) => {
                                        return {
                                             article: {
                                                  id: project.id,
                                                  className: "works-card",
                                                  children: [
                                                       {
                                                            img: {
                                                                 src: project.image,
                                                                 alt: project.id,
                                                            },
                                                       },

                                                       {
                                                            div: {
                                                                 className: "info",
                                                                 children: [
                                                                      {
                                                                           h4: { className: "info-title", text: project.info.title },
                                                                      },

                                                                      {
                                                                           ul: {
                                                                                className: "info-benefit",
                                                                                children: [
                                                                                     {
                                                                                          li: { text: project.info.benefits[0] },
                                                                                     },
                                                                                ],
                                                                           },
                                                                      },
                                                                 ],
                                                            },
                                                       },
                                                  ],
                                                  onClick: (e) => {
                                                       e.preventDefault();
                                                       RouteManager.navigate(`#${project.id}`);
                                                  },
                                             },
                                        };
                                   }),
                              ],
                         },
                    },
               ],
          },
     };
};

export default Works;
