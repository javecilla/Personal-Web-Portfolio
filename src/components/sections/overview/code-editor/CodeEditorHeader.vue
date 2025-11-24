<script setup lang="ts">
  interface Props {
    activeTab: string
  }

  interface Emits {
    (e: 'update:activeTab', value: string): void
  }

  const props = defineProps<Props>()
  const emit = defineEmits<Emits>()
  const tabs = ['Preview', 'Code']

  function setActiveTab(tab: string) {
    emit('update:activeTab', tab.toLowerCase())
  }
</script>

<template>
  <div class="editor-header">
    <!-- Window Controls (macOS style) -->
    <div class="editor-header__controls">
      <div class="editor-header__buttons">
        <div class="editor-header__button editor-header__button--close"></div>
        <div
          class="editor-header__button editor-header__button--minimize"
        ></div>
        <div
          class="editor-header__button editor-header__button--maximize"
        ></div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="editor-header__tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="setActiveTab(tab)"
        class="editor-header__tab"
        :class="{
          'editor-header__tab--active': props.activeTab === tab.toLowerCase(),
        }"
      >
        {{ tab }}
      </button>
    </div>
  </div>
</template>

<style scoped>
  /* Header container styles */
  .editor-header {
    @apply overflow-hidden rounded-[15px_15px_0_0] bg-[#F3F3F3] dark:bg-zinc-900/50;
  }

  /* Window controls styles */
  .editor-header__controls {
    @apply flex items-center justify-between border-b border-gray-200 p-3 dark:border-zinc-800 sm:px-4 sm:py-2 lg:p-[15px];
  }

  .editor-header__buttons {
    @apply flex space-x-2;
  }

  .editor-header__button {
    @apply h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3;
  }

  .editor-header__button--close {
    @apply bg-[#ff5f56];
  }

  .editor-header__button--minimize {
    @apply bg-[#ffbd2e];
  }

  .editor-header__button--maximize {
    @apply bg-[#27c93f];
  }

  /* Tab navigation styles */
  .editor-header__tabs {
    @apply flex border-b border-gray-200 dark:border-zinc-800/50;
  }

  .editor-header__tab {
    @apply relative flex-1 rounded-none bg-[#F3F3F3] px-4 py-2 text-xs tracking-wider text-gray-600 transition-all duration-200 hover:-translate-y-[1px] hover:scale-[1.02] hover:bg-[#F4F4FB] hover:text-gray-900 dark:bg-transparent dark:text-gray-400 dark:hover:bg-zinc-800/20 dark:hover:text-gray-200 sm:flex-none sm:px-8 sm:py-3 sm:text-sm;
  }

  .editor-header__tab--active {
    @apply bg-[#F4F4FB] font-medium text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 dark:bg-zinc-900/40 dark:text-white;
  }

  /* Tab hover animation */
  .editor-header__tab::after {
    content: '';
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  .editor-header__tab:hover::after {
    transform: scaleX(1.1);
  }
</style>
