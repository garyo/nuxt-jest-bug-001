import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - Dark Star Systems` : 'Dark Star Systems'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/markdownit',
    'nuxt-responsive-loader',   // process image srcsets
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-149000842-1'
    }],
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/fontawesome-free-brands',
          icons: ['faFacebook', 'faLinkedin']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faSquare']
        }
      ]
    }]
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          anchor: '#a0a0ff'
        }
      }
    }
  },
  /*
  ** Markdownit config
  */
  markdownit: {
    preset: 'default',
    linkify: true,
    typographer: true,
    // breaks: true,
    use: [
      'markdown-it-attrs', // add HTML classes/attrs with {.foo attr=value}
      ['markdown-it-style', {
        h1: 'font-size: 200%; font-weight: 400; margin-bottom: 10px',
        h2: 'font-size: 170%; font-style: italic; font-weight: 400; margin-bottom: 8px',
        h3: 'margin-top: 10px',
        a: 'color: #ddddff', // doesn't work :-(
        p: 'font-size: 18px; font-weight: 300; font-family: \'Roboto\', sans-serif'
      }]
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
