<script setup lang="ts">
  import 'prismjs/themes/prism-tomorrow.css'
  import { ref } from 'vue'
  import Introduction from '@/components/sections/overview/Introduction.vue'
  import AboutMeSection from '@/components/sections/overview/AboutMe.vue'
  import AppleWebView from '@/components/AppleWebView.vue'
  import CodeEditor from '@/components/CodeEditor.vue'
  import { min } from 'lodash'

  defineProps<{
    id?: string
  }>()

  const aboutMeCode = ref(
    `<script setup lang="ts">
   /*code...*/
</\script>

<template>
  <section class="space-y-6 rounded-2xl bg-gray-50 p-3 transition-all duration-500 ease-in-out dark:bg-zinc-900/10 xl:p-2">
    <div class="about-me__grid">
      <!-- Mobile Image Container -->
      <div class="about-me__mobile-image">
        <div class="about-me__image-wrapper">
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
          class="about-me__desktop-image-wrapper">
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
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  /*code...*/
</style>`.replace(/\n\n+/g, '\n')
  )
</script>

<template>
  <section :id="id" class="overview">
    <Suspense>
      <template #default>
        <div class="gap-4 sm:gap-6">
          <div
            class="flex flex-col justify-end overflow-hidden rounded-2xl p-3 transition-all duration-500 ease-in-out lg:-mt-[15px] xl:p-5"
          >
            <!-- Overview/Introduction Section -->
            <Introduction />

            <!-- Interactive Apple WebView with Code Editor -->
            <AppleWebView :tabs="['Preview', 'Code']" default-tab="preview">
              <!-- Preview Tab Content -->
              <template #preview>
                <AboutMeSection />
              </template>

              <!-- Code Tab Content -->
              <template #code>
                <CodeEditor :code="aboutMeCode" language="vue" />
              </template>
            </AppleWebView>
          </div>
        </div>
      </template>
      <template #fallback>
        <div class="flex min-h-[400px] items-center justify-center">
          <span class="text-lg">Loading...</span>
        </div>
      </template>
    </Suspense>
  </section>
</template>

<style>
  .overview {
    @apply w-full;
  }
  /* Move critical styles inline */
  .space-y-2 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 0.5rem;
  }
  .about-me__text {
    /* make the text justify */
    @apply text-justify;
  }
</style>
