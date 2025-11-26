<script setup lang="ts">
  import { ref } from 'vue'

  interface Props {
    tabs?: string[]
    defaultTab?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    tabs: () => ['Preview', 'Code'],
    defaultTab: 'preview',
  })

  defineEmits<{
    (e: 'tabChange', tabName: string): void
  }>()

  const activeTab = ref(props.defaultTab)

  function setActiveTab(tab: string) {
    activeTab.value = tab.toLowerCase()
  }
</script>

<template>
  <div class="apple-webview">
    <div class="apple-webview__container">
      <!-- Header with macOS Controls and Tabs -->
      <div class="apple-webview__header">
        <!-- macOS Window Controls -->
        <div class="apple-webview__controls">
          <div class="apple-webview__buttons">
            <div
              class="apple-webview__button apple-webview__button--close"
            ></div>
            <div
              class="apple-webview__button apple-webview__button--minimize"
            ></div>
            <div
              class="apple-webview__button apple-webview__button--maximize"
            ></div>
          </div>
        </div>

        <!-- Tab Navigation -->
        <div class="apple-webview__tabs">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="setActiveTab(tab)"
            class="apple-webview__tab"
            :class="{
              'apple-webview__tab--active': activeTab === tab.toLowerCase(),
            }"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Content Area with Named Slots -->
      <div class="apple-webview__content">
        <div class="apple-webview__content-inner">
          <!-- Preview Tab Content -->
          <div
            v-show="activeTab === 'preview'"
            class="apple-webview__panel"
            :class="{
              'apple-webview__panel--active': activeTab === 'preview',
            }"
          >
            <slot name="preview">
              <div class="apple-webview__empty">
                No preview content provided
              </div>
            </slot>
          </div>

          <!-- Code Tab Content -->
          <div
            v-show="activeTab === 'code'"
            class="apple-webview__panel"
            :class="{
              'apple-webview__panel--active': activeTab === 'code',
            }"
          >
            <slot name="code">
              <div class="apple-webview__empty">No code content provided</div>
            </slot>
          </div>

          <!-- Optional: Additional Custom Slots -->
          <div
            v-for="tab in tabs.filter((t) => !['Preview', 'Code'].includes(t))"
            :key="tab"
            v-show="activeTab === tab.toLowerCase()"
            class="apple-webview__panel"
            :class="{
              'apple-webview__panel--active': activeTab === tab.toLowerCase(),
            }"
          >
            <slot :name="tab.toLowerCase()">
              <div class="apple-webview__empty">No content for {{ tab }}</div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Main container */
  .apple-webview {
    @apply relative mx-auto w-full max-w-[1400px] px-4 sm:px-0;
  }

  .apple-webview__container {
    @apply overflow-hidden rounded-[15px] shadow-lg shadow-gray-200/50 dark:shadow-2xl dark:shadow-black/20;
    max-width: 100%;
  }

  /* Header styles */
  .apple-webview__header {
    @apply overflow-hidden rounded-t-[15px] bg-[#F3F3F3] dark:bg-zinc-900/50;
  }

  /* macOS Window Controls */
  .apple-webview__controls {
    @apply flex items-center justify-between border-b border-gray-200 p-3 dark:border-zinc-800 sm:px-4 sm:py-2 lg:p-[15px];
  }

  .apple-webview__buttons {
    @apply flex space-x-2;
  }

  .apple-webview__button {
    @apply h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3;
  }

  .apple-webview__button--close {
    @apply bg-[#ff5f56];
  }

  .apple-webview__button--minimize {
    @apply bg-[#ffbd2e];
  }

  .apple-webview__button--maximize {
    @apply bg-[#27c93f];
  }

  /* Tab Navigation */
  .apple-webview__tabs {
    @apply flex border-b border-gray-200 dark:border-zinc-800/50;
  }

  .apple-webview__tab {
    @apply relative flex-1 rounded-none bg-[#F3F3F3] px-4 py-2 text-xs tracking-wider text-gray-600 transition-all duration-200 hover:-translate-y-[1px] hover:scale-[1.02] hover:bg-[#F4F4FB] hover:text-gray-900 dark:bg-transparent dark:text-gray-400 dark:hover:bg-zinc-800/20 dark:hover:text-gray-200 sm:flex-none sm:px-8 sm:py-3 sm:text-sm;
  }

  .apple-webview__tab--active {
    @apply bg-[#F4F4FB] font-medium text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] dark:bg-zinc-900/40 dark:text-white;
  }

  .apple-webview__tab--active::after {
    content: '';
    /* background: linear-gradient(
      to right,
      var(--gradient-orange-yellow-start),
      var(--gradient-orange-yellow-end)
    ); */
    background-color: var(--color-orange-vibrant);
  }

  .apple-webview__tab::after {
    content: '';
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  .apple-webview__tab:hover::after {
    transform: scaleX(1.1);
  }

  /* Content Area */
  .apple-webview__content {
    @apply relative min-h-[400px];
  }

  .apple-webview__content-inner {
    @apply h-full;
  }

  .apple-webview__panel {
    @apply h-full w-full p-3 transition-opacity duration-300 dark:bg-zinc-900/10 sm:p-6;
  }

  .apple-webview__panel--active {
    @apply relative opacity-100;
  }

  .apple-webview__empty {
    @apply flex h-full items-center justify-center text-gray-500 dark:text-gray-400;
  }

  /* Mobile Responsive */
  @media (max-width: 640px) {
    .apple-webview {
      @apply px-0;
    }

    .apple-webview__content {
      min-height: auto;
      @apply w-full;
    }

    .apple-webview__panel {
      @apply p-2;
    }
  }
</style>
