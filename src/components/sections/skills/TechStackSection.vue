<script setup lang="ts">
  import TechStacksExpertise from '@/components/sections/skills/TechStackExpertise.vue'
  import TechStackAndSkills from '@/components/sections/skills/TechStackAndSkills.vue'

  defineProps<{
    id?: string
  }>()
</script>

<template>
  <section :id="id" class="tech-stack section-bg" style="margin-top: 10px">
    <!-- Section Header -->
    <div class="tech-stack__header">
      <h4 class="tech-stack__title section-title">Tech Stacks and Tools</h4>
      <p class="tech-stack__description section-text">
        These technologies empower me to create dynamic, responsive, and
        high-performance web applications.
      </p>
    </div>

    <!-- Primary Tech Stack Expertise -->
    <TechStacksExpertise />

    <!-- Additional Description -->
    <div class="tech-stack__subheader">
      <p class="tech-stack__description section-text">
        I'm thrilled to share my web development tech stack and skills. With
        ongoing learning and a passion for innovation, I continuously expand my
        knowledge to improve my skills and stay ahead of industry trends.
      </p>
    </div>

    <!-- Detailed Skills Grid -->
    <TechStackAndSkills />
  </section>
</template>

<style scoped>
  .tech-stack {
    @apply space-y-6 rounded-2xl p-6 transition-all duration-500 ease-in-out;
  }

  .tech-stack__header {
    @apply space-y-4 text-center;
  }

  .tech-stack__title {
    @apply text-2xl font-bold sm:text-3xl;
  }

  .tech-stack__description {
    @apply mx-auto max-w-4xl text-sm sm:text-base;
  }

  .tech-stack__subheader {
    @apply text-center;
  }

  :deep(img) {
    @apply opacity-70 transition-all duration-300;
  }

  :deep(.group:hover img) {
    @apply opacity-100;
  }
</style>
