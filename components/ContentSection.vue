<template> 
    <div class="max-w-7xl mx-auto">
    <h2 class="text-xl font-semibold mb-2" id="content-0">{{ firstContent.h2_title }}</h2>
    <p v-html="firstContent.content" class="text-gray-600 space-y-6"></p>
    <ProductCarousell></ProductCarousell>
    <div class="space-y-4">
        <div v-for="(con, index) in otherContent" :key="index">
          <h2 class="text-xl font-semibold mb-2" :id="'content-' + index">{{ con.h2_title }}</h2>
          <div v-html="con.content" class="text-gray-600"></div>
        </div>
    </div>
    <div class="space-y-4 pt-4">
        <h2 class="text-xl font-semibold mb-2" id="fazit">Fazit</h2>
        <div v-html="conclusion" class="text-gray-600"></div>

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