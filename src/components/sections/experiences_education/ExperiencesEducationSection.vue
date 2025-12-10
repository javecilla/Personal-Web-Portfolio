<script setup lang="ts">
  import { ref } from 'vue'
  import type { Experience, Education } from '@/types/experience'
  import { experiences, education } from '@/data/experiences'

  defineProps<{
    id?: string
  }>()

  const experiencess = ref<Experience[]>([...experiences])
  const educations = ref<Education[]>([...education])
  const isExperienceHovered = ref(false)
  const isEducationHovered = ref(false)
</script>

<template>
  <section :id="id" class="experiences-education section-bg">
    <div class="experiences-education__header">
      <h4 class="section-title">Work Experiences and Educational Background</h4>
      <p class="section-text">
        My professional journey and academic achievements that have shaped my
        career path in technology and development.
      </p>
    </div>

    <div class="experiences-education__content relative min-h-[600px]">
      <!-- Mobile Titles -->
      <div class="mb-6 space-y-8 px-4 md:hidden">
        <h2 class="timeline-center-title">Work Experience</h2>
      </div>

      <!-- Frames -->
      <div class="frames-container">
        <!-- Experience Frame -->
        <div
          class="frame frame--left"
          @mouseenter="isExperienceHovered = true"
          @mouseleave="isExperienceHovered = false"
        >
          <div class="frame__dot frame__dot--lt"></div>
          <div class="frame__dot frame__dot--lb"></div>
          <div class="frame__content frame__content--left">
            <div
              v-for="experience in experiencess"
              :key="experience.company"
              class="frame__content--card experience__card"
            >
              <div class="card__content">
                <span class="card__content--date"
                  >{{ experience.startDate }} - {{ experience.endDate }}</span
                >
                <h3 class="card_content--title">{{ experience.position }}</h3>
                <span class="card_content--subtitle"
                  >{{ experience.company }} - {{ experience.location }}</span
                >
                <p class="card__content--description">
                  {{ experience.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="frame__blocker frame__blocker--left"></div>
        </div>

        <!-- Mobile Education Title -->
        <div class="mb-6 mt-12 space-y-8 px-4 md:hidden">
          <h2 class="timeline-center-title timeline-center-title__education">
            Education
          </h2>
        </div>

        <!-- Education Frame -->
        <div
          class="frame frame--right"
          @mouseenter="isEducationHovered = true"
          @mouseleave="isEducationHovered = false"
        >
          <div class="frame__dot frame__dot--rt"></div>
          <div class="frame__dot frame__dot--rb"></div>
          <div class="frame__content frame__content--right">
            <div
              v-for="education in educations"
              :key="education.school"
              class="frame__content--card education__card"
            >
              <div class="card__content">
                <span class="card__content--date"
                  >{{ education.startDate }} - {{ education.endDate }}</span
                >
                <h3 class="card_content--title">
                  {{ education.degree }}
                </h3>
                <span class="card_content--subtitle"
                  >{{ education.school }} - {{ education.campus }}</span
                >
                <p class="card__content--description">
                  {{ education.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="frame__blocker frame__blocker--right"></div>
        </div>
      </div>

      <!-- Desktop Timeline Line with Titles (hidden on mobile) -->
      <div class="timeline-center-content hidden md:block">
        <div class="timeline-vertical-line"></div>
        <div class="timeline-center-titles">
          <div class="timeline-title-wrapper experience">
            <h5 class="timeline-center-title">Work Experience</h5>
          </div>
          <div class="timeline-title-wrapper education">
            <h5 class="timeline-center-title">Education</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .experiences-education {
    @apply space-y-6 rounded-2xl p-6;
  }

  .experiences-education__header {
    @apply mb-8 flex flex-col items-center space-y-3 px-4;
  }

  .section-title {
    @apply text-start lg:text-center;
  }

  .section-text {
    @apply max-w-3xl text-start lg:text-center;
  }

  .frames-container {
    @apply relative flex h-full w-full flex-col justify-between gap-8 px-8 md:flex-row;
  }

  .frame {
    @apply relative w-full rounded-xl border-2 border-gray-300/80 bg-transparent transition-all duration-300 hover:border-blue-500/50 dark:border-zinc-800/90 md:w-auto;
  }
  .frame__dot {
    @apply absolute z-30 h-5 w-5 rounded-full border-2 border-white bg-gray-300/80 transition-all duration-500 ease-in-out dark:border-transparent dark:bg-zinc-800/100;
  }
  .frame__blocker {
    @apply bg-gray-50 dark:bg-[#060606];
  }
  .frame__content {
    @apply relative z-50 space-y-4 p-6;
  }

  .frame__content--card {
    @apply relative z-50 rounded-xl text-start;
  }

  .card__content {
    @apply relative z-50 space-y-2;
  }

  .card__content--date {
    @apply inline-flex items-center rounded-[5px] bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-zinc-800/30 dark:text-gray-300;
  }

  .card_content--title {
    @apply text-lg font-bold text-gray-900 dark:text-white md:text-xl;
  }

  .card_content--subtitle {
    @apply block text-sm font-semibold text-gray-600 dark:text-gray-300;
  }

  .card__content {
    @apply mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400;
  }

  /* Left Frame */
  .experience__card {
    @apply mb-6 w-full md:w-[450px];
  }
  .frame--left {
    @apply z-20 w-full translate-x-0 translate-y-0 md:h-[580px] md:w-[380px] md:translate-x-[70px] md:translate-y-[10px];
  }
  .frame__dot--lt {
    @apply left-[-10px] top-[40px];
  }

  .frame__dot--lb {
    @apply left-[-10px] top-[520px];
  }
  .frame__blocker--left {
    @apply absolute left-[-6px] top-[60px] z-10 h-[460px] w-[12px];
  }

  .frame__content--left {
    @apply ml-0 mt-[65px] space-y-6 md:-ml-[115px];
  }

  /* Right Frame */
  .frame__content--right {
    @apply mr-0 mt-[60px] space-y-8 md:mr-[50px];
  }
  .education__card {
    @apply mb-6 w-full md:w-[480px];
  }
  .frame--right {
    @apply z-20 w-full translate-x-0 translate-y-0 md:h-[530px] md:w-[100px] md:-translate-x-[350px] md:translate-y-[70px];
  }

  .frame__dot--rt {
    @apply right-[-10px] top-[40px];
  }

  .frame__dot--rb {
    @apply right-[-10px] top-[460px];
  }
  .frame__blocker--right {
    @apply absolute right-[-6px] top-[60px] z-10 h-[415px] w-[12px];
  }

  .timeline-center-content {
    @apply absolute left-1/2 top-0 h-full w-full -translate-x-1/2 transform;
  }

  .timeline-vertical-line {
    @apply absolute left-1/2 top-0 z-0 h-full w-[2px] -translate-x-1/2 transform bg-gray-300/20 transition-all duration-500 ease-in-out dark:bg-zinc-800/10;
  }

  .timeline-center-titles {
    @apply absolute left-1/2 top-1/2 flex h-full -translate-x-1/2 transform flex-col items-center;
  }

  .timeline-title-wrapper {
    @apply relative flex items-center justify-center;
  }

  .timeline-title-wrapper.experience {
    @apply translate-x-[-50px] translate-y-[10%] rotate-90 transform;
  }

  .timeline-title-wrapper.education {
    @apply -translate-y-[300%] translate-x-[50px] -rotate-90 transform;
  }

  .timeline-title-gradient {
    @apply text-gray-900 dark:text-[#F3F3F3];
  }

  .timeline-center-title {
    @apply whitespace-nowrap text-3xl font-bold uppercase tracking-[0.1em] text-gray-900 opacity-90 dark:text-[#F3F3F3] md:text-5xl;
  }

  /* Mobile timeline adjustments */
  @media (max-width: 768px) {
    /* Hide timeline elements on mobile */
    .frame__dot,
    .frame__blocker,
    .timeline-vertical-line {
      @apply hidden;
    }

    .timeline-center-title {
      @apply mb-4 text-2xl tracking-normal;
    }

    .frame__content {
      @apply pl-0;
    }

    .frame__content--left,
    .frame__content--right {
      @apply ml-0 mr-0 mt-0;
    }

    .frames-container {
      @apply gap-0 space-y-8 px-4;
    }

    .frame {
      @apply border-0;
    }

    .experiences-education__content {
      @apply min-h-0;
    }

    .card__content {
      @apply border-l-2 border-gray-300/80 pl-4 dark:border-zinc-800/90;
    }
  }
</style>
