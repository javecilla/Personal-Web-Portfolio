<script setup lang="ts">
import { ref, computed } from 'vue';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard.vue';
import ProjectFilter from './ProjectFilter.vue';

const selectedCategory = ref('highlights');

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'highlights') {
    return projects.filter(project => project.isHighlight);
  }
  if (selectedCategory.value === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === selectedCategory.value);
});
</script>

<template>
  <!-- Reduced space-y-8 to space-y-6 -->
  <section class="space-y-6 dark:bg-zinc-900/30 bg-gray-100 p-6 rounded-2xl transition-all duration-500 ease-in-out">
    <!-- Header with reduced spacing -->
    <div class="text-center space-y-3">
      <h2 class="text-2xl sm:text-3xl font-bold dark:text-white text-gray-600">
        Featured Projects
      </h2>
      <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
        Displayed below are my diverse portfolio of projects, including academic, personal, and large-scale endeavors. Take a closer look to witness my range of skills and expertise. 
      </p>
    </div>
    
    <!-- Reduced my-8 to my-6 -->
    <div class="flex justify-center my-6">
      <ProjectFilter 
        :selected-category="selectedCategory"
        @select="selectedCategory = $event"
      />
    </div>
    
    <!-- Project Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"> <!-- Reduced from gap-6 -->
      <ProjectCard 
        v-for="project in filteredProjects"
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>
