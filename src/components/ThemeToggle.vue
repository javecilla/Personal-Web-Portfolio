<script setup lang="ts">
  import { MoonIcon, SunIcon } from 'lucide-vue-next'
  import Button from '@/components/ui/Button.vue'
  import { useDarkMode } from '@/composables/useDarkMode'
  const { isDarkMode, toggleTheme } = useDarkMode()
</script>

<template>
  <Button
    variant="icon"
    :ariaLabel="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <SunIcon v-if="isDarkMode" class="h-5 w-5 text-white" />
    <MoonIcon v-else class="h-5 w-5 text-gray-900" />
  </Button>
</template>
