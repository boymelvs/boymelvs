const RAGCaseStudy = (props, { RouteManager }) => {
     RouteManager.scrollUp();

     return {
          main: {
               className: "main",
               children: [
                    {
                         section: {
                              className: "case-study-container",
                              children: [
                                   {
                                        div: {
                                             className: "case-study-title",
                                             children: [
                                                  {
                                                       h1: { text: "RAG (Retrieval-Augmented Generation)" },
                                                  },
                                                  {
                                                       p: {
                                                            className: "subtitle",
                                                            text: "n8n + Google Drive + Supabase Vector DB + Gemini AI | Real-Time Knowledge Sync | Accurate AI Answers",
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // title

                                   {
                                        div: {
                                             className: "case-study-intro",
                                             children: [
                                                  {
                                                       h2: { text: "Overview" },
                                                  },
                                                  {
                                                       p: {
                                                            children: [
                                                                 "The AI Knowledge Base Chatbot is a Retrieval-Augmented Generation (RAG) system built using ",
                                                                 {
                                                                      span: {
                                                                           text: "n8n, Google Drive, Supabase Vector Store, and Google Gemini AI. ",
                                                                           style: { fontWeight: "700" },
                                                                      },
                                                                 },
                                                                 "It allows users to chat with an AI assistant that answers questions strictly based on uploaded documents—ensuring accurate, up-to-date, and hallucination-free responses.",
                                                            ],
                                                       },
                                                  },

                                                  {
                                                       p: {
                                                            text: "This system automatically syncs files from Google Drive into a vector database. Any document updates, additions, or deletions are reflected in real time, without manual retraining or re-uploading.",
                                                       },
                                                  },

                                                  {
                                                       p: {
                                                            text: "The project was designed for businesses that need a reliable AI chatbot trained on their own documents, such as FAQs, policies, product details, or internal knowledge bases.",
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // overview

                                   {
                                        div: {
                                             className: "gallery",
                                             children: [
                                                  {
                                                       h2: { text: "Workflow & UI Screenshots" },
                                                  },
                                                  {
                                                       div: {
                                                            className: "case-study-grid",
                                                            children: [
                                                                 {
                                                                      div: {
                                                                           className: "case-study-card",
                                                                           children: [
                                                                                {
                                                                                     img: {
                                                                                          src: "/assets/images/rag-pipeline.png",
                                                                                          alt: "AI Knowledge Base Chatbot (RAG Pipeline)",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      div: {
                                                                           className: "case-study-card hero-right",
                                                                           ariaHidden: "true",
                                                                           children: [
                                                                                {
                                                                                     img: {
                                                                                          src: "/assets/images/rag-pipeline.png",
                                                                                          alt: "AI Knowledge Base Chatbot (RAG Pipeline)",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // Workflow & UI Screenshots

                                   {
                                        div: {
                                             className: "problem",
                                             children: [
                                                  {
                                                       h2: { text: "Client Problem" },
                                                  },
                                                  {
                                                       p: { text: "Businesses want to use AI chatbots but face common challenges:" },
                                                  },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: { text: "AI gives incorrect or hallucinated answers." },
                                                                 },
                                                                 {
                                                                      li: { text: "Updating knowledge requires manual re-training." },
                                                                 },
                                                                 {
                                                                      li: { text: "No centralized knowledge source." },
                                                                 },
                                                                 {
                                                                      li: { text: "Difficult to manage multiple documents." },
                                                                 },
                                                                 {
                                                                      li: { text: "AI answers are not localized or context-aware." },
                                                                 },
                                                                 {
                                                                      li: { text: "No control over what the AI is allowed to answer." },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //problem

                                   {
                                        div: {
                                             className: "solution",
                                             children: [
                                                  {
                                                       h2: { text: "My Solution" },
                                                  },
                                                  {
                                                       p: {
                                                            text: "I built a fully automated RAG pipeline using n8n that connects Google Drive, a vector database, and Gemini AI into a single intelligent system.",
                                                       },
                                                  },
                                                  { p: { text: "Whenever a file is created, updated, or deleted in Google Drive:" } },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: { text: "The system automatically processes the document." },
                                                                 },
                                                                 {
                                                                      li: { text: "Old embeddings are removed." },
                                                                 },
                                                                 {
                                                                      li: { text: "New embeddings are generated." },
                                                                 },
                                                                 {
                                                                      li: { text: "The vector database stays perfectly in sync." },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       p: {
                                                            text: "The AI agent is strictly instructed to only answer based on retrieved documents, ensuring accuracy and reliability.",
                                                            style: { marginTop: "2rem" },
                                                       },
                                                  },

                                                  { h3: { text: "Key Features" } },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: { text: "Real-time document sync from Google Drive" },
                                                                 },
                                                                 {
                                                                      li: { text: "Automatic vector embedding using Google Gemini" },
                                                                 },
                                                                 {
                                                                      li: { text: "Supabase-powered Vector Store for fast retrieval" },
                                                                 },
                                                                 {
                                                                      li: { text: "AI agent restricted to knowledge base only (no hallucinations)" },
                                                                 },
                                                                 {
                                                                      li: { text: "Supports PDFs, Docs, Sheets, Slides, and more" },
                                                                 },
                                                                 {
                                                                      li: { text: "Auto-deletes outdated knowledge when files change" },
                                                                 },
                                                                 {
                                                                      li: { text: "Chat interface via webhook (ready for web or Messenger integration)" },
                                                                 },
                                                                 {
                                                                      li: { text: "Taglish + polite (“po”) responses when needed" },
                                                                 },
                                                                 {
                                                                      li: { text: "Scalable for hundreds or thousands of documents" },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //solution

                                   {
                                        div: {
                                             className: "tech-use",
                                             children: [
                                                  {
                                                       h2: { text: "Tools Used" },
                                                  },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "n8n", style: { fontWeight: "700" } },
                                                                                },
                                                                                " - Automation & orchestration engine",
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Google Drive API", style: { fontWeight: "700" } },
                                                                                },
                                                                                "- Document source & triggers",
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Supabase Vector Store", style: { fontWeight: "700" } },
                                                                                },
                                                                                "- Knowledge database",
                                                                           ],
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Google Gemini (PaLM)", style: { fontWeight: "700" } },
                                                                                },
                                                                                "- Embeddings & chat model",
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "LangChain nodes (n8n)", style: { fontWeight: "700" } },
                                                                                },
                                                                                "- RAG implementation",
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                {
                                                                                     span: { text: "Webhook Chat Trigger", style: { fontWeight: "700" } },
                                                                                },
                                                                                "- Chat interface integration",
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, // tech use

                                   {
                                        div: {
                                             className: "outcome",
                                             children: [
                                                  {
                                                       h2: { text: "Outcome" },
                                                  },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: {
                                                                           text: "AI answers are 100% grounded in documents",
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           text: "Knowledge updates reflected within minutes",
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           textt: "Zero manual retraining required",
                                                                      },
                                                                 },

                                                                 {
                                                                      li: {
                                                                           text: "Reduced misinformation and support errors",
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           text: "Faster response times for users",
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           text: "Scalable AI assistant for business knowledge",
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   }, //outcome
                              ],
                         },
                    },
               ],
          },
     };
};

export default RAGCaseStudy;
