<script setup lang="ts">
  import { GithubIcon, Globe } from 'lucide-vue-next'
  import type { Project } from '@/types/project'
  import Image from '@/components/ui/Image.vue'
  import Link from '@/components/ui/Link.vue'

  defineProps<{
    project: Project
  }>()

  const emit = defineEmits<{
    (e: 'click', project: Project): void
  }>()
</script>

<template>
  <div
    class="project-card section-bg group cursor-pointer"
    @click="emit('click', project)"
  >
    <!-- Project Image -->
    <div class="project-card__image-container">
      <div class="relative h-full w-full">
        <Image
          :src="project.image"
          :alt="project.title"
          variant="project"
          rounded="2xl"
          class="project-card__image"
          :show-skeleton="true"
          skeleton-class="absolute inset-0 w-full h-full"
        >
          <template #overlay>
            <div
              class="project-card__image-overlay group-hover:opacity-0"
            ></div>
          </template>
        </Image>
      </div>
    </div>

    <!-- Content -->
    <div class="project-card__content">
      <div class="project-card__info">
        <h3 class="project-card__title section-title">
          {{ project.title }}
        </h3>

        <p class="project-card__description section-text">
          {{ project.description }}
        </p>

        <!-- Tech Stack and Button Container -->
        <div class="project-card__footer">
          <!-- Tech Stack -->
          <div class="project-card__tech">
            <div class="project-card__tech-icons">
              <Image
                v-for="tech in project.technologies"
                :key="tech.name"
                :src="tech.icon"
                :alt="tech.name"
                class="project-card__tech-icon"
                :show-skeleton="false"
              />
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="project-card__actions">
            <Link
              v-if="project.githubUrl"
              :href="project.githubUrl"
              :external="true"
              variant="icon"
              ariaLabel="View source code on GitHub"
              class="project-card__action-btn"
            >
              <GithubIcon class="project-card__action-icon" />
            </Link>
            <Link
              v-if="project.demoUrl"
              :href="project.demoUrl"
              :external="true"
              variant="icon"
              ariaLabel="View live demo"
              class="project-card__action-btn"
            >
              <Globe class="project-card__action-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Main container */
  .project-card {
    @apply overflow-hidden rounded-2xl transition-all duration-500 ease-in-out;
    @apply transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-zinc-900/20;
  }

  /* Image container */
  .project-card__image-container {
    @apply relative h-48 w-full overflow-hidden;
  }

  .project-card__image {
    @apply h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-[1.05] group-hover:opacity-100 group-hover:grayscale-0;
  }

  .project-card__image-overlay {
    @apply absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-500;
  }

  /* Content section */
  .project-card__content {
    @apply space-y-6 p-6;
  }

  .project-card__info {
    @apply flex flex-col items-start space-y-4;
  }

  .project-card__title {
    @apply text-left text-xl font-bold;
  }

  .project-card__description {
    @apply line-clamp-4 text-left text-sm;
  }

  /* Footer section */
  .project-card__footer {
    @apply flex w-full items-center justify-between pt-2;
  }

  /* Tech stack */
  .project-card__tech {
    @apply flex items-center;
  }

  .project-card__tech-icons {
    @apply flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700;
  }

  .project-card__tech-icon {
    @apply h-[23px] w-[23px] grayscale transition-all duration-300 group-hover:grayscale-0;
  }

  /* Action buttons */
  .project-card__actions {
    @apply flex items-center gap-2;
  }

  .project-card__action-btn {
    @apply inline-flex h-[36px] w-[36px] items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700;
  }

  .project-card__action-icon {
    @apply h-[20px] w-[20px] text-gray-900 dark:text-white/80;
  }
</style>
