export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fraserwatt-dot-uk',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description',
        name: 'description',
        content: "I'm taking Data & Analytics contracts for Q3 2022, and web development work on an adhoc basis." +
          "I’ve worked in Data & Analyics for eight years, and as a self-employed contractor since the first half of 2021." +
          "Using a data-driven approach to enable growth across end-to-end analytics pipelines, I work where the project requires — from ETL and analytics engineering, to visualisation and commercial insights." +
          "I’ve had success doing this in both a B2B and B2C context at companies as varied as Paddle, Facebook, and Otrium." +
          "I also write about the intersection of technology and politics, and have been featured in Tribune and Jacobin magazines."
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/global.css',
    'animate.css/animate.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/data.server.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  
  axios: {
    baseURL: 'http://fraserw7.sg-host.com/', 
  },

  // googleFonts: {
  //   families: {
  //     Poppins: true,
  //     Inter: ['900'],
  //   },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
