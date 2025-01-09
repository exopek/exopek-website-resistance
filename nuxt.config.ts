// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['assets/css/tailwind.css'],
  ssr: true,
  app: {
    head: {
      title: 'Fitnessband Übungen',
      htmlAttrs: { lang: 'de' },
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  nitro: {
    preset: 'node-server'
  },
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt'
  ],
  runtimeConfig: {
    public: {
    openaiApiKey: process.env.OPENAI_API_KEY,
    pixabayApiKey: process.env.PIXABAY_API_KEY
  }},
  sitemap: {
    urls: async () => {
      const dynamicRoutes = ['senioren', 'fitness-einsteiger', 'kraftsportler', 'yoga', 'outdoor-fitness', 'physiotherapie', 'crossfit', 'heimtraining', 'reisen', 'rehabilitation', 'büroangestellte',
        'pilates', 'teamsportler', 'personal-trainer', 'ausdauertraining', 'seniorensportgruppen', 'rehabilitationszentren', 'leistungssportler', 'kampfsportler', 'basketball', 'handball', 'volleyball',
        'fussball', 'american-football', 'rugby', 'muay-thai', 'boxen', 'mma', 'hyrox', 'calisthenics', 'functional-training', 'sprungkrafttraining', 'beweglichkeitstraining', 'core-training',
        'platzsparend', 'mobile-fitness', 'athletik-training', 'leichtathletik', 'gelenkschonend' 
      ]
      return dynamicRoutes.map(route => ({
        changefreq: 'daily',
        priority: 0.8,
        loc: `https://fitnessband.exopek.de/${route}`
      }))
    }
  }
})