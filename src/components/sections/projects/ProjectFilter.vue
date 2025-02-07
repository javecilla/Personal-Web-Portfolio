<script setup lang="ts">
import { categories } from '@/data/projects';

defineProps<{
  selectedCategory: string;
}>();

const emit = defineEmits<{
  (e: 'select', category: string): void;
}>();
</script>

<template>
  <div class="flex flex-wrap gap-3 mb-8">
    <button
      v-for="category in categories"
      :key="category.id"
      @click="emit('select', category.id)"
      class="px-4 py-2 rounded-full text-sm transition-all duration-300"
      :class="[
        selectedCategory === category.id
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
          : 'dark:bg-zinc-800 bg-gray-200 dark:text-gray-400 text-gray-600 hover:bg-gray-300 dark:hover:bg-zinc-700'
      ]"
    >
      {{ category.label }}
    </button>
  </div>
</template>
