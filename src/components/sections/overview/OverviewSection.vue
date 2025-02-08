<script setup lang="ts">
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import Prism from 'prismjs'
import { onMounted, ref, watch, onUnmounted } from 'vue'
import AboutMeSection from '@/components/sections/about/AboutMeSection.vue'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-vue-next'

const activeTab = ref('output')
const isCodeExpanded = ref(false)
const codeContainerRef = ref<HTMLElement | null>(null)
const codeWrapperRef = ref<HTMLElement | null>(null)
const aboutMeCode = ref(`<script setup lang="ts">
//code...
</\script>

<template>
  <section class="space-y-6 p-3 xl:p-2 rounded-2xl transition-all duration-500 ease-in-out">
    <div class="grid md:grid-cols-[1fr,300px] gap-4 sm:gap-6">
      <div class="md:hidden space-y-6  ">
        <div class="relative w-full h-[150px] sm:h-[300px]">
          <div class="absolute inset-0 rounded-2xl overflow-hidden">
            <div class="relative w-full h-full">
              <Transition
  enter-active-class="transition-opacity duration-300"
  enter-from-class="opacity-0"
  enter-to-class="opacity-100"
>
              <ImageSkeleton 
  v-if="!imageLoaded" 
  rounded="rounded-2xl"
  className="absolute inset-0 w-full h-full" 
/>
              </Transition>
              <img 
  :src="profileImage" 
  alt="Profile" 
  class="w-full h-full object-cover object-center rounded-2xl transition-transform transform hover:scale-105"
  :class="{ 'opacity-0': !mobileImageLoaded }"
  @load="handleMobileImageLoad"
/>
              <div class="absolute inset-0 rounded-2xl bg-black opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-6 p-3 xl:p-5 rounded-2xl flex flex-col justify-end transition-all duration-500 ease-in-out">
        <div class="relative space-y-4 sm:space-y-6 text-left p-3 xl:p-5 flex-grow">
          <span class="text-2xl sm:text-3xl font-bold dark:text-white text-gray-600 block mb-8">
            About Me
          </span>
          
          <div class="space-y-4 relative">
            <div class="absolute left-[18px] top-[15px] w-[2px] h-[calc(90%-40px)] xl:h-[calc(105%-40px)] bg-zinc-800/90"></div>
            <div class="relative pl-10 sm:pl-20">
              <div class="absolute left-[9px] top-1">
                <div class="w-5 h-5">
                  <div class="absolute inset-0 rounded-full bg-zinc-800/100"></div>
                </div>
              </div>
              <p class="dark:text-gray-400 text-gray-600 text-sm sm:text-base">
                Hello, I'm Jerome Avecilla—a 20-year-old BSIT student with a passion for web development. Since 2021, I've been honing my skills in HTML, CSS, JavaScript and now expanding my knowledge in modern frameworks like Vue.js, enabling me to create user-friendly digital experiences that boost engagement and streamline processes.
              </p>
            </div>

            <!-- Paragraph 2 -->
            <div class="relative pl-10 sm:pl-20">
              <div class="absolute left-[9px] top-[30%]">
                <div class="w-5 h-5">
                  <div class="absolute inset-0 rounded-full bg-zinc-800/100"></div>
                </div>
              </div>
              <p class="dark:text-gray-400 text-gray-600 text-sm sm:text-base">
                I am committed to continuous learning and thrive in collaborative environments where innovative ideas come to life. Whether working independently or as part of a team, I consistently strive to develop solutions that not only meet client needs but also deliver measurable results.
              </p>
            </div>

            <!-- Paragraph 3 -->
            <div class="relative pl-10 sm:pl-20">
              <div class="absolute left-[9px] top-[80%]">
                <div class="w-5 h-5">
                  <div class="absolute inset-0 rounded-full bg-zinc-800/100"></div>
                </div>
              </div>
              <p class="dark:text-gray-400 text-gray-600 text-sm sm:text-base">
                Currently, I work part-time as an IT Assistant at 
                <a 
  href="https://www.goldenminds.edu.ph/" 
  target="_blank" 
  class="dark:text-gray-400 text-gray-600 hover:opacity-80 transition-opacity"
>
                  Golden Minds Colleges
                </a>, where I design, develop, and implement cutting-edge web-based applications while optimizing existing systems to adapt to evolving business needs and industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Profile Image for desktop -->
      <div class="hidden md:block space-y-4 p-5">
        <div class="relative w-full h-full md:w-[250px] p-4">
          <div class="absolute inset-0 rounded-3xl overflow-hidden">
            <InteractiveImage
  :src="profileImage"
  alt="Profile"
  :is-loaded="desktopImageLoaded"
  @load="handleDesktopImageLoad"
/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*code...*/
</style>
`.replace(/\n\n+/g, '\n')) // Replace multiple newlines with single newlines

