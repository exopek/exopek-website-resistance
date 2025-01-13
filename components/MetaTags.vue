<template>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Meta name="keywords" :content="keywords" />
      <Meta property="og:title" :content="title" />
      <Meta property="og:description" :content="description" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" :content="url" />
      <Meta property="og:image" :content="imageUrl" />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:image:alt" :content="imageAlt" />
      <Meta name="twitter:card" content="product" />
      <Meta name="twitter:image" :content="imageUrl" />
      <Meta name="language" content="German" />
      <Link rel="canonical" :href="url" />
    </Head>
  </template>
  
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    keywords: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      default: "https://exopek.de/wp-content/uploads/2020/11/EXOPEK-Pro-6.jpg"
    },
    imageAlt: {
      type: String,
      default: "EXOPEK Premium Widerstandsband Set - 10 Fitnessbänder mit Griffen und Manschetten."
    }
  })
  </script>