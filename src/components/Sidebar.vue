<script setup lang="ts">
import { XIcon } from 'lucide-vue-next';
import { navigationItems } from '@/data/navigation';


defineProps<{
  isOpen: boolean;
  onClose: () => void;
}>();
</script>

<template>
  <Transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-50 lg:hidden">
      <!-- Backdrop with blur -->
      <Transition 
        enter="transition-all ease-out duration-300" 
        enter-from="opacity-0 backdrop-blur-none" 
        enter-to="opacity-100 backdrop-blur-[8px]"
        leave="transition-all ease-in duration-200"
        leave-from="opacity-100 backdrop-blur-[8px]" 
        leave-to="opacity-0 backdrop-blur-none"
      >
        <div 
          class="fixed inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[8px]"
          @click="onClose"
        ></div>
      </Transition>

      <!-- Sidebar with solid background -->
      <Transition
        enter="transform transition-transform ease-out duration-300"
        enter-from="translate-x-full"
        enter-to="translate-x-0"
        leave="transform transition-transform ease-in duration-200"
        leave-from="translate-x-0"
        leave-to="translate-x-full"
      >
        <div class="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white/90 dark:bg-black/90 border-l dark:border-zinc-800/50 backdrop-blur-xl">
          <div class="flex items-center justify-between p-6 border-b dark:border-zinc-800/50">
            <span class="text-lg font-semibold dark:text-white text-gray-900">Navigation</span>
            <button 
              class="p-2 hover:bg-gray-100/50 dark:hover:bg-zinc-800/50 rounded-full transition-colors"
              @click="onClose"
            >
              <XIcon class="w-5 h-5 dark:text-white text-gray-900" />
            </button>
          </div>

          <!-- Nav items with icons -->
          <nav class="p-6 space-y-2">
            <TransitionGroup
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 -translate-x-4"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 translate-x-4"
            >
              <a 
                v-for="(item, index) in navigationItems" 
                :key="item.name"
                :href="item.href"
                :style="{ transitionDelay: `${index * 50}ms` }"
                class="flex items-center space-x-3 p-3 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-zinc-800/50 transition-colors"
                @click="onClose"
              >
                <component :is="item.icon" class="w-5 h-5" />
                <span>{{ item.name }}</span>
              </a>
            </TransitionGroup>
          </nav>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
