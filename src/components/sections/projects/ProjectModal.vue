<script setup lang="ts">
  import { onMounted, onUnmounted, watch, computed } from 'vue'
  import { XIcon } from 'lucide-vue-next'
  import type { Project } from '@/types/project'
  import { useMarkdown } from '@/composables/useMarkdown'
  import Button from '@/components/ui/Button.vue'
  import Image from '@/components/ui/Image.vue'
  import Link from '@/components/ui/Link.vue'
  import TechBadge from '@/components/TechBadge.vue'
  import Badge from '@/components/ui/Badge.vue'

  const props = defineProps<{
    show: boolean
    project: Project | null
  }>()

  const emit = defineEmits<{
    (e: 'close'): void
  }>()

  const { parseMarkdown } = useMarkdown()

  const formattedDescription = computed(() => {
    if (!props.project) return ''
    return parseMarkdown(props.project.description)
  })

  // Handle escape key
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') emit('close')
  }

  // Lock body scroll when modal is open
  watch(
    () => props.show,
    (newVal) => {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  )

  onMounted(() => {
    document.addEventListener('keydown', handleEscape)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  })
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
          <Button
            variant="icon"
            @click="emit('close')"
            ariaLabel="Close modal"
            class="modal-close"
          >
            <XIcon class="h-6 w-6" />
          </Button>
        </div>

        <div class="modal-container" @click.stop>
          <!-- Content -->
          <div class="modal-content">
            <!-- Image -->
            <div class="modal-image-container">
              <Image
                :src="project.image"
                :alt="project.title"
                class="modal-image"
                :show-skeleton="true"
                skeleton-class="h-full w-full"
              />
            </div>

            <!-- Details -->
            <div class="modal-details">
              <div class="modal-header">
                <h3 class="modal-title">{{ project.title }}</h3>
                <Badge>
                  {{
                    project.category.charAt(0).toLocaleUpperCase() +
                    project.category.slice(1)
                  }}
                </Badge>
              </div>

              <div
                class="modal-description"
                v-html="formattedDescription"
              ></div>

              <div class="modal-tech-stack">
                <h4 class="modal-subtitle">Technologies Used</h4>
                <div class="modal-tech-icons">
                  <TechBadge
                    v-for="tech in project.technologies"
                    :key="tech.name"
                    :name="tech.name"
                    :icon="tech.icon"
                  />
                </div>
              </div>

              <!-- Links -->
              <div class="modal-actions">
                <Link
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  :external="true"
                  variant="primary"
                  class="flex-1"
                  ariaLabel="View Live Demo"
                >
                  View Live Demo
                </Link>
                <Link
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  :external="true"
                  variant="secondary"
                  class="flex-1"
                  ariaLabel="View Source Code"
                >
                  View Source Code
                </Link>
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
    @apply fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm;
  }

  .modal-wrapper {
    @apply relative mx-auto w-full max-w-4xl;
  }

  .modal-container {
    @apply relative max-h-[90vh] w-full overflow-y-auto rounded-2xl bg-white shadow-xl dark:bg-zinc-900;
  }

  .modal-close-wrapper {
    @apply absolute -right-3 -top-3 z-50 sm:-right-14 sm:-top-1;
  }

  .modal-close {
    @apply rounded-full border border-gray-200 bg-white/80 p-2 text-gray-600 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gray-50 dark:border-zinc-700/50 dark:bg-zinc-900/80 dark:text-gray-300 dark:hover:bg-zinc-800;
  }

  .modal-content {
    @apply p-6;
  }

  .modal-image-container {
    @apply mb-6 h-[300px] w-full overflow-hidden rounded-xl md:h-[500px];
  }

  .modal-image {
    @apply h-full w-full object-cover transition-transform duration-300 hover:scale-105;
  }

  .modal-details {
    @apply space-y-6 text-start;
  }

  /* Updated header layout */
  .modal-header {
    @apply flex items-center justify-between gap-4;
  }

  .modal-title {
    @apply flex-1 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl;
  }

  /* Update markdown styles */
  .modal-description {
    @apply prose prose-sm max-w-none dark:prose-invert md:prose-base;
  }

  .modal-description :deep(h1) {
    @apply mb-4 mt-6 text-2xl font-bold;
  }

  .modal-description :deep(h2) {
    @apply mb-3 mt-5 text-xl font-bold;
  }

  .modal-description :deep(h3) {
    @apply mb-2 mt-4 text-lg font-bold;
  }

  .modal-description :deep(ul) {
    @apply mb-4 list-disc space-y-2 pl-5;
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
    @apply text-lg font-semibold text-gray-900 dark:text-white;
  }

  /* Updated tech stack grid */
  .modal-tech-icons {
    @apply flex flex-wrap gap-3;
  }

  .modal-actions {
    @apply flex flex-col gap-4 pt-4 sm:flex-row;
  }
</style>
