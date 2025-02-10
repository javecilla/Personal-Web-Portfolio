<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

const error = ref<Error | null>(null)

onErrorCaptured((e: Error) => {
  error.value = e
  return false
})
</script>

<template>
  <div v-if="error" class="error-boundary">
    <p>Something went wrong: {{ error.message }}</p>
    <button @click="error = null" class="retry-button">
      Try again
    </button>
  </div>
  <slot v-else />
</template>

<style scoped>
.error-boundary {
  @apply p-4 text-center text-red-500 bg-red-50 dark:bg-red-900/10 rounded-lg;
}

.retry-button {
  @apply mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors;
}
</style>
