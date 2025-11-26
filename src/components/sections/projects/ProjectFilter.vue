<script setup lang="ts">
  import { categories } from '@/data/projects'
  import Button from '@/components/ui/Button.vue'

  defineProps<{
    selectedCategory: string
  }>()

  const emit = defineEmits<{
    (e: 'select', category: string): void
  }>()
</script>

<template>
  <div class="project-filter">
    <Button
      v-for="category in categories"
      :key="category.id"
      :ariaLabel="`Filter by ${category.label}`"
      :variant="selectedCategory === category.id ? 'primary' : 'secondary'"
      class="w-32"
      @click="emit('select', category.id)"
    >
      {{ category.label }}
    </Button>
  </div>
</template>

<style scoped>
  /* Container */
  .project-filter {
    @apply mb-8 flex flex-wrap gap-3;
  }
</style>
