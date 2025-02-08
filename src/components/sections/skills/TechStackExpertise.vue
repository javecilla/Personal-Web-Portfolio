<script setup lang="ts">
import { techStacksExpertise } from "@/data/techStackExpertise";
</script>

<template>
 
  <div class="lg:ml-[225px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
    <div 
      v-for="tech in techStacksExpertise" 
      :key="tech.name"
      class="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-gray-100 dark:bg-zinc-900/50 transition-all duration-300 hover:scale-105 w-full"
    >
      <div class="w-12 h-12 transition-all duration-300">
        <img 
          :src="tech.icon"
          :title="tech.name"
          class="w-full h-full opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <span class="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
        {{ tech.name }}
      </span>
    </div>
  </div>

</template>

<style scoped>
</style>
