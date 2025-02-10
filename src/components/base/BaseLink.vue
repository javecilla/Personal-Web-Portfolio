<script setup lang="ts">
interface Props {
  href: string;
  ariaLabel: string;
  external?: boolean;
  variant?: 'default' | 'icon' | 'nav' | 'button';
  className?: string; // Add this line
}

withDefaults(defineProps<Props>(), {
  external: false,
  variant: 'default',
  className: '' // Add default value
});

const variantClasses = {
  default: 'text-[var(--link-color)] hover:opacity-80 dark:text-[var(--link-color-dark)]',
  nav: 'text-gray-800 dark:text-gray-200 hover:text-[var(--link-color)] dark:hover:text-[var(--link-color-dark)]',
  button: 'px-4 py-2 rounded-full', // Removed background color from here
  icon: 'text-gray-800 dark:text-gray-200 hover:text-[var(--link-color)] dark:hover:text-[var(--link-color-dark)]'
} as const;
</script>

<template>
  <a
    :href="href"
    :class="
      [
        'transition-colors duration-200',
        variantClasses[variant],
        className
      ]
    "
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :aria-label="ariaLabel"
  >
    <slot />
  </a>
</template>
