// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['assets/css/tailwind.css'],
  ssr: true,
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
      const dynamicRoutes = ['senioren', 'fitness-einsteiger', 'kraftsportler', 'yoga', 'outdoor-fitness']
      return dynamicRoutes.map(route => ({
        changefreq: 'daily',
        priority: 0.8,
        loc: `https://fitnessband.exopek.de/${route}`
      }))
    }
  }
})