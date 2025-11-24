<script setup lang="ts">
  import { ref } from 'vue'
  import ImageSkeleton from '@/components/ImageSkeleton.vue'
  import { techStackAndSkills } from '@/data/techStackAndSkills'

  const loadedIcons = ref(new Set<string>())
  const handleIconLoad = (skillName: string) => {
    loadedIcons.value.add(skillName)
  }

  const isIconLoaded = (skillName: string): boolean => {
    return loadedIcons.value.has(skillName)
  }
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
                <Transition
                  enter-active-class="transition-opacity duration-300"
                  enter-from-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="transition-opacity duration-300"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ImageSkeleton
                    v-show="!isIconLoaded(skill.name)"
                    rounded="rounded-md"
                    className="skills__icon-skeleton"
                  />
                </Transition>
                <img
                  :src="skill.icon"
                  :alt="skill.name"
                  :title="skill.name"
                  class="skills__icon"
                  :class="{ 'skills__icon--loaded': isIconLoaded(skill.name) }"
                  @load="handleIconLoad(skill.name)"
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
    @apply absolute inset-0 h-8 w-8 object-contain opacity-0 grayscale transition-all duration-300 group-hover:grayscale-0;
  }

  .skills__icon--loaded {
    @apply z-20 opacity-100;
  }

  .skills__icon-skeleton {
    @apply absolute inset-0 z-10 h-8 w-8;
  }

  .skills__label {
    @apply mt-3 text-sm font-medium text-gray-600 dark:text-gray-400;
  }
</style>
