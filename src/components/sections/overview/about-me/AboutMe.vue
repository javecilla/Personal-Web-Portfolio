<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ImageSkeleton from '@/components/ImageSkeleton.vue'
import Image from '@/components/ui/Image.vue'
import profileImage from '@global/images/pogi.jpg'

const imageLoaded = ref(false)
const desktopImageLoaded = ref(false)
const mobileImageLoaded = ref(false)

const handleDesktopImageLoad = () => {
  desktopImageLoaded.value = true
  updateImageLoadedState()
}

const handleMobileImageLoad = () => {
  mobileImageLoaded.value = true
  updateImageLoadedState()
}

const updateImageLoadedState = () => {
  imageLoaded.value = desktopImageLoaded.value && mobileImageLoaded.value
}

const initializeApp = async () => {
  try {
    return true
  } catch (error) {
    console.error('Error initializing app:', error)
    return false
  }
}

onMounted(async () => {
  await initializeApp()
})

const IMAGE_DIMENSIONS = {
  mobile: {
    width: 150,
    height: 300
  },
  desktop: {
    width: 250,
    height: 417 // Using 5:3 aspect ratio
  }
}
</script>

<template>
  <section
    class="dark:bg-zinc-900/10 bg-gray-50 rounded-2xl transition-all duration-500 ease-in-out space-y-6 p-3 xl:p-2"
  >
    <div class="about-me__grid">
      <!-- Mobile Image Container -->
      <div class="about-me__mobile-image">
        <div
          class="about-me__image-wrapper"
          :style="`min-height: ${IMAGE_DIMENSIONS.mobile.height}px`"
        >
          <div class="about-me__image-container">
            <Transition
              enter-active-class="transition-opacity duration-300"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              mode="out-in"
            >
              <ImageSkeleton
                v-if="!imageLoaded"
                :width="IMAGE_DIMENSIONS.mobile.width"
                :height="IMAGE_DIMENSIONS.mobile.height"
                rounded="rounded-2xl"
                className="about-me__skeleton"
              />
            </Transition>
            <Image
              :src="profileImage"
              :width="IMAGE_DIMENSIONS.mobile.width"
              :height="IMAGE_DIMENSIONS.mobile.height"
              alt="Profile"
              variant="profile"
              rounded="2xl"
              :class="['about-me__image', { 'opacity-0': !mobileImageLoaded }]"
              @load="handleMobileImageLoad"
            >
              <template #overlay>
                <div class="about-me__image-overlay"></div>
              </template>
            </Image>
          </div>
        </div>
      </div>

      <!-- Content Section -->
      <div class="about-me__content">
        <div class="about-me__text-container">
          <h4 class="about-me__title">About Me</h4>

          <div class="about-me__timeline">
            <div class="about-me__timeline-line"></div>

            <!-- Timeline Items -->
            <div class="about-me__timeline-item">
              <div class="about-me__timeline-marker first_paragraph"></div>
              <p class="about-me__text">
                Hello, I'm Jerome Avecilla. I am an
                <strong>IT student</strong> with a professional mindset,
                actively building my career as a
                <strong>Full-Stack Web Developer</strong>. Based in the
                Philippines, I go beyond the classroom to architect and build
                robust web applications using <strong>Vue.js</strong>,
                <strong>TypeScript</strong>, and <strong>Laravel</strong>.
              </p>
            </div>

            <div class="about-me__timeline-item">
              <div class="about-me__timeline-marker second_paragraph"></div>
              <p class="about-me__text">
                I actively enhance my skills through
                <strong>project-based learning</strong>, taking on diverse
                challenges across <strong>client work</strong>,
                <strong>academic projects</strong>, and
                <strong>personal initiatives</strong>. I treat every deliverable
                with professional dedication, ensuring that my code is clean,
                scalable, and user-centric.
              </p>
            </div>

            <div class="about-me__timeline-item">
              <div class="about-me__timeline-marker third_paragraph"></div>
              <p class="about-me__text">
                Currently, I am focused on mastering cloud technologies and
                system architecture. I am eager to connect with industry
                professionals and take on challenges that will accelerate my
                transition from a student to a seasoned developer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Desktop Image -->
      <div class="about-me__desktop-image">
        <div
          class="about-me__desktop-image-wrapper"
          :style="`min-height: ${IMAGE_DIMENSIONS.desktop.height}px`"
        >
          <Transition
            enter-active-class="transition-opacity duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            mode="out-in"
          >
            <ImageSkeleton
              v-if="!imageLoaded"
              :width="IMAGE_DIMENSIONS.desktop.width"
              :height="IMAGE_DIMENSIONS.desktop.height"
              rounded="rounded-3xl"
              className="about-me__skeleton"
            />
          </Transition>
          <div class="about-me__desktop-image-container">
            <Image
              :src="profileImage"
              :width="IMAGE_DIMENSIONS.desktop.width"
              :height="IMAGE_DIMENSIONS.desktop.height"
              alt="Profile"
              variant="interactive"
              rounded="sm"
              :class="['about-me__image', { 'opacity-0': !desktopImageLoaded }]"
              @load="handleDesktopImageLoad"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-me__grid {
  @apply grid md:grid-cols-[1fr,300px] gap-4 sm:gap-6;
  min-height: 300px; /* Prevent layout shift */
}

