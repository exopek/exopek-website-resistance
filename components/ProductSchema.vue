<template>
  
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
    required: true
  }
})
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'EXOPEK Widerstandsbänder',
        description: props.description,
        image: {
          '@type': 'ImageObject',
          url: 'https://exopek.de/wp-content/uploads/2024/05/zehn-widerstandsbaender-sicher-fixiert.jpg',
          width: 1200,
          height: 630,
          caption: 'EXOPEK Premium Widerstandsbänder Set'
        },
        brand: {
          '@type': 'Brand',
          name: 'EXOPEK',
          logo: {
            '@type': 'ImageObject',
            url: 'https://exopek.de/wp-content/uploads/2023/08/Bildmarke-Schwarz.png',
            width: 40,
            height: 40
          }
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          price: '295.00',
          priceCurrency: 'EUR'
        }
      })
    }
  ]
})
</script>