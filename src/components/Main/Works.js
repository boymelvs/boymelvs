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
               id: "calendar-appointment-scheduler",
               image: "/assets/images/RealEstate_Inquiry_Assistant_tempv2.0.png",
               info: {
                    title: "AI-Powered Calendar Appointment Scheduler",
                    benefits: ["Impact: Reduced admin time by 80% by automating customer qualification, scheduling, and calendar management."],
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
                                                  id: project.id,
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
