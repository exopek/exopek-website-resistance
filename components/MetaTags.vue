<template>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Meta name="keywords" :content="keywords" />
      <Meta property="og:title" :content="title" />
      <Meta property="og:description" :content="description" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" :content="url" />
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
    }
  })
  </script>