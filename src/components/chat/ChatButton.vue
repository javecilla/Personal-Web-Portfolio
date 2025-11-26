<script setup lang="ts">
  import { ref } from 'vue'
  import GeminiChat from '@/components/chat/GeminiChat.vue'
  import Button from '@/components/ui/Button.vue'
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
          class="flex items-center justify-between bg-gray-500 p-4 text-white dark:bg-zinc-900"
        >
          <h3 class="text-lg font-semibold">Message Me</h3>
          <Button
            @click="toggleChat"
            variant="icon"
            class="p-1"
            ariaLabel="Close chat"
          >
            <Minus class="h-5 w-5" />
          </Button>
        </div>

        <!-- Chat Component -->
        <div class="h-[550px]">
          <GeminiChat />
        </div>
      </div>
    </Transition>

    <!-- Toggle Button -->
    <Button
      @click="toggleChat"
      variant="primary"
      class="rounded-full p-4 text-white shadow-lg hover:opacity-90"
      :class="{ 'animate-bounce': !isOpen }"
      ariaLabel="Toggle chat"
    >
      <MessageCircle class="h-6 w-6" />
    </Button>
  </div>
</template>

<style scoped>
  .modal-backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
