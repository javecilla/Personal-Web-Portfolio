<script setup lang="ts">
interface Props {
  href: string;
  ariaLabel: string;
  external?: boolean;
  variant?: 'default' | 'icon' | 'nav' | 'button';
}

withDefaults(defineProps<Props>(), {
  external: false,
  variant: 'default'
});

const variantClasses = {
  default: 'text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300',
  icon: 'p-2 dark:bg-zinc-800 bg-gray-200 rounded-full dark:hover:bg-zinc-700 hover:bg-gray-300 transition-all duration-300 ease-in-out',
  nav: 'text-sm dark:text-gray-300 text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors',
  button: 'flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity text-sm'
} as const;
</script>

<template>
  <a
    :href="href"
    :class="variantClasses[variant]"
    :aria-label="ariaLabel"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
</template>
