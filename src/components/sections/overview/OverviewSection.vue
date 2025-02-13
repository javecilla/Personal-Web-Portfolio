/** 
 * @component OverviewSection 
 * @description Main overview section of the portfolio that includes introduction and code editor 
 */
<script setup lang="ts">
import "prismjs/themes/prism-tomorrow.css";
import { ref } from "vue";
import Introduction from "@/components/sections/overview/introduction/Introduction.vue";
import CodeEditor from "@/components/sections/overview/code-editor/CodeEditor.vue";

const aboutMeCode = ref(
`<script setup lang="ts">
//code...
</\script>

<template>
  <section class="about-me">
    <div class="about-me__grid">
      <!-- Mobile Image Container -->
      <div class="about-me__mobile-image">
        <div class="about-me__image-wrapper">
          <div class="about-me__image-container">
            <Transition
              enter-active-class="transition-opacity duration-300"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
            >
              <ImageSkeleton
                v-if="!imageLoaded"
                rounded="rounded-2xl"
                className="about-me__skeleton"
              />
            </Transition>
            <BaseImage
              :src="profileImage"
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
                Currently, I work part-time as an IT Assistant at
                <BaseLink
                  href="https://www.goldenminds.edu.ph/"
                  ariaLabel="Visit Golden Minds Colleges website"
                  external
                  class="about-me__link"
                >
                  Golden Minds Colleges
                </BaseLink>
                , where I design, develop, and implement cutting-edge web-based
                applications while optimizing existing systems to adapt to
                evolving business needs and industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop Image -->
      <div class="about-me__desktop-image">
        <div class="about-me__desktop-image-wrapper">
          <Transition
            enter-active-class="transition-opacity duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
          >
            <ImageSkeleton
              v-if="!imageLoaded"
              rounded="rounded-3xl"
              className="about-me__skeleton"
            />
          </Transition>
          <div class="about-me__desktop-image-container">
            <BaseImage
              :src="profileImage"
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
 /*code...*/
</style>`.replace(/\n\n+/g, "\n")
);
</script>

<template>
	<section class="space-y-2 max-w-[1400px] -mb-[20px]">
    <Suspense>
      <template #default>
        <div class="gap-4 sm:gap-6">
          <div
            class="overflow-hidden lg:-mt-[40px] p-3 xl:p-5 rounded-2xl flex flex-col justify-end transition-all duration-500 ease-in-out"
          >
            <!-- Overview/Introduction Section -->
            <Introduction />

            <!-- Interactive Code Editor Section -->
            <CodeEditor :code="aboutMeCode" />
          </div>
        </div>
      </template>
      <template #fallback>
        <div class="flex items-center justify-center min-h-[400px]">
          <span class="text-lg">Loading...</span>
        </div>
      </template>
    </Suspense>
	</section>
</template>

<style>
/* Move critical styles inline */
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0.5rem;
}
</style>
