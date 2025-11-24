<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import Prism from '@/utils/prism-config'
  import { ChevronDownIcon, ChevronUpIcon } from 'lucide-vue-next'

  interface Props {
    code: string
    language?: string
    isMobile: boolean
  }

  const props = defineProps<Props>()
  const isCodeExpanded = ref(false)
  const codeWrapperRef = ref<HTMLElement | null>(null)

  function getLineNumbers(code: string): number {
    return code.split('\n').length
  }

  function formatCode(code: string): string {
    return code
      .split('\n')
      .map((line) => (line.trim() === '' ? ' ' : line))
      .join('\n')
  }

  function highlightCode() {
    requestAnimationFrame(() => {
      const codeElements = document.querySelectorAll('pre code.language-vue')
      codeElements.forEach((element) => {
        if (element && element.textContent) {
          const cleanCode = formatCode(element.textContent)
          try {
            const highlighted = Prism.highlight(
              cleanCode,
              Prism.languages[props.language || 'vue'],
              props.language || 'vue'
            )
            element.innerHTML = highlighted
          } catch (error) {
            console.error('Highlighting error:', error)
          }
        }
      })
    })
  }

  function toggleCodeExpansion() {
    isCodeExpanded.value = !isCodeExpanded.value

    if (!isCodeExpanded.value && codeWrapperRef.value) {
      codeWrapperRef.value.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  watch(() => props.code, highlightCode)

  onMounted(highlightCode)
</script>

<template>
  <div class="code-content" ref="codeWrapperRef">
    <!-- Code Container -->
    <div
      class="code-content__container"
      :class="{
        'code-content__container--collapsed': !isCodeExpanded,
        'code-content__container--mobile': isMobile,
        'code-content__container--expanded': isCodeExpanded,
      }"
    >
      <div class="code-content__wrapper">
        <div class="code-content__mask">
          <!-- Line Numbers -->
          <div class="code-content__gutter">
            <div
              v-for="n in getLineNumbers(code)"
              :key="n"
              class="code-content__line-number"
            >
              {{ n }}
            </div>
          </div>

          <!-- Code Content Area -->
          <div class="code-content__area">
            <pre><code 
							:class="['code-content__code', 'language-' + (language || 'vue')]" 
							v-html="Prism.highlight(code, Prism.languages[language || 'vue'], language || 'vue')"
						></code></pre>
          </div>
        </div>
      </div>

      <!-- Gradient Overlay for Collapsed State -->
      <div v-if="!isCodeExpanded" class="code-content__overlay"></div>
    </div>

    <!-- Show More/Less Button -->
    <div class="code-content__controls">
      <button @click="toggleCodeExpansion" class="code-content__button">
        <span class="code-content__button-text">
          {{ isCodeExpanded ? 'Show Less' : 'Show More' }}
        </span>
        <ChevronDownIcon
          v-if="!isCodeExpanded"
          class="code-content__button-icon"
        />
        <ChevronUpIcon v-else class="code-content__button-icon" />
      </button>
    </div>
  </div>
</template>

<style scoped>
  /* Main container styles */
  .code-content {
    @apply w-full bg-gray-50 p-2 transition-opacity duration-300 dark:bg-zinc-900/10 sm:p-4;
  }

  /* Code container styles */
  .code-content__container {
    @apply relative overflow-hidden bg-gray-200/50 text-start dark:bg-[#0C0C0C];
  }

  .code-content__container--collapsed {
    @apply max-h-[500px] sm:max-h-[500px];
  }

  .code-content__container--mobile {
    @apply max-h-[400px] overflow-y-auto;
  }

  .code-content__container--mobile.code-content__container--expanded {
    max-height: none;
  }

  /* Code wrapper and mask styles */
  .code-content__wrapper {
    @apply relative;
    min-height: 100%;
    background: transparent;
  }

  .code-content__mask {
    @apply relative w-full overflow-hidden;
  }

  /* Line numbers gutter styles */
  .code-content__gutter {
    @apply absolute bottom-0 left-0 top-0 z-10 w-14 select-none border-r border-gray-300 bg-gray-200/50 p-4 text-right dark:border-zinc-800/50 dark:bg-[#0C0C0C];
  }

  .code-content__line-number {
    @apply text-xs leading-6 text-gray-400 dark:text-zinc-500;
  }

  /* Code area styles */
  .code-content__area {
    @apply ml-14 overflow-x-auto;
    width: calc(100% - 3.5rem);
  }

  .code-content__area pre {
    @apply h-full bg-gray-100/50 dark:bg-[#0C0C0C];
  }

  .code-content__code {
    @apply block h-full whitespace-pre px-4 font-mono text-sm leading-6;
    font-family: 'JetBrains Mono', monospace !important;
  }

  /* Overlay and controls styles */
  .code-content__overlay {
    @apply absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-300/50 to-transparent dark:from-zinc-900/20;
  }

  .code-content__controls {
    @apply mt-4 flex justify-center;
  }

  .code-content__button {
    @apply flex items-center space-x-2 rounded-md border border-gray-200 bg-[#F4F4FB] px-4 py-2 transition-colors duration-200 hover:bg-[#F3F3F3] dark:border-transparent dark:bg-zinc-800/50 dark:hover:bg-zinc-800/70;
  }

  .code-content__button-text {
    @apply text-sm text-gray-600 dark:text-gray-300;
  }

  .code-content__button-icon {
    @apply h-4 w-4 text-gray-600 dark:text-gray-300;
  }

  /* Token colors for syntax highlighting */
  :deep(.token.comment) {
    @apply text-[#6a9955];
  }
  :deep(.token.tag) {
    @apply text-[#569cd6];
  }
  :deep(.token.attr-name) {
    @apply text-[#9cdcfe];
  }
  :deep(.token.attr-value) {
    @apply text-[#ce9178];
  }
  :deep(.token.string) {
    @apply text-[#ce9178];
  }
  :deep(.token.keyword) {
    @apply text-[#c586c0];
  }
  :deep(.token.function) {
    @apply text-[#dcdcaa];
  }
  :deep(.token.punctuation) {
    @apply text-[#808080];
  }

  /* Mobile responsive styles */
  @media (max-width: 640px) {
    .code-content {
      @apply w-full p-0;
      max-width: 80vw;
    }

    .code-content__container {
      height: auto;
      max-height: calc(100vh - 300px);
      width: 100%;
      overflow-x: hidden;
    }

    .code-content__container.code-content__container--expanded {
      max-height: none;
    }

    .code-content__wrapper {
      @apply w-full;
    }

    .code-content__mask {
      @apply w-full overflow-x-hidden;
    }

    .code-content__area {
      @apply ml-10;
      width: calc(100% - 2.5rem);
      height: 100%;
      overflow-y: auto;
      overflow-x: auto;
    }

    .code-content__area pre {
      @apply w-full;
      min-width: fit-content;
    }

    .code-content__code {
      @apply whitespace-pre text-xs;
      width: max-content;
    }

    .code-content__gutter {
      @apply w-10 p-3;
      height: 100%;
      position: absolute;
      z-index: 10;
    }

    .code-content__overlay {
      display: none;
    }

    .code-content__controls {
      @apply mt-2;
    }

    .code-content__button {
      @apply px-3 py-1.5 text-xs;
    }

    .code-content__button-icon {
      @apply h-3 w-3;
    }
  }
</style>
