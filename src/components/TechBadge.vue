<script setup lang="ts">
  import Image from '@/components/ui/Image.vue'

  interface Props {
    name: string
    icon: string
  }

  defineProps<Props>()
</script>

<template>
  <div class="tech-badge">
    <Image
      :src="icon"
      :alt="name"
      class="tech-badge__icon"
      :show-skeleton="false"
    />
    <span class="tech-badge__name">{{ name }}</span>
  </div>
</template>

<style scoped>
  .tech-badge {
    @apply inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-100 bg-gray-50 px-3 py-2 dark:border-zinc-700/50 dark:bg-zinc-800;
  }

  .tech-badge__icon {
    @apply h-6 w-6;
  }

  .tech-badge__name {
    @apply text-sm font-medium text-gray-700 dark:text-gray-300;
  }
</style>
