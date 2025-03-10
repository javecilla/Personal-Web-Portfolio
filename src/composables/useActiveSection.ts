import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection() {
  const activeSection = ref('#about')

  const updateActiveSection = () => {
    const sections = document.querySelectorAll('section[id]')
    const scrollPosition = window.scrollY + window.innerHeight / 3

    for (const section of sections) {
      // Type assertion to HTMLElement
      const element = section as HTMLElement
      const sectionTop = element.offsetTop
      const sectionHeight = element.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        const hash = `#${element.id}`
        if (activeSection.value !== hash) {
          activeSection.value = hash
          window.history.replaceState({}, '', hash)
          window.dispatchEvent(new HashChangeEvent('hashchange'))
        }
        break
      }
    }
  }

  // Throttle scroll event
  let ticking = false
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSection()
        ticking = false
      })
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Set initial active section
    updateActiveSection()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    activeSection
  }
}
