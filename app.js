import All from "./src/All.js";

const jurisInstance = new Juris({
     logLevel: "warn",
     renderMode: "fine-grained",
     features: {
          headless: HeadlessManager,
     },

     headlessComponents: {
          // RouteManager: { fn: RouteManager, options: { autoInit: true } },
     },

     components: { All },

     layout: [{ All: {} }], //layout

     states: {},
});

jurisInstance.render("#app");
