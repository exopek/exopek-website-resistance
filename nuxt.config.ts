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
      const dynamicRoutes = ['senioren', 'fitness-einsteiger', 'kraftsportler', 'yoga', 'outdoor-fitness', 'physiotherapie', 'crossfit', 'heimtraining', 'reisen', 'rehabilitation', 'büroangestellte',
        'pilates', 'teamsportler', 'personal-trainer', 'ausdauertraining', 'seniorensportgruppen', 'rehabilitationszentren', 'leistungssportler', 'kampfsportler', 'basketball', 'handball', 'volleyball',
        'fussball', 'american-football', 'rugby', 'muay-thai', 'boxen', 'mma', 'hyrox', 'calisthenics', 'functional-training', 'sprungkrafttraining', 'beweglichkeitstraining', 'core-training',
        'platzsparend', 'mobile-fitness', 'athletik-training', 'leichtathletik', 'gelenkschonend', 'klimmzüge', 'premium-widerstandsbaender-high-performance', 'trendy-widerstandsbaender-multifunktional',
        'widerstandsbaender-gegen-plateaus', 'beste-widerstandsbaender-online-kaufen', 'widerstandsbaender-sets-alles-in-einem', 'widerstandsbaender-home-fitness', 'widerstandsbaender-mobil-und-vielseitig',
        'widerstandsbaender-high-performance-athleten', 'widerstandsbaender-cardio-und-kraft', 'widerstandsbaender-yoga-und-pilates', 'widerstandsbaender-crossfit-training', 'widerstandsbaender-booty-workouts',
        'widerstandsbaender-fuer-funktionssport', 'widerstandsband-sets-fuer-muskelaufbau', 'widerstandsband-sets-reha-und-fitness', 'widerstandsband-sets-home-fitness', 'premium-widerstandsband-sets', 'widerstandsband-sets-cardio-und-kraft',
        'widerstandsband-sets-fuer-funktionssport', 'widerstandsband-sets-fuer-kleinwohnungen', 'widerstandsband-sets-fuer-neubauwohnungen', 'widerstandsband-sets-fuer-luxusfitness', 'widerstandsband-sets-fuer-personal-trainer',
        'widerstandsband-sets-fuer-boutique-fitnessstudios', 'widerstandsband-sets-fuer-therapiezentren', 'widerstandsband-sets-fuer-ambitionierte-sportler', 'widerstandsband-sets-fuer-firmenfitness',
        'widerstandsband-sets-fuer-luxusreisen', 'widerstandsband-sets-fuer-studioprofis', 'widerstandsband-sets-fuer-exklusiven-kraftsport', 'widerstandsband-sets-fuer-high-performance-athleten', 'widerstandsband-sets-fuer-yoga-und-pilates-studios',
        'widerstandsband-sets-fuer-wellnesshotels', 'widerstandsband-sets-fuer-home-gym-luxus', 'widerstandsband-sets-fuer-physiotherapie-praxen', 'widerstandsband-sets-fuer-elite-sportvereine',
        'widerstandsband-sets-fuer-exklusive-kurhotels', 'widerstandsband-sets-fuer-crossfit-boxen', 'widerstandsband-sets-fuer-luxus-gym-chains' 
      ]

      
      try {
        const response = await fetch('https://exopekwebshop-daf7dmgpamdvbtha.germanywestcentral-01.azurewebsites.net/api/dev/seo-page-contents');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const sites = await response.json();
        console.log(sites);
        
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
        return dynamicRoutes.map(route => ({
          changefreq: 'daily',
          priority: 0.8,
          loc: `https://fitnessband.exopek.de/${route}`
        }));
      }
    }
  }
})