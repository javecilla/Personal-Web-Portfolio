<script setup lang="ts">
  interface Props {
    variant?: 'default' | 'outline' | 'secondary'
  }

  withDefaults(defineProps<Props>(), {
    variant: 'default',
  })
</script>

<template>
  <span :class="['badge', `badge--${variant}`]">
    <span class="badge__content">
      <slot />
    </span>
  </span>
</template>

<style scoped>
  .badge {
    @apply inline-flex items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-orange-primary)] focus:ring-offset-2;
  }

  .badge--default {
    border: 1px solid var(--color-orange-primary);
    background-color: white;
  }

  .badge--default .badge__content {
    /* background-image: linear-gradient(
      to right,
      var(--gradient-orange-yellow-start),
      var(--gradient-orange-yellow-end)
    );
    background-clip: text;
    -webkit-background-clip: text; */
    color: var(--color-orange-vibrant);
  }

  html.dark .badge--default {
    background-color: #18181b;
  }

  .badge--secondary {
    @apply border-transparent bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-100 dark:hover:bg-zinc-700;
  }

  .badge--outline {
    @apply border-2 border-gray-200 text-gray-900 dark:border-zinc-700 dark:text-gray-100;
  }
</style>
