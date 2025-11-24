<script setup lang="ts">
  import { techStacksExpertise } from '@/data/techStackExpertise'
  import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue'
  import codeIcon from '@global/gif_webp/code-icon.webp?url'
  import ImageSkeleton from '@/components/ImageSkeleton.vue'

  const loadedIcons = ref(new Set<string>())
  const isCenterIconLoaded = ref(false)

  const containerRef = ref<HTMLElement | null>(null)
  const containerWidth = ref(240) // default fallback

  const handleIconLoad = (iconName: string) => {
    loadedIcons.value.add(iconName)
  }

  const isIconLoaded = (iconName: string): boolean => {
    return loadedIcons.value.has(iconName)
  }

  const updateContainerWidth = () => {
    if (containerRef.value) {
      containerWidth.value = containerRef.value.offsetWidth
    }
  }

  let resizeObserver: ResizeObserver | undefined

  onMounted(() => {
    nextTick(() => {
      updateContainerWidth()
      if (containerRef.value) {
        resizeObserver = new ResizeObserver(() => {
          updateContainerWidth()
        })
        resizeObserver.observe(containerRef.value)
      }
    })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateContainerWidth)
    if (resizeObserver && containerRef.value) {
      resizeObserver.unobserve(containerRef.value)
    }
  })

  const getResponsiveRadius = () => {
    if (window.innerWidth < 640) return containerWidth.value * 0.49 // mobile
    if (window.innerWidth < 1024) return containerWidth.value * 0.49 // tablet
    return containerWidth.value * 0.5 // desktop
  }

  // Calculate positions for each tech item around the circle
  const techWithPositions = computed(() => {
    const radius = getResponsiveRadius()
    return techStacksExpertise.map((tech, index) => {
      const angle = (index * 360) / techStacksExpertise.length
      const radian = (angle - 90) * (Math.PI / 180)
      return {
        ...tech,
        style: {
          left: `calc(50% + ${Math.cos(radian) * radius}px)`,
          top: `calc(50% + ${Math.sin(radian) * radius}px)`,
          transform: 'translate(-50%, -50%)',
        },
      }
    })
  })
</script>

<template>
  <div class="expertise">
    <div class="expertise__container group" ref="containerRef">
      <!-- Central circle with items -->
      <div class="expertise__circle">
        <!-- Center logo with skeleton -->
        <div class="expertise__center">
          <Transition
            enter-active-class="transition-opacity duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ImageSkeleton
              v-show="!isCenterIconLoaded"
              rounded="rounded-full"
              className="expertise__center-skeleton"
            />
          </Transition>
          <img
            :src="codeIcon"
            width="60"
            alt="gif"
            class="expertise__center-gif"
            :class="{ 'expertise__center-gif--loaded': isCenterIconLoaded }"
            @load="isCenterIconLoaded = true"
          />
        </div>

        <!-- Tech stack items with skeletons -->
        <div
          v-for="tech in techWithPositions"
          :key="tech.name"
          class="expertise__item"
          :style="tech.style"
        >
          <div class="expertise__icon-wrapper">
            <div class="expertise__icon-container">
              <Transition
                enter-active-class="transition-opacity duration-300"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity duration-300"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ImageSkeleton
                  v-show="!isIconLoaded(tech.name)"
                  rounded="rounded-xl"
                  className="expertise__icon-skeleton"
                />
              </Transition>
              <img
                :src="tech.icon"
                :alt="tech.name"
                class="expertise__icon-img"
                :class="{
                  'expertise__icon-img--loaded': isIconLoaded(tech.name),
                }"
                @load="handleIconLoad(tech.name)"
              />
            </div>
            <span class="expertise__name">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .expertise {
    @apply w-full py-10;
  }
  /*
.expertise {
  @apply w-full py-10;
}
*/

  .expertise__container {
    @apply relative mx-auto aspect-square w-[15rem] rounded-full border border-gray-200 bg-gray-50 dark:border-zinc-700/10 dark:bg-zinc-900/5 lg:w-80;
  }

  /*
.expertise__container {
  @apply relative lg:w-80 w-[19rem] mx-auto aspect-square
         bg-gray-50 dark:bg-zinc-900/5
         border border-gray-200 dark:border-zinc-700/10
         rounded-full;
}
*/

  .expertise__circle {
    @apply absolute inset-0 rounded-full;
  }

  .expertise__center {
    @apply absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white dark:border-zinc-700/10 dark:bg-zinc-900/10;
  }
  /*
.expertise__center {
  @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
         w-16 h-16 
         flex items-center justify-center
         rounded-full
         bg-white dark:bg-zinc-900/10
         border border-gray-200 dark:border-zinc-700/10;
}
*/

  .expertise__center-skeleton {
    @apply absolute left-1/2 top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2;
  }

  /*
.expertise__center-skeleton {
  @apply w-8 h-8  
         absolute
         left-1/2 top-1/2
         -translate-x-1/2 -translate-y-1/2
         z-10;
}
*/

  .expertise__center-gif {
    @apply absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0;
  }

  .expertise__center-gif--loaded {
    @apply z-20 opacity-70;
  }

  .expertise__item {
    @apply absolute;
  }

  .expertise__icon-wrapper {
    @apply flex flex-col items-center gap-2 rounded-xl bg-gray-50 p-4 transition-all duration-300 group-hover:scale-110 dark:bg-zinc-900/10;
  }

  /*
.expertise__icon-wrapper {
  @apply flex flex-col items-center gap-2
         p-4 rounded-xl
         bg-gray-50 dark:bg-zinc-900/10
         transition-all duration-300
         group-hover:scale-110;
}
*/

  .expertise__icon-container {
    @apply relative h-10 w-10 lg:h-12 lg:w-12;
  }

  .expertise__icon-skeleton {
    @apply absolute inset-0 z-10 h-12 w-12;
  }

  /*
.expertise__icon-container {
  @apply relative w-12 h-12;
}

.expertise__icon-skeleton {
  @apply w-12 h-12 absolute inset-0 z-10;
}
*/

  .expertise__icon-img {
    @apply absolute inset-0 h-12 w-12 opacity-0 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0;
  }
  /*
.expertise__icon-img {
  @apply w-12 h-12
         opacity-0 grayscale
         transition-all duration-300
         group-hover:opacity-100 group-hover:grayscale-0
         absolute inset-0;
}
*/

  .expertise__icon-img--loaded {
    @apply z-20 opacity-70;
  }

  .expertise__name {
    @apply text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white;
  }
</style>
