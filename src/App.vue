<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from "vue";
import { storeToRefs } from 'pinia'
import { useRootStore } from '@/stores/root';
import ErrorBoundary from "@/components/ErrorBoundary.vue";
import PageSkeleton from "@/components/PageSkeleton.vue";
import PageLoader from "@/components/PageLoader.vue";
import PageTransition from "@/components/PageTransition.vue";
import CustomCursor from "@/components/CustomCursor.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import ChatButton from "@/components/chat/ChatButton.vue";
import BackToTop from "@/components/BackToTop.vue";
import { useActiveSection } from '@/composables/useActiveSection';

const store = useRootStore();
const { isFullyLoaded } = storeToRefs(store);
const { setInitialLoadComplete, setComponentsLoaded } = store;

const isContentVisible = ref(false);
const layoutReady = ref(false);

onMounted(() => {
  // Wait for initial render and fonts
  Promise.all([
    document.fonts.ready,
    new Promise(resolve => requestAnimationFrame(resolve))
  ]).then(() => {
    layoutReady.value = true;
    setInitialLoadComplete();
    setTimeout(() => {
      isContentVisible.value = true;
    }, 100);
  });

  // Failsafe timeout reduced
  setTimeout(() => {
    layoutReady.value = true;
    setInitialLoadComplete();   
    isContentVisible.value = true;
  }, 2000);

  // Handle initial fragment navigation
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000); 
  }
});

const onComponentsLoaded = () => {
  setComponentsLoaded();
};

const components = {
  MouseLight: defineAsyncComponent(() => import("@/components/MouseLight.vue")),
  OverviewSection: defineAsyncComponent(() => import("@/components/sections/overview/OverviewSection.vue")),
  TechStackSection: defineAsyncComponent(() => import("@/components/sections/skills/TechStackSection.vue")),
  ProjectsSection: defineAsyncComponent(() => import("@/components/sections/projects/ProjectsSection.vue")),
  AchievementsSection: defineAsyncComponent(() => import("@/components/sections/achievements/AchievementsSection.vue")),
  ExperiencesEducationSection: defineAsyncComponent(() => import("@/components/sections/experiences_education/ExperiencesEducationSection.vue")),
  TestimonialsSection: defineAsyncComponent(() => import("@/components/sections/testimonials/TestimonialsSection.vue")),
  FAQSection: defineAsyncComponent(() => import("@/components/sections/faqs/FAQSection.vue")),
  ContactSection: defineAsyncComponent(() => import("@/components/sections/contact/ContactSection.vue"))
};

useActiveSection();
</script>

<template>
  <main class="min-h-screen" :class="{ 'ready': layoutReady }">
    <PageLoader />

    <!-- Main content -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      mode="out-in"
    >
      <div v-show="isContentVisible">
        <CustomCursor />
        <components.MouseLight />
        <PageTransition 
          :is-loaded="isFullyLoaded" 
          class="w-full"
        >
          <NavBar />
        
          <ErrorBoundary>
            <Suspense @resolve="onComponentsLoaded">
              <template #default>
                <div class="space-y-4 sm:space-y-6">
                  <components.OverviewSection id="about" />
                  <components.TechStackSection id="skills" />
                  <components.ProjectsSection id="projects" />
                  <components.AchievementsSection id="certificates" />
                  <components.ExperiencesEducationSection id="experience" />
                  <components.TestimonialsSection />
                  <components.FAQSection />
                  <components.ContactSection id="contact" />
                </div>
              </template>
              <template #fallback>
                <div>
                  <PageSkeleton />
                </div>
              </template>
            </Suspense>
          </ErrorBoundary>
         
          <Footer />
        </PageTransition>
        <BackToTop />
      </div>
    </Transition>

    <ChatButton />
  </main>
</template>

<style>
.min-h-screen {
  min-height: 100vh;
  contain: layout size;
}

.ready {
  contain: none;
}
/* Component styles moved to src/assets/css/components.css */
</style>