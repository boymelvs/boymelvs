import adviceGenerator from "../../images/projects/advice-generator-app.jpg";
import clock from "../../images/projects/analog-clock.png";
import apparel from "../../images/projects/base-apparel.png";
import calculator from "../../images/projects/calculator.png";
import chatApp from "../../images/projects/chat-app-CSS-illustration.jpg";
import crowdfunding from "../../images/projects/crowdfunding-page.png";
import fyloDataStorage from "../../images/projects/fylo-data-storage-component.png";
import fyloLandingPage from "../../images/projects/fylo-landing-page.jpg";
import interactivePricing from "../../images/projects/interactive-pricing-component.jpg";
import interactiveRating from "../../images/projects/interactive-rating-component.png";
import introSectionDropdown from "../../images/projects/Intro-section-with-dropdown-navigation.jpg";
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
import socialProof from "../../images/projects/SOCIAL-PROOF-SECTION.jpg";
import testimonialGrid from "../../images/projects/testimonials-grid-section.jpg";
import timeTracking from "../../images/projects/time-tracking-dashboard.png";
import travelAndTours from "../../images/projects/travel&tours.png";

const projectData = [
   {
      id: 1,
      title: "Travel & Tours",
      description: "A website for travel & tour businesses. My major project-1 from KODEGOPH Bootcamp",
      image: travelAndTours,
      alt: "project-travel-tours",
      url: "https://boymelvs.github.io/travel-and-tours/",
      tags: ["HTML5", "BOOTSTRAP5", "FLEXBOX", "CSS3"],
   },

   {
      id: 2,
      title: "Pairgo Website Project",
      description: "Website for warehousing business. Major Project-2 from KODEGOPH Bootcamp",
      image: pairgo,
      alt: "pairgo-website",
      url: "https://boymelvs.github.io/pairgo/index.html",
      tags: ["HTML5", "JAVASCRIPT", "FLEXBOX", "SCSS/CSS", "CSSGRID"],
   },

   {
      id: 3,
      title: "Search Countries App",
      description: "A simple website that a user can search country information. Pulling data from API",
      image: searchCountry,
      alt: "search-country",
      url: "https://boymelvs.github.io/rest-countries-api-with-color-theme-switcher-master/",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX", "API"],
   },

   {
      id: 4,
      title: "Crowdfunding Page",
      description: "A website that updates progress bar and total money raised based on user pledge after confirming.",
      image: crowdfunding,
      alt: "crowdfunding-page",
      url: "https://boymelvs.github.io/crowdfunding-product-page-main/",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX"],
   },

   {
      id: 5,
      title: "Signup Form Page",
      description: "A signup form with validation.",
      image: signUpForm,
      alt: "signup form page",
      url: "https://boymelvs.github.io/INTRO-COMPONENT-WITH-SIGNUP-FORM/",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX"],
   },

   {
      id: 6,
      title: "Loopstudios Landing Page",
      description: "A landing page",
      image: loopStudio,
      alt: "LoopStudio landing page",
      url: "https://boymelvs.github.io/loopstudios-landing-page-main/",
      tags: ["HTML5", "FLEXBOX", "JAVASCRIPT", "CSS3", "CSSGRID"],
   },

   {
      id: 7,
      title: "Pricing Component w/ toggle",
      description: "A pricing component with toggle",
      image: pricingComponent,
      alt: "pricing component with toggle",
      url: "https://boymelvs.github.io/pricing-component-with-toggle-master",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX"],
   },

   {
      id: 8,
      title: "Landing Page with Curve",
      description: "A dark theme landing page with curve.",
      image: landingPageCurve,
      alt: "landing page with curve",
      url: "https://boymelvs.github.io/huddle-landing-page-with-curved-sections-master/",
      tags: ["HTML5", "CSS3", "FLEXBOX"],
   },

   {
      id: 9,
      title: "Interactive Rating Component",
      description: "A rating component",
      image: interactiveRating,
      alt: "interactive-rating-component",
      url: "https://boymelvs.github.io/interactive-rating-component-main/",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX"],
   },

   {
      id: 10,
      title: "Social Media Dashboard",
      description: "A social media dashboard with theme switcher",
      image: socialMediaDashboard,
      alt: "social-media-dashboard-with-theme-switcher",
      url: "https://boymelvs.github.io/social-media-dashboard-with-theme-switcher-master/",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX", "CSSGRID"],
   },

   {
      id: 11,
      title: "Data Storage Component",
      description: "A data storage component",
      image: fyloDataStorage,
      alt: "fylo-data-storage-component",
      url: "https://boymelvs.github.io/fylo-data-storage-component-master/",
      tags: ["HTML5", "CSS3", "FLEXBOX"],
   },

   {
      id: 12,
      title: "Product Preview Card",
      description: "A product preview card component",
      image: productPreviewCard,
      alt: "product-preview-card-component",
      url: "https://boymelvs.github.io/product-preview-card-component-main/",
      tags: ["HTML5", "CSS3", "FLEXBOX"],
   },

   {
      id: 13,
      title: "Interactive Pricing Component",
      description: "A component with slider and toggle to see prices for different page view numbers",
      image: interactivePricing,
      alt: "interactive-pricing-component",
      url: "https://boymelvs.github.io/interactive-pricing-component/",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX"],
   },

   {
      id: 14,
      title: "Single Price Grid Section",
      description: "A single price page component",
      image: singlePrice,
      alt: "single-price-grid-section",
      url: "https://boymelvs.github.io/SINGLE-PRICE-GRID-COMPONENT/",
      tags: ["HTML5", "CSS3", "CSSGRID", "FLEXBOX"],
   },

   {
      id: 15,
      title: "Section w/ dropdown navigation",
      description: "A page with dropdown navigation",
      image: introSectionDropdown,
      alt: "Intro-section-with-dropdown-navigation",
      url: "https://boymelvs.github.io/intro-section-with-dropdown-navigation-main/",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX"],
   },

   {
      id: 16,
      title: "Testimonial Grid Section",
      description: "A testimonial page component",
      image: testimonialGrid,
      alt: "testimonials-grid-section",
      url: "https://boymelvs.github.io/testimonials-grid-section-main/",
      tags: ["HTML5", "FLEXBOX", "CSS3", "CSSGRID"],
   },

   {
      id: 17,
      title: "Social Proof Section",
      description: "Testimonial cards",
      image: socialProof,
      alt: "social-proof-sections",
      url: "https://boymelvs.github.io/SOCIAL-PROOF-SECTION-MASTER/",
      tags: ["HTML5", "FLEXBOX", "CSS3", "CSSGRID"],
   },

   {
      id: 18,
      title: "Base Apparel",
      description: "Base apparel",
      image: apparel,
      alt: "base-apparel",
      url: "https://boymelvs.github.io/BASE-APPAREL-COMING-SOON/",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX"],
   },

   {
      id: 19,
      title: "Time Tracking Dashboard",
      description: "Time Trackin dashboard",
      image: timeTracking,
      alt: "time-tracking-dashboard",
      url: "https://boymelvs.github.io/time-tracking-dashboard-main/",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX", "GRID"],
   },

   {
      id: 20,
      title: "Search Photo App",
      description: "An app that can seach photo from unsplash api. Coding activity from KODEGOPH Bootcamp",
      image: searchPhotoApp,
      alt: "search-photo-app",
      url: "https://search-photo-app-blond.vercel.app/",
      tags: ["HTML5", "JAVASCRIPT", "SCSS/CSS", "CSSGRID", "API", "REACTJS"],
   },

   {
      id: 21,
      title: "Journal App",
      description: "An app that a user can records daily thoughts and task. React Coding activity from KODEGOPH Bootcamp",
      image: reactJournal,
      alt: "journal-app",
      url: "https://journal-app-nu.vercel.app/",
      tags: ["HTML5", "JAVASCRIPT", "SCSS/CSS", "FLEXBOX", "REACTJS"],
   },

   {
      id: 22,
      title: "Online Calculator",
      description: "A simple calculator with 4 basic operator. Coding activity from KODEGOPH Bootcamp",
      image: calculator,
      alt: "calculator",
      url: "https://boymelvs.github.io/online-calculator/",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX"],
   },

   {
      id: 23,
      title: "Chat App Illustration",
      description: "A chat app illustration using css only",
      image: chatApp,
      alt: "chat app",
      url: "https://boymelvs.github.io/chat-app-css-illustration-master/",
      tags: ["HTML5", "CSS3", "FLEXBOX"],
   },

   {
      id: 24,
      title: "Fylo Landing Page",
      description: "A dark theme landing page.",
      image: fyloLandingPage,
      alt: "fylo landing page",
      url: "https://boymelvs.github.io/fylo-dark-theme-landing-page-master/",
      tags: ["HTML5", "BOOTSTRAP5", "JAVASCRIPT", "CSS3", "CSSGRID", "REACTJS"],
   },

   {
      id: 25,
      title: "NFT Preview Card",
      description: "An NFT preview card",
      image: nftPreview,
      alt: "NFT preview card",
      url: "https://boymelvs.github.io/nft-preview-card-component-main/",
      tags: ["HTML5", "FLEXBOX", "CSS3"],
   },

   {
      id: 26,
      title: "Advice Generator App",
      description: "An advice generator app, data from API",
      image: adviceGenerator,
      alt: "advice-generator-app",
      url: "https://boymelvs.github.io/advice-generator-app-main/",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX", "API"],
   },

   {
      id: 27,
      title: "Analog Clock",
      description: "An analog clock.",
      image: clock,
      alt: "analog clock",
      url: "https://boymelvs.github.io/clock/",
      tags: ["HTML5", "JAVASCRIPT", "CSS3", "FLEXBOX"],
   },
];

export default projectData;
