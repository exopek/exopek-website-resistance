<template>
  <section class="flex flex-col items-center py-12">
    <div class="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
      <div class="md:w-1/2 p-4">
        <h2 class="text-3xl font-bold mb-4">
          Widerstandsbänder: Die kompakte Lösung für effektives Training überall
        </h2>
        <p class="text-lg mb-4">
          {{ introduction }}
        </p>
       
        <button
          
          type="button"
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          <a href="https://exopek.de">
            Jetzt entdecken
          </a>
        </button>
      </div>
      <div class="md:w-1/2 p-4">
        <img
          src="https://exopek.de/wp-content/uploads/2023/03/Fitnessband-neu-definiert.jpg"
          alt="Fitness Image"
          class="w-full h-auto"
        />
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row justify-between mt-12 max-w-4xl mx-auto"
    >
      <div class="flex flex-col items-center p-4">
        <img
          src="https://exopek.de/wp-content/uploads/2023/08/Bildmarke-Schwarz.png"
          alt="Icon"
          class="w-20 h-12 mb-4"
        />
        <h3 class="text-xl font-semibold">Anpassbares Training</h3>
        <p class="text-center">
          Verschiedene Widerstandsstufen bieten vielseitige
          Trainingsmöglichkeiten und fördern deinen Fortschritt.
        </p>
      </div>
      <div class="flex flex-col items-center p-4">
        <img
          src="https://exopek.de/wp-content/uploads/2023/08/Bildmarke-Schwarz.png"
          alt="Icon"
          class="w-20 h-12 mb-4"
        />
        <h3 class="text-xl font-semibold">Schonendes Training</h3>
        <p class="text-center">
          Schonendes Training mit maximalem Effekt – die EXOPEK
          Widerstandsbänder sind deine perfekten Begleiter für Kraft und
          Ausdauer.
        </p>
      </div>
      <div class="flex flex-col items-center p-4">
        <img
          src="https://exopek.de/wp-content/uploads/2023/08/Bildmarke-Schwarz.png"
          alt="Icon"
          class="w-20 h-12 mb-4"
        />
        <h3 class="text-xl font-semibold">Vielseitige Training</h3>
        <p class="text-center">
          Unsere Widerstandsbänder eröffnen vielseitige Übungsmöglichkeiten für
          alle Muskelgruppen.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    introduction: {
      type: String,
      required: true
    }
  });

const introductionContent = computed(() => {
  return props.introduction;
});


</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
