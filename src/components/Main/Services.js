const Services = (props, { getState, setState, juris }) => {
     const services = [
          {
               title: "Automation & Integration",
               description: "n8n workflows, webhooks, Google Sheets/Airtable sync, Zapier alternatives.",
          },

          {
               title: "Real Estate Inquiry Assistant",
               description: "Auto-responders, pre-qualification, computations, send listings to buyers.",
          },

          {
               title: "AI Social Media Posting",
               description: "Generate Quotes, taglish captions, hashtags, and scheduling for Facebook Pages.",
          },

          {
               title: "AI Knowledge Base Assistant (RAG Pipeline)",
               description: "Document-based AI answers, real-time file sync, zero hallucinations, scalable knowledge retrieval.",
          },
          {
               title: "Shopee / Lazada Cart Recovery",
               description: "SMS/Email recovery flows that recover abandoned carts with measurable uplift.",
          },

          {
               title: "Custom Workflows",
               description: "Reports, reminders, lead routing, data enrichment, invoicing automations.",
          },

          {
               title: "Consult & Strategy",
               description: "Process mapping, bottleneck identification, and automation roadmaps.",
          },
     ];

     return {
          section: {
               className: "section services",
               children: [
                    {
                         div: {
                              className: "title",
                              children: [
                                   {
                                        h2: { text: "Verified Expertise" },
                                   },
                                   {
                                        div: { className: "expertise", text: "n8n automations • AI prompts • SMS • Google API • FB API integration" },
                                   },
                              ],
                         },
                    }, // title

                    {
                         div: {
                              className: "services-grid",
                              children: () => [
                                   services.map((service, index) => {
                                        return {
                                             div: {
                                                  id: `service-${index}`,
                                                  className: "service",
                                                  children: [
                                                       {
                                                            h3: { text: service.title },
                                                       },
                                                       {
                                                            p: { text: service.description },
                                                       },
                                                  ],
                                             },
                                        };
                                   }),
                              ],
                         },
                    }, //service-grid
               ],
          },
     };
};

export default Services;
