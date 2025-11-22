<script setup lang="ts">
interface Props {
  src: string;
  alt: string;
  variant?: 'default' | 'profile' | 'interactive' | 'project' | 'achievement' | 'avatar';
  loading?: 'lazy' | 'eager';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | 't-2xl';
  priority?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  loading: 'lazy',
  rounded: 'none',
  priority: false
});

const emit = defineEmits<{
  (e: 'load'): void;
}>();

const roundedClasses = {
  'none': '',
  'sm': 'rounded-sm',
  'md': 'rounded-md',
  'lg': 'rounded-lg',
  'xl': 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  'full': 'rounded-full',
  't-2xl': 'rounded-t-2xl'
} as const;

const variantClasses = {
  'default': 'w-full h-full object-cover',
  'profile': 'w-full h-full object-cover object-center transition-transform transform hover:scale-105',
  'interactive': 'w-full h-full object-cover object-center transition-all duration-500 hover:scale-105',
  'project': 'w-full h-full object-cover object-center',
  'achievement': 'w-full h-full object-cover object-center aspect-[4/3]',
  'avatar': 'w-full h-full object-cover object-center transition-all duration-300'
} as const;

// Add preload hint for priority images
if (props.priority) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = props.src;
  document.head.appendChild(link);
}
</script>

<template>
  <div class="relative w-full h-full">
    <img
      :src="src"
      :alt="alt"
      :loading="priority ? 'eager' : loading"
      :fetchpriority="priority ? 'high' : 'auto'"
      decoding="async"
      :class="[ 
        variantClasses[props.variant],
        roundedClasses[props.rounded]
      ]"
      @load="() => emit('load')"
    />
    <slot name="overlay" />
  </div>
</template>
