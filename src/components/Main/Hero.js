const Hero = (props, { getState, setState, juris }) => {
     const stats = [
          {
               number: "50+",
               title: "Automation Delivered",
          },

          {
               number: "95%",
               title: "Client satisfaction",
          },

          {
               number: "30%+",
               title: "Average time saved",
          },
     ];

     return {
          section: {
               className: "hero",
               children: [
                    {
                         div: {
                              className: "hero-left",
                              children: [
                                   {
                                        h1: {
                                             className: "intro",
                                             children: ["Crafting digital solutions, ", { span: { className: "accent", text: "automating workflows" } }],
                                        },
                                   }, //intro

                                   {
                                        p: {
                                             className: "lead",
                                             text: "I help small businesses streamline operations with AI-powered automation—reducing manual and repetitive tasks.",
                                        },
                                   }, //lead

                                   {
                                        div: {
                                             className: "hero-ctas",
                                             children: [
                                                  {
                                                       a: {
                                                            href: "#contact",
                                                            className: "btn btn-primary",
                                                            text: "Start a Project",
                                                       },
                                                  },
                                                  {
                                                       a: {
                                                            href: "#projects",
                                                            className: "btn btn-ghost",
                                                            text: "See my works",
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // hero-cta

                                   {
                                        div: {
                                             className: "stats",
                                             children: () => [
                                                  stats.map((stat) => {
                                                       return {
                                                            div: {
                                                                 className: "stat",
                                                                 children: [
                                                                      {
                                                                           h3: { text: stat.number },
                                                                      },
                                                                      {
                                                                           p: { text: stat.title },
                                                                      },
                                                                 ],
                                                            },
                                                       };
                                                  }),
                                             ],
                                        },
                                   }, //stats
                              ],
                         },
                    }, //hero-left

                    {
                         div: {
                              className: "hero-right",
                              ariaHidden: "true",
                              children: [
                                   {
                                        iframe: {
                                             className: "mock",
                                             width: "560",
                                             height: "350",
                                             // src: "https://youtu.be/ad20tIvqTLc",
                                             src: "/assets/video/demo-real-estate.mp4",
                                             title: "YouTube video player",
                                             frameborder: "0",
                                             allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                             loading: "lazy",
                                        },
                                   },
                              ],
                         },
                    }, // hero-right
               ],
          },
     };
};

export default Hero;
