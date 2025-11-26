<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import Prism from '@/utils/prism-config'
  import { ChevronDownIcon, ChevronUpIcon } from 'lucide-vue-next'

  interface Props {
    code: string
    language?: string
    showLineNumbers?: boolean
    collapsible?: boolean
    maxHeight?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    language: 'vue',
    showLineNumbers: true,
    collapsible: true,
    maxHeight: '500px',
  })

  const isExpanded = ref(false)
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
      const codeElements = document.querySelectorAll(
        'pre code.language-' + props.language
      )
      codeElements.forEach((element) => {
        if (element && element.textContent) {
          const cleanCode = formatCode(element.textContent)
          try {
            const highlighted = Prism.highlight(
              cleanCode,
              Prism.languages[props.language],
              props.language
            )
            element.innerHTML = highlighted
          } catch (error) {
            console.error('Highlighting error:', error)
          }
        }
      })
    })
  }

  function toggleExpansion() {
    isExpanded.value = !isExpanded.value

    if (!isExpanded.value && codeWrapperRef.value) {
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
  <div class="code-editor" ref="codeWrapperRef">
    <!-- Code Container -->
    <div
      class="code-editor__container"
      :class="{
        'code-editor__container--collapsed': !isExpanded && collapsible,
        'code-editor__container--expanded': isExpanded,
      }"
      :style="{ maxHeight: !isExpanded && collapsible ? maxHeight : 'none' }"
    >
      <div class="code-editor__wrapper">
        <div class="code-editor__mask">
          <!-- Line Numbers -->
          <div v-if="showLineNumbers" class="code-editor__gutter">
            <div
              v-for="n in getLineNumbers(code)"
              :key="n"
              class="code-editor__line-number"
            >
              {{ n }}
            </div>
          </div>

          <!-- Code Content -->
          <div
            class="code-editor__area"
            :class="{ 'code-editor__area--no-gutter': !showLineNumbers }"
          >
            <pre><code 
              :class="['code-editor__code', 'language-' + language]" 
              v-html="Prism.highlight(code, Prism.languages[language], language)"
            ></code></pre>
          </div>
        </div>
      </div>

      <!-- Gradient Overlay for Collapsed State -->
      <div v-if="!isExpanded && collapsible" class="code-editor__overlay"></div>
    </div>

    <!-- Show More/Less Button -->
    <div v-if="collapsible" class="code-editor__controls">
      <button @click="toggleExpansion" class="code-editor__button">
        <span class="code-editor__button-text">
          {{ isExpanded ? 'Show Less' : 'Show More' }}
        </span>
        <ChevronDownIcon v-if="!isExpanded" class="code-editor__button-icon" />
        <ChevronUpIcon v-else class="code-editor__button-icon" />
      </button>
    </div>
  </div>
</template>

<style scoped>
  /* Main Container */

  /* Code Container */
  .code-editor__container {
    @apply relative overflow-hidden bg-gray-200/50 text-start dark:bg-[#0C0C0C];
    max-width: 100%;
  }

  .code-editor__container--collapsed {
    @apply overflow-hidden;
  }

  .code-editor__container--expanded {
    @apply overflow-auto;
  }

  /* Wrapper and Mask */
  .code-editor__wrapper {
    @apply relative;
    min-height: 100%;
    background: transparent;
  }

  .code-editor__mask {
    @apply relative w-full overflow-hidden;
    max-width: 100%;
  }

  /* Line Numbers Gutter */
  .code-editor__gutter {
    @apply absolute bottom-0 left-0 top-0 z-10 w-14 select-none border-r border-gray-300 bg-gray-200/50 p-4 text-right dark:border-zinc-800/50 dark:bg-[#0C0C0C];
  }

  .code-editor__line-number {
    @apply text-xs leading-6 text-gray-400 dark:text-zinc-500;
  }

  /* Code Area */
  .code-editor__area {
    @apply ml-14 overflow-x-auto;
    width: calc(100% - 3.5rem);
    max-width: 100%;
  }

  .code-editor__area--no-gutter {
    @apply ml-0;
    width: 100%;
  }

  .code-editor__area pre {
    @apply h-full bg-gray-100/50 dark:bg-[#0C0C0C];
  }

  .code-editor__code {
    @apply block h-full whitespace-pre px-4 font-mono text-sm leading-6;
    font-family: 'JetBrains Mono', monospace !important;
    word-break: normal;
    overflow-wrap: normal;
  }

  /* Overlay and Controls */
  .code-editor__overlay {
    @apply absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-300/50 to-transparent dark:from-zinc-900/20;
  }

  .code-editor__controls {
    @apply mt-4 flex justify-center;
  }

  .code-editor__button {
    @apply flex items-center space-x-2 rounded-md border border-gray-200 bg-[#F4F4FB] px-4 py-2 transition-colors duration-200 hover:bg-[#F3F3F3] dark:border-transparent dark:bg-zinc-800/50 dark:hover:bg-zinc-800/70;
  }

  .code-editor__button-text {
    @apply text-sm text-gray-600 dark:text-gray-300;
  }

  .code-editor__button-icon {
    @apply h-4 w-4 text-gray-600 dark:text-gray-300;
  }

  /* Syntax Highlighting Tokens */
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

  /* Mobile Responsive */
  @media (max-width: 640px) {
    .code-editor {
      max-width: 75vw;
    }

    .code-editor__container {
      height: auto;
      max-height: calc(100vh - 300px);
      width: 100%;
      overflow-x: hidden;
    }

    .code-editor__container--expanded {
      max-height: none;
    }

    .code-editor__wrapper {
      @apply w-full;
    }

    .code-editor__mask {
      @apply w-full overflow-x-hidden;
    }

    .code-editor__area {
      @apply ml-10;
      width: calc(100% - 2.5rem);
      height: 100%;
      overflow-y: auto;
      overflow-x: auto;
    }

    .code-editor__area pre {
      @apply w-full;
      min-width: fit-content;
    }

    .code-editor__code {
      @apply whitespace-pre text-xs;
      width: max-content;
    }

    .code-editor__gutter {
      @apply w-10 p-3;
      height: 100%;
      position: absolute;
      z-index: 10;
    }

    .code-editor__overlay {
      display: none;
    }

    .code-editor__controls {
      @apply mt-2;
    }

    .code-editor__button {
      @apply px-3 py-1.5 text-xs;
    }

    .code-editor__button-icon {
      @apply h-3 w-3;
    }
  }
</style>
