<script setup lang="ts">
  import { ref } from 'vue'
  import { faqs } from '@/data/faqs'
  import { Plus, Minus } from 'lucide-vue-next'

  const openItemId = ref<number | null>(null)

  function toggleItem(id: number) {
    if (openItemId.value === id) {
      openItemId.value = null
    } else {
      openItemId.value = id
    }
  }

  function formatNumber(num: number): string {
    return num.toString().padStart(2, '0')
  }
</script>

<template>
  <section class="faqs-section section-bg">
    <div class="faqs-section__header">
      <h4 class="section-title">Let’s Clear Things Up</h4>
      <p class="section-text">
        Explore the most frequently asked questions about my work, approach, and
        what I can do for you.
      </p>
    </div>

    <div class="faqs-container">
      <div v-for="faq in faqs" :key="faq.id" class="faq-item">
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
          <div v-show="openItemId === faq.id" class="faq-item__answer">
            {{ faq.answer }}
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .faqs-section {
    @apply space-y-4 rounded-2xl p-6 sm:space-y-6 lg:p-6;
  }

  .faqs-section__header {
    @apply mb-6 flex flex-col items-center space-y-2 px-2 sm:mb-8 sm:space-y-3 sm:px-4;
  }

  .faqs-container {
    @apply mx-auto max-w-4xl space-y-3 sm:space-y-4;
  }

  .faq-item {
    @apply overflow-hidden rounded-lg border border-gray-100/50 bg-white/80 backdrop-blur-sm transition-all duration-300 dark:border-zinc-800/10 dark:bg-zinc-900/10;
  }

  .faq-item__header {
    @apply flex w-full items-center gap-4 border-none p-4 text-left outline-none ring-0 transition-all duration-200 hover:scale-[1.01] hover:border-transparent hover:bg-transparent focus:outline-none focus:ring-0 sm:p-5;
  }

  .faq-item__number {
    @apply flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-600 transition-colors duration-200 dark:bg-zinc-800 dark:text-gray-300 sm:h-10 sm:w-10 sm:text-base;
  }

  .faq-item__question {
    @apply flex-1 text-sm font-medium text-gray-900 dark:text-white sm:text-base;
  }

  .faq-item__icon {
    @apply flex-shrink-0 text-gray-400 transition-transform duration-200 dark:text-gray-500;
  }

  .faq-item__answer {
    @apply px-4 pb-4 text-start text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:px-5 sm:pb-5 sm:text-base;
  }

  /* Active states */
  .faq-item__header[aria-expanded='true'] {
    @apply bg-gray-50/50 dark:bg-zinc-800/10;
  }

  .faq-item__header[aria-expanded='true'] .faq-item__number {
    background-color: color-mix(
      in srgb,
      var(--color-orange-vibrant),
      transparent 90%
    );
    color: var(--color-orange-vibrant);
  }

  html.dark .faq-item__header[aria-expanded='true'] .faq-item__number {
    background-color: color-mix(
      in srgb,
      var(--color-orange-vibrant),
      transparent 80%
    );
    color: var(--color-orange-vibrant);
  }

  .faq-item[aria-expanded='true'] {
    border-color: color-mix(
      in srgb,
      var(--color-orange-vibrant),
      transparent 80%
    );
  }
</style>
