const Testimonial = (props, { getState, setState }) => {
     return {
          section: {
               classNamee: "",
               children: [
                    {
                         div: {
                              className: "",
                              children: [
                                   {
                                        div: {
                                             className: "",
                                             children: [
                                                  {
                                                       h2: { text: "What My Clients Say" },
                                                  },
                                                  {
                                                       div: {
                                                            className: "test-grid",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "testimonial",
                                                                           children: [
                                                                                {
                                                                                     p: { text: "“Ang bilis ng response ng bot! Marami kaming leads ngayon kahit gabi na.”" },
                                                                                },
                                                                                {
                                                                                     strong: {
                                                                                          text: "— Real Estate Agent",
                                                                                          style: {
                                                                                               color: "var(--accent)",
                                                                                          },
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      div: {
                                                                           className: "testimonial",
                                                                           children: [
                                                                                {
                                                                                     p: { text: "“Recovered 18 orders in a week. Sobrang sulit nang automation.”" },
                                                                                },
                                                                                {
                                                                                     strong: {
                                                                                          text: "— Shopee Seller",
                                                                                          style: {
                                                                                               color: "var(--accent)",
                                                                                          },
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  }, //testimonial
                                             ],
                                        },
                                   },
                                   {
                                        aside: {
                                             className: "",
                                             children: [
                                                  {
                                                       h3: { text: "FAQ" },
                                                  },
                                                  {
                                                       details: {
                                                            open: false,
                                                            children: [
                                                                 {
                                                                      summary: { text: "How fast can you deliver?" },
                                                                 },
                                                                 {
                                                                      p: { className: "muted", text: "Small automations: 1-3 days. Complex projects: 1-3 weeks." },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       details: {
                                                            open: false,
                                                            children: [
                                                                 {
                                                                      summary: { text: "How do I start?" },
                                                                 },
                                                                 {
                                                                      p: {
                                                                           className: "muted",
                                                                           text: `Click "Start a Project", fill the short form, and I'll reply within a few hours.`,
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       details: {
                                                            open: false,
                                                            children: [
                                                                 {
                                                                      summary: { text: "What tools do you use?" },
                                                                 },
                                                                 {
                                                                      p: {
                                                                           className: "muted",
                                                                           text: `n8n, Google APIs, Airtable, Facebook Graph APIs, OneWaySMS, Twilio, OpenAI/Gemini, Nodejs(express), JurisJS.`,
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   },
                              ],
                              style: {
                                   display: "grid",
                                   gridTemplateColumns: "1fr 420px",
                                   gap: "20px",
                              },
                         },
                    },
               ],
          },
     };
};

export default Testimonial;
