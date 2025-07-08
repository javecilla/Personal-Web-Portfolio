<script setup lang="ts">
import { MoonIcon } from "lucide-vue-next";
import { useDarkMode } from "@/composables/useDarkMode";

const { isDarkMode, toggleTheme } = useDarkMode();
</script>

<template>
  <button 
    @click="toggleTheme" 
    class="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-all duration-300 ease-in-out flex items-center justify-center cursor-not-allowed opacity-50"
    title="Dark mode only"
  >
    <MoonIcon class="h-5 w-5 text-white" />
  </button>
</template>
