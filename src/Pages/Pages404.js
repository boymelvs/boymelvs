const Pages404 = (props, { RouteManager }) => {
     RouteManager.scrollUp();

     return {
          main: {
               className: "main",
               children: [
                    {
                         section: {
                              className: "left-404",
                              children: [
                                   {
                                        div: { className: "eyebrow", text: "Error • Page not found" },
                                   },
                                   {
                                        h1: { id: "title-404", text: "404" },
                                   },
                                   {
                                        p: {
                                             className: "lead-404",
                                             text: "Sorry — the page you were looking for doesn't exist or has been moved. You can return to the homepage or search for what you need.",
                                        },
                                   },
                              ],
                         },
                    }, // left-404
               ],
               style: {
                    textAlign: "center",
                    paddingTop: "16rem",
                    height: "100vh",
               },
          },
     };
};

export default Pages404;
