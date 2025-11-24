<script setup lang="ts">
  defineProps<{
    isOpen: boolean
    message: string
    onConfirm: () => void
    onCancel: () => void
  }>()
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <div
      v-if="isOpen"
      class="absolute inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div class="mx-4 w-[80%] max-w-md rounded-lg bg-white p-6 shadow-xl">
        <p class="mb-6 text-gray-800">{{ message }}</p>
        <div class="flex justify-center gap-3">
          <button
            @click="onCancel"
            class="rounded-xl bg-gray-700 px-4 py-2 text-white transition-colors hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            @click="onConfirm"
            class="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-white transition-colors hover:opacity-90"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
