<script setup lang="ts">
import { ref } from 'vue';
import GeminiChat from '@/components/chat/GeminiChat.vue';
import { MessageCircle, Minus } from 'lucide-vue-next';

const isOpen = ref(false);

const toggleChat = () => {
  isOpen.value = !isOpen.value;
};
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
        class="absolute bottom-16 right-0 w-[450px] bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <!-- Modal Header -->
        <div class="flex items-center justify-between p-4 bg-gray-800 text-white">
          <h3 class="text-lg font-semibold">Message Me</h3>
          <button
            @click="toggleChat"
            class="p-1 hover:bg-gray-700 rounded-full transition-colors"
          >
            <Minus class="w-5 h-5" />
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
      class="p-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 rounded-full shadow-lg transition-colors"
      :class="{ 'animate-bounce': !isOpen }"
    >
      <MessageCircle class="w-6 h-6" />
    </button>
  </div>
</template>

<style scoped>
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
