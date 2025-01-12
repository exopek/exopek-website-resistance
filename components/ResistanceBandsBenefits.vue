<template>
  <section class="flex flex-col items-center py-12">
    <div class="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
      <div class="p-4">
        <h2 class="text-3xl font-bold pb-8">
          Vorteile unserer Widerstandsbänder
        </h2>

        <ul class="space-y-3">
          <li>
            <div class="flex items-center gap-3">
              <RoundCheckSvg />
              An jedes Fitnesslevel anpassbar: Widerstandsbänder von Anfänger bis Profi
            </div>
          </li>
          <li class="flex items-center gap-3">
            <RoundCheckSvg />
            Mobiles Fitnessstudio: Trainiere wann und wo du willst
          </li>
          <li class="flex items-center gap-3">
            <RoundCheckSvg />
            Gelenkfreundliche Krafttraining: Effektives Training ohne unnötige
            Belastungen der Gelenke
          </li>
          <li class="flex items-center gap-3">
            <RoundCheckSvg />
            Vielseitiger Allrounder: Ein Tool für Hunderte von Übungen
          </li>
          <li class="flex items-center gap-3">
            <RoundCheckSvg />
            Platzsparendes Trainingsgerät: Steckplätze für bis zu 10 Widerstandsbänder
          </li>
          <li class="flex items-center gap-3">
            <RoundCheckSvg />
            Einen Schritt voraus: Mit der EXOPEK App und den passenden Workouts
          </li>
        </ul>
      </div>

      <div>
        <img
          src="https://exopek.de/wp-content/uploads/2024/05/zehn-widerstandsbaender-sicher-fixiert.jpg"
          alt="image"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script>
import RoundCheckSvg from "./svgs/RoundCheckSvg.vue";

export default {
  name: "ResistanceBandsBenefits",
  components: {
    RoundCheckSvg,
  },
};
</script>

<style scoped>
</style>
