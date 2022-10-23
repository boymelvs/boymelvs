import adviceGenerator from "../../images/projects/advice-generator-app.png";
import clock from "../../images/projects/analog-clock.png";
import apparel from "../../images/projects/base-apparel.png";
import calculator from "../../images/projects/calculator.png";
import chatApp from "../../images/projects/chat-app-CSS-illustration.png";
import crowdfunding from "../../images/projects/crowdfunding-page.png";
import fyloDataStorage from "../../images/projects/fylo-data-storage-component.png";
import fyloLandingPage from "../../images/projects/fylo-landing-page.png";
import interactivePricing from "../../images/projects/interactive-pricing-component.png";
import interactiveRating from "../../images/projects/interactive-rating-component.png";
import introSectionDropdown from "../../images/projects/Intro-section-with-dropdown-navigation.png";
import landingPageCurve from "../../images/projects/landing-page-with-curve.png";
import loopStudio from "../../images/projects/loopstudios-landing-page.png";
import nftPreview from "../../images/projects/NFT-PREVIEW-CARD.png";
import pairgo from "../../images/projects/pairgo.png";
import pricingComponent from "../../images/projects/pricing-component-with-toggle.png";
import productPreviewCard from "../../images/projects/product-preview-card-component.png";
import reactJournal from "../../images/projects/react-journal.png";
import searchCountry from "../../images/projects/search-country-dark.png";
import searchPhotoApp from "../../images/projects/search-photo-app.png";
import signUpForm from "../../images/projects/signup-form.png";
import singlePrice from "../../images/projects/single-price-component.png";
import socialMediaDashboard from "../../images/projects/social-media-dashboard-with-theme-switcher.png";
import socialProof from "../../images/projects/SOCIAL-PROOF-SECTION.png";
import testimonialGrid from "../../images/projects/testimonials-grid-section.png";
import timeTracking from "../../images/projects/time-tracking-dashboard.png";
import travelAndTours from "../../images/projects/travel&tours.png";
import melvinport from "../../images/projects/melvin-portfolio.png";
import musicappImg from "../../images/projects/musicapp.png";
import ecommercepage from "../../images/projects/ecommerce-product-page.png";

