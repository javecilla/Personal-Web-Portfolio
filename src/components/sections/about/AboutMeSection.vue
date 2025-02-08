<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ImageSkeleton from '@/components/ImageSkeleton.vue';
import InteractiveImage from '@/components/InteractiveImage.vue';
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
  imageLoaded.value = desktopImageLoaded.value && mobileImageLoaded.value;
};

const initializeApp = async () => {
  try {
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
  <section class="space-y-6 p-3 xl:p-2 rounded-2xl transition-all duration-500 ease-in-out">
    <div class="grid md:grid-cols-[1fr,300px] gap-4 sm:gap-6">
      <div class="md:hidden space-y-6  ">
        <div class="relative w-full h-[150px] sm:h-[300px]">
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
      <div class="space-y-6 p-3 xl:p-5 rounded-2xl flex flex-col justify-end transition-all duration-500 ease-in-out">
        <div class="relative space-y-4 sm:space-y-6 text-left p-3 xl:p-5 flex-grow">
          <span class="text-2xl sm:text-3xl font-bold dark:text-white text-gray-600 block mb-8">
            About Me
          </span>
          
          <div class="space-y-4 relative">
            <div class="absolute left-[18px] top-[15px] w-[2px] h-[calc(100%-40px)] xl:h-[calc(105%-40px)] bg-zinc-800/90"></div>
            <div class="relative pl-10 sm:pl-20">
              <div class="absolute left-[9px] top-1">
                <div class="w-5 h-5">
                  <div class="absolute inset-0 rounded-full bg-zinc-800/100"></div>
                </div>
              </div>
              <p class="dark:text-gray-400 text-gray-600 text-sm sm:text-base">
                Hello, I'm Jerome Avecilla—a 20-year-old BSIT student with a passion for web development. Since 2021, I've been honing my skills in HTML, CSS, JavaScript and now expanding my knowledge in modern frameworks like Vue.js, enabling me to create user-friendly digital experiences that boost engagement and streamline processes.
              </p>
            </div>

            <!-- Paragraph 2 -->
            <div class="relative pl-10 sm:pl-20">
              <div class="absolute left-[9px] top-[30%]">
                <div class="w-5 h-5">
                  <div class="absolute inset-0 rounded-full bg-zinc-800/100"></div>
                </div>
              </div>
              <p class="dark:text-gray-400 text-gray-600 text-sm sm:text-base">
                I am committed to continuous learning and thrive in collaborative environments where innovative ideas come to life. Whether working independently or as part of a team, I consistently strive to develop solutions that not only meet client needs but also deliver measurable results.
              </p>
            </div>

            <!-- Paragraph 3 -->
            <div class="relative pl-10 sm:pl-20">
              <div class="absolute left-[9px] top-[80%]">
                <div class="w-5 h-5">
                  <div class="absolute inset-0 rounded-full bg-zinc-800/100"></div>
                </div>
              </div>
              <p class="dark:text-gray-400 text-gray-600 text-sm sm:text-base">
                Currently, I work part-time as an IT Assistant at 
                <a 
                  href="https://www.goldenminds.edu.ph/" 
                  target="_blank" 
                  class="dark:text-gray-400 text-gray-600 hover:opacity-80 transition-opacity"
                >
                  Golden Minds Colleges
                </a>, where I design, develop, and implement cutting-edge web-based applications while optimizing existing systems to adapt to evolving business needs and industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Profile Image for desktop -->
      <div class="hidden md:block space-y-4 p-5">
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
  </section>
</template>

<style scoped>
</style>