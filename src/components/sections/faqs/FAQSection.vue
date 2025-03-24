<script setup lang="ts">
import { ref } from 'vue';
import { faqs } from '@/data/faqs';
import { Plus, Minus } from 'lucide-vue-next';

const openItemId = ref<number | null>(null);

function toggleItem(id: number) {
  if (openItemId.value === id) {
    openItemId.value = null;
  } else {
    openItemId.value = id;
  }
}

function formatNumber(num: number): string {
  return num.toString().padStart(2, '0');
}
</script>

<template>
  <section class="faqs-section section-bg">
    <div class="faqs-section__header">
      <h2 class="section-title">Let’s Clear Things Up</h2>
      <p class="section-text">
        Explore the most frequently asked questions about my work, approach, and what I can do for you.
      </p>
    </div>

    <div class="faqs-container">
      <div
        v-for="faq in faqs"
        :key="faq.id"
        class="faq-item"
      >
        <button
          class="faq-item__header"
          @click="toggleItem(faq.id)"
          :aria-expanded="openItemId === faq.id"
        >
          <div class="faq-item__number">
            {{ formatNumber(faq.id) }}
          </div>
          <h3 class="faq-item__question">
            {{ faq.question }}
          </h3>
          <div class="faq-item__icon">
            <Plus v-if="openItemId !== faq.id" :size="20" />
            <Minus v-else :size="20" />
          </div>
        </button>

        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div 
            v-show="openItemId === faq.id"
            class="faq-item__answer"
          >
            {{ faq.answer }}
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faqs-section {
  @apply space-y-4 sm:space-y-6 p-6 lg:p-6 rounded-2xl;
}

.faqs-section__header {
  @apply space-y-2 sm:space-y-3 mb-6 sm:mb-8 px-2 sm:px-4 flex flex-col items-center;
}

.faqs-container {
  @apply max-w-4xl mx-auto space-y-3 sm:space-y-4;
}

.faq-item {
  @apply bg-white/80 dark:bg-zinc-900/10 
         border border-gray-100/50 dark:border-zinc-800/10
         rounded-lg overflow-hidden
         backdrop-blur-sm
         transition-all duration-300;
}

.faq-item__header {
  @apply w-full flex items-center gap-4 p-4 sm:p-5
         text-left
         hover:scale-[1.01]
         transition-all duration-200
         border-none outline-none ring-0
         focus:outline-none focus:ring-0
         hover:border-transparent hover:bg-transparent;
}

.faq-item__number {
  @apply flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10
         flex items-center justify-center
         rounded-full
         bg-gray-100 dark:bg-zinc-800
         text-gray-600 dark:text-gray-300
         text-sm sm:text-base font-medium
         transition-colors duration-200;
}

.faq-item__question {
  @apply flex-1 text-sm sm:text-base
         font-medium
         text-gray-900 dark:text-white;
}

.faq-item__icon {
  @apply flex-shrink-0
         text-gray-400 dark:text-gray-500
         transition-transform duration-200;
}

.faq-item__answer {
  @apply px-4 pb-4 sm:px-5 sm:pb-5
         text-sm sm:text-base
         text-start
         text-gray-600 dark:text-gray-300
         leading-relaxed;
}

/* Active states */
.faq-item__header[aria-expanded="true"] {
  @apply bg-gray-50/50 dark:bg-zinc-800/10;
}

.faq-item__header[aria-expanded="true"] .faq-item__number {
  @apply bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400;
}

.faq-item[aria-expanded="true"] {
  @apply border-blue-500/20;
}
</style>