<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    ariaLabel: string
    variant?:
      | 'primary'
      | 'secondary'
      | 'icon'
      | 'dot'
      | 'outline'
      | 'suggestion'
      | 'custom'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    type: 'button',
    disabled: false,
  })

  defineEmits<{
    (e: 'click', event: MouseEvent | KeyboardEvent): void
  }>()

  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange-primary)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

  const variantClasses = {
    primary:
      // 'border-none bg-gradient-to-r from-[var(--gradient-orange-yellow-start)] to-[var(--gradient-orange-yellow-end)] p-2 text-white hover:opacity-90 disabled:hover:opacity-50',
      'border-none bg-[var(--color-orange-vibrant)] p-2 text-white hover:opacity-90 disabled:hover:opacity-50',
    secondary:
      'bg-gray-200 p-2 text-gray-900 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-100 dark:hover:bg-zinc-700 disabled:hover:bg-gray-200 dark:disabled:hover:bg-zinc-800',
    icon: 'rounded-full bg-gray-200 p-2 hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 disabled:hover:bg-gray-200 dark:disabled:hover:bg-zinc-800',
    dot: 'p-0 rounded-full hover:opacity-80',
    outline:
      'border border-[var(--color-orange-primary)] bg-transparent text-[var(--color-orange-primary)] hover:bg-orange-50 dark:hover:bg-zinc-800',
    suggestion:
      'border border-gray-500 bg-transparent text-gray-600 hover:scale-[1.02]',
    custom: '',
  } as const

  const currentVariantClass = computed(() => variantClasses[props.variant])
</script>

<template>
  <button
    :class="[baseClasses, currentVariantClass]"
    :aria-label="ariaLabel"
    :type="type"
    :disabled="disabled"
    @keydown.space.prevent="$emit('click', $event)"
    @keyup.space.prevent="$emit('click', $event)"
    @keydown.enter.prevent="$emit('click', $event)"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<style scoped>
  button {
    /* border-radius: 8px; */
    /* border: 1px solid transparent; */
    /* padding: 0.6em 1.2em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    color: #e4e4e7;
    cursor: pointer;
    transition: border-color 0.25s; */
    font-size: 1em;
  }
  button:hover {
    border-color: var(--gradient-orange-yellow-start);
  }
  button:focus,
  button:focus-visible {
    outline: 2px auto -webkit-focus-ring-color;
  }
</style>
