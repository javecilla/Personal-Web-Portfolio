<script setup lang="ts">
import TechStacksExpertise from '@/components/sections/skills/TechStackExpertise.vue';
import TechStackAndSkills from '@/components/sections/skills/TechStackAndSkills.vue';
</script>

<template>
    <div class="space-y-8 dark:bg-zinc-900/30 bg-gray-100 p-6 rounded-2xl transition-all duration-500 ease-in-out">
      <!-- Existing content -->
      <div class="space-y-4 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold dark:text-white text-gray-600">
          Tech Stacks and Tools
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-4xl mx-auto">
          These technologies empower me to create dynamic, responsive, and high-performance web applications.
        </p>
      </div>
  
      <TechStacksExpertise />
  
      <div class="text-center">
        <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-4xl mx-auto">
          I'm thrilled to share my web development tech stack and skills. With ongoing learning and a passion for innovation, I continuously expand my knowledge to improve my skills and stay ahead of industry trends.
        </p>
      </div>
  
      <TechStackAndSkills />
  
    </div>
  </template>

<style scoped>
img {
  opacity: 0.7;
  transition: all 0.3s ease;
}

.group:hover img {
  opacity: 1;
}
</style>