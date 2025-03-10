<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronUp } from 'lucide-vue-next';

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Reset hash and trigger hashchange event
  const url = new URL(window.location.href);
  url.hash = 'about';  // Set to about instead of removing
  window.history.replaceState({}, '', url.href);
  
  // Dispatch hashchange event to update active state
  window.dispatchEvent(new HashChangeEvent('hashchange'));
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
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
      <ChevronUp class="w-6 h-6" />
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  @apply fixed right-5 bottom-28 z-40
         flex items-center justify-center
         w-14 h-14
         text-gray-600 dark:text-gray-300
         bg-white/80 dark:bg-zinc-800/80
         border border-gray-200 dark:border-zinc-700/50
         rounded-full
         shadow-lg backdrop-blur-sm
         hover:bg-gray-50 dark:hover:bg-zinc-700/50
         transition-all duration-300
         hover:scale-110;
}
</style>
