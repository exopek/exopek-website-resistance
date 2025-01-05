<template> 
    <div class="max-w-4xl mx-auto">
    <h2 class="text-xl font-semibold mb-2">{{ firstContent.title }}</h2>
    <p class="text-gray-600 space-y-6">{{ firstContent.content }}</p>
    <ProductCarousell></ProductCarousell>
    <div class="space-y-4">
        <div v-for="(con, index) in otherContent" :key="index">
        <h2 class="text-xl font-semibold mb-2">{{ con.title }}</h2>
        <p class="text-gray-600">{{ con.content }}</p>
        </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  const props = defineProps({
    contentArray: {
      type: Array,
      required: true
    }
  });

  const firstContent = computed(() => {
    return props.contentArray[0];
  });

  const otherContent = computed(() => {
    return props.contentArray.slice(1);
  });


  </script>