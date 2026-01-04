const ContentRepurposeCaseStudy = (props, { RouteManager }) => {
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
                                                       h1: { text: "AI Content Repurposing Automation" },
                                                  },
                                                  {
                                                       p: {
                                                            className: "subtitle",
                                                            text: "Google Drive + Zapier + AI | Video-to-Blog | Social Media Content Repurposing",
                                                       },
                                                  },
                                             ],
                                        },
                                   },

                                   {
                                        div: {
                                             className: "case-study-intro",
                                             children: [
                                                  { h2: { text: "Overview" } },
                                                  {
                                                       p: {
                                                            children: [
                                                                 "This AI Content Repurposing Automation is an end-to-end workflow built using ",
                                                                 {
                                                                      span: {
                                                                           text: "Google Drive, Zapier, AI transcription, AI content generation, WordPress, and LinkedIn. ",
                                                                           style: { fontWeight: "700" },
                                                                      },
                                                                 },
                                                                 "It transforms a single uploaded video into multiple ready-to-publish content assets automatically.",
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       p: {
                                                            text: "Once a video is uploaded to Google Drive, the system transcribes the audio, extracts key insights, generates optimized titles, creates blog posts, publishes them to WordPress, and repurposes the content for social media.",
                                                       },
                                                  },
                                                  {
                                                       p: {
                                                            text: "This project demonstrates how long-form video content can be converted into scalable written and social content with minimal manual intervention.",
                                                       },
                                                  },
                                             ],
                                        },
                                   },

                                   //    {
                                   //         div: {
                                   //              className: "gallery",
                                   //              children: [
                                   //                   { h2: { text: "Automation Workflow Screenshot" } },
                                   //                   {
                                   //                        div: {
                                   //                             className: "case-study-grid",
                                   //                             children: [
                                   //                                  //  {
                                   //                                  //       div: {
                                   //                                  //            className: "case-study-card",
                                   //                                  //            ariaHidden: "true",
                                   //                                  //            children: [
                                   //                                  //                 {
                                   //                                  //                      img: {
                                   //                                  //                           src: "/assets/images/content_repurpose.png",
                                   //                                  //                           alt: "Content Repurposing Zapier Automation",
                                   //                                  //                      },
                                   //                                  //                 },
                                   //                                  //            ],
                                   //                                  //       },
                                   //                                  //  },

                                   //                                  {
                                   //                                       div: {
                                   //                                            className: "case-study-card hero-right",
                                   //                                            ariaHidden: "true",
                                   //                                            children: [
                                   //                                                 {
                                   //                                                      img: {
                                   //                                                           src: "/assets/images/zap-content-repurpose.png",
                                   //                                                           alt: "Content Repurposing Zapier Automation",

                                   //                                                      },
                                   //                                                 },
                                   //                                            ],

                                   //                                       },
                                   //                                  },
                                   //                             ],
                                   //                        },
                                   //                   },
                                   //              ],
                                   //         },
                                   //    },

                                   {
                                        div: {
                                             className: "problem",
                                             children: [
                                                  { h2: { text: "Client Problem" } },
                                                  {
                                                       p: {
                                                            text: "Content creators and businesses often struggle to maximize the value of video content because:",
                                                       },
                                                  },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 { li: { text: "Videos are published once and then forgotten." } },
                                                                 { li: { text: "Manual transcription is time-consuming." } },
                                                                 { li: { text: "Creating blog posts from videos requires extra effort." } },
                                                                 { li: { text: "Social media captions and titles must be rewritten for each platform." } },
                                                                 { li: { text: "Content teams repeat the same workflow every time." } },
                                                                 { li: { text: "Inconsistent publishing slows audience growth." } },
                                                            ],
                                                       },
                                                  },
                                                  {
                                                       p: {
                                                            text: "As a result, valuable content assets remain underutilized.",
                                                            style: { marginTop: "2rem" },
                                                       },
                                                  },
                                             ],
                                        },
                                   },

                                   {
                                        div: {
                                             className: "solution",
                                             children: [
                                                  { h2: { text: "My Solution" } },
                                                  {
                                                       p: {
                                                            text: "I designed a Zapier-based AI automation that repurposes a single uploaded video into multiple high-quality content formats without manual rewriting.",
                                                       },
                                                  },
                                                  { h3: { text: "How the automation works:" } },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 { li: { text: "A video is uploaded to a designated Google Drive folder." } },
                                                                 { li: { text: "The workflow detects the new file automatically." } },
                                                                 { li: { text: "AI transcribes the video audio into clean text." } },
                                                                 { li: { text: "AI generates two optimized titles — one for blog content and one for social media." } },
                                                                 { li: { text: "AI converts the transcript into structured blog posts." } },
                                                                 { li: { text: "Content is split into different publishing paths." } },
                                                                 { li: { text: "The final assets are published automatically." } },
                                                            ],
                                                       },
                                                  },

                                                  { h3: { text: "Key Features" } },

                                                  {
                                                       div: {
                                                            children: [
                                                                 { h4: { text: "Automatic Video Transcription" } },
                                                                 {
                                                                      ul: {
                                                                           children: [
                                                                                {
                                                                                     li: {
                                                                                          text: "AI converts video audio into accurate, readable text ready for repurposing.",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                            style: { marginTop: "2rem" },
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            children: [
                                                                 { h4: { text: "AI Title Generation" } },
                                                                 {
                                                                      ul: {
                                                                           children: [
                                                                                {
                                                                                     li: {
                                                                                          text: "Creates one SEO-friendly blog title and one engagement-focused social media title.",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                            style: { marginTop: "2rem" },
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            children: [
                                                                 { h4: { text: "Blog Content Creation" } },
                                                                 {
                                                                      ul: {
                                                                           children: [
                                                                                {
                                                                                     li: {
                                                                                          text: "AI transforms the transcript into structured, readable blog posts.",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                            style: { marginTop: "2rem" },
                                                       },
                                                  },

                                                  {
                                                       div: {
                                                            children: [
                                                                 { h4: { text: "Multi-Path Publishing" } },
                                                                 {
                                                                      ul: {
                                                                           children: [
                                                                                {
                                                                                     li: {
                                                                                          text: "Zapier paths route content to WordPress and social platforms independently.",
                                                                                     },
                                                                                },
                                                                           ],
                                                                      },
                                                                 },
                                                            ],
                                                            style: { marginTop: "2rem" },
                                                       },
                                                  },
                                             ],
                                        },
                                   },

                                   {
                                        div: {
                                             className: "tech-use",
                                             children: [
                                                  { h2: { text: "Tools Used" } },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 {
                                                                      li: {
                                                                           children: [{ span: { text: "Zapier", style: { fontWeight: "600" } } }, " - core automation engine"],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           children: [{ span: { text: "Google Drive", style: { fontWeight: "600" } } }, " - video upload trigger"],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                { span: { text: "AI Transcription", style: { fontWeight: "600" } } },
                                                                                " - video-to-text conversion",
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                { span: { text: "AI Content Generator", style: { fontWeight: "600" } } },
                                                                                " - title and blog creation",
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           children: [
                                                                                { span: { text: "WordPress API", style: { fontWeight: "600" } } },
                                                                                " - automated blog publishing",
                                                                           ],
                                                                      },
                                                                 },
                                                                 {
                                                                      li: {
                                                                           children: [{ span: { text: "LinkedIn API", style: { fontWeight: "600" } } }, " - social media posting"],
                                                                      },
                                                                 },
                                                            ],
                                                       },
                                                  },
                                             ],
                                        },
                                   },

                                   {
                                        div: {
                                             className: "outcome",
                                             children: [
                                                  { h2: { text: "Outcome" } },
                                                  {
                                                       ul: {
                                                            children: [
                                                                 { li: { text: "One video converted into multiple content formats" } },
                                                                 { li: { text: "Fully automated transcription and writing process" } },
                                                                 { li: { text: "Significant reduction in manual content work" } },
                                                                 { li: { text: "Consistent blog and social media publishing" } },
                                                                 { li: { text: "Scalable system for high-volume video content" } },
                                                                 { li: { text: "Improved content reuse and ROI" } },
                                                            ],
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
     };
};

export default ContentRepurposeCaseStudy;
