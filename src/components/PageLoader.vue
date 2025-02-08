<script setup lang="ts">
import { onMounted, ref } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue"

const isLoading = ref(true);
const emit = defineEmits(['load-complete']);

const checkAssetsLoaded = () => {
  return new Promise((resolve) => {
    // Wait for all images to load
    Promise.all(
      Array.from(document.images)
        .filter(img => !img.complete)
        .map(img => new Promise(resolve => {
          img.onload = img.onerror = resolve;
        }))
    )
    .then(() => resolve(true));
  });
};

onMounted(async () => {
  try {
    // Wait for fonts to load
    await document.fonts.ready;
    // Wait for images to load
    await checkAssetsLoaded();
    // Add any other initialization logic here
    
    isLoading.value = false;
    emit('load-complete');
  } catch (error) {
    console.error('Error during loading:', error);
    isLoading.value = false;
    emit('load-complete');
  }
});
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div v-if="isLoading" class="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black">
      <div class="text-center">
        <LoadingSpinner />
        <div class="mt-4 text-sm font-medium dark:text-gray-300">
          Loading...
        </div>
      </div>
    </div>
  </Transition>
</template>
