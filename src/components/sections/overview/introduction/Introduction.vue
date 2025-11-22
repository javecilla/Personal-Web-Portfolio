<script setup lang="ts"></script>

<template>
  <div class="introduction">
    <h1 class="introduction__title">
      Hi, I'm
      <span class="introduction__title-highlight">Jerome Avecilla</span>
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
  @apply relative space-y-4 sm:space-y-6 text-center p-3 xl:p-5 flex-grow;
}

.introduction__title {
  @apply text-3xl sm:text-4xl md:text-5xl dark:text-gray-400 text-gray-600 font-bold;
}

.introduction__title-highlight {
  @apply bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent;
}

.introduction__description {
  @apply dark:text-gray-400 text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed;
}

.introduction__subtitle {
  @apply text-2xl sm:text-3xl font-bold dark:text-white text-gray-600 block;
}

.introduction__subtitle-muted {
  @apply dark:text-gray-500 text-gray-400 font-bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
