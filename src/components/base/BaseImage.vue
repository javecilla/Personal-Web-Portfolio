<script setup lang="ts">
interface Props {
  src: string;
  alt: string;
  variant?: 'default' | 'profile' | 'interactive';
  loading?: 'lazy' | 'eager';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
}

const emit = defineEmits<{
  (e: 'load'): void;
}>();

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  loading: 'lazy',
  rounded: 'none'
});

const roundedClasses = {
  none: '',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full'
};

const variantClasses = {
  default: 'w-full h-full object-cover',
  profile: 'w-full h-full object-cover object-center transition-transform transform hover:scale-105',
  interactive: 'w-full h-full object-cover object-center transition-all duration-500 hover:scale-105'
};
</script>

<template>
  <div class="relative w-full h-full">
    <img
      :src="src"
      :alt="alt"
      :loading="loading"
      :class="[
        variantClasses[variant],
        roundedClasses[rounded]
      ]"
      @load="emit('load')"
    />
    <slot name="overlay" />
  </div>
</template>
