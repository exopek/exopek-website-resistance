<template>
  <nav aria-label="breadcrumb" class="text-sm">
    <ol class="list-reset flex text-gray-600 items-center">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
        <span v-if="index === 0" class="mr-2">🏠</span>
        <router-link v-if="index < breadcrumbs.length - 1" :to="crumb.path" class="hover:underline text-blue-500">
          {{ crumb.name }}
        </router-link>
        <span v-else>{{ crumb.name }}</span>
        <span v-if="index < breadcrumbs.length - 1" class="mx-2">></span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
nav {
  margin-bottom: 1rem;
}
</style>
