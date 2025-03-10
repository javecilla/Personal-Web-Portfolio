<script setup lang="ts">
import { onMounted, onUnmounted, watch, computed } from 'vue';
import { XIcon } from 'lucide-vue-next';
import type { Project } from '../../../types/project';
import { useMarkdown } from '@/composables/useMarkdown';

const props = defineProps<{
  show: boolean;
  project: Project | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const { parseMarkdown } = useMarkdown();

const formattedDescription = computed(() => {
  if (!props.project) return '';
  return parseMarkdown(props.project.description);
});

// Handle escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close');
};

// Lock body scroll when modal is open
watch(() => props.show, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = '';
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="show && project" class="modal-overlay" @click="emit('close')">
      <!-- Close button wrapper repositioned -->
      <div class="modal-wrapper">
        <div class="modal-close-wrapper">
          <button class="modal-close" @click="emit('close')" aria-label="Close modal">
            <XIcon class="w-6 h-6" />
          </button>
        </div>

        <div class="modal-container" @click.stop>
          <!-- Content -->
          <div class="modal-content">
            <!-- Image -->
            <div class="modal-image-container">
              <img :src="project.image" :alt="project.title" class="modal-image">
            </div>

            <!-- Details -->
            <div class="modal-details">
              <!-- Updated header layout -->
              <div class="modal-header">
                <h3 class="modal-title">{{ project.title }}</h3>
                <span class="modal-category">
                  {{ project.category.charAt(0).toLocaleUpperCase() + project.category.slice(1) }}
                </span>
              </div>
              
              <!-- Update description section to use v-html -->
              <div class="modal-description" v-html="formattedDescription"></div>

              <!-- Technologies with auto-width -->
              <div class="modal-tech-stack">
                <h4 class="modal-subtitle">Technologies Used</h4>
                <div class="modal-tech-icons">
                  <div v-for="tech in project.technologies" 
                       :key="tech.name" 
                       class="modal-tech-item"
                  >
                    <img :src="tech.icon" :alt="tech.name" :title="tech.name" class="modal-tech-icon">
                    <span class="modal-tech-name">{{ tech.name }}</span>
                  </div>
                </div>
              </div>

              <!-- Links -->
              <div class="modal-actions">
                <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="modal-button modal-button--primary">
                  View Live Demo
                </a>
                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="modal-button modal-button--secondary">
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  @apply fixed inset-0 z-50 
         bg-black/50 backdrop-blur-sm
         flex items-center justify-center
         p-5;
}

.modal-wrapper {
  @apply relative w-full max-w-4xl mx-auto;
}

.modal-container {
  @apply relative w-full
         bg-white dark:bg-zinc-900
         rounded-2xl shadow-xl
         max-h-[90vh] overflow-y-auto;
}

.modal-close-wrapper {
  @apply absolute -right-3 -top-3 z-50
         sm:-right-14 sm:-top-1;
}

.modal-close {
  @apply p-2 rounded-full
         bg-white/80 dark:bg-zinc-900/80
         text-gray-600 dark:text-gray-300
         border border-gray-200 dark:border-zinc-700/50
         backdrop-blur-sm
         hover:bg-gray-50 dark:hover:bg-zinc-800
         transition-all duration-300
         hover:scale-110
         shadow-lg;
}

.modal-content {
  @apply p-6;
}

.modal-image-container {
  @apply w-full h-[300px] md:h-[500px]
         rounded-xl overflow-hidden
         mb-6;
}

.modal-image {
  @apply w-full h-full
         object-cover
         transition-transform duration-300
         hover:scale-105;
}

.modal-details {
  @apply space-y-6 text-start;
}

/* Updated header layout */
.modal-header {
  @apply flex items-center justify-between gap-4;
}

.modal-title {
  @apply text-2xl md:text-3xl font-bold
         text-gray-900 dark:text-white
         flex-1;
}

.modal-category {
  @apply px-3 py-1.5
         text-sm font-medium
         border-2 border-blue-500/50 dark:border-blue-400/50
         text-blue-600 dark:text-blue-400
         rounded-full
         bg-blue-50/50 dark:bg-blue-900/10
         whitespace-nowrap;
}

/* Update markdown styles */
.modal-description {
  @apply prose prose-sm md:prose-base dark:prose-invert max-w-none;
}

.modal-description :deep(h1) {
  @apply text-2xl font-bold mb-4 mt-6;
}

.modal-description :deep(h2) {
  @apply text-xl font-bold mb-3 mt-5;
}

.modal-description :deep(h3) {
  @apply text-lg font-bold mb-2 mt-4;
}

.modal-description :deep(ul) {
  @apply list-disc pl-5 mb-4 space-y-2;
}

.modal-description :deep(li) {
  @apply text-gray-600 dark:text-gray-300;
}

.modal-description :deep(p) {
  @apply mb-4;
}

.modal-description :deep(strong) {
  @apply font-semibold;
}

.modal-tech-stack {
  @apply space-y-4;
}

.modal-subtitle {
  @apply text-lg font-semibold
         text-gray-900 dark:text-white;
}

/* Updated tech stack grid */
.modal-tech-icons {
  @apply flex flex-wrap gap-3;
}

.modal-tech-item {
  @apply inline-flex items-center gap-2
         px-3 py-2 rounded-lg
         bg-gray-50 dark:bg-zinc-800
         whitespace-nowrap;
}

.modal-tech-icon {
  @apply w-6 h-6;
}

.modal-tech-name {
  @apply text-sm text-gray-700 dark:text-gray-300;
}

.modal-actions {
  @apply flex flex-col sm:flex-row gap-4 pt-4;
}

.modal-button {
  @apply flex-1 px-6 py-3 rounded-lg
         font-medium text-center
         transition-all duration-300;
}

.modal-button--primary {
  @apply bg-gradient-to-r from-blue-500 to-purple-500
         text-white
         hover:opacity-90;
}

.modal-button--secondary {
  @apply border border-gray-200 dark:border-zinc-700
         text-gray-700 dark:text-gray-300
         hover:bg-gray-50 dark:hover:bg-zinc-800;
}
</style>
