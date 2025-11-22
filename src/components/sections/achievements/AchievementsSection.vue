<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { achievements } from '@/data/achievements'
import Button from '@/components/ui/Button.vue'
import AchievementDot from '@/components/sections/achievements/AchievementDot.vue'
import ImageSkeleton from '@/components/ImageSkeleton.vue'
import Image from '@/components/ui/Image.vue'
import { useSwipe } from '@/composables/useSwipe'

defineProps<{
  id?: string
}>()

const currentSlide = ref(0)
const isAnimating = ref(false)
const slideDirection = ref<'left' | 'right'>('right')
const imageLoaded = ref<{ [key: number]: boolean }>({})

const handleImageLoad = (index: number) => {
  imageLoaded.value[index] = true
}

/**
 * Handles slide navigation with animation
 */
const navigateSlide = (direction: 'prev' | 'next') => {
  if (isAnimating.value) return

  isAnimating.value = true
  slideDirection.value = direction === 'next' ? 'right' : 'left'

  if (direction === 'next') {
    currentSlide.value = (currentSlide.value + 1) % achievements.length
  } else {
    currentSlide.value =
      currentSlide.value === 0
        ? achievements.length - 1
        : currentSlide.value - 1
  }

  setTimeout(() => {
    isAnimating.value = false
  }, 1000)
}

const autoplayInterval = ref<number | undefined>()

onMounted(() => {
  autoplayInterval.value = window.setInterval(() => {
    navigateSlide('next')
  }, 60000)
})

onUnmounted(() => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
})

const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe({
  onSwipeLeft: () => navigateSlide('next'),
  onSwipeRight: () => navigateSlide('prev'),
  threshold: 50
})
</script>

