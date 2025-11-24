<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { GithubIcon } from 'lucide-vue-next'
  import ThemeToggle from '@/components/ThemeToggle.vue'
  import menuIcon from '@global/svgs/menu-icon.svg?raw'
  import Sidebar from '@/components/Sidebar.vue'
  import { navigationItems } from '@/data/navigation'
  import Link from '@/components/ui/Link.vue'

  const isScrolled = ref(false)
  const isSidebarOpen = ref(false)

  const mobileMenuLabels = {
    open: 'Open navigation menu',
    close: 'Close navigation menu',
  }

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0
  }

  const currentHash = ref(window.location.hash || '#about')

  const updateActiveHash = () => {
    currentHash.value = window.location.hash || '#about'
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', updateActiveHash)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('hashchange', updateActiveHash)
  })

  const isActive = (href: string) => currentHash.value === href
</script>

<template>
  <!-- Sidebar for mobile -->
  <Sidebar
    :is-open="isSidebarOpen"
    :on-close="() => (isSidebarOpen = false)"
    :nav-items="navigationItems"
  />

  <header
    class="fixed left-0 right-0 top-0 z-40 transition-all duration-300"
    :class="[
      isScrolled
        ? 'border-b bg-white/30 backdrop-blur-md dark:bg-black/30'
        : 'bg-transparent',
      'border-gray-200/50 dark:border-zinc-800/50',
    ]"
  >
    <div class="mx-auto max-w-[1230px] px-4 sm:px-6 lg:px-1">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <Link href="#about" ariaLabel="Home" class="text-2xl font-bold">
            <span
              class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              >JA.</span
            >
          </Link>
          <!-- Desktop Navigation -->
          <nav class="ml-10 hidden space-x-8 md:flex">
            <Link
              v-for="item in navigationItems"
              :key="item.name"
              :href="item.href"
              :ariaLabel="item.name"
              variant="nav"
              :class="[
                isActive(item.href)
                  ? 'text-bold text-blue-500 dark:text-blue-400'
                  : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent dark:text-gray-300',
              ]"
            >
              {{ item.name }}
            </Link>
          </nav>
        </div>

        <!-- Right side buttons -->
        <div class="flex items-center space-x-3">
          <ThemeToggle />
          <Link
            href="https://github.com/javecilla"
            ariaLabel="Visit my GitHub profile"
            variant="icon"
            external
            class="inline-flex items-center justify-center rounded-full bg-gray-200 p-2 transition-all duration-300 ease-in-out hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            <GithubIcon class="h-5 w-5 text-gray-900 dark:text-white" />
          </Link>

          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full bg-gray-200 p-2 transition-all duration-300 ease-in-out hover:bg-gray-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 md:hidden"
            :aria-expanded="isSidebarOpen"
            :aria-label="
              isSidebarOpen ? mobileMenuLabels.close : mobileMenuLabels.open
            "
            @click="isSidebarOpen = true"
          >
            <span class="sr-only">{{
              isSidebarOpen ? mobileMenuLabels.close : mobileMenuLabels.open
            }}</span>
            <div
              v-html="menuIcon"
              class="flex h-5 w-5 items-center justify-center text-gray-900 dark:text-white"
              aria-hidden="true"
            ></div>
          </button>

          <Link
            href="javascript:void(0)"
            ariaLabel="Download my resume"
            variant="button"
            class="hidden cursor-not-allowed items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 px-6 text-center transition-all duration-300 hover:opacity-90 md:flex"
          >
            <span class="font-medium text-white">Resume</span>
          </Link>
        </div>
      </div>
    </div>
  </header>
  <!-- Spacer to prevent content from going under fixed header -->
  <div class="h-16"></div>
</template>

<style scoped>
  @supports not (backdrop-filter: blur(12px)) {
    .backdrop-blur-md {
      background-color: rgba(255, 255, 255, 0.95);
    }

    :global(.dark) .backdrop-blur-md {
      background-color: rgba(0, 0, 0, 0.95);
    }
  }
</style>
