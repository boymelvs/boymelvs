const RouteManager = (props, context) => {
     const { getState, setState } = context;

     return {
          api: {
               navigate: (href) => navigate(href),
               scrollUp: () => scrollUp(),
          },
     };

     function navigate(href) {
          window.history.pushState({}, "", href); // change url manually
          window.dispatchEvent(new PopStateEvent("popstate"));
          setState("link", href);
     }

     function scrollUp() {
          window.scrollTo(0, 0);
     }
};

export default RouteManager;
