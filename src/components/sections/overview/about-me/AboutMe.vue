<script setup lang="ts">
import { ref, onMounted } from "vue";
import ImageSkeleton from "@/components/ImageSkeleton.vue";
import BaseImage from '@/components/base/BaseImage.vue';
import profileImage from "@global/images/pogi.jpg";

const imageLoaded = ref(false);
const desktopImageLoaded = ref(false);
const mobileImageLoaded = ref(false);

const handleDesktopImageLoad = () => {
	desktopImageLoaded.value = true;
	updateImageLoadedState();
};

const handleMobileImageLoad = () => {
	mobileImageLoaded.value = true;
	updateImageLoadedState();
};

const updateImageLoadedState = () => {
	imageLoaded.value = desktopImageLoaded.value && mobileImageLoaded.value;
};

const initializeApp = async () => {
	try {
		return true;
	} catch (error) {
		console.error("Error initializing app:", error);
		return false;
	}
};

onMounted(async () => {
	await initializeApp();
});

const IMAGE_DIMENSIONS = {
  mobile: {
    width: 150,
    height: 300
  },
  desktop: {
    width: 250,
    height: 417 // Using 5:3 aspect ratio
  }
};
</script>

<template>
  <section class="dark:bg-zinc-900/10 bg-gray-50 rounded-2xl transition-all duration-500 ease-in-out space-y-6 p-3 xl:p-2">
    <div class="about-me__grid">
      <!-- Mobile Image Container -->
      <div class="about-me__mobile-image">
        <div class="about-me__image-wrapper" :style="`min-height: ${IMAGE_DIMENSIONS.mobile.height}px`">
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
            <BaseImage
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
            </BaseImage>
          </div>
        </div>
      </div>

      <!-- Content Section -->
      <div class="about-me__content">
        <div class="about-me__text-container">
          <span class="about-me__title">About Me</span>

          <div class="about-me__timeline">
            <div class="about-me__timeline-line"></div>
            
            <!-- Timeline Items -->
            <div class="about-me__timeline-item">
              <div class="about-me__timeline-marker first_paragraph"></div>
              <p class="about-me__text">
                Hello, I'm Jerome Avecilla—a 20-year-old BSIT student with a
                passion for web development. Since 2021, I've been honing my
                skills in HTML, CSS, JavaScript and now expanding my knowledge
                in modern frameworks like Vue.js, enabling me to create
                user-friendly digital experiences that boost engagement and
                streamline processes.
              </p>
            </div>

            <div class="about-me__timeline-item">
              <div class="about-me__timeline-marker second_paragraph"></div>
              <p class="about-me__text">
                I am committed to continuous learning and thrive in
                collaborative environments where innovative ideas come to life.
                Whether working independently or as part of a team, I
                consistently strive to develop solutions that not only meet
                client needs but also deliver measurable results.
              </p>
            </div>

            <div class="about-me__timeline-item">
              <div class="about-me__timeline-marker third_paragraph"></div>
              <p class="about-me__text">
                I'm currently honing my skills through side projects and exploring new technologies in web development. Always eager to collaborate with talented minds and inspire others on this journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop Image -->
      <div class="about-me__desktop-image">
        <div class="about-me__desktop-image-wrapper" :style="`min-height: ${IMAGE_DIMENSIONS.desktop.height}px`">
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
            <BaseImage
              :src="profileImage"
              :width="IMAGE_DIMENSIONS.desktop.width"
              :height="IMAGE_DIMENSIONS.desktop.height"
              alt="Profile"
              variant="interactive"
              rounded="3xl"
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
