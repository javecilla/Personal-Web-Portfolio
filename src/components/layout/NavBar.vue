<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  import { GithubIcon } from 'lucide-vue-next'
  import ThemeToggle from '@/components/ThemeToggle.vue'
  import menuIcon from '@global/svgs/menu-icon.svg?raw'
  import Sidebar from '@/components/layout/Sidebar.vue'
  import { navigationItems } from '@/data/navigation'
  import Link from '@/components/ui/Link.vue'
  import Button from '@/components/ui/Button.vue'

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
        <div class="flex items-center">
          <Link href="#about" ariaLabel="Home" class="text-2xl font-bold">
            <span class="gradient__text--orange-yellow">JA.</span>
          </Link>

          <nav class="ml-10 hidden space-x-8 md:flex">
            <Link
              v-for="item in navigationItems"
              :key="item.name"
              :href="item.href"
              :ariaLabel="item.name"
              variant="nav"
              :class="[
                isActive(item.href)
                  ? 'text-bold gradient__text--orange-yellow'
                  : 'gradient__text--orange-yellow--hover text-gray-600 dark:text-gray-300',
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
          >
            <GithubIcon class="h-5 w-5" />
          </Link>

          <Button
            type="button"
            variant="icon"
            class="md:hidden"
            :aria-expanded="isSidebarOpen"
            :ariaLabel="
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
          </Button>

          <Button
            ariaLabel="Download my resume"
            variant="primary"
            type="button"
            class="hidden px-6 md:flex"
            :disabled="true"
          >
            <span class="font-medium text-white">Resume</span>
          </Button>
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
