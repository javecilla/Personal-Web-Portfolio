<script setup lang="ts">
import { ref } from 'vue';
import { testimonials as testimonialsData } from '@/data/testimonials';
import ImageSkeleton from "@/components/ImageSkeleton.vue";
import BaseImage from '@/components/base/BaseImage.vue';

const testimonials = ref(testimonialsData);
const imageLoadedMap = ref<Record<number, boolean>>({});

const handleImageLoad = (testimonialId: number) => {
  imageLoadedMap.value[testimonialId] = true;
};
</script>

<template>
  <section class="testimonials-section section-bg">
    <div class="testimonials-section__header">
      <h2 class="section-title">What People Are Saying</h2>
      <p class="section-text">
        See what clients and colleagues say about working with me—genuine experiences, lasting impressions
      </p>
    </div>

    <div class="masonry-grid">
      <article
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="masonry-item"
      >
        <div class="testimonial-card">
          <div class="testimonial-card__header">
            <div class="testimonial-card__avatar">
              <div class="testimonial-card__avatar-container">
                <Transition
                  enter-active-class="transition-opacity duration-300"
                  enter-from-class="opacity-0"
                  enter-to-class="opacity-100"
                >
                  <ImageSkeleton
                    v-if="!imageLoadedMap[testimonial.id]"
                    rounded="rounded-full"
                    className="absolute inset-0 w-full h-full"
                  />
                </Transition>
                
                <BaseImage
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  variant="profile"
                  rounded="full"
                  :class="[
                    'testimonial-card__avatar-img',
                    { 'opacity-0': !imageLoadedMap[testimonial.id] }
                  ]"
                  @load="() => handleImageLoad(testimonial.id)"
                />
              </div>
            </div>

            <div class="testimonial-card__meta">
              <h3 class="testimonial-card__name">{{ testimonial.name }}</h3>
              <p class="testimonial-card__role">
                {{ testimonial.role }} 
              </p>
              <!-- at {{ testimonial.company }} -->
            </div>
          </div>

          <div class="testimonial-card__content">
            <svg 
              class="testimonial-card__quote-icon" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p class="testimonial-card__text">{{ testimonial.content }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  @apply space-y-4 sm:space-y-6 p-6 lg:p-6 rounded-2xl;
}

.testimonials-section__header {
  @apply space-y-2 sm:space-y-3 mb-6 sm:mb-8 px-2 sm:px-4 flex flex-col items-center;
}

/* Masonry Grid Layout */
.masonry-grid {
  columns: 1;
  column-gap: 1rem;
  width: 100%;
  padding: 0 0.5rem;
}

@screen sm {
  .masonry-grid {
    columns: 2;
    column-gap: 1.5rem;
    padding: 0 1rem;
  }
}

@screen lg {
  .masonry-grid {
    columns: 3;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
  @apply sm:mb-6;
}

.testimonial-card {
  @apply relative bg-white/80 dark:bg-zinc-900/10 
         border border-gray-100/50 dark:border-zinc-800/10
         rounded-lg sm:rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4
         backdrop-blur-sm
         hover:border-zinc-700/30 hover:shadow-md
         hover:-translate-y-0.5
         transition-all duration-300
         transform;
  height: fit-content;
  width: 100%;
  display: inline-block;
}

/* Card Styles */
.testimonial-card__header {
  @apply flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4;
}

.testimonial-card__avatar {
  @apply flex-shrink-0;
}

.testimonial-card__avatar-container {
  @apply relative w-10 h-10 sm:w-12 sm:h-12;
}

.testimonial-card__avatar-img {
  @apply absolute inset-0 w-full h-full
         rounded-full 
         border-2 border-gray-200 dark:border-zinc-700
         object-cover
         filter grayscale
         transition-all duration-300 ease-in-out;
}

.testimonial-card:hover .testimonial-card__avatar-img {
  @apply filter-none scale-110;
}

.testimonial-card__meta {
  @apply flex-1 min-w-0 text-left;
}

.testimonial-card__name {
  @apply text-gray-900 dark:text-white 
         font-semibold text-sm sm:text-base
         truncate;
}

.testimonial-card__role {
  @apply text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate mt-0.5;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  display: block;
}

.testimonial-card__content {
  @apply relative pt-3 sm:pt-4;
}

.testimonial-card__quote-icon {
  @apply absolute top-0 left-0 
         w-6 h-6 sm:w-8 sm:h-8
         text-gray-200 dark:text-zinc-800 
         transform -translate-y-1 sm:-translate-y-2
         opacity-50;
}

.testimonial-card__text {
  @apply relative text-start text-justify text-gray-600 dark:text-gray-300 
         text-xs sm:text-sm leading-relaxed 
         pl-4 sm:pl-6;
}
</style>