import { ref } from 'vue';
import { generateContent, generateFAQs } from '~/utils/openai';
import { getImages } from '~/utils/pixabay';
import type { PageContent } from '~/utils/types';

export function useContent() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const config = useRuntimeConfig();

  const generatePageContent = async (targetGroup: string): Promise<PageContent> => {
    loading.value = true;
    error.value = null;

    try {
      const [content, faqs] = await Promise.all([
        generateContent(targetGroup, config.public.openaiApiKey),
        generateFAQs(targetGroup, config.public.openaiApiKey),
        []
      ]);

      return {
        title: `Widerstandsbänder für ${targetGroup}`,
        subtitle: 'Optimale Unterstützung für Ihr Training',
        mainContent: content,
        faqContent: faqs
      };
    } catch (e) {
      error.value = 'Fehler beim Laden der Inhalte';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return {
    generatePageContent,
    loading,
    error
  };
}