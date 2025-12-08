const Contacts = (props, { getState, setState, juris }) => {
     return {
          section: {
               id: "contact",
               className: "section contact",
               children: [
                    {
                         div: {
                              className: "title",
                              children: [
                                   {
                                        h2: { text: "Let's Start Your Project" },
                                   },
                                   {
                                        p: { className: "expertise", text: "Tell me your main goal and I'll propose a simple automation plan." },
                                   },
                              ],
                         },
                    }, //contact-title

                    {
                         div: {
                              className: "contact-card",
                              children: [
                                   {
                                        div: {
                                             className: "left",
                                             children: [
                                                  {
                                                       h3: { text: "Start a conversation" },
                                                  },
                                                  {
                                                       p: { text: "Prefer a quick chat? Click the message button — I'll reply fast." },
                                                  },

                                                  {
                                                       div: {
                                                            className: "contact-ctas",
                                                            children: [
                                                                 {
                                                                      button: {
                                                                           className: "btn btn-primary",
                                                                           text: "💬 Messenger",
                                                                           onClick: () => {
                                                                                window.open("https://m.me/0000z0zz", "_blank");
                                                                           },
                                                                      },
                                                                 },

                                                                 // {
                                                                 //      button: {
                                                                 //           className: "btn btn-ghost",
                                                                 //           text: "✉️ Email Me",
                                                                 //           onClick: () => {
                                                                 //                window.location.href = "mailto:melvin.enmocino@gmail.com";
                                                                 //           },
                                                                 //      },
                                                                 // },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //contact-left
                                   {
                                        div: {
                                             className: "right",
                                             children: [
                                                  {
                                                       form: {
                                                            id: "contactForm",
                                                            className: "contact-form",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "form-field",
                                                                           children: [
                                                                                {
                                                                                     input: {
                                                                                          id: "name",
                                                                                          type: "text",
                                                                                          placeholder: "Full name",
                                                                                          required: "true",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      div: {
                                                                           className: "form-field",
                                                                           children: [
                                                                                {
                                                                                     input: {
                                                                                          id: "email",
                                                                                          type: "email",
                                                                                          placeholder: "Email Address",
                                                                                          required: "true",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      div: {
                                                                           className: "form-field",
                                                                           children: [
                                                                                {
                                                                                     input: {
                                                                                          id: "goal",
                                                                                          type: "text",
                                                                                          placeholder: "Primary goal (e.g., automate inquiries)",
                                                                                          required: "true",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      div: {
                                                                           className: "form-field",
                                                                           children: [
                                                                                {
                                                                                     textarea: {
                                                                                          id: "message",
                                                                                          placeholder: "Short project description...",
                                                                                          rows: "4",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      button: {
                                                                           className: "send-btn",
                                                                           type: "submit",
                                                                           text: "Start Your Project",
                                                                      },
                                                                 },
                                                                 {
                                                                      div: { id: "formFeedback", className: "form-feedback" },
                                                                 },
                                                            ],
                                                       },
                                                  }, //form
                                             ],
                                        },
                                   }, //contact-right
                              ],
                         },
                    }, // contact-card
               ],
          },
     };
};

export default Contacts;
