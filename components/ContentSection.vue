<template> 
    
    <div class="max-w-7xl mx-auto">
      <ProductCarousell></ProductCarousell>
    <h2 class="text-xl font-semibold mb-2" id="content-0">{{ firstContent.h2_title }}</h2>
    <p v-if="firstContent.preview_image_url === undefined" v-html="firstContent.content" class="text-gray-600"></p>
          <div v-else class="grid md:grid-cols-2 grid-cols-1">
            <p v-html="firstContent.content" class="text-gray-600"></p>
            <img :src="firstContent.preview_image_url" alt="content image" loading="lazy" class="w-full h-auto">
        </div>
    
    <div class="space-y-4">
        <div v-for="(con, index) in otherContent" :key="index">
          <h2 class="text-xl font-semibold mb-2" :id="'content-' + index">{{ con.h2_title }}</h2>
          <div v-if="con.preview_image_url === undefined" v-html="con.content" class="text-gray-600"></div>
          <div v-else class="grid md:grid-cols-2 grid-cols-1">
            <p v-html="con.content" class="text-gray-600"></p>
            <img :src="con.preview_image_url" alt="content image" loading="lazy" class="w-full h-auto">
        </div>
    </div>
    <div class="space-y-4 pt-4">
        <h2 class="text-xl font-semibold mb-2" id="fazit">Fazit</h2>
        <div v-html="conclusion" class="text-gray-600"></div>

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