.about-me__mobile-image {
  @apply md:hidden space-y-6;
}

.about-me__image-wrapper {
  @apply relative w-full h-[150px] sm:h-[300px];
  contain: layout size;
}

.about-me__image-container {
  @apply absolute inset-0 rounded-2xl overflow-hidden;
}

.about-me__image-overlay {
  @apply absolute inset-0 rounded-2xl bg-black opacity-20;
}

.about-me__content {
  @apply space-y-6 p-3 xl:p-5 rounded-2xl flex flex-col justify-end transition-all duration-500 ease-in-out;
}

.about-me__text-container {
  @apply relative space-y-4 sm:space-y-6 text-left p-3 xl:p-5 flex-grow;
}

.about-me__title {
  @apply dark:text-white text-gray-600 text-2xl sm:text-3xl font-bold block mb-8;
}

.about-me__timeline {
  @apply space-y-4 relative;
}

.about-me__timeline-line {
  @apply absolute left-[18px] top-[15px] w-[2px] h-[calc(100%-40px)] xl:h-[calc(105%-40px)] dark:bg-zinc-800/90 bg-gray-300/80;
}

.about-me__timeline-item {
  @apply relative pl-10 sm:pl-20;
}

.about-me__timeline-marker {
  @apply absolute left-[9px] top-1 w-5 h-5;
}

.about-me__timeline-marker::before {
  @apply absolute inset-0 rounded-full dark:bg-zinc-800/100 bg-gray-300/80 border-2 dark:border-transparent border-white;
  content: '';
}

.about-me__timeline-marker.second_paragraph {
  @apply mt-[50px] md:mt-[25px];
}
.about-me__timeline-marker.third_paragraph {
  @apply mt-[100px] md:mt-[50px];
}

.about-me__text {
  @apply text-[var(--text-body)] dark:text-[var(--text-body-dark)] text-sm sm:text-base leading-relaxed;
}

.about-me__link {
  @apply font-medium;
}

.about-me__desktop-image {
  @apply hidden md:block space-y-4 p-5;
}

.about-me__desktop-image-wrapper {
  @apply relative w-full aspect-3-4 md:w-[250px];
  contain: layout size;
}

.about-me__desktop-image-container {
  @apply absolute inset-0 rounded-3xl overflow-hidden;
}

.about-me__skeleton {
  @apply absolute inset-0 w-full h-full;
  contain: layout size;
}

.aspect-3-4 {
  aspect-ratio: 3 / 5;
}
</style>
