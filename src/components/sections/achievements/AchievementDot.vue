<script setup lang="ts">
  import Button from '@/components/ui/Button.vue'

  interface Props {
    index: number
    isActive: boolean
    id: string
    ariaControls: string
    totalSlides: number
  }

  defineProps<Props>()
  defineEmits<{
    (e: 'select', index: number): void
  }>()
</script>

<template>
  <Button
    :id="id"
    variant="dot"
    role="tab"
    :class="[
      '-mt-5 h-1 w-1 transition-all duration-200 md:mt-[60px] md:h-2 md:w-2',
      isActive
        ? 'bg-[var(--color-orange-vibrant)]'
        : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500',
    ]"
    :ariaLabel="`Achievement ${index + 1} of ${totalSlides}`"
    :aria-selected="isActive"
    :aria-controls="ariaControls"
    :tabindex="isActive ? 0 : -1"
    @click="$emit('select', index)"
    @keydown.arrow-right.prevent="$emit('select', (index + 1) % totalSlides)"
    @keydown.arrow-left.prevent="
      $emit('select', index === 0 ? totalSlides - 1 : index - 1)
    "
  >
    <span class="sr-only">
      {{
        isActive
          ? `Current achievement, number ${index + 1}`
          : `Go to achievement ${index + 1}`
      }}
    </span>
  </Button>
</template>
