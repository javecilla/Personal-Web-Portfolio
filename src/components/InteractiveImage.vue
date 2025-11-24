<script setup lang="ts">
  import { ref } from 'vue'
  import ImageSkeleton from '@components/ImageSkeleton.vue'

  defineProps<{
    src: string
    alt: string
    isLoaded: boolean
  }>()

  const emit = defineEmits(['load'])
  const localImageLoaded = ref(false)

  const handleLocalImageLoad = () => {
    localImageLoaded.value = true
    emit('load')
  }

  const rotation = ref({ x: 0, y: 0 })
  const isHovered = ref(false)

  const handleMouseMove = (event: MouseEvent) => {
    const card = event.currentTarget as HTMLElement
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Reduced rotation values for subtler effect
    const rotateX = ((y - centerY) / 20) * (isHovered.value ? 1 : 0)
    const rotateY = ((centerX - x) / 20) * (isHovered.value ? 1 : 0)

    rotation.value = { x: rotateX, y: rotateY }
  }

  const handleMouseEnter = () => {
    isHovered.value = true
  }

  const handleMouseLeave = () => {
    isHovered.value = false
    rotation.value = { x: 0, y: 0 }
  }
</script>

<template>
  <div
    class="perspective-1000 group relative h-full w-full"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="preserve-3d relative h-full w-full transition-all duration-500 ease-out"
      :style="{
        transform: `
          rotateX(${rotation.x}deg) 
          rotateY(${rotation.y}deg) 
          scale(${isHovered ? 1.08 : 1})
        `,
      }"
    >
      <Transition
        enter-active-class="transition-opacity duration-300"
        leave-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <ImageSkeleton
          v-if="!localImageLoaded"
          rounded="rounded-3xl"
          className="absolute inset-0 w-full h-full"
        />
      </Transition>
      <img
        :src="src"
        :alt="alt"
        class="h-full w-full rounded-3xl object-cover object-center transition-all duration-500"
        :class="{
          'opacity-0': !localImageLoaded,
          'scale-[1.02]': isHovered,
        }"
        @load="handleLocalImageLoad"
      />
      <div
        class="absolute inset-0 rounded-3xl transition-all duration-500"
        :class="{
          'bg-gradient-to-br from-black/30 to-transparent opacity-100':
            isHovered,
          'bg-gradient-to-br from-black/20 to-transparent opacity-0':
            !isHovered,
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
  .perspective-1000 {
    perspective: 1500px;
  }

  .preserve-3d {
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
</style>
