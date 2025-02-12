<template>
    <section class="py-12 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Häufig gestellte Fragen</h2>
        <div class="space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-2">{{ faq.question }}</h3>
            <p v-html="faq.answer" class="text-gray-600"></p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const props = defineProps({
    targetGroup: {
      type: String,
      required: true
    },
    faqs: {
      type: Array,
      required: true
    }
  });
  </script>