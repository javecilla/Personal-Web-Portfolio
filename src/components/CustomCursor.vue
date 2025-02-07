<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const cursorPos = ref({ x: -100, y: -100 });
const isPointer = ref(false);

const updateCursor = (e: MouseEvent) => {
  cursorPos.value = { x: e.clientX, y: e.clientY };
};

const updateCursorType = (e: MouseEvent) => {
  isPointer.value = window.getComputedStyle(e.target as Element).cursor === 'pointer';
};

onMounted(() => {
  document.addEventListener('mousemove', updateCursor);
  document.addEventListener('mouseover', updateCursorType);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', updateCursor);
  document.removeEventListener('mouseover', updateCursorType);
});
</script>

<template>
  <div 
    class="cursor-dot"
    :class="{ 'cursor-pointer': isPointer }"
    :style="{
      transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`
    }"
  />
  <div 
    class="cursor-outline"
    :class="{ 'cursor-pointer': isPointer }"
    :style="{
      transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`
    }"
  />
</template>

<style scoped>
.cursor-dot {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  border-radius: 50%;
  transform-origin: center;
  transition: width 0.2s, height 0.2s;
  z-index: 999;
  margin: -4px 0 0 -4px;
}

.cursor-outline {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background-color: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  margin: -20px 0 0 -20px;
  transition: all 0.1s ease-out;
  z-index: 998;
}

:global(html.dark) .cursor-outline {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.cursor-dot.cursor-pointer,
.cursor-outline.cursor-pointer {
  transform: scale(1.5);
  background-color: rgba(139, 92, 246, 0.15);
}

/* Show default cursor for touch devices */
@media (hover: none) {
  .cursor-dot,
  .cursor-outline {
    display: none;
  }
}
</style>
