const NavLink = (props, context) => {
     const { getState, setState, juris, RouteManager } = context;

     const navItems = ["home", "projects", "contact", "resume"];
     const navIcons = ["fas fa-home", "fas fa-project-diagram", "fas fa-envelope", "fas fa-user"];

     const closeBurger = () => {
          const burger = document.getElementById("burger-checkbox");
          burger.checked = false;
     };

     return [
          {
               ul: {
                    id: "navMenu",
                    className: "nav-menu",
                    children: [
                         navItems.map((item, index) => {
                              return {
                                   li: {
                                        className: "nav-item",
                                        key: index,
                                        children: [
                                             {
                                                  a: {
                                                       href: `${item === "home" ? "/" : "#" + item}`,
                                                       className: "nav-link",
                                                       children: [
                                                            {
                                                                 i: { className: `${navIcons[index]}` },
                                                            },
                                                            " ",
                                                            item.charAt(0).toUpperCase() + item.slice(1),
                                                       ],
                                                       onClick: (e) => {
                                                            closeBurger();
                                                            const link = item === "home" ? "/" : item === "resume" ? "#resume" : "#" + item;
                                                            RouteManager.navigate(link);
                                                       },
                                                  },
                                             },
                                        ],
                                   },
                              };
                         }),
                    ],
               },
          },
     ]; //navlink-btn-container
};

export default NavLink;