// Define Vue language immediately
Prism.languages.vue = Prism.languages.extend('markup', {})

function defineVueLanguage() {
  // Define Vue language components
  Object.assign(Prism.languages.vue, {
    'comment': /<!--[\s\S]*?-->/,
    'component': {
      pattern: /<\/?[\w:-]+\s*[^>]*>/i,
      inside: {
        'tag': {
          pattern: /^<\/?[\w:-]+/i,
          inside: {
            'punctuation': /^<\/?/,
            'namespace': /^[\w:-]+:/
          }
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
          inside: {
            'punctuation': [/^=/, {pattern: /^(\s*)["']|["']$/, lookbehind: true}]
          }
        },
        'punctuation': /\/?>/,
        'attr-name': /[\w:-]+/
      }
    },
    'script': {
      pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
      lookbehind: true,
      inside: Prism.languages.javascript,
      alias: 'language-javascript'
    },
    'style': {
      pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
      lookbehind: true,
      inside: Prism.languages.css,
      alias: 'language-css'
    },
    'template': {
      pattern: /(<template[\s\S]*?>)[\s\S]*?(?=<\/template>)/i,
      lookbehind: true,
      inside: Prism.languages.markup
    }
  })
}

// Call defineVueLanguage before any highlighting
defineVueLanguage()

// Modified line counting function
function getLineNumbers(code: string): number {
  // Split by newlines and count actual lines including empty ones
  return code.split('\n').length
}

// Modified format function to properly handle whitespace
function formatCode(code: string): string {
  return code
    .split('\n')
    .map(line => {
      // Keep empty lines and preserve indentation
      if (line.trim() === '') return ' '
      return line
    })
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
            Prism.languages.vue,
            'vue'
          )
          element.innerHTML = highlighted
        } catch (error) {
          console.error('Highlighting error:', error)
        }
      }
    })
  })
}

// Watch for changes in the code and rehighlight
watch(aboutMeCode, () => {
  setTimeout(highlightCode, 0)
})

// Initial highlighting
onMounted(() => {
  highlightCode()
})

const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window?.innerWidth < 640
}

