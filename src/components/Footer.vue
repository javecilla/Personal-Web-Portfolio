<script setup lang="ts">
  import picture from '@global/images/formal_black.png'
  import Image from '@/components/ui/Image.vue'
</script>

<template>
  <footer class="footer">
    <!-- Background Glow Effect -->
    <div class="footer__background"></div>

    <div class="footer__container group">
      <!-- Add group class here -->
      <div class="footer__header">
        <!-- Profile & Details -->
        <div class="footer__profile">
          <div class="footer__profile-wrapper">
            <Image
              :src="picture"
              alt="User"
              class="h-full w-full"
              :show-skeleton="true"
              rounded="full"
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
      <h5 class="footer__title">I don’t just code all day!</h5>
      <p class="footer__message">
        Beyond my coding skills, I’m not just a keyboard warrior. I’m a huge
        basketball fan, a swimming enthusiast, an avid hiker, and always
        planning my next travel adventure. But wait... that’s not all! I’m also
        an online gaming aficionado. On mobile, you’ll catch me in Wild Rift and
        Teamfight Tactics (League of Legends), and for PC, I’m all about League
        of Legends, and Crossfire. So, if you’re up for a game or want to
        collaborate on a web development project (or both), hit me up! Let’s
        team up, code, and maybe win some matches along the way! 🔥
      </p>
    </div>
  </footer>
</template>
`
<style scoped>
  .footer {
    @apply relative m-0 mx-auto -mb-[33px] w-full max-w-5xl overflow-hidden p-0 text-gray-300 dark:text-gray-200;
  }

  .footer__background {
    @apply absolute inset-0 h-full w-full opacity-50 dark:opacity-25;
    background:
      linear-gradient(
        to bottom,
        rgb(9, 9, 9) 10%,
        transparent 100%,
        transparent 0%,
        rgb(9, 9, 9) 80%
      ),
      radial-gradient(
        circle at center,
        theme('colors.orange.500/20'),
        theme('colors.yellow.500/10'),
        transparent 40%
      );
    filter: blur(60px);
  }

  /* Background Glow - Light mode only */
  :root:not(.dark) .footer__background {
    background:
      linear-gradient(
        to bottom,
        rgb(255, 255, 255) 10%,
        transparent 100%,
        transparent 0%,
        rgb(255, 255, 255) 80%
      ),
      radial-gradient(
        circle at center,
        theme('colors.orange.500/10'),
        theme('colors.yellow.400/5'),
        transparent 40%
      );
    @apply opacity-90;
  }

  .footer__container {
    @apply relative z-10 mb-8 mt-8 flex flex-col items-center space-y-4 p-6 text-center sm:space-y-6 sm:p-16 md:p-28;
  }

  .footer__header {
    @apply flex items-start gap-3 sm:gap-4;
  }
  .footer__profile {
    @apply relative flex-shrink-0;
  }

  .footer__profile-wrapper {
    @apply relative h-12 w-12;
  }

  .footer__info {
    @apply space-y-0.5 text-left;
  }

  .footer__name {
    @apply text-lg font-bold;
  }

  .footer__role {
    @apply text-sm text-gray-400;
  }

  .footer__title {
    @apply bg-gradient-to-r from-[var(--gradient-orange-yellow-start)] to-[var(--gradient-orange-yellow-end)] bg-clip-text px-4 text-2xl font-bold text-transparent sm:px-0 sm:text-3xl md:text-4xl lg:text-5xl;
  }

  .footer__message {
    @apply mx-auto max-w-[280px] px-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:max-w-xl sm:px-0 sm:text-base md:max-w-2xl lg:max-w-4xl;
  }

  /* Message - Light mode only */
  :root:not(.dark) .footer__message {
    @apply text-gray-600;
  }
</style>
