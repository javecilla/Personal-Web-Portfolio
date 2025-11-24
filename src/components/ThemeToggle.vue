<script setup lang="ts">
  import { MoonIcon } from 'lucide-vue-next'
  // import { useDarkMode } from "@/composables/useDarkMode";

  // const { isDarkMode, toggleTheme } = useDarkMode();
</script>

<template>
  <!-- @click="toggleTheme"  -->
  <button
    class="flex cursor-not-allowed items-center justify-center rounded-full bg-zinc-800 p-2 transition-all duration-300 ease-in-out hover:bg-zinc-700"
    title="Dark mode only"
  >
    <MoonIcon class="h-5 w-5 text-white" />
  </button>
</template>
