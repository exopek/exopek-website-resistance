<template> 
    <div class="max-w-7xl mx-auto">
    <h2 class="text-xl font-semibold mb-2">{{ firstContent.h2_title }}</h2>
    <p class="text-gray-600 space-y-6">{{ firstContent.content }}</p>
    <ProductCarousell></ProductCarousell>
    <div class="space-y-4">
        <div v-for="(con, index) in otherContent" :key="index">
          <h2 class="text-xl font-semibold mb-2">{{ con.h2_title }}</h2>
          <div class="text-gray-600">{{ con.content }}</div>
        </div>
    </div>
    <div class="space-y-4 pt-4">
        <h2 class="text-xl font-semibold mb-2">Fazit</h2>
        <div class="text-gray-600">{{ conclusion }}</div>

    </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  const props = defineProps({
    contentArray: {
      type: Array,
      required: true
    },
    conclusion: {
      type: String,
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