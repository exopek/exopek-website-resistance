<template>
  <div class="min-h-[1000px] animate-pulse bg-gray-200" v-if="loading"></div>
  <div v-else>
    <MetaTags
      v-if="!error"
      :title="`${pageContent?.metaTitle} | EXOPEK`"
      :description="`${pageContent?.metaDescription}. Entdecken Sie unsere speziellen Widerstandsbänder für maximalen Erfolg im Training.`"
      :url="`https://fitnessband.exopek.de/${route.params.slug}`"
      :imageAlt="`Premium Widerstandsband Set - 10 Fitnessbänder mit Griffen und Manschetten.`"
    />

    <main class="min-h-screen">
      <div class="flex justify-center shadow-lg m-2 pb-2">
        <img
          src="https://exopek.de/wp-content/uploads/2023/08/Bildmarke-Schwarz.png"
          alt="Logo Clean"
          height="40"
          width="40"
        />
        <div class="flex justify-center gap-3 md:gap-20 w-3/4">
          <a href="https://exopek.de/shop-3/"> Shop </a>
          <a href="https://exopek.de/exopek/"> EXOPEK Pro </a>
          <a href="https://exopek.de/workouts/"> Workouts </a>
          <a href="https://exopek.de/app-2/"> App </a>
        </div>
      </div>
      <div class="px-10 pt-10">
        <Breadcrumb
          :breadcrumbs="[
            { text: 'Startseite', to: 'https://exopek.de/' },
            { text: pageContent?.h1, to: `/${pageContent?.slug}` },
          ]"
        />
      </div>
      <div>
        <header class="flex justify-center text-black pt-8 md:pt-16">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-sm">{{ pageContent?.metaTitle }}</div>
            <div class="text-sm">{{ pageContent?.metaDescription }}</div>
            <h1 class="text-4xl md:text-6xl font-bold mb-2">
              {{ loading ? "" : error ? "Fehler" : `${pageContent?.h1}` }}
            </h1>
          </div>
        </header>

        <article
          v-if="!error && pageContent?.mainContent?.length"
          class="py-8 md:py-16"
        >
          <CustomDropdown placement="right">
            <template v-slot:button>
              <span
                class="px-2 py-2 border rounded inline-flex items-center text-sm"
              >
                <span class="mr-2">Inhaltsverzeichnis</span>

                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                  />
                </svg>
              </span>
            </template>
            <template v-slot:content>
              <ul class="space-y-3 mt-4 pl-4">
                <li
                  v-for="(content, index) in pageContent?.mainContent"
                  :key="index"
                  class="hover:bg-gray-50 rounded-md transition-colors"
                >
                  <a
                    @click="scrollTo('content-' + index)"
                    class="text-gray-700 hover:text-blue-600 cursor-pointer text-sm font-medium block py-2"
                  >
                    {{ content.h2_title }}
                  </a>
                </li>
              </ul>
            </template>
          </CustomDropdown>
          <div class="px-4">
            <FitnessBandsSection :introduction="pageContent?.intoduction" />
          </div>

          <div class="px-4">
            <KeyTakeaways :keyTakeaways="pageContent?.keyTakeaways" />
          </div>

          <div class="px-4 prose lg:prose-xl">
            <ContentSection
              :contentArray="pageContent?.mainContent"
              :conclusion="pageContent?.conclusion"
            />
          </div>
        </article>
        <FAQSection
          v-if="!error && pageContent?.faqContent?.length"
          :target-group="route.params.slug?.toString()"
          :faqs="pageContent?.faqContent"
        />
        <FooterSection />
      </div>
    </main>
  </div>
</template>
  
  <script setup lang="ts">
import { useCategories } from "~/composables/useCategories";
import { useSeoPageContentStore } from "~/store/seoPageContent";
import type { PageContent } from "~/utils/types";

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const showDropdown = ref(false);
// const { generatePageContent, loading, error } = useContent()
const seoPageContentStore = useSeoPageContentStore();
const {
  content: pageContent,
  loading,
  error,
} = storeToRefs(seoPageContentStore);
const fetchSeoPageContent = seoPageContentStore.fetchSeoPageContent;

function scrollTo(id: string) {
  console.log("Scrolling to:", id);

  window.location.hash = id; // Fügt #section1 zur URL hinzu
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// set showDropdown.value
function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

onMounted(async () => {
  try {
    pageContent.value = await fetchSeoPageContent(route.params.slug as string);
  } catch (e) {
    console.error("Error loading page content:", e);
  }
});
</script>