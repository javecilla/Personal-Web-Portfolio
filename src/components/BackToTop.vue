<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { ChevronUp } from 'lucide-vue-next'

  const isVisible = ref(false)

  const checkScroll = () => {
    isVisible.value = window.scrollY > 400
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    // Reset hash and trigger hashchange event
    const url = new URL(window.location.href)
    url.hash = 'about' // Set to about instead of removing
    window.history.replaceState({}, '', url.href)

    // Dispatch hashchange event to update active state
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  }

  onMounted(() => {
    window.addEventListener('scroll', checkScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
  })
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300 ease-in-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300 ease-in-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="back-to-top"
      aria-label="Back to top"
    >
      <ChevronUp class="h-6 w-6" />
    </button>
  </Transition>
</template>

<style scoped>
  .back-to-top {
    @apply fixed bottom-28 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-600 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gray-50 dark:border-zinc-700/50 dark:bg-zinc-800/80 dark:text-gray-300 dark:hover:bg-zinc-700/50;
  }
</style>