<template>
  <section
    :id="id"
    class="achievements section-bg"
    aria-label="Achievements and Certificates"
  >
    <div class="achievements__container">
      <!-- Header -->
      <div class="achievements__header">
        <h4 class="achievements__title section-title">
          Achievements and Certificates
        </h4>
        <p class="achievements__description section-text">
          Explore my key accomplishments as a BSIT student, highlighting
          academic milestones, impactful projects, and my dedication to
          technology and innovation.
        </p>
      </div>

      <!-- Carousel Container with New Layout -->
      <div class="achievements__carousel-wrapper">
        <!-- Navigation Row -->
        <div class="achievements__navigation-row">
          <Button
            variant="icon"
            :ariaLabel="'View previous achievement'"
            class="achievements__nav-btn achievements__nav-btn--prev"
            @click="() => navigateSlide('prev')"
          >
            <ChevronLeft class="achievements__nav-icon" />
          </Button>

          <!-- Main Carousel -->
          <div
            class="achievements__slides"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
          >
            <template
              v-for="(achievement, index) in achievements"
              :key="achievement.id"
            >
              <div
                class="achievements__slide"
                :class="[
                  currentSlide === index
                    ? 'achievements__slide--active'
                    : index > currentSlide
                    ? 'achievements__slide--next'
                    : 'achievements__slide--prev'
                ]"
                :id="`achievement-panel-${index}`"
                role="tabpanel"
                :aria-labelledby="`achievement-tab-${index}`"
                :tabindex="currentSlide === index ? 0 : -1"
              >
                <!-- Grid Layout -->
                <div class="achievements__grid">
                  <!-- Image Section with Skeleton -->
                  <div class="achievements__image-container group">
                    <Transition
                      enter-active-class="transition-opacity duration-300"
                      enter-from-class="opacity-0"
                      enter-to-class="opacity-100"
                    >
                      <ImageSkeleton
                        v-if="!imageLoaded[index]"
                        rounded="rounded-xl"
                        className="absolute inset-0 w-full h-full"
                      />
                    </Transition>

                    <Image
                      :src="achievement.image"
                      :alt="achievement.title"
                      variant="achievement"
                      rounded="xl"
                      :class="[
                        'achievements__image',
                        { 'opacity-0': !imageLoaded[index] }
                      ]"
                      @load="() => handleImageLoad(index)"
                    >
                      <template #overlay>
                        <div class="achievements__image-overlay"></div>
                      </template>
                    </Image>
                  </div>

                  <!-- Content Section -->
                  <div class="achievements__content">
                    <div class="achievements__content-inner">
                      <div class="achievements__category">
                        <span class="achievements__category-text">
                          {{ achievement.category }}
                        </span>
                      </div>

                      <h6 class="achievements__content-title">
                        {{ achievement.title }}
                      </h6>

                      <small class="achievements__meta">
                        {{ achievement.date }} - {{ achievement.location }}
                      </small>

                      <p
                        class="achievements__description achievements__description--detail"
                      >
                        {{ achievement.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>

          <Button
            variant="icon"
            :ariaLabel="'View next achievement'"
            class="achievements__nav-btn achievements__nav-btn--next"
            @click="() => navigateSlide('next')"
          >
            <ChevronRight class="achievements__nav-icon" />
          </Button>
        </div>

        <!-- Navigation Dots Below -->
        <div
          class="achievements__dots"
          role="tablist"
          aria-label="Achievement slides"
        >
          <AchievementDot
            v-for="(_, index) in achievements"
            :key="index"
            :index="index"
            :is-active="currentSlide === index"
            :id="`achievement-tab-${index}`"
            :ariaControls="`achievement-panel-${index}`"
            :total-slides="achievements.length"
            @select="currentSlide = index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Main container */
.achievements {
  @apply relative overflow-hidden space-y-6 pt-5 pb-5 rounded-2xl 
         transition-all duration-500 ease-in-out min-h-[500px];
}

.achievements__container {
  @apply w-full h-full mx-auto px-4 sm:px-6 lg:px-8 pb-8;
}

/* Header styles */
.achievements__header {
  @apply text-center space-y-3 pb-5 sm:pb-8;
}

.achievements__title {
  @apply text-2xl sm:text-3xl font-bold;
}

.achievements__description {
  @apply text-sm sm:text-base max-w-3xl mx-auto;
}

/* Carousel container */
.achievements__carousel-wrapper {
  @apply flex flex-col gap-6;
}

.achievements__navigation-row {
  @apply relative flex items-center w-full;
}

.achievements__dots {
  @apply flex justify-center gap-2 mt-[30px];
}

/* Navigation buttons - consolidated styles */
.achievements__nav-btn {
  @apply hidden md:block p-2 rounded-full bg-white/10 backdrop-blur-sm 
         transition-all duration-300 border border-gray-200
         hover:bg-white/20 z-50;
}

.achievements__nav-btn:hover {
  @apply bg-white/20;
}

.dark .achievements__nav-btn {
  @apply border-gray-800;
}

.achievements__nav-btn--prev {
  @apply mr-4;
}

.achievements__nav-btn--next {
  @apply ml-4;
}

.achievements__nav-icon {
  @apply w-5 h-5 text-gray-600;
}

.dark .achievements__nav-icon {
  @apply text-gray-400;
}

/* Slides container */
.achievements__slides {
  @apply relative w-full min-h-[400px] md:min-h-[300px] touch-pan-y;
}

.achievements__slide {
  @apply absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform;
}

.achievements__slide--active {
  @apply translate-x-0 opacity-100;
}

.achievements__slide--next {
  @apply translate-x-full opacity-0;
}

.achievements__slide--prev {
  @apply -translate-x-full opacity-0;
}

/* Grid layout */
.achievements__grid {
  @apply grid grid-cols-1 md:grid-cols-2 h-full;
}

/* Image section */
.achievements__image-container {
  @apply relative mt-[30px] h-[225px] md:h-[300px] overflow-hidden rounded-xl;
}

.achievements__image {
  @apply object-cover w-full h-full transition-all duration-700 
         filter grayscale transform opacity-100;
}

.group:hover .achievements__image {
  @apply grayscale-0 scale-105;
}

.achievements__image-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent;
}

/* Content section */
.achievements__content {
  @apply relative flex flex-col p-6 sm:p-8 text-start h-full;
}

.achievements__content-inner {
  @apply space-y-2 -mt-1 sm:mt-0;
}

.achievements__category {
  @apply inline-block;
}

.achievements__category-text {
  @apply px-3 py-1.5
         text-sm font-medium
         border-2 border-blue-500/50 dark:border-blue-400/50
         text-blue-600 dark:text-blue-400
         rounded-full
         bg-blue-50/50 dark:bg-blue-900/10
         whitespace-nowrap;
}

.achievements__category-text:hover {
  @apply bg-gray-300;
}

.dark .achievements__category-text:hover {
  @apply bg-zinc-700;
}

.achievements__content-title {
  @apply text-lg md:text-xl font-bold text-gray-900;
}

.dark .achievements__content-title {
  @apply text-white;
}

.achievements__meta {
  @apply block text-sm text-gray-900;
}

.dark .achievements__meta {
  @apply text-white;
}

.achievements__description--detail {
  @apply hidden sm:block text-sm text-gray-600;
}

.dark .achievements__description--detail {
  @apply text-gray-400;
}

.transform {
  will-change: transform;
}
</style>
