<script setup lang="ts">
interface Props {
  index: number;
  isActive: boolean;
}

defineProps<Props>();
defineEmits<{
  (e: 'select', index: number): void;
}>();
</script>

<template>
  <button
    :class="[
      'achievements__dot--button',
      'w-4 h-4 md:w-5 md:h-5 rounded-full transition-colors duration-200 -mt-5 md:mt-[60px]',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
      isActive 
        ? 'bg-blue-500 hover:bg-blue-600' 
        : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
    ]"
    :aria-label="`Go to achievement ${index + 1}`"
    :aria-current="isActive ? 'true' : 'false'"
    type="button"
    @click="$emit('select', index)"
  />
</template>
