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
               id: "rag-pipeline",
               image: "/assets/images/rag-pipeline.png",
               info: {
                    title: "AI Knowledge Base Chatbot (RAG Pipeline)",
                    benefits: ["Impact: Reduced support workload and human errors and faster response times for users"],
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
                                        p: { className: "expertise", text: "Selected projects using n8n, AI, Google API, and FB API integrations" },
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
