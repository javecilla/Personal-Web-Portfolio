<script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { Project } from '@/types/project'
  import { projects } from '@/data/projects'
  import ProjectCard from '@/components/sections/projects/ProjectCard.vue'
  import ProjectFilter from '@/components/sections/projects/ProjectFilter.vue'
  import ProjectModal from '@/components/sections/projects/ProjectModal.vue'

  defineProps<{
    id?: string
  }>()

  const selectedCategory = ref('highlights')

  const filteredProjects = computed(() => {
    if (selectedCategory.value === 'highlights') {
      return projects.filter((project) => project.isHighlight)
    }
    if (selectedCategory.value === 'recent') {
      return projects.filter((project) => project.isRecent)
    }
    if (selectedCategory.value === 'all') {
      return projects
    }
    return projects.filter(
      (project) => project.category === selectedCategory.value
    )
  })

  const selectedProject = ref<Project | null>(null)
  const isModalOpen = ref(false)

  const handleProjectClick = (project: Project) => {
    selectedProject.value = project
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
    selectedProject.value = null
  }
</script>

<template>
  <section :id="id" class="projects section-bg">
    <!-- Header -->
    <div class="projects__header">
      <h4 class="projects__title section-title">Featured Projects</h4>
      <p class="projects__description section-text">
        Displayed below are my diverse portfolio of projects, including
        academic, personal, and large-scale endeavors. Take a closer look to
        witness my range of skills and expertise.
      </p>
    </div>

    <!-- Filter -->
    <div class="projects__filter">
      <ProjectFilter
        :selected-category="selectedCategory"
        @select="selectedCategory = $event"
      />
    </div>

    <!-- Project Grid -->
    <div class="projects__grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        :project="project"
        @click="handleProjectClick"
      />
    </div>

    <!-- Project Modal -->
    <ProjectModal
      :show="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<style scoped>
  .projects {
    @apply space-y-6 rounded-2xl p-6 transition-all duration-500 ease-in-out;
  }

  .projects__header {
    @apply space-y-3 text-center;
  }

  .projects__title {
    @apply text-2xl font-bold sm:text-3xl;
  }

  .projects__description {
    @apply mx-auto max-w-3xl text-sm sm:text-base;
  }

  .projects__filter {
    @apply my-6 flex justify-center;
  }

  .projects__grid {
    @apply grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3;
  }
</style>
