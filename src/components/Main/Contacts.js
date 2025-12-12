const Contacts = (props, { getState, setState, APIManager }) => {
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
                                                                      a: {
                                                                           href: "https://m.me/0000z0zz",
                                                                           className: "btn btn-primary",
                                                                           target: "_blank",
                                                                           rel: "noopenner noreferrer",
                                                                           text: "💬 Messenger",
                                                                      },
                                                                 },
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
                                                            onSubmit: (e) => {
                                                                 e.preventDefault();

                                                                 if (APIManager.validate()) {
                                                                      setState("spinner", true);
                                                                      const getData = {
                                                                           name: getState("name", ""),
                                                                           email: getState("email", ""),
                                                                           goal: getState("goal", ""),
                                                                           message: getState("message", ""),
                                                                      };

                                                                      APIManager.formContactSubmit(getData);
                                                                 }
                                                            },
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
                                                                                          value: () => getState("name", ""),
                                                                                          onInput: (e) => {
                                                                                               setState("name", e.target.value.trim());
                                                                                               APIManager.validate();
                                                                                          },
                                                                                     },
                                                                                },

                                                                                {
                                                                                     div: {
                                                                                          className: "error-container",
                                                                                          children: [
                                                                                               {
                                                                                                    span: {
                                                                                                         className: "error",
                                                                                                         text: () => getState("errors.name"),
                                                                                                         style: {
                                                                                                              display: "block",
                                                                                                              textAlign: "right",
                                                                                                              fontSize: "1.2rem",
                                                                                                              color: "hsl(0, 100%, 63%)",
                                                                                                              fontWeight: "500",
                                                                                                         },
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                          style: {
                                                                                               display: "block",
                                                                                               height: "1.6rem",
                                                                                               position: "absolute",
                                                                                               top: "0",
                                                                                               right: "0",
                                                                                          },
                                                                                     },
                                                                                }, //error
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
                                                                                          value: () => getState("email", ""),
                                                                                          onInput: (e) => {
                                                                                               setState("email", e.target.value.trim());
                                                                                               APIManager.validate();
                                                                                          },
                                                                                     },
                                                                                },

                                                                                {
                                                                                     div: {
                                                                                          className: "error-container",
                                                                                          children: [
                                                                                               {
                                                                                                    span: {
                                                                                                         className: "error",
                                                                                                         text: () => getState("errors.email"),
                                                                                                         style: {
                                                                                                              display: "block",
                                                                                                              textAlign: "right",
                                                                                                              fontSize: "1.2rem",
                                                                                                              color: "hsl(0, 100%, 63%)",
                                                                                                              fontWeight: "500",
                                                                                                         },
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                          style: {
                                                                                               display: "block",
                                                                                               height: "1.6rem",
                                                                                               position: "absolute",
                                                                                               top: "0",
                                                                                               right: "0",
                                                                                          },
                                                                                     },
                                                                                }, //error
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
                                                                                          value: () => getState("goal", ""),
                                                                                          onInput: (e) => {
                                                                                               setState("goal", e.target.value.trim());
                                                                                               APIManager.validate();
                                                                                          },
                                                                                     },
                                                                                },

                                                                                {
                                                                                     div: {
                                                                                          className: "error-container",
                                                                                          children: [
                                                                                               {
                                                                                                    span: {
                                                                                                         className: "error",
                                                                                                         text: () => getState("errors.goal"),
                                                                                                         style: {
                                                                                                              display: "block",
                                                                                                              textAlign: "right",
                                                                                                              fontSize: "1.2rem",
                                                                                                              color: "hsl(0, 100%, 63%)",
                                                                                                              fontWeight: "500",
                                                                                                         },
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                          style: {
                                                                                               display: "block",
                                                                                               height: "1.6rem",
                                                                                               position: "absolute",
                                                                                               top: "0",
                                                                                               right: "0",
                                                                                          },
                                                                                     },
                                                                                }, //error
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
                                                                                          value: () => getState("message", ""),
                                                                                          onInput: (e) => {
                                                                                               setState("message", e.target.value.trim());
                                                                                               APIManager.validate();
                                                                                          },
                                                                                     },
                                                                                },

                                                                                {
                                                                                     div: {
                                                                                          className: "error-container",
                                                                                          children: [
                                                                                               {
                                                                                                    span: {
                                                                                                         className: "error",
                                                                                                         text: () => getState("errors.message"),
                                                                                                         style: {
                                                                                                              display: "block",
                                                                                                              textAlign: "right",
                                                                                                              fontSize: "1.2rem",
                                                                                                              color: "hsl(0, 100%, 63%)",
                                                                                                              fontWeight: "500",
                                                                                                         },
                                                                                                    },
                                                                                               },
                                                                                          ],
                                                                                          style: {
                                                                                               display: "block",
                                                                                               height: "1.6rem",
                                                                                               position: "absolute",
                                                                                               top: "0",
                                                                                               right: "0",
                                                                                          },
                                                                                     },
                                                                                }, //error
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      button: {
                                                                           className: () => `contact-btn send-btn ${getState("spinner", false) ? "loading" : null}`,
                                                                           type: "submit",
                                                                           children: [
                                                                                {
                                                                                     span: { className: "spinner" },
                                                                                },
                                                                                " Start Your Project",
                                                                           ],
                                                                           disabled: () => getState("spinner", false),
                                                                      },
                                                                 },
                                                                 {
                                                                      div: {
                                                                           className: "formFeedback",
                                                                           text: () =>
                                                                                getState("messageSent", false) ? "Message Successfully Sent!" : getState("messageError", null),
                                                                           style: {
                                                                                marginTop: "8px",
                                                                                fontSize: "13px",
                                                                                color: () => (getState("messageSent", false) ? "var(--green)" : "var(--light-red)"),
                                                                                width: "100%",
                                                                                textAlign: "center",
                                                                                height: "1.6rem",
                                                                           },
                                                                      },
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
