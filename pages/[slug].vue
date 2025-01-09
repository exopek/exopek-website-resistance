<template>
  <div>
    <MetaTags
      v-if="!error"
      :title="`Widerstandsbänder für ${category.title} | Exopek`"
      :description="`Entdecken Sie unsere speziellen Widerstandsbänder für ${category.title}. Optimale Unterstützung für Ihr Training`"
      :keywords="`Widerstandsbänder ${category.title}, Fitnessbänder, Training`"
      :url="`https://fitnessband.exopek.de/${route.params.slug}`"
    />
    <ProductSchema
      v-if="!error"
      :description="`Hochwertige Widerstandsbänder für ${category.title}`"
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
            { text: 'Startseite', to: '/' },
            { text: category.title, to: `/${category.slug}` },
          ]"
        />
      </div>
      
        <div v-if="loading"
          
          class="min-h-[1000px] animate-pulse bg-gray-200"
        ></div>
        <div v-else>
          <header class="flex justify-center text-black pt-8 md:pt-16">
            <div class="max-w-7xl mx-auto px-4">
              <h1 class="text-4xl md:text-6xl font-bold mb-2">
                {{
                  loading
                    ? ""
                    : error
                    ? "Fehler"
                    : `Widerstandsbänder für ${category.title}`
                }}
              </h1>
              <p v-if="!error" class="flex justify-center text-xl md:text-2xl">
                {{ pageContent?.subtitle }}
              </p>
              <p v-else class="text-xl md:text-2xl text-red-300">
                {{ error }}
              </p>
            </div>
          </header>

          <article
            v-if="!error && pageContent?.mainContent?.length"
            class="py-8 md:py-16"
          >
            <div class="px-4">
              <FitnessBandsSection />
            </div>

            <div class="max-w-4xl mx-auto px-4 prose lg:prose-xl">
              <ContentSection :contentArray="pageContent?.mainContent" />
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
import { useContent } from "~/composables/useContent";
import { useSeoPageContentStore } from "~/store/seoPageContent";
import type { PageContent } from "~/utils/types";

const route = useRoute();
const config = useRuntimeConfig();
// const { generatePageContent, loading, error } = useContent()
const seoPageContentStore = useSeoPageContentStore();
const {
  content: pageContent,
  loading,
  error,
} = storeToRefs(seoPageContentStore);
const fetchSeoPageContent = seoPageContentStore.fetchSeoPageContent;

onMounted(async () => {
  try {
    pageContent.value = await fetchSeoPageContent(route.params.slug as string);
    console.log("Loaded page content:", pageContent.value);
  } catch (e) {
    console.error("Error loading page content:", e);
  }
});

// Validate that the slug exists in our categories
const { categories } = useCategories();
const validCategory = computed(() =>
  categories.value.some(
    (category: { slug: any }) => category.slug === route.params.slug
  )
);

const category = computed(
  () =>
    categories.value.find(
      (category: { slug: any }) => category.slug === route.params.slug
    ) || { slug: "error", title: "error" }
);

// Redirect to home if category doesn't exist fcg shjdfb hsdgvcj est
if (!validCategory.value) {
  navigateTo("/");
}
</script>