const projectData = [
   {
      id: 0,
      title: "My Music App",
      description:
         "Is a free music streaming service that offers unlimited listening with no commercial interruptions and no ads. Frontend is build in React Js, Backend is NodeJs deployed in heroku, Database is MySql deployed in AWS",
      image: musicappImg,
      alt: "Music App",
      url: "https://mymusicapp-nine.vercel.app/",
      code: "https://github.com/boymelvs/mymusicapp",
      tags: ["Html5", "Scss/Css", "React Js", "NodeJs", "MySQL"],
   },

   {
      id: 1,
      title: "My Portfolio",
      description: "A compilation of my relevant work sample I gathered while developing my skills. This portfolio is build in ReactJs",
      image: melvinport,
      alt: "melvin portfolio",
      url: "https://boymelvs.vercel.app/",
      code: "https://github.com/boymelvs/boymelvs",
      tags: ["Html5", "Scss/Css", "React Js", "Flexbox", "Css3"],
   },

   {
      id: 2,
      title: "Travel & Tours",
      description: "A website for travel & tour businesses. My Mini Project-1 in KODEGOPH Bootcamp. It is build in HTML, CSS & Bootstrap",
      image: travelAndTours,
      alt: "project-travel-tours",
      url: "https://boymelvs.github.io/travel-and-tours/",
      code: "https://github.com/boymelvs/travel-and-tours",
      tags: ["Html5", "Booststrap5", "Flexbox", "Css3"],
   },

   {
      id: 3,
      title: "Pairgo Website Project",
      description: "Website for warehousing business. Mini Project-2 in KODEGOPH Bootcamp. After group presentation, I re-created this website using React Js.",
      image: pairgo,
      alt: "pairgo-website",
      url: "https://pairgoapp.vercel.app/",
      code: "https://github.com/boymelvs/pairgoapp",
      tags: ["Html5", "React Js", "Flexbox", "Scss/Css", "CSSGrid"],
   },

   {
      id: 4,
      title: "Search Countries App",
      description: "A simple website that a user can search country information. Pulling data from API",
      image: searchCountry,
      alt: "search-country",
      url: "https://boymelvs.github.io/rest-countries-api-with-color-theme-switcher-master/",
      code: "https://github.com/boymelvs/rest-countries-api-with-color-theme-switcher-master",
      tags: ["Html5", "Javascript", "Css3", "Flexbox", "API"],
   },

   {
      id: 5,
      title: "Crowdfunding Page",
      description: "A website that updates progress bar and total money raised based on user pledge after confirming.",
      image: crowdfunding,
      alt: "crowdfunding-page",
      url: "https://boymelvs.github.io/crowdfunding-product-page-main/",
      code: "https://github.com/boymelvs/crowdfunding-product-page-main",
      tags: ["Html5", "Javascript", "Css3", "Flexbox"],
   },

   {
      id: 6,
      title: "E-Commerice Product Page",
      description: "E-Commerice Product Page.",
      image: ecommercepage,
      alt: "E-Commerice Product Page",
      url: "https://product-page-gamma.vercel.app/",
      code: "https://github.com/boymelvs/ecommerce-product-page",
      tags: ["Html5", "React Js", "Javascript", "Scss", "Flexbox"],
   },

   {
      id: 7,
      title: "Loopstudios Landing Page",
      description: "A landing page",
      image: loopStudio,
      alt: "LoopStudio landing page",
      url: "https://boymelvs.github.io/loopstudios-landing-page-main/",
      code: "https://github.com/boymelvs/loopstudios-landing-page-main",
      tags: ["Html5", "Flexbox", "Javascript", "Css3", "CSSGrid"],
   },

   {
      id: 8,
      title: "Signup Form Page",
      description: "A signup form with validation.",
      image: signUpForm,
      alt: "signup form page",
      url: "https://boymelvs.github.io/INTRO-COMPONENT-WITH-SIGNUP-FORM/",
      code: "https://github.com/boymelvs/INTRO-COMPONENT-WITH-SIGNUP-FORM",
      tags: ["Html5", "Javascript", "Css3", "Flexbox"],
   },

   {
      id: 9,
      title: "Pricing Component w/ toggle",
      description: "A pricing component with toggle",
      image: pricingComponent,
      alt: "pricing component with toggle",
      url: "https://boymelvs.github.io/pricing-component-with-toggle-master",
      code: "https://github.com/boymelvs/pricing-component-with-toggle-master",
      tags: ["Html5", "Javascript", "Css3", "Flexbox"],
   },

   {
      id: 10,
      title: "Landing Page with Curve",
      description: "A dark theme landing page with curve.",
      image: landingPageCurve,
      alt: "landing page with curve",
      url: "https://boymelvs.github.io/huddle-landing-page-with-curved-sections-master/",
      code: "https://github.com/boymelvs/huddle-landing-page-with-curved-sections-master",
      tags: ["Html5", "Css3", "Flexbox"],
   },

   {
      id: 11,
      title: "Interactive Rating Component",
      description: "A rating component",
      image: interactiveRating,
      alt: "interactive-rating-component",
      url: "https://boymelvs.github.io/interactive-rating-component-main/",
      code: "https://github.com/boymelvs/interactive-rating-component-main",
      tags: ["Html5", "Javascript", "Css3", "Flexbox"],
   },

   {
      id: 12,
      title: "Social Media Dashboard",
      description: "A social media dashboard with theme switcher",
      image: socialMediaDashboard,
      alt: "social-media-dashboard-with-theme-switcher",
      url: "https://boymelvs.github.io/social-media-dashboard-with-theme-switcher-master/",
      code: "https://github.com/boymelvs/social-media-dashboard-with-theme-switcher-master",
      tags: ["Html5", "Javascript", "Css3", "Flexbox", "CSSGrid"],
   },

   {
      id: 13,
      title: "Data Storage Component",
      description: "A data storage component",
      image: fyloDataStorage,
      alt: "fylo-data-storage-component",
      url: "https://boymelvs.github.io/fylo-data-storage-component-master/",
      code: "https://github.com/boymelvs/fylo-data-storage-component-master",
      tags: ["Html5", "Css3", "Flexbox"],
   },

   {
      id: 14,
      title: "Product Preview Card",
      description: "A product preview card component",
      image: productPreviewCard,
      alt: "product-preview-card-component",
      url: "https://boymelvs.github.io/product-preview-card-component-main/",
      code: "https://github.com/boymelvs/product-preview-card-component-main",
      tags: ["Html5", "Css3", "Flexbox"],
   },

   {
      id: 15,
      title: "Interactive Pricing Component",
      description: "A component with slider and toggle to see prices for different page view numbers",
      image: interactivePricing,
      alt: "interactive-pricing-component",
      url: "https://boymelvs.github.io/interactive-pricing-component/",
      code: "https://github.com/boymelvs/interactive-pricing-component",
      tags: ["Html5", "Javascript", "Css3", "Flexbox"],
   },

   {
      id: 16,
      title: "Single Price Grid Section",
      description: "A single price page component",
      image: singlePrice,
      alt: "single-price-grid-section",
      url: "https://boymelvs.github.io/SINGLE-PRICE-GRID-COMPONENT/",
      code: "https://github.com/boymelvs/SINGLE-PRICE-GRID-COMPONENT",
      tags: ["Html5", "Css3", "CSSGrid", "Flexbox"],
   },

   {
      id: 17,
      title: "Section w/ dropdown navigation",
      description: "A page with dropdown navigation",
      image: introSectionDropdown,
      alt: "Intro-section-with-dropdown-navigation",
      url: "https://boymelvs.github.io/intro-section-with-dropdown-navigation-main/",
      code: "https://github.com/boymelvs/intro-section-with-dropdown-navigation-main",
      tags: ["Html5", "Javascript", "Css3", "Flexbox"],
   },

   {
      id: 18,
      title: "Testimonial Grid Section",
      description: "A testimonial page component",
      image: testimonialGrid,
      alt: "testimonials-grid-section",
      url: "https://boymelvs.github.io/testimonials-grid-section-main/",
      tags: ["Html5", "Flexbox", "Css3", "CSSGrid"],
   },

   {
      id: 19,
      title: "Social Proof Section",
      description: "Testimonial cards",
      image: socialProof,
      alt: "social-proof-sections",
      url: "https://boymelvs.github.io/SOCIAL-PROOF-SECTION-MASTER/",
      code: "https://github.com/boymelvs/testimonials-grid-section-main",
      tags: ["Html5", "Flexbox", "Css3", "CSSGrid"],
   },

   {
      id: 20,
      title: "Base Apparel",
      description: "Base apparel",
      image: apparel,
      alt: "base-apparel",
      url: "https://boymelvs.github.io/BASE-APPAREL-COMING-SOON/",
      code: "https://github.com/boymelvs/BASE-APPAREL-COMING-SOON",
      tags: ["Html5", "Javascript", "Css3", "Flexbox"],
   },

   {
      id: 21,
      title: "Time Tracking Dashboard",
      description: "Time Trackin dashboard",
      image: timeTracking,
      alt: "time-tracking-dashboard",
      url: "https://boymelvs.github.io/time-tracking-dashboard-main/",
      code: "https://github.com/boymelvs/time-tracking-dashboard-main",
      tags: ["Html5", "Javascript", "Css3", "Flexbox", "GRID"],
   },

   {
      id: 22,
      title: "Search Photo App",
      description: "An app that can seach photo from unsplash api. Coding activity from KODEGOPH Bootcamp",
      image: searchPhotoApp,
      alt: "search-photo-app",
      url: "https://search-photo-app-blond.vercel.app/",
      code: "https://github.com/boymelvs/api-unsplash-app",
      tags: ["Html5", "Javascript", "Scss/Css", "CSSGrid", "API", "React Js"],
   },

   {
      id: 23,
      title: "Journal App",
      description: "An app that a user can records daily thoughts and task. React Coding activity from KODEGOPH Bootcamp",
      image: reactJournal,
      alt: "journal-app",
      url: "https://journal-app-nu.vercel.app/",
      code: "https://github.com/boymelvs/journal-app",
      tags: ["Html5", "Javascript", "Scss/Css", "Flexbox", "React Js"],
   },

   {
      id: 24,
      title: "Online Calculator",
      description: "A simple calculator with 4 basic operator. Coding activity from KODEGOPH Bootcamp",
      image: calculator,
      alt: "calculator",
      url: "https://boymelvs.github.io/online-calculator/",
      code: "https://github.com/boymelvs/online-calculator",
      tags: ["Html5", "Javascript", "Css3", "Flexbox"],
   },

   {
      id: 25,
      title: "Chat App Illustration",
      description: "A chat app illustration using css only",
      image: chatApp,
      alt: "chat app",
      url: "https://boymelvs.github.io/chat-app-css-illustration-master/",
      code: "https://github.com/boymelvs/chat-app-css-illustration-master",
      tags: ["Html5", "Css3", "Flexbox"],
   },

   {
      id: 26,
      title: "Fylo Landing Page",
      description: "A dark theme landing page.",
      image: fyloLandingPage,
      alt: "fylo landing page",
      url: "https://boymelvs.github.io/fylo-dark-theme-landing-page-master/",
      code: "https://github.com/boymelvs/fylo-dark-theme-landing-page-master",
      tags: ["Html5", "Javascript", "Css3", "CSSGrid"],
   },

   {
      id: 27,
      title: "NFT Preview Card",
      description: "An NFT preview card",
      image: nftPreview,
      alt: "NFT preview card",
      url: "https://boymelvs.github.io/nft-preview-card-component-main/",
      code: "https://github.com/boymelvs/nft-preview-card-component-main",
      tags: ["Html5", "Flexbox", "Css3"],
   },

   {
      id: 28,
      title: "Advice Generator App",
      description: "An advice generator app, data from API",
      image: adviceGenerator,
      alt: "advice-generator-app",
      url: "https://boymelvs.github.io/advice-generator-app-main/",
      code: "https://github.com/boymelvs/advice-generator-app-main",
      tags: ["Html5", "Javascript", "Css3", "Flexbox", "API"],
   },

   {
      id: 29,
      title: "Analog Clock",
      description: "An analog clock.",
      image: clock,
      alt: "analog clock",
      url: "https://boymelvs.github.io/clock/",
      code: "https://github.com/boymelvs/clock",
      tags: ["Html5", "Javascript", "Css3", "Flexbox"],
   },
];

export default projectData;
