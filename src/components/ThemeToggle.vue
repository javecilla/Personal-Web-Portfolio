<script setup lang="ts">
import { SunIcon, MoonIcon } from 'lucide-vue-next';
import { useDarkMode } from '@/composables/useDarkMode';

const { isDarkMode, toggleTheme } = useDarkMode();
</script>

<template>
  <button 
    @click="toggleTheme" 
    class="p-2 dark:bg-zinc-800 bg-gray-200 rounded-full dark:hover:bg-zinc-700 hover:bg-gray-300 transition-all duration-300 ease-in-out flex items-center justify-center"
  >
    <SunIcon v-if="isDarkMode" class="h-5 w-5 dark:text-white text-gray-900" />
    <MoonIcon v-else class="h-5 w-5 dark:text-white text-gray-900" />
  </button>
</template>
