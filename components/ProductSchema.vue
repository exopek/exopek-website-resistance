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
        name: 'Exopek Widerstandsbänder',
        description: props.description,
        brand: {
          '@type': 'Brand',
          name: 'Exopek'
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          price: '29.99',
          priceCurrency: 'EUR'
        }
      })
    }
  ]
})
</script>