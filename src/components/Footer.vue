<script setup lang="ts">
import { ref } from 'vue';
import picture from '@global/images/formal.png';
import ImageSkeleton from "@/components/ImageSkeleton.vue";

const isImageLoaded = ref(false);

const handleImageLoad = () => {``
  isImageLoaded.value = true;
};
</script>

<template>
  <footer class="footer">
    <!-- Background Glow Effect -->
    <div class="footer__background"></div>

    <div class="footer__container group"> <!-- Add group class here -->
      <div class="footer__header">
        <!-- Profile & Details -->
        <div class="footer__profile">
          <div class="footer__profile-wrapper">
            <Transition
              enter-active-class="transition-opacity duration-300"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
            >
              <ImageSkeleton
                v-show="!isImageLoaded"
                rounded="rounded-full"
                className="footer__profile-skeleton"
              />
            </Transition>
            <img
              :src="picture"
              alt="User"
              class="footer__profile-image"
              :class="{ 'footer__profile-image--loaded': isImageLoaded }"
              @load="handleImageLoad"
            />
          </div>
        </div>

        <!-- User Info -->
        <div class="footer__info">
          <h2 class="footer__name">Jerome Avecilla</h2>
          <p class="footer__role">Full-Stack Web Developer</p>
        </div>
      </div>

      <!-- Message with glowing background -->
      <h4 class="footer__title">I don’t just code all day!</h4>
      <p class="footer__message">
        Beyond my coding skills, I’m not just a keyboard warrior—I’m a huge basketball fan, a swimming enthusiast, an avid hiker, and always planning my next travel adventure. But wait... that’s not all! I’m also an online gaming aficionado. On mobile, you’ll catch me in Wild Rift (League of Legends), and for PC, I’m all about Valorant, League of Legends, and Crossfire.
        So, if you’re up for a game or want to collaborate on a web development project (or both), hit me up! Let’s team up, code, and maybe win some matches along the way! 🎮
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  @apply relative p-0 m-0 w-full max-w-5xl mx-auto overflow-hidden
         text-gray-300 dark:text-gray-200 -mb-[33px];
}

.footer__background {
  @apply absolute inset-0 w-full h-full opacity-50 dark:opacity-25;
  background: 
    linear-gradient(to bottom, 
      rgb(9, 9, 9) 10%,
      transparent 100%,
      transparent 0%,
      rgb(9, 9, 9) 80%
    ),
    radial-gradient(
      circle at center,
      theme('colors.blue.700/20'),
      theme('colors.purple.500/10'),
      transparent 40%
    );
  filter: blur(60px);
}

/* Background Glow - Light mode only */
:root:not(.dark) .footer__background {
  background: linear-gradient(to bottom, 
      rgb(255, 255, 255) 10%,
      transparent 100%,
      transparent 0%,
      rgb(255, 255, 255) 80%
    ),
    radial-gradient(
      circle at center,
      theme('colors.blue.500/10'),
      theme('colors.purple.400/5'),
      transparent 40%
    );
  @apply opacity-90;
}

.footer__container {
  @apply flex flex-col items-center text-center 
         space-y-4 sm:space-y-6 
         mt-8 mb-8 
         relative z-10 
         p-6 sm:p-16 md:p-28;
}

.footer__header {
  @apply flex items-start gap-3 sm:gap-4;
}
.footer__profile {
  @apply relative flex-shrink-0;
}

.footer__profile-wrapper {
  @apply relative w-12 h-12;
}

.footer__profile-skeleton {
  @apply absolute inset-0 z-10;
}

.footer__profile-image {
  @apply w-full h-full rounded-full  transition-all duration-300
         absolute inset-0 opacity-0;
}

.footer__profile-image--loaded {
  @apply opacity-100 z-20;
}

.footer__info {
  @apply text-left space-y-0.5;
}

.footer__name {
  @apply font-bold text-lg;
}

.footer__role {
  @apply text-sm text-gray-400;
}


.footer__title {
  @apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
         font-bold bg-gradient-to-r from-blue-500 to-purple-500 
         bg-clip-text text-transparent
         px-4 sm:px-0; 
}

.footer__message {
  @apply dark:text-gray-400 text-gray-600 
         text-sm sm:text-base 
         max-w-[280px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl 
         mx-auto leading-relaxed
         px-4 sm:px-0;
}

/* Message - Light mode only */
:root:not(.dark) .footer__message {
  @apply text-gray-600;
}

</style>