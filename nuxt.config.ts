export default defineNuxtConfig({
  app: {
    head: {
      title: 'App',
      meta: [
        {name: 'description', content: '...'}
      ]
    }
  },
  modules: [
    '@hypernym/nuxt-gsap',
    '@nuxt/image',
    '@tresjs/nuxt',
    '@unocss/nuxt'
  ]
})
