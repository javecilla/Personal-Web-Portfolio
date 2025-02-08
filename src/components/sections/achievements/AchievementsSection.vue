<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { achievements } from '@/data/achievements';

const currentSlide = ref(0);
const isAnimating = ref(false);
const slideDirection = ref<'left' | 'right'>('right');

const navigateSlide = (direction: 'prev' | 'next') => {
  if (isAnimating.value) return;
  
  isAnimating.value = true;
  slideDirection.value = direction === 'next' ? 'right' : 'left';
  
  if (direction === 'next') {
    currentSlide.value = (currentSlide.value + 1) % achievements.length;
  } else {
    currentSlide.value = currentSlide.value === 0 ? achievements.length - 1 : currentSlide.value - 1;
  }
  
  setTimeout(() => {
    isAnimating.value = false;
  }, 1000);
};

let autoplayInterval: number;

onMounted(() => {
  autoplayInterval = window.setInterval(() => {
    navigateSlide('next');
  }, 60000); // Changed from 5000 to 30000 (30 seconds)
});

onUnmounted(() => {
  clearInterval(autoplayInterval);
});
</script>

<template>
  <section class="relative overflow-hidden space-y-6 pt-5 pb-5 dark:bg-zinc-900/30 bg-gray-100 rounded-2xl transition-all duration-500 ease-in-out">
    <div class="max-w-auto mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-3 pb-5 sm:pb-8">
        <h2 class="text-2xl sm:text-1xl font-bold dark:text-white text-gray-600">
          Achievements & Certificates
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
          Explore my key accomplishments as a BSIT student, highlighting academic milestones, impactful projects, and my dedication to technology and innovation.
        </p>
      </div>

      <!-- Carousel Container with Navigation -->
      <div class="relative flex items-center">
        <!-- Previous Button - Hidden on Mobile -->
        <button
          @click="navigateSlide('prev')"
          class="hidden md:block p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 
            transition-all duration-300 border border-gray-200 dark:border-gray-800 mr-4"
        >
          <ChevronLeft class="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>

        <!-- Main Carousel Card -->
<div class="relative w-full">
  <!-- Adjusted overall card height for mobile -->
  <div class="relative pb-5 w-full min-h-[400px] md:h-[300px] rounded-2xl overflow-hidden bg-white dark:bg-zinc-900/30 bg-gray-100">
    <template v-for="(achievement, index) in achievements" :key="achievement.id">
      <div
        class="absolute inset-0 w-full transition-all duration-700 ease-in-out transform"
        :class="[
          currentSlide === index ? 'translate-x-0 opacity-100' : 
          index > currentSlide ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0'
        ]"
      >
        <!-- Remove h-full to allow auto height adjustment -->
        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Image Section -->
          <div class="relative h-[225px] md:h-full overflow-hidden group">
            <img
              :src="achievement.image"
              :alt="achievement.title"
              class="object-cover w-full h-full transition-all duration-700 
                     filter grayscale group-hover:grayscale-0 
                     transform group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          <!-- Content Section -->
          <div class="relative flex flex-col p-6 sm:p-8 text-start">
            <div class="space-y-2 -mt-1 sm:mt-0">
              <div class="inline-block">
                <span class="text-xs md:text-sm px-2 py-1.5 dark:bg-zinc-800 bg-gray-200 rounded-full 
                  dark:hover:bg-zinc-700 hover:bg-gray-300 transition-all duration-300 ease-in-out">
                  {{ achievement.category }}
                </span>
              </div>

              <h3 class="text-lg md:text-xl font-bold dark:text-white text-gray-900">
                {{ achievement.title }}
              </h3>

              <small class="block text-sm dark:text-white text-gray-900">
                {{ achievement.date }} - {{ achievement.location }}
              </small>

              <p class="hidden sm:block text-sm text-gray-600 dark:text-gray-400">
                {{ achievement.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</div>



        <!-- Next Button - Hidden on Mobile -->
        <button
          @click="navigateSlide('next')"
          class="hidden md:block p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 
            transition-all duration-300 border border-gray-200 dark:border-gray-800 ml-4"
        >
          <ChevronRight class="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      <!-- Navigation Dots - Adjusted margin for mobile -->
      <div class="flex justify-center mt-4 md:mt-6 space-x-2">
        <button
          v-for="(_, index) in achievements"
          :key="index"
          @click="currentSlide = index"
          class="w-2 h-2 rounded-full transition-all duration-300 focus:outline-none"
          :class="currentSlide === index ? 
            'bg-gradient-to-r from-blue-500 to-purple-500 scale-110' : 
            'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.transform {
  will-change: transform;
}
</style>
