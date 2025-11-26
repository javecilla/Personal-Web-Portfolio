<script setup lang="ts">
  import Image from '@/components/ui/Image.vue'
  import profileImage from '@global/images/hodie_black.png'

  const IMAGE_DIMENSIONS = {
    mobile: {
      width: 150,
      height: 300,
    },
    desktop: {
      width: 250,
      height: 417, // Using 5:3 aspect ratio
    },
  }
</script>

<template>
  <section class="">
    <div class="about-me__grid">
      <!-- Mobile Image Container -->
      <div class="about-me__mobile-image">
        <div
          class="about-me__image-wrapper group"
          :style="`min-height: ${IMAGE_DIMENSIONS.mobile.height}px`"
        >
          <div class="about-me__image-container">
            <Image
              :src="profileImage"
              :width="IMAGE_DIMENSIONS.mobile.width"
              :height="IMAGE_DIMENSIONS.mobile.height"
              alt="Profile"
              variant="profile"
              rounded="2xl"
              :show-skeleton="true"
              skeleton-class="about-me__skeleton"
              class="group-hover:scale-[1.05] group-hover:opacity-90"
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
          class="about-me__desktop-image-wrapper group"
          :style="`min-height: ${IMAGE_DIMENSIONS.desktop.height}px`"
        >
          <div class="about-me__desktop-image-container">
            <Image
              :src="profileImage"
              :width="IMAGE_DIMENSIONS.desktop.width"
              :height="IMAGE_DIMENSIONS.desktop.height"
              alt="Profile"
              variant="interactive"
              rounded="sm"
              :show-skeleton="true"
              skeleton-class="about-me__skeleton"
              class="group-hover:scale-[1.05] group-hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .about-me__grid {
    @apply grid gap-4 sm:gap-6 md:grid-cols-[1fr,300px];
    min-height: 300px; /* Prevent layout shift */
  }

  .about-me__mobile-image {
    @apply space-y-6 md:hidden;
  }

  .about-me__image-wrapper {
    @apply relative h-[150px] w-full sm:h-[300px];
    contain: layout size;
  }

  .about-me__image-container {
    @apply absolute inset-0 overflow-hidden rounded-2xl;
  }

  .about-me__image-overlay {
    @apply absolute inset-0 rounded-2xl bg-black opacity-20;
  }

  .about-me__content {
    @apply flex flex-col justify-end space-y-6 rounded-2xl p-3 transition-all duration-500 ease-in-out xl:p-5;
  }

  .about-me__text-container {
    @apply relative flex-grow space-y-4 p-3 text-left sm:space-y-6 xl:p-5;
  }

  .about-me__title {
    @apply mb-8 block text-2xl font-bold text-gray-600 dark:text-white sm:text-3xl;
  }

  .about-me__timeline {
    @apply relative space-y-4;
  }

  .about-me__timeline-line {
    @apply absolute left-[18px] top-[15px] h-[calc(100%-40px)] w-[2px] bg-gray-300/80 dark:bg-zinc-800/90 xl:h-[calc(105%-40px)];
  }

  .about-me__timeline-item {
    @apply relative pl-10 sm:pl-20;
  }

  .about-me__timeline-marker {
    @apply absolute left-[9px] top-1 h-5 w-5;
  }

  .about-me__timeline-marker::before {
    @apply absolute inset-0 rounded-full border-2 border-white bg-gray-300/80 dark:border-transparent dark:bg-zinc-800/100;
    content: '';
  }

  .about-me__timeline-marker.second_paragraph {
    @apply mt-[50px] md:mt-[25px];
  }
  .about-me__timeline-marker.third_paragraph {
    @apply mt-[100px] md:mt-[50px];
  }

  .about-me__text {
    @apply text-sm leading-relaxed text-[var(--text-body)] dark:text-[var(--text-body-dark)] sm:text-base;
  }

  .about-me__link {
    @apply font-medium;
  }

  .about-me__desktop-image {
    @apply hidden space-y-4 p-5 md:block;
  }

  .about-me__desktop-image-wrapper {
    @apply aspect-3-4 relative w-full md:w-[250px];
    contain: layout size;
  }

  .about-me__desktop-image-container {
    @apply absolute inset-0 overflow-hidden rounded-3xl;
  }

  .about-me__skeleton {
    @apply absolute inset-0 h-full w-full;
    contain: layout size;
  }

  .aspect-3-4 {
    aspect-ratio: 3 / 5;
  }
</style>
