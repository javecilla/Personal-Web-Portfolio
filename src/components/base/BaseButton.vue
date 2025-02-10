<template>
  <button
    :class="[
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
      'transition-colors duration-200',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      baseClasses,
      variantClasses[variant]
    ]"
    :aria-label="ariaLabel"
    :type="type"
    :disabled="disabled"
    @keydown.space.prevent="$emit('click')"
    @keyup.space.prevent="$emit('click')"
    @keydown.enter.prevent="$emit('click')"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  ariaLabel: string;
  variant?: 'primary' | 'secondary' | 'icon';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
  disabled: false
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const baseClasses = 'inline-flex items-center justify-center rounded-full';

const variantClasses = {
  primary: 'p-2 dark:bg-zinc-800 bg-gray-200 hover:bg-gray-300 dark:hover:bg-zinc-700',
  secondary: 'p-2 bg-transparent hover:bg-gray-100 dark:hover:bg-zinc-800',
  icon: 'p-2 dark:bg-zinc-800 bg-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-zinc-700'
} as const;
</script>
