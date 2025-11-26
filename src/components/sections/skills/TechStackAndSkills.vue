<script setup lang="ts">
  import Image from '@/components/ui/Image.vue'
  import { techStackAndSkills } from '@/data/techStackAndSkills'
</script>

<template>
  <div class="skills">
    <div class="skills__grid">
      <div
        v-for="category in techStackAndSkills"
        :key="category.id"
        class="skills__category"
      >
        <div
          class="skills__card group"
          :class="{
            'w-full sm:w-auto': true,
            'sm:min-w-fit': category.skills.length <= 2,
            'sm:w-auto': category.skills.length > 2,
          }"
        >
          <div
            class="skills__icons"
            :class="{
              'sm:flex-nowrap': category.skills.length <= 4,
            }"
          >
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="skills__icon-wrapper"
            >
              <div class="skills__icon-container">
                <Image
                  :src="skill.icon"
                  :alt="skill.name"
                  class="skills__icon"
                  :show-skeleton="true"
                  skeleton-class="skills__icon-skeleton"
                />
              </div>
            </div>
          </div>
          <span class="skills__label">
            {{ category.label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .skills {
    @apply mx-auto max-w-4xl space-y-6;
  }

  .skills__grid {
    @apply flex flex-wrap justify-center gap-6;
  }

  .skills__category {
    @apply flex flex-col items-center;
  }

  .skills__card {
    @apply flex flex-col items-center rounded-xl bg-gray-50 p-4 transition-all duration-300 hover:scale-105 dark:bg-zinc-900/10;
  }

  .skills__icons {
    @apply flex flex-wrap items-center justify-center gap-3;
  }

  .skills__icon-wrapper {
    @apply relative flex h-8 w-8 items-center justify-center;
  }

  .skills__icon-container {
    @apply relative h-full w-full;
  }

  .skills__icon {
    @apply absolute inset-0 h-8 w-8 object-contain grayscale transition-all duration-500 group-hover:grayscale-0;
  }

  .skills__icon-skeleton {
    @apply absolute inset-0 z-10 h-8 w-8;
  }

  .skills__label {
    @apply mt-3 text-sm font-medium text-gray-600 dark:text-gray-400;
  }
</style>
