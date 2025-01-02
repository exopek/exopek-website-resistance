import { ref } from 'vue'
import type { Category } from '~/types/navigation'

export function useCategories() {
  const categories = ref<Category[]>([
    { slug: 'senioren', title: 'Senioren' },
    { slug: 'fitness-einsteiger', title: 'Fitness-Einsteiger' },
    { slug: 'kraftsportler', title: 'Kraftsportler' },
    { slug: 'yoga', title: 'Yoga' },
    { slug: 'outdoor-fitness', title: 'Outdoor' }
  ])

  return {
    categories
  }
}