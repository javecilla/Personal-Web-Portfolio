/** * @component OverviewSection * @description Main overview section of the
portfolio that includes introduction and code editor */
<script setup lang="ts">
// Import base Prism styles for code highlighting
import "prismjs/themes/prism-tomorrow.css";
import { ref } from "vue";
import Introduction from "@components/sections/overview/introduction/Introduction.vue";
import CodeEditor from "@components/sections/overview/code-editor/CodeEditor.vue";

const aboutMeCode = ref(
`<script setup lang="ts">
//code...
</\script>

<template>
  <section class="about-section">
    <div class="about-section__container">
      <!-- Profile Section -->
      <div class="profile">
        <!-- Mobile Profile -->
        <div class="profile__mobile">
          <div class="profile__image-wrapper">
            <BaseImage
              src="/images/profile.jpg"
              alt="Jerome Avecilla - Full Stack Developer"
              class="profile__image"
              :class="{ 'profile__image--loaded': imageLoaded }"
              @load="handleImageLoad"
            >
              <template #skeleton>
                <ImageSkeleton class="profile__skeleton" />
              </template>
              <template #overlay>
                <div class="profile__overlay" />
              </template>
            </BaseImage>
          </div>
        </div>

        <!-- Content Section -->
        <div class="content">
          <div class="content__header">
            <h2 class="content__title">About Me</h2>
          </div>
          
          <!-- Timeline -->
          <div class="timeline">
            <div class="timeline__line" />
            
            <div class="timeline__items">
              <!-- Introduction -->
              <article class="timeline__item">
                <div class="timeline__marker" />
                <p class="timeline__text">
                  A passionate Full Stack Developer specializing in Vue.js, TypeScript, 
                  and modern web technologies. With a strong foundation in both frontend 
                  and backend development, I create scalable, performant applications 
                  following best practices and industry standards.
                </p>
              </article>

              <!-- Technical Skills -->
              <article class="timeline__item">
                <div class="timeline__marker" />
                <p class="timeline__text">
                  Proficient in: Vue.js ecosystem (Vue 3, Nuxt, Pinia), TypeScript,
                  TailwindCSS, Node.js, and modern development tools. Experienced in
                  implementing responsive designs, optimizing performance, and ensuring
                  accessibility compliance.
                </p>
              </article>

              <!-- Current Work -->
              <article class="timeline__item">
                <div class="timeline__marker" />
                <p class="timeline__text">
                  Currently working at 
                  <BaseLink 
                    href="https://goldenminds.edu.ph"
                    class="timeline__link"
                    external
                  >
                    Golden Minds Colleges
                  </BaseLink>
                  , developing and maintaining web applications while implementing
                  best practices in performance, SEO, and accessibility.
                </p>
              </article>
            </div>
          </div>
        </div>

        <!-- Desktop Profile -->
        <div class="profile__desktop">
          <BaseImage
            src="/images/profile.jpg"
            alt="Profile"
            class="profile__image profile__image--interactive"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
 /*code...*/
</style>`.replace(/\n\n+/g, "\n")
);
</script>

<template>
	<section class="space-y-2 max-w-[1400px] -mb-[20px]">
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
	</section>
</template>
