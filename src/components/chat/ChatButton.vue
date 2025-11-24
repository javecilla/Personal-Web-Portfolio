<script setup lang="ts">
  import { ref } from 'vue'
  import GeminiChat from '@/components/chat/GeminiChat.vue'
  import { MessageCircle, Minus } from 'lucide-vue-next'

  const isOpen = ref(false)

  const toggleChat = () => {
    isOpen.value = !isOpen.value
  }
</script>

<template>
  <!-- Floating Chat Button -->
  <div class="fixed bottom-4 right-4 z-50">
    <!-- Chat Modal -->
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
        class="absolute bottom-16 right-0 w-[450px] overflow-hidden rounded-lg bg-white shadow-xl"
      >
        <!-- Modal Header -->
        <div
          class="flex items-center justify-between bg-gray-800 p-4 text-white"
        >
          <h3 class="text-lg font-semibold">Message Me</h3>
          <button
            @click="toggleChat"
            class="rounded-full p-1 transition-colors hover:bg-gray-700"
          >
            <Minus class="h-5 w-5" />
          </button>
        </div>

        <!-- Chat Component -->
        <div class="h-[550px]">
          <GeminiChat />
        </div>
      </div>
    </Transition>

    <!-- Toggle Button -->
    <button
      @click="toggleChat"
      class="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white shadow-lg transition-colors hover:opacity-90"
      :class="{ 'animate-bounce': !isOpen }"
    >
      <MessageCircle class="h-6 w-6" />
    </button>
  </div>
</template>

<style scoped>
  .modal-backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
