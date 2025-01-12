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
        image: 'https://exopek.de/wp-content/uploads/2024/05/zehn-widerstandsbaender-sicher-fixiert.jpg',
        brand: {
          '@type': 'Brand',
          name: 'EXOPEK'
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