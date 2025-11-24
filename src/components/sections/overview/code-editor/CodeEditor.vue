<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import CodeEditorHeader from '@/components/sections/overview/code-editor/CodeEditorHeader.vue'
  import CodeContent from '@/components/sections/overview/code-editor/CodeContent.vue'
  import AboutMeSection from '@/components/sections/overview/about-me/AboutMe.vue'

  interface Props {
    code: string
  }

  defineProps<Props>()

  const activeTab = ref('preview')
  const isMobile = ref(false)

  function checkMobile() {
    isMobile.value = window?.innerWidth < 640
  }

  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })
</script>

<template>
  <div class="code-editor">
    <div class="code-editor__container">
      <!-- Editor Header with Tabs -->
      <CodeEditorHeader v-model:activeTab="activeTab" />

      <!-- Content Area -->
      <div class="code-editor__content">
        <div class="code-editor__content-inner">
          <div class="code-editor__tabs">
            <!-- Output Preview Tab -->
            <div
              v-show="activeTab === 'preview'"
              class="code-editor__tab"
              :class="{
                'code-editor__tab--active': activeTab === 'preview',
                'code-editor__tab--inactive': activeTab !== 'preview',
              }"
            >
              <AboutMeSection />
            </div>

            <!-- Code View Tab -->
            <CodeContent
              v-show="activeTab === 'code'"
              :code="code"
              :is-mobile="isMobile"
              language="vue"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Main container styles */
  .code-editor {
    @apply relative mx-auto mt-8 w-full max-w-[1400px] px-4 sm:px-0;
  }

  .code-editor__container {
    @apply overflow-hidden rounded-[15px_15px_15px_15px] shadow-lg shadow-gray-200/50 dark:shadow-2xl dark:shadow-black/20;
  }

  /* Content area styles */
  .code-editor__content {
    @apply relative min-h-[400px];
  }

  .code-editor__content-inner {
    @apply h-full;
  }

  .code-editor__tabs {
    @apply relative h-full;
  }

  /* Tab styles */
  .code-editor__tab {
    @apply h-full w-full p-3 transition-opacity duration-300 dark:bg-zinc-900/10 sm:p-6;
  }

  .code-editor__tab--active {
    @apply relative opacity-100;
  }

  .code-editor__tab--inactive {
    @apply pointer-events-none absolute opacity-0;
  }

  /* Mobile responsive styles */
  @media (max-width: 640px) {
    .code-editor {
      @apply px-0;
    }

    .code-editor__content {
      min-height: auto;
      @apply mx-auto w-full;
    }

    .code-editor__tab {
      @apply p-0;
    }
  }
</style>
