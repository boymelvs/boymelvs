const Works = (props, { getState, setState, juris }) => {
     const projects = [
          {
               image: "/assets/images/RealEstate_Inquiry_Assistant_tempv2.0.png",
               info: {
                    title: "Real Estate AI Inquiry Assistant",
                    benefits: [
                         "Role: Designer & developer of end-to-end workflow (webhook → state machine → AI → Google Sheets)",
                         "Impact: Reduced response time from minutes → instant; saved ~2-4 hours/day for agents",
                    ],
               },
          },

          {
               image: "/assets/images/RealEstate_Inquiry_Assistant_tempv2.0.png",
               info: {
                    title: "Real Estate AI Inquiry Assistant",
                    benefits: [
                         "Role: Designer & developer of end-to-end workflow (webhook → state machine → AI → Google Sheets)",
                         "Impact: Reduced response time from minutes → instant; saved ~2-4 hours/day for agents",
                    ],
               },
          },

          {
               image: "/assets/images/RealEstate_Inquiry_Assistant_tempv2.0.png",
               info: {
                    title: "Real Estate AI Inquiry Assistant",
                    benefits: [
                         "Role: Designer & developer of end-to-end workflow (webhook → state machine → AI → Google Sheets)",
                         "Impact: Reduced response time from minutes → instant; saved ~2-4 hours/day for agents",
                    ],
               },
          },

          {
               image: "/assets/images/RealEstate_Inquiry_Assistant_tempv2.0.png",
               info: {
                    title: "Real Estate AI Inquiry Assistant",
                    benefits: [
                         "Role: Designer & developer of end-to-end workflow (webhook → state machine → AI → Google Sheets)",
                         "Impact: Reduced response time from minutes → instant; saved ~2-4 hours/day for agents",
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
                                        p: { className: "expertise", text: "Selected projects using n8n, AI, Google API, SMS API and FB API integrations" },
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
                                                  className: "works-card",
                                                  children: [
                                                       {
                                                            img: {
                                                                 src: project.image,
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
                                                                                     {
                                                                                          li: { text: project.info.benefits[1] },
                                                                                     },
                                                                                ],
                                                                           },
                                                                      },
                                                                 ],
                                                            },
                                                       },
                                                  ],
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
