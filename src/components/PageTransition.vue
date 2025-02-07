<script setup lang="ts">
defineProps<{
  isLoaded: boolean;
}>();
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-700 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
  >
    <div v-show="isLoaded">
      <slot />
    </div>
  </Transition>
</template>
