import { ref } from 'vue'

interface SwipeOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  threshold?: number
}

export function useSwipe(options: SwipeOptions = {}) {
  const startX = ref(0)
  const startY = ref(0)
  const endX = ref(0)
  const endY = ref(0)

  const { threshold = 50 } = options

  function onTouchStart(event: TouchEvent) {
    startX.value = event.touches[0].clientX
    startY.value = event.touches[0].clientY
  }

  function onTouchMove(event: TouchEvent) {
    endX.value = event.touches[0].clientX
    endY.value = event.touches[0].clientY
  }

  function onTouchEnd() {
    const diffX = startX.value - endX.value
    const diffY = Math.abs(startY.value - endY.value)

    // Ensure horizontal swipe by checking if horizontal movement is greater than vertical
    if (Math.abs(diffX) > diffY && Math.abs(diffX) > threshold) {
      if (diffX > 0 && options.onSwipeLeft) {
        options.onSwipeLeft()
      } else if (diffX < 0 && options.onSwipeRight) {
        options.onSwipeRight()
      }
    }
  }

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }
}
