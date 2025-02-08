<script setup lang="ts">
import { GithubIcon, Globe } from 'lucide-vue-next';
import type { Project } from '@/data/projects';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <div class="group dark:bg-zinc-900/50 bg-gray-100 rounded-2xl transition-all duration-500 ease-in-out overflow-hidden">
    <!-- Project Image -->
    <div class="relative h-48 w-full overflow-hidden">
      <img 
        :src="project.image" 
        :alt="project.title"
        loading="eager"
        class="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="p-6 space-y-6 "> <!-- Adjusted top spacing with space-y-6 -->
      <div class="space-y-4 flex flex-col items-start"> <!-- Added flex and items-start -->
        <h3 class="text-xl font-bold dark:text-white text-gray-900 text-left"> <!-- Added text-left -->
          {{ project.title }}
        </h3>
        
        <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-4 text-left"> <!-- Added text-left -->
          {{ project.description }}
        </p>

        <!-- Tech Stack and Button Container -->
        <div class="flex items-center justify-between w-full pt-2">
          <!-- Tech Stack -->
          <div class="flex items-center">
            <div class="flex items-center gap-2 px-4 py-2 dark:bg-zinc-800 bg-gray-200 rounded-full dark:hover:bg-zinc-700 hover:bg-gray-300 transition-all duration-300 ease-in-out">
              <img 
                v-for="tech in project.technologies"
                :key="tech.name"
                :src="tech.icon"
                :alt="tech.name"
                :title="tech.name"
                class="w-[23px] h-[23px] transition-all duration-300 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-2">
            <a 
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              class="inline-flex items-center justify-center w-[36px] h-[36px] dark:bg-zinc-800 bg-gray-200 rounded-full dark:hover:bg-zinc-700 hover:bg-gray-300 transition-all duration-300 ease-in-out"
              :title="'View source code on GitHub'"
            >
              <GithubIcon class="w-[20px] h-[20px] dark:text-white/80 text-gray-900" />
            </a>
            <a 
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              class="inline-flex items-center justify-center w-[36px] h-[36px] dark:bg-zinc-800 bg-gray-200 rounded-full dark:hover:bg-zinc-700 hover:bg-gray-300 transition-all duration-300 ease-in-out"
              :title="'View live demo'"
            >
              <Globe class="w-[20px] h-[20px] dark:text-white/80 text-gray-900"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
