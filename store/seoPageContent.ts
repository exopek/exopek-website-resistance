import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSeoPageContentStore = defineStore('seoPageContent', () => {
  const content = ref<PageContent | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchSeoPageContent = async (slug: string): Promise<PageContent> => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('https://exopekwebshop-daf7dmgpamdvbtha.germanywestcentral-01.azurewebsites.net/api/dev/seo-page-content?slug=' + slug);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const value = await response.json();
      console.log(value);
      content.value = value;
      console.log(content.value);
    } catch (e) {
      error.value = 'Fehler beim Laden der SEO-Inhalte';
    } finally {
      loading.value = false;
      return content.value as PageContent;
    }
  };

  return {
    content,
    loading,
    error,
    fetchSeoPageContent
  };
});
