<template>
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex">
            <NuxtLink to="/" class="flex items-center">
              <span class="text-xl font-bold text-blue-600">Exopek</span>
            </NuxtLink>
          </div>
          <div class="hidden md:flex items-center space-x-4">
            <NuxtLink 
              v-for="category in categories" 
              :key="category.slug"
              :to="`/kategorie/${category.slug}`"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              {{ category.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
import { useCategories } from '~/composables/useCategories';

  const { categories } = useCategories()
  </script>