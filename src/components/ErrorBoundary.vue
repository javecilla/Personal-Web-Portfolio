<script setup lang="ts">
  import { ref, onErrorCaptured } from 'vue'

  const error = ref<Error | null>(null)

  onErrorCaptured((e: Error) => {
    console.error('Error captured:', e)
    error.value = e
    return false
  })

  const handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }
</script>

<template>
  <div class="error-boundary-wrapper">
    <div v-if="error" class="error-boundary p-4 text-center">
      <p class="text-red-500">
        Something went wrong while loading the content.
      </p>
      <button
        @click="handleReload"
        class="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Reload Page
      </button>
    </div>
    <slot v-else />
  </div>
</template>

<style scoped>
  .error-boundary {
    @apply rounded-lg bg-red-50 p-4 text-center text-red-500 dark:bg-red-900/10;
  }

  .retry-button {
    @apply mt-2 rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600;
  }
</style>
