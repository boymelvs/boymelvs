const Process = () => {
     return {
          section: {
               id: "process",
               className: "section process",
               children: [
                    {
                         div: {
                              className: "title",
                              children: [
                                   {
                                        h2: { text: "My Proven Process" },
                                   },
                                   {
                                        div: { className: "muted", text: "A clear and actionable journey from idea to automation" },
                                   },
                              ],
                         },
                    },
                    {
                         dv: {
                              className: "steps",
                              children: [
                                   {
                                        div: {
                                             className: "step",
                                             children: [
                                                  {
                                                       h4: { text: "1. Discovery & Strategy" },
                                                  },
                                                  {
                                                       p: { className: "muted", text: "We map goals and pick high-impact automations." },
                                                  },
                                             ],
                                        },
                                   },

                                   {
                                        div: {
                                             className: "step",
                                             children: [
                                                  {
                                                       h4: { text: "2. Design & Build" },
                                                  },
                                                  {
                                                       p: { className: "muted", text: "I implement n8n flows, prompts, and integrations." },
                                                  },
                                             ],
                                        },
                                   },

                                   {
                                        div: {
                                             className: "step",
                                             children: [
                                                  {
                                                       h4: { text: "3. Launch & Support" },
                                                  },
                                                  {
                                                       p: { className: "muted", text: "I monitor performance and iterate for results." },
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
};

export default Process;
