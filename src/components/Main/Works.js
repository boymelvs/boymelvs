const Works = (props, { getState, setState, juris }) => {
     const projects = [
          {
               image: "/assets/images/RealEstate_Inquiry_Assistant_tempv2.0.png",
               info: { title: "Real Estate AI Inquiry Assistant", description: "FB Messenger automation that answers property queries, sends computations, and notifies agents." },
          },

          {
               image: "/assets/images/RealEstate_Inquiry_Assistant_tempv2.0.png",
               info: { title: "Travel & Tour AI Assistant", description: "Automated package replies, itineraries, pricing and booking confirmations for travel agencies." },
          },

          {
               image: "/assets/images/RealEstate_Inquiry_Assistant_tempv2.0.png",
               info: { title: "Shopee & Lazada Cart Recovery", description: "SMS-driven recovery workflows integrated with seller CSV exports and OneWaySMS." },
          },

          {
               image: "/assets/images/RealEstate_Inquiry_Assistant_tempv2.0.png",
               info: { title: "AI Social Posting Bot", description: "Generates Taglish captions and hashtags, schedules posts to IG/FB, saves hours per week." },
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
                                                                           h3: { className: "info-title", text: project.info.title },
                                                                      },
                                                                      {
                                                                           p: {
                                                                                className: "info-description",
                                                                                text: project.info.description,
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
