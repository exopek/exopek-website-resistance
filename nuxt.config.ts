import { useSeoPageContentStore } from "./store/seoPageContent";

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

      
      try {
        const response = await fetch('https://exopekwebshop-daf7dmgpamdvbtha.germanywestcentral-01.azurewebsites.net/api/dev/seo-page-contents');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const sites = await response.json();
        
        return [
          ...sites.map((site: { createdAt: any; slug: any; }) => ({
            changefreq: 'daily',
            priority: 0.8,
            lastmod: site.createdAt,
            loc: `https://fitnessband.exopek.de/${site.slug}`
          }))
        ];
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  }
})