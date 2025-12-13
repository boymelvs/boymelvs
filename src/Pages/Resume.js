const Resume = (props, context) => {
     return {
          main: {
               className: "main",
               children: [
                    {
                         div: {
                              className: "resume",
                              ariaHidden: "true",
                              children: [
                                   {
                                        iframe: {
                                             width: "100%",
                                             height: "700",
                                             src: "/assets/cv/melvin-enmocino-cv-n8nupdated.pdf",
                                             title: "Melvin Enmocino Resume",
                                             frameborder: "0",
                                             allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                             loading: "lazy",
                                        },
                                   },
                              ],
                         },
                    }, // resume pdf
               ],
               style: {
                    gap: "1rem",
               },
          },
     };
};

export default Resume;
