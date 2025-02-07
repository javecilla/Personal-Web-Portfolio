<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ImageSkeleton from '@/components/ImageSkeleton.vue';
import InteractiveImage from '@/components/InteractiveImage.vue';
import TechStackGrid from '@/components/TechStackGrid.vue';
import profileImage from '@global/assets/images/pogi.jpg'; 

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
  // Only set imageLoaded to true when both images are loaded
  imageLoaded.value = desktopImageLoaded.value && mobileImageLoaded.value;
};

// Add any additional initialization logic here
const initializeApp = async () => {
  try {
    // Example: Load initial data
    // await fetchUserData();
    // await loadConfigurations();
    return true;
  } catch (error) {
    console.error('Error initializing app:', error);
    return false;
  }
};

onMounted(async () => {
  await initializeApp();
});
</script>

<template>
  <section class="space-y-6">
    <!-- Profile Section -->
    <div class="grid md:grid-cols-[1fr,300px] gap-4 sm:gap-6">
      <!-- Profile Image for mobile -->
      <div class="md:hidden space-y-6 dark:bg-zinc-900/50 bg-gray-100 p-3 xl:p-5 rounded-2xl transition-all duration-500 ease-in-out">
        <div class="relative w-full h-[250px] sm:h-[300px]">
          <div class="absolute inset-0 rounded-2xl overflow-hidden">
            <div class="relative w-full h-full">
              <Transition
                enter-active-class="transition-opacity duration-300"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
              >
                <ImageSkeleton 
                  v-if="!imageLoaded" 
                  rounded="rounded-2xl"
                  className="absolute inset-0 w-full h-full" 
                />
              </Transition>
              <img 
                :src="profileImage" 
                alt="Profile" 
                class="w-full h-full object-cover object-center rounded-2xl transition-transform transform hover:scale-105"
                :class="{ 'opacity-0': !mobileImageLoaded }"
                @load="handleMobileImageLoad"
              />
              <div class="absolute inset-0 rounded-2xl bg-black opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Overview/Introduction -->
      <div class="space-y-6 dark:bg-zinc-900/50 bg-gray-100 p-3 xl:p-5 rounded-2xl flex flex-col justify-end transition-all duration-500 ease-in-out">
        <div class="relative space-y-4 sm:space-y-6 text-left p-3 xl:p-5 flex-grow">
          <h2 class="text-3xl sm:text-4xl md:text-5xl dark:text-gray-400 text-gray-600 font-bold">
            Aspiring <span class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Full-Stack</span>
            <span class="block mt-[-0.5rem] sm:mt-0 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Web Developer
            </span>
          </h2>
          <span class="text-2xl sm:text-3xl font-bold dark:text-white text-gray-600 block"><span class="dark:text-gray-500 text-gray-400">Hi, I'm</span> Jerome Avecilla</span>
          <p class="dark:text-gray-400 text-gray-600 text-sm sm:text-base overview">
            <!-- A second-year BSIT student with a passion for web development. Since 2021, I have been honing my skills in HTML, CSS, and JavaScript, among other technologies. My commitment to continuous learning and innovation drives me to create forward-thinking solutions in a rapidly evolving industry. I thrive on tackling new challenges and am eager to apply my technical expertise to build dynamic, user-centric web applications.   -->
            I build modern, responsive, robust web applications using Vue.js, TypeScript, Laravel and a range of innovative tools. I’m passionate about turning creative ideas into interactive, user-friendly experiences that not only look great but work seamlessly. Whether it’s crafting intuitive interfaces or optimizing performance, I focus on delivering digital solutions that help businesses and users connect effectively.
          </p>
        </div>
      </div>

      <!-- Profile Image for desktop -->
      <div class="hidden md:block space-y-6 dark:bg-zinc-900/50 bg-gray-100 p-6 rounded-2xl transition-all duration-500 ease-in-out">
        <div class="relative w-full h-full md:w-[250px] p-4">
          <div class="absolute inset-0 rounded-3xl overflow-hidden">
            <InteractiveImage
              :src="profileImage"
              alt="Profile"
              :is-loaded="desktopImageLoaded"
              @load="handleDesktopImageLoad"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Tech Stack Section -->
    <div class="space-y-8 dark:bg-zinc-900/50 bg-gray-100 p-6 rounded-2xl transition-all duration-500 ease-in-out">
      <div class="space-y-4">
        <h2 class="text-2xl sm:text-3xl font-bold dark:text-white text-gray-600">
          Technical Expertise
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          These technologies empower me to create dynamic, responsive, and high-performance web applications.
        </p>
      </div>
      <TechStackGrid />
    </div>
  </section>
</template>

<style scoped>
</style>