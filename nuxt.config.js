export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "yal-exports",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Yal is a exporting company based on Tamil Nadu. We are exporting all types of goods. Our speciality is Ayurvedic and Medicinal products"
      },
      {
        name: "keywords",
        content: "Exports, Imports, Foreign, Ayurvedic, Medicinal, Landscaping"
      },
      {
        name: "geo.position",
        content: "10.033618963659716; 78.33607077598573"
      },
      { name: "geo.placename", content: "Melur" },
      { name: "geo.region", content: "IN-TN" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;800&family=Montserrat:wght@400;500;600&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/style.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
