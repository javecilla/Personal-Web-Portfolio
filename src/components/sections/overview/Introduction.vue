<script setup lang="ts"></script>

<template>
  <div class="introduction mb-[30px!important]">
    <h1 class="introduction__title">
      Hi, I'm
      <span class="gradient__text--orange-yellow">Jerome Avecilla</span>
    </h1>
    <p class="introduction__description" :style="{ contain: 'content' }">
      Building scalable web applications with Vue.js, TypeScript, and Laravel.
    </p>
    <h2 class="introduction__subtitle">Full-Stack Web Developer</h2>
    <p class="introduction__description">
      I specialize in building modern, high-performance web applications. With a
      focus on clean code and user-centric design, I transform complex
      requirements into seamless digital experiences that drive results.
    </p>
  </div>
</template>

<style scoped>
  .introduction {
    @apply relative flex-grow space-y-4 p-3 text-center sm:space-y-6 xl:p-5;
  }

  .introduction__title {
    @apply text-3xl font-bold text-gray-600 dark:text-gray-400 sm:text-4xl md:text-5xl;
  }

  .introduction__description {
    @apply mx-auto max-w-4xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base;
  }

  .introduction__subtitle {
    @apply block text-2xl font-bold text-gray-600 dark:text-white sm:text-3xl;
  }

  .introduction__subtitle-muted {
    @apply font-bold text-gray-400 dark:text-gray-500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
</style>
