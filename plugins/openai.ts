export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    
    return {
      provide: {
        openaiConfig: {
          apiKey: config.openaiApiKey
          // andere OpenAI Konfigurationen
        },
        pixabayConfig: {
          apiKey: config.pixabayApiKey
          // andere Pixabay Konfigurationen
        }
      }
    }
  })