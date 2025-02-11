<template>
    <section class="flex flex-col items-center py-12">
      <div class="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div class="p-4">
          <h2 class="text-3xl font-bold pb-8">
            Key Takeaways
          </h2>

          <ul class="space-y-3" v-for="(keyTakeaway, index) in keyTakeaways" :key="index">
            <li class="flex items-center gap-3">
              <RoundCheckSvg />
              {{ keyTakeaway }}
            </li>
          </ul>
        </div>
  
        <div>
          <img
            src="https://exopek.de/wp-content/uploads/2024/05/zehn-widerstandsbaender-sicher-fixiert.jpg"
            alt="Premium Widerstandsband Set - 10 Fitnessbänder mit Griffen und Manschetten."
            loading="lazy"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import RoundCheckSvg from "./svgs/RoundCheckSvg.vue";

  defineProps({
    keyTakeaways: {
      type: Array,
      required: true
    }
  });

  </script>
  
  <style scoped>
  </style>
  