// Setup window resize listener
onMounted(() => {
  checkMobile() // Initial check
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

function toggleCodeExpansion() {
  // Only allow expansion on desktop
  if (!isMobile.value) {
    isCodeExpanded.value = !isCodeExpanded.value
    
    if (!isCodeExpanded.value && codeWrapperRef.value) {
      codeWrapperRef.value.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}
</script>
  
<template>
  <section class="space-y-6">
    <div class="gap-4 sm:gap-6">
      <div class="overflow-hidden lg:-mt-[40px] p-3 xl:p-5 rounded-2xl flex flex-col justify-end transition-all duration-500 ease-in-out">
        <!-- Overview/Introduction -->
        <div class="relative space-y-4 sm:space-y-6 text-center p-3 xl:p-5 flex-grow">
          <h2 class="text-3xl sm:text-4xl md:text-5xl dark:text-gray-400 text-gray-600 font-bold">
            Hi, I'm <span class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Jerome Avecilla</span>
          </h2>
          <span class="text-2xl sm:text-3xl font-bold dark:text-white text-gray-600 block">
            <span class="dark:text-gray-500 text-gray-400">Aspiring</span> Full-Stack Web Developer
          </span>
          <p class="dark:text-gray-400 text-gray-600 text-sm sm:text-base max-w-4xl mx-auto overview">
            I build modern, responsive, robust web applications using Vue.js, TypeScript, Laravel and a range of innovative tools. I'm passionate about turning creative ideas into interactive, user-friendly experiences that not only look great but work seamlessly. Whether it's crafting intuitive interfaces or optimizing performance, I focus on delivering digital solutions that help businesses and users connect effectively.
          </p>
        </div>

        <!-- Code Editor Section -->
        <div class="max-w-[1400px] mx-auto w-full mt-8 relative px-4 sm:px-0">
          <div class="rounded-[15px_15px_15px_15px] shadow-2xl overflow-hidden">
            <!-- Editor Header with Tabs -->
            <div class="flex flex-col dark:bg-zinc-900/50">
              <!-- Window Controls -->
              <div class="flex items-center justify-between p-2 sm:px-4 sm:py-2 border-b border-zinc-800">
                <div class="flex space-x-2">
                  <div class="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56]"></div>
                  <div class="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div class="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f]"></div>
                </div>
              </div>
              
              <!-- Tabs (Mobile & Desktop) -->
              <div class="flex border-b border-zinc-800/50">
                <button 
                  v-for="tab in ['Output', 'Code']"
                  :key="tab"
                  @click="activeTab = tab.toLowerCase()"
                  class="flex-1 sm:flex-none px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm transition-all duration-200 relative rounded-none hover:scale-[1.02] hover:-translate-y-[1px]"
                  :class="[
                    activeTab === tab.toLowerCase()
                      ? 'text-white bg-zinc-900/40 font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-500'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-zinc-800/20'
                  ]"
                >
                  {{ tab }}
                </button>
              </div>
            </div>

            <!-- Content Area -->
            <div class="relative min-h-[400px] sm:min-h-[500px]">
              <div class="h-full">
                <div class="relative h-full">
                  <!-- Output Tab -->
                  <div 
                    v-show="activeTab === 'output'"
                    class="dark:bg-zinc-900/30 p-3 sm:p-6 w-full h-full transition-opacity duration-300"
                    :class="{ 
                      'opacity-100 relative': activeTab === 'output', 
                      'opacity-0 pointer-events-none absolute': activeTab !== 'output' 
                    }"
                  >
                    <AboutMeSection />
                  </div>

                  <!-- Code Tab - Modified for better mobile view -->
                  <div 
                    v-show="activeTab === 'code'"
                    ref="codeWrapperRef"
                    class="dark:bg-zinc-900/30 p-2 sm:p-4 w-full transition-opacity duration-300"
                    :class="{ 
                      'opacity-100 relative': activeTab === 'code', 
                      'opacity-0 pointer-events-none absolute': activeTab !== 'code',
                      'max-h-[70vh]': isMobile 
                    }"
                  >
                    <div 
                      ref="codeContainerRef"
                      class="overflow-hidden text-start relative"
                      :class="{ 
                        'max-h-[500px]': !isCodeExpanded && !isMobile,
                        'max-h-[70vh]': isMobile 
                      }"
                    >
                      <div class="code-content-wrapper relative">
                        <!-- Main container with overflow mask -->
                        <div class="code-container-mask">
                          <!-- Fixed gutter that acts as a boundary -->
                          <div class="line-numbers-container fixed-gutter">
                            <div 
                              v-for="n in getLineNumbers(aboutMeCode)" 
                              :key="n"
                              class="line-number"
                            >
                              {{ n }}
                            </div>
                          </div>

                          <!-- Scrollable content that stays behind gutter -->
                          <div class="code-content-area">
                            <pre><code class="language-vue code-content" v-html="Prism.highlight(aboutMeCode, Prism.languages.vue, 'vue')"></code></pre>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Gradient overlay when collapsed -->
                      <div 
                        v-if="!isCodeExpanded" 
                        class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-900/20 to-transparent"
                      ></div>
                    </div>
                    
                    <!-- Show More/Less Button - Only show on desktop -->
                    <div v-if="!isMobile" class="flex justify-center mt-4">
                      <button
                        @click="toggleCodeExpansion"
                        class="flex items-center space-x-2 px-4 py-2 rounded bg-zinc-800/50 hover:bg-zinc-800/70 transition-colors duration-200"
                      >
                        <span class="text-sm text-gray-300">
                          {{ isCodeExpanded ? 'Show Less' : 'Show More' }}
                        </span>
                        <ChevronDownIcon
                          v-if="!isCodeExpanded"
                          class="w-4 h-4 text-gray-300"
                        />
                        <ChevronUpIcon
                          v-else
                          class="w-4 h-4 text-gray-300"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<style scoped>
