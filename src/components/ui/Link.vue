<script setup lang="ts">
  interface Props {
    href: string
    ariaLabel: string
    external?: boolean
    variant?: 'default' | 'icon' | 'nav' | 'button' | 'primary' | 'secondary'
  }

  withDefaults(defineProps<Props>(), {
    external: false,
    variant: 'default',
  })

  const baseClasses = 'transition-colors duration-200'

  const variantClasses = {
    default:
      'text-[var(--link-color)] hover:opacity-80 dark:text-[var(--link-color-dark)] hover:text-[var(--gradient-orange-yellow-start)]',
    nav: 'text-gray-800 dark:text-gray-200 gradient__text--orange-yellow--hover',
    button:
      'px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-orange-primary)] focus:ring-offset-2',
    icon: 'inline-flex items-center justify-center rounded-full bg-gray-200 p-2 transition-all duration-300 ease-in-out hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-900 dark:text-white border border-transparent hover:border-[var(--gradient-orange-yellow-start)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange-primary)] focus:ring-offset-2',
    primary:
      // 'inline-flex items-center justify-center gap-2 rounded-full border-none bg-gradient-to-r from-[var(--gradient-orange-yellow-start)] to-[var(--gradient-orange-yellow-end)] p-2 text-white hover:opacity-90 disabled:hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange-primary)] focus:ring-offset-2',
      'inline-flex items-center justify-center gap-2 rounded-full border-none bg-[var(--color-orange-vibrant)] p-2 text-white hover:opacity-90 disabled:hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange-primary)] focus:ring-offset-2',
    secondary:
      'inline-flex items-center justify-center gap-2 rounded-full bg-gray-200 p-2 text-gray-900 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-100 dark:hover:bg-zinc-700 disabled:hover:bg-gray-200 dark:disabled:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange-primary)] focus:ring-offset-2',
  } as const
</script>

<template>
  <a
    :href="href"
    :class="[baseClasses, variantClasses[variant]]"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :aria-label="ariaLabel"
  >
    <slot />
  </a>
</template>

<style scoped>
  a {
    /* font-weight: 500; */
    /* color: var(--link-color); */
    text-decoration: inherit;
  }
  /* Removed global hover style to prevent overriding button variants */
  a:focus,
  a:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
