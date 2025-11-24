<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const mousePosition = ref({ x: 0, y: 0 })

  const handleMouseMove = (event: MouseEvent) => {
    mousePosition.value = { x: event.clientX, y: event.clientY }
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
    :style="{
      background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, 
        var(--light-color), transparent 80%)`,
    }"
  />
</template>

<style>
  :root {
    --light-color: rgba(29, 78, 216, 0.15);
  }

  html.dark {
    --light-color: rgba(255, 255, 255, 0.01);
  }
</style>
