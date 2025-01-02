<template>
  <div>
    <MetaTags
      title="Exopek Widerstandsbänder - Professionelle Fitnessbänder für effektives Training"
      description="Entdecken Sie hochwertige Widerstandsbänder von Exopek für effektives Training zuhause. Ideal für alle Fitnesslevel und Trainingsarten."
      keywords="Widerstandsbänder, Fitnessbänder, Resistance Bands, Training zuhause, Fitness Equipment"
      url="https://exopek.de"
    />
    <ProductSchema description="Hochwertige Widerstandsbänder für effektives Training" />
    
    <main class="min-h-screen">
      <header class="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div class="max-w-7xl mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Professionelle Widerstandsbänder für Ihr Training
          </h1>
          <p class="text-xl md:text-2xl">
            Qualität und Effektivität für jedes Fitnesslevel
          </p>
        </div>
      </header>

      <section class="py-12">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NuxtLink 
              v-for="category in categories" 
              :key="category.slug"
              :to="`/kategorie/${category.slug}`"
              class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 class="text-2xl font-bold mb-4">{{ category.title }}</h2>
              <p class="text-gray-600">{{ getCategoryDescription(category.slug) }}</p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <FAQSection targetGroup="allgemein" :faqs="[]" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useCategories } from '~/composables/useCategories';

const { categories } = useCategories()

function getCategoryDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    'senioren': 'Extra-leichte Widerstandsbänder für sanftes Training',
    'fitness-einsteiger': 'Mittlere Widerstandsstärken für optimalen Trainingsstart',
    'kraftsportler': 'Starke Widerstandsbänder für intensives Krafttraining',
    'yoga': 'Flexible Bänder für mehr Beweglichkeit und Dehnung',
    'outdoor-fitness': 'Robuste Bänder für effektives Training im Freien'
  }
  return descriptions[slug] || 'Optimale Unterstützung für Ihr Training'
}
</script>