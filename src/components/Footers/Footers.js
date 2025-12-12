const Footers = (props, { RouteManager }) => {
     return {
          footer: {
               className: "footer",
               children: [
                    {
                         div: {
                              className: "footer-container",
                              children: [
                                   {
                                        a: {
                                             href: "/",
                                             id: "logo",
                                             className: "logo",
                                             children: [
                                                  {
                                                       div: {
                                                            className: "logo-icon",
                                                            text: "MAE",
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            children: [
                                                                 {
                                                                      div: { className: "name-logo footer-name-logo", text: "Melvin A. Enmocino" },
                                                                 },
                                                                 {
                                                                      div: { className: "expertise footer-expertise", text: "n8n • API Integrations • Automation Specialist" },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //logo
                                   {
                                        a: {
                                             href: "#privacy-policy",
                                             className: "privacy-policy",
                                             text: "Privacy Policy",
                                             onClick: () => {
                                                  RouteManager.navigate("#privacy-policy");
                                             },
                                        },
                                   }, //privacy-policy

                                   {
                                        div: {
                                             className: "social-media",
                                             children: [
                                                  {
                                                       a: {
                                                            href: "https://www.linkedin.com/in/melvin-enmocino/",
                                                            target: "_blank",
                                                            rel: "noreferrer noopener",
                                                            children: [
                                                                 {
                                                                      img: {
                                                                           className: "",
                                                                           src: "/assets/images/social-media/linkedin.svg",
                                                                           alt: "Linkedin Logo",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       a: {
                                                            href: "https://github.com/boymelvs",
                                                            target: "_blank",
                                                            rel: "noreferrer noopener",
                                                            children: [
                                                                 {
                                                                      img: {
                                                                           className: "",
                                                                           src: "/assets/images/social-media/github.svg",
                                                                           alt: "Github Logo",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       a: {
                                                            href: "https://www.facebook.com/0000z0zz/",
                                                            target: "_blank",
                                                            rel: "noreferrer noopener",
                                                            children: [
                                                                 {
                                                                      img: {
                                                                           className: "",
                                                                           src: "/assets/images/social-media/facebook.svg",
                                                                           alt: "Facebook Logo",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //social-media
                              ],
                         },
                    },

                    {
                         div: {
                              className: "copyright",
                              children: [
                                   {
                                        img: { src: "/assets/images/social-media/copyright.svg", alt: "copyright" },
                                   },
                                   " ",
                                   {
                                        span: { text: new Date().getFullYear() },
                                   },
                                   " • All rights reserved",
                              ],
                         },
                    }, //copyrights
               ],
          },
     };
};

export default Footers;