/* Base styles */
pre, code {
  margin: 0;
  padding: 0;
  background: transparent !important;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
}

/* Syntax highlighting colors */
:deep(.token.comment) { color: #6a9955; }
:deep(.token.tag) { color: #569cd6; }
:deep(.token.attr-name) { color: #9cdcfe; }
:deep(.token.attr-value) { color: #ce9178; }
:deep(.token.string) { color: #ce9178; }
:deep(.token.keyword) { color: #569cd6; }
:deep(.token.function) { color: #dcdcaa; }
:deep(.token.punctuation) { color: #808080; }
:deep(.token.script-content) { color: #d4d4d4; }
:deep(.token.expression) { color: #4ec9b0; }

/* Add some additional styles for the split view */
.grid {
  min-height: 300px;
}

:deep(pre) {
  height: 100%;
  margin: 0;
}

:deep(code) {
  height: 100%;
  font-family: 'JetBrains Mono', monospace !important;
}

/* Add gradient fade for collapsed state */
.overflow-y-hidden {
  position: relative;
}

/* Remove the previous gradient style and let the overlay div handle it */
.overflow-y-hidden::after {
  display: none;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 700ms;
}

/* Add styles for tabs */


/* Smooth tab transitions */
.transition-colors {
  transition-property: color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Update tab transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Enhanced token colors for better visibility */
:deep(.token.tag) { color: #569cd6 !important; }
:deep(.token.attr-name) { color: #9cdcfe !important; }
:deep(.token.attr-value) { color: #ce9178 !important; }
:deep(.token.string) { color: #ce9178 !important; }
:deep(.token.keyword) { color: #c586c0 !important; }
:deep(.token.function) { color: #dcdcaa !important; }
:deep(.token.comment) { color: #6a9955 !important; }
:deep(.token.punctuation) { color: #808080 !important; }
:deep(.token.script) { color: #d4d4d4 !important; }
:deep(.token.template) { color: #d4d4d4 !important; }

/* Your existing styles plus these syntax highlighting colors */
:deep(.token.tag) { color: #569cd6; }
:deep(.token.attr-name) { color: #9cdcfe; }
:deep(.token.attr-value) { color: #ce9178; }
:deep(.token.string) { color: #ce9178; }
:deep(.token.keyword) { color: #c586c0; }
:deep(.token.function) { color: #dcdcaa; }
:deep(.token.comment) { color: #6a9955; }
:deep(.token.punctuation) { color: #808080; }
:deep(.token.typescript) { color: #9cdcfe; }
:deep(.token.vue-directive) { color: #c586c0; }

/* Keep your other existing styles */

/* Add these new styles */
.overflow-hidden {
  transition: max-height 0.5s ease-in-out;
}

pre {
  margin: 0;
  padding: 1em;
}

/* Update existing token colors */
:deep(.token) {
  transition: color 0.3s ease;
}

/* Add these new styles for line numbers */
.code-container {
  position: relative;
  font-family: 'JetBrains Mono', monospace;
}

.line-numbers-container {
  min-width: 5rem;
  background: rgba(0, 0, 0, 0.2);
}

.line-number {
  line-height: 1.5;
  font-size: 12px;
  color: #636363;
  user-select: none;
}

:deep(pre) {
  margin: 0;
  padding: 1em;
  counter-reset: line;
}

:deep(code) {
  display: block;
  line-height: 1.5;
  font-family: 'JetBrains Mono', monospace !important;
}

/* Ensure line numbers stay fixed when scrolling horizontally */
.code-container {
  display: flex;
}

pre {
  flex: 1;
  overflow-x: auto;
}

/* Adjust the gradient overlay to account for line numbers */
.code-container > div:last-child {
  left: 3.5rem;
}

/* Updated and new styles for code formatting */
.code-content-wrapper {
  display: flex;
  position: relative;
  min-height: 100%;
  background: transparent;
}

.fixed-gutter {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1em 0.5em;
  text-align: right;
  user-select: none;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.line-number {
  font-size: 12px;
  line-height: 1.5;
  color: #636363;
  padding-right: 1em;
  display: block;
  height: 1.5em;
}

.code-scroll-container {
  flex: 1;
  overflow-x: auto;
  margin-left: 3.5rem; /* Match gutter width */
}

.code-content {
  padding: 1em 1em 1em 1.5em !important;
  tab-size: 2;
  -moz-tab-size: 2;
  white-space: pre !important;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  min-height: 100%;
}

/* Ensure proper spacing for each line */
:deep(.token) {
  display: inline-block;
  min-height: 1.5em;
}

/* Adjust the gradient overlay position */
.code-container > div:last-child {
  left: 3.5rem;
  pointer-events: none;
}

/* Make sure code container preserves whitespace */
pre, code {
  white-space: pre !important;
}

/* Enhance scrollbar styling */
.code-scroll-container::-webkit-scrollbar {
  height: 8px;
}

.code-scroll-container::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

.code-scroll-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.code-scroll-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Add these new styles for empty lines and line number alignment */
.empty-line {
  display: block;
  height: 1.5em;
  line-height: 1.5;
}

/* Add these new styles for tab transitions */
.relative > div > div {
  transform-origin: top;
  transition: opacity 0.3s ease;
}

.pointer-events-none {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

/* Ensure container heights */
.min-h-[500px] {
  min-height: 500px;
}

/* Add these new styles for tab design */
button {
  letter-spacing: 0.025em;
  border-radius: 0 !important;
}

button:after {
  content: '';
  transform-origin: center;
  transition: transform 0.2s ease;
}

button:hover:after {
  transform: scaleX(1.1);
}

.border-b-2 {
  border-bottom-width: 2px;
}

/* Remove any existing tab transition styles and update with these */
.transition-all {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Add responsive styles */
@media (max-width: 640px) {
  .code-content {
    font-size: 12px;
    padding: 0.75em !important;
  }

  .line-number {
    font-size: 10px;
  }

  .fixed-gutter {
    width: 2.5rem;
    padding: 0.75em 0.25em;
  }

  .code-scroll-container {
    margin-left: 2.5rem;
  }
}

/* Update code container styles */
.code-container-outer {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.code-scroll-wrapper {
  margin-left: 3.5rem; /* Match gutter width */
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.code-scroll-container {
  display: inline-block;
  min-width: 100%;
}

.fixed-gutter {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1em 0.5em;
  z-index: 10;
}

/* Update responsive styles */
@media (max-width: 640px) {
  .code-scroll-wrapper {
    margin-left: 2.5rem;
  }
  
  .fixed-gutter {
    width: 2.5rem;
  }
}

/* Updated code container styles */
.code-container-mask {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.code-content-area {
  margin-left: 3.5rem;
  overflow-x: auto;
  position: relative;
  width: calc(100% - 3.5rem);
}

.fixed-gutter {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1em 0.5em;
  z-index: 2;
}

pre {
  margin: 0;
  padding: 1em;
  min-width: 100%;
  width: fit-content;
}

/* Update responsive styles */
@media (max-width: 640px) {
  .code-content-area {
    margin-left: 2.5rem;
    width: calc(100% - 2.5rem);
  }
  
  .fixed-gutter {
    width: 2.5rem;
  }
}

/* Add these new mobile-specific styles */
@media (max-width: 640px) {
  .code-container-mask {
    height: 100%;
    max-height: calc(100vh - 14rem); /* Account for header and padding */
  }

  .code-content-area {
    height: 100%;
    overflow-y: auto;
  }

  pre {
    height: auto;
  }

  /* Adjust scrollbar styling for mobile */
  .code-content-area::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  .code-content-area::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  .code-content-area::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }
}
</style>