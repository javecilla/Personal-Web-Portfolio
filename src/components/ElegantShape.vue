<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  interface Props {
    delay?: number
    width?: number
    height?: number
    rotate?: number
    gradient?: string
    className?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    delay: 0,
    width: 400,
    height: 100,
    rotate: 0,
    gradient: 'from-white/[0.08]',
    className: '',
  })

  const opacity = ref(0)
  const yPos = ref(-150)
  const currentRotate = ref(props.rotate - 15)

  onMounted(() => {
    setTimeout(() => {
      opacity.value = 1
      yPos.value = 0
      currentRotate.value = props.rotate
    }, props.delay * 1000)
  })
</script>

<template>
  <div
    :class="['absolute', className]"
    :style="{
      opacity: opacity,
      transform: `translateY(${yPos}px) rotate(${currentRotate}deg)`,
      transition: `all 2.4s cubic-bezier(0.23, 0.86, 0.39, 0.96), opacity 1.2s`,
    }"
  >
    <div
      class="animate-float relative"
      :style="{ width: `${width}px`, height: `${height}px` }"
    >
      <div
        :class="[
          'absolute inset-0 rounded-full',
          'bg-gradient-to-r to-transparent',
          gradient,
          'border-2 border-white/[0.15] backdrop-blur-[2px]',
          'shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]',
          'after:absolute after:inset-0 after:rounded-full',
          'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]',
        ]"
      />
    </div>
  </div>
</template>

<style scoped>
  .animate-float {
    animation: float 12s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(15px);
    }
  }
</style>
