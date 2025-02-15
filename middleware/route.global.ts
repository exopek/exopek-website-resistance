import { defineNuxtRouteMiddleware, useHead } from '#app';

export default defineNuxtRouteMiddleware((to) => {
  // Add base title suffix
  const title = to.meta.title ? 
    `${to.meta.title} | EXOPEK Widerstandsbänder` : 
    'EXOPEK Widerstandsbänder - Professionelle Fitnessbänder für effektives Training';

  useHead({
    title,
    meta: [
      {
        name: 'description',
        content: typeof to.meta.description === 'string' ? to.meta.description : 'Entdecken Sie hochwertige Widerstandsbänder von EXOPEK für effektives Training zuhause. Ideal für alle Fitnesslevel und Trainingsarten.'
      }
    ]
  });
});