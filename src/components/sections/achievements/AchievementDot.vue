<script setup lang="ts">
interface Props {
  index: number;
  isActive: boolean;
  id: string;
  ariaControls: string;
  totalSlides: number;
}

defineProps<Props>();
defineEmits<{
  (e: 'select', index: number): void;
}>();
</script>

<template>
  <button
    :id="id"
    role="tab"
    :class="[
      'achievements__dot--button',
      'w-4 h-4 md:w-5 md:h-5 rounded-full transition-colors duration-200 -mt-5 md:mt-[60px]',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
      isActive 
        ? 'bg-blue-500 hover:bg-blue-600' 
        : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
    ]"
    :aria-label="`Achievement ${index + 1} of ${totalSlides}`"
    :aria-selected="isActive"
    :aria-controls="ariaControls" 
    :tabindex="isActive ? 0 : -1"
    type="button"
    @click="$emit('select', index)"
    @keydown.space.prevent="$emit('select', index)"
    @keydown.enter.prevent="$emit('select', index)"
    @keydown.arrow-right.prevent="$emit('select', (index + 1) % totalSlides)"
    @keydown.arrow-left.prevent="$emit('select', index === 0 ? totalSlides - 1 : index - 1)"
  >
    <span class="sr-only">
      {{ isActive ? `Current achievement, number ${index + 1}` : `Go to achievement ${index + 1}` }}
    </span>
  </button>
</template>
