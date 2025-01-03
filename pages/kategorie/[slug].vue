<template>
    <div>
      <MetaTags v-if="!error"
        :title="`Widerstandsbänder für ${route.params.slug} | Exopek`"
        :description="`Entdecken Sie unsere speziellen Widerstandsbänder für ${route.params.slug}. Optimale Unterstützung für Ihr Training.`"
        :keywords="`Widerstandsbänder ${route.params.slug}, Fitnessbänder, Training`"
        :url="`${config.public.siteUrl}/kategorie/${route.params.slug}`"
      />
      <ProductSchema v-if="!error" :description="`Hochwertige Widerstandsbänder für ${route.params.slug}`" />
      
      <main class="min-h-screen">
        <header class="bg-gradient-to-r from-gray-200 to-gray-600 text-white py-16">
          <div class="max-w-7xl mx-auto px-4">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">
              {{ loading ? 'Laden...' : error ? 'Fehler' : pageContent.title }}
            </h1>
            <p v-if="!error" class="text-xl md:text-2xl">
              {{ pageContent.subtitle }}
            </p>
            <p v-else class="text-xl md:text-2xl text-red-300">
              {{ error }}
            </p>
          </div>
        </header>
  
        <article v-if="!error && pageContent.content?.length" class="py-12">
          <div
          class="max-w-4xl mx-auto px-4 prose lg:prose-xl">
            <ContentSection :contentArray="pageContent.content" />
          </div>
        </article>
  
        <FAQSection 
          v-if="!error && pageContent.faqs?.length"
          :target-group="route.params.slug?.toString()"
          :faqs="pageContent.faqs"
        />
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
import { useCategories } from '~/composables/useCategories'
import { useContent } from '~/composables/useContent'
import type { PageContent } from '~/utils/types'

  
  const route = useRoute()
  const config = useRuntimeConfig()
  const { generatePageContent, loading, error } = useContent()
  
  const pageContent = ref<PageContent>({
    title: '',
    subtitle: '',
    content: [],
    images: [],
    faqs: []
  })
  
  onMounted(async () => {
    try {
      pageContent.value = await generatePageContent(route.params.slug as string)
      console.log('Loaded page content:', pageContent.value);
    } catch (e) {
      console.error('Error loading page content:', e)
    }
  })
  
  // Validate that the slug exists in our categories
  const { categories } = useCategories()
  const validCategory = computed(() => 
    categories.value.some((category: { slug: any }) => category.slug === route.params.slug)
  )
  
  // Redirect to home if category doesn't exist
  if (!validCategory.value) {
    navigateTo('/')
  }
  </script>