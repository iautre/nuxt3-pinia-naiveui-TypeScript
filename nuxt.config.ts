// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxt/content',
    '@invictus.codes/nuxt-vuetify',
  ],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Autre Coding',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Autre Coding.' }
      ],
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    }
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: false,
      /* vite-plugin-vuetify options */
      styles: 'sass',
      autoImport: true,
    }
  }
})
