<script setup lang="ts">
import { categories } from '@/data/projects'

defineProps<{
  selectedCategory: string
}>()

const emit = defineEmits<{
  (e: 'select', category: string): void
}>()
</script>

<template>
  <div class="project-filter">
    <button
      v-for="category in categories"
      :key="category.id"
      @click="emit('select', category.id)"
      class="project-filter__button"
      :class="{
        'project-filter__button--active': selectedCategory === category.id,
        'project-filter__button--inactive': selectedCategory !== category.id
      }"
    >
      {{ category.label }}
    </button>
  </div>
</template>

<style scoped>
/* Container */
.project-filter {
  @apply flex flex-wrap gap-3 mb-8;
}

/* Button base */
.project-filter__button {
  @apply px-4 py-2 rounded-full text-sm transition-all duration-300;
}

/* Active state */
.project-filter__button--active {
  @apply bg-gradient-to-r from-blue-500 to-purple-500 text-white;
}

/* Inactive state */
.project-filter__button--inactive {
  @apply dark:bg-zinc-800 bg-gray-200 dark:text-gray-400 text-gray-600 
         hover:bg-gray-300 dark:hover:bg-zinc-700;
}
</style>
