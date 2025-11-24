<script setup lang="ts">
  import { XIcon } from 'lucide-vue-next'
  import { navigationItems } from '@/data/navigation'
  import { ref, onMounted, onUnmounted } from 'vue'

  defineProps<{
    isOpen: boolean
    onClose: () => void
  }>()

  const currentHash = ref(window.location.hash || '#about')

  const updateActiveHash = () => {
    currentHash.value = window.location.hash || '#about'
  }

  onMounted(() => {
    window.addEventListener('hashchange', updateActiveHash)
  })

  onUnmounted(() => {
    window.removeEventListener('hashchange', updateActiveHash)
  })

  const isActive = (href: string) => currentHash.value === href
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
          class="fixed inset-0 bg-white/10 backdrop-blur-[8px] dark:bg-black/10"
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
        <div
          class="fixed bottom-0 right-0 top-0 w-3/4 max-w-sm border-l bg-white/90 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-black/90"
        >
          <div
            class="flex items-center justify-between border-b p-6 dark:border-zinc-800/50"
          >
            <span class="text-lg font-bold text-gray-900 dark:text-white"
              >.me</span
            >
            <button
              class="rounded-full p-2 transition-colors hover:bg-gray-100/50 dark:hover:bg-zinc-800/50"
              @click="onClose"
            >
              <XIcon class="h-5 w-5 text-gray-900 dark:text-white" />
            </button>
          </div>

          <!-- Nav items with icons -->
          <nav class="space-y-2 p-6">
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
                class="flex items-center space-x-3 rounded-lg p-3 transition-colors"
                :class="[
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-500 dark:bg-blue-900/10 dark:text-blue-400'
                    : 'text-gray-600 hover:bg-gray-100/50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-zinc-800/50 dark:hover:text-white',
                ]"
                @click="onClose"
              >
                <component :is="item.icon" class="h-5 w-5" />
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
