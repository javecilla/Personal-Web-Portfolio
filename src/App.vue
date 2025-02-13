<script setup lang="ts">
import { ref, defineAsyncComponent, onMounted } from "vue";
import { useStore } from '@/store';
import PageLoader from "@/components/PageLoader.vue";
import PageTransition from "@/components/PageTransition.vue";
import CustomCursor from "@/components/CustomCursor.vue";
import NavBar from "@/components/NavBar.vue";
import ErrorBoundary from "@/components/ErrorBoundary.vue";

// Simplified loading states
const store = useStore();
const isContentVisible = ref(false);

// Add layout transition control
const layoutReady = ref(false);

onMounted(() => {
  // Wait for initial render and fonts
  Promise.all([
    document.fonts.ready,
    new Promise(resolve => requestAnimationFrame(resolve))
  ]).then(() => {
    layoutReady.value = true;
    store.commit('setInitialLoadComplete');
    setTimeout(() => {
      isContentVisible.value = true;
    }, 100); // Reduced delay
  });

  // Failsafe timeout reduced
  setTimeout(() => {
    layoutReady.value = true;
    store.commit('setInitialLoadComplete');
    isContentVisible.value = true;
  }, 2000);
});

// Watch for Suspense component load state
const onComponentsLoaded = () => {
  store.commit('setComponentsLoaded');
};

// Optimize component loading
const components = {
  MouseLight: defineAsyncComponent(() => import("@/components/MouseLight.vue")),
  OverviewSection: defineAsyncComponent(() => import("@/components/sections/overview/OverviewSection.vue")),
  TechStackSection: defineAsyncComponent(() => import("@/components/sections/skills/TechStackSection.vue")),
  ProjectsSection: defineAsyncComponent(() => import("@/components/sections/projects/ProjectsSection.vue")),
  AchievementsSection: defineAsyncComponent(() => import("@/components/sections/achievements/AchievementsSection.vue")),
  ExperiencesEducationSection: defineAsyncComponent(() => import("@/components/sections/experiences_education/ExperiencesEducationSection.vue")),
};
</script>

<template>
  <div class="min-h-screen" :class="{ 'ready': layoutReady }">
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
        <PageTransition :is-loaded="store.getters.isFullyLoaded" class="w-full">
          <NavBar />
          <main class="py-3 sm:py-8">
            <ErrorBoundary>
              <Suspense @resolve="onComponentsLoaded">
                <template #default>
                  <!-- Wrap multiple components in a single root div for Suspense -->
                  <div class="space-y-4 sm:space-y-6">
                    <div data-section="overview">
                      <components.OverviewSection />
                    </div>
                    <components.TechStackSection />
                    <components.ProjectsSection />
                    <components.AchievementsSection />
                    <components.ExperiencesEducationSection />
                  </div>
                </template>
                <template #fallback>
                  <!-- Wrap skeleton in a single root div -->
                  <div class="space-y-4 sm:space-y-6">
                    <div
                      class="space-y-4 sm:space-y-6 w-[80vw] md:w-[1250px] ml-0 md:-ml-[26px] overflow-x-hidden md:overflow-x-visible max-w-full"
                    >
                      <!-- Overview Section Skeleton -->
                      <section class="space-y-3 sm:space-y-4 overflow-hidden">
                        <div class="flex flex-col md:flex-row gap-4 sm:gap-8 md:gap-12">
                          <!-- Introduction Part -->
                          <div class="w-full md:w-1/2 space-y-4 sm:space-y-6">
                            <div class="space-y-3 sm:space-y-4">
                              <div
                                class="h-8 sm:h-12 bg-gray-200 dark:bg-zinc-800 rounded-lg w-3/4"
                              ></div>
                              <div
                                class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full"
                              ></div>
                              <div
                                class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-5/6"
                              ></div>
                            </div>
                            <div class="flex flex-wrap gap-2 sm:gap-3">
                              <div
                                class="h-6 sm:h-8 w-20 sm:w-24 bg-gray-200 dark:bg-zinc-800 rounded-full"
                              ></div>
                              <div
                                class="h-6 sm:h-8 w-24 sm:w-28 bg-gray-200 dark:bg-zinc-800 rounded-full"
                              ></div>
                              <div
                                class="h-6 sm:h-8 w-16 sm:w-20 bg-gray-200 dark:bg-zinc-800 rounded-full"
                              ></div>
                            </div>
                          </div>
                          <!-- Code Editor Part -->
                          <div class="w-full md:w-1/2">
                            <div
                              class="bg-gray-200 dark:bg-zinc-800 rounded-xl aspect-[16/9] w-full"
                            ></div>
                          </div>
                        </div>
                      </section>

                      <!-- Tech Stack Section Skeleton -->
                      <section
                        class="section-bg p-3 sm:p-6 rounded-xl sm:rounded-2xl space-y-4 sm:space-y-6 overflow-hidden"
                      >
                        <div class="text-center space-y-3 sm:space-y-4">
                          <div
                            class="h-6 sm:h-8 bg-gray-200 dark:bg-zinc-800 rounded-lg w-40 sm:w-48 mx-auto"
                          ></div>
                          <div
                            class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-[95%] sm:w-2/3 mx-auto"
                          ></div>
                        </div>

                        <!-- Expertise Grid -->
                        <div
                          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-6"
                        >
                          <div
                            v-for="n in 10"
                            :key="n"
                            class="relative flex flex-col items-center justify-center p-2 sm:p-6 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-zinc-800/50"
                          >
                            <div
                              class="w-8 sm:w-12 h-8 sm:h-12 bg-gray-200 dark:bg-zinc-800 rounded"
                            ></div>
                            <div
                              class="mt-2 sm:mt-3 h-3 sm:h-4 w-12 sm:w-16 bg-gray-200 dark:bg-zinc-800 rounded"
                            ></div>
                          </div>
                        </div>

                        <!-- Skills Grid -->
                        <div class="space-y-6 sm:space-y-8 mt-8 sm:mt-12">
                          <div v-for="n in 6" :key="n" class="space-y-3 sm:space-y-4">
                            <div
                              class="h-5 sm:h-6 bg-gray-200 dark:bg-zinc-800 rounded w-24 sm:w-32"
                            ></div>
                            <div
                              class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4"
                            >
                              <div
                                v-for="i in 4"
                                :key="i"
                                class="flex items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-zinc-800/50"
                              >
                                <div
                                  class="w-6 sm:w-8 h-6 sm:h-8 bg-gray-200 dark:bg-zinc-800 rounded"
                                ></div>
                                <div
                                  class="h-3 sm:h-4 w-10 sm:w-16 bg-gray-200 dark:bg-zinc-800 rounded"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <!-- Projects Section Skeleton -->
                      <section
                        class="section-bg p-3 sm:p-6 rounded-xl sm:rounded-2xl space-y-4 sm:space-y-6 overflow-hidden"
                      >
                        <div class="text-center space-y-3">
                          <div
                            class="h-6 sm:h-8 bg-gray-200 dark:bg-zinc-800 rounded-lg w-40 sm:w-48 mx-auto"
                          ></div>
                          <div
                            class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-[95%] sm:w-2/3 mx-auto"
                          ></div>
                        </div>

                        <!-- Project Filter -->
                        <div
                          class="flex justify-start sm:justify-center gap-2 sm:gap-4 my-4 sm:my-6 overflow-x-auto pb-2 px-1"
                        >
                          <div
                            v-for="n in 5"
                            :key="n"
                            class="h-6 sm:h-8 w-20 sm:w-24 bg-gray-200 dark:bg-zinc-800 rounded-full flex-shrink-0"
                          ></div>
                        </div>

                        <!-- Project Grid -->
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
                        >
                          <div
                            v-for="n in 3"
                            :key="n"
                            class="group rounded-lg sm:rounded-xl bg-gray-100 dark:bg-zinc-800/50 p-3 sm:p-4 space-y-3 sm:space-y-4"
                          >
                            <div
                              class="aspect-video bg-gray-200 dark:bg-zinc-800 rounded-lg"
                            ></div>
                            <div class="space-y-2 sm:space-y-3">
                              <div
                                class="h-5 sm:h-6 bg-gray-200 dark:bg-zinc-800 rounded w-[90%]"
                              ></div>
                              <div
                                class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-[95%]"
                              ></div>
                            </div>
                            <div class="flex flex-wrap gap-2">
                              <div
                                v-for="i in 3"
                                :key="i"
                                class="h-6 sm:h-8 w-6 sm:w-8 bg-gray-200 dark:bg-zinc-800 rounded-full"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <!-- Achievements Section Skeleton -->
                      <section
                        class="section-bg p-3 sm:p-6 rounded-xl sm:rounded-2xl space-y-4 sm:space-y-6 overflow-hidden"
                      >
                        <div class="text-center space-y-3">
                          <div
                            class="h-6 sm:h-8 bg-gray-200 dark:bg-zinc-800 rounded-lg w-40 sm:w-48 mx-auto"
                          ></div>
                          <div
                            class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full sm:w-2/3 mx-auto"
                          ></div>
                        </div>

                        <div
                          class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-4 sm:mt-8"
                        >
                          <div
                            class="aspect-video bg-gray-200 dark:bg-zinc-800 rounded-lg sm:rounded-xl"
                          ></div>
                          <div class="space-y-3 sm:space-y-4">
                            <div
                              class="h-5 sm:h-6 bg-gray-200 dark:bg-zinc-800 rounded w-1/4"
                            ></div>
                            <div
                              class="h-6 sm:h-8 bg-gray-200 dark:bg-zinc-800 rounded w-3/4"
                            ></div>
                            <div class="space-y-2">
                              <div
                                class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full"
                              ></div>
                              <div
                                class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-5/6"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <!-- Experiences/Education Section Skeleton -->
                      <section
                        class="section-bg p-3 sm:p-6 rounded-xl sm:rounded-2xl overflow-hidden"
                      >
                        <div class="text-center space-y-3 mb-6 sm:mb-8">
                          <div
                            class="h-6 sm:h-8 bg-gray-200 dark:bg-zinc-800 rounded-lg w-48 sm:w-64 mx-auto"
                          ></div>
                          <div
                            class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full sm:w-2/3 mx-auto"
                          ></div>
                        </div>

                        <div class="relative">
                          <!-- Timeline Line -->
                          <div
                            class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-zinc-800 transform -translate-x-1/2"
                          ></div>

                          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <!-- Experience Side -->
                            <div class="space-y-4 sm:space-y-6">
                              <div
                                v-for="n in 2"
                                :key="n"
                                class="bg-gray-100 dark:bg-zinc-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 space-y-3"
                              >
                                <div
                                  class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-1/3"
                                ></div>
                                <div
                                  class="h-5 sm:h-6 bg-gray-200 dark:bg-zinc-800 rounded w-3/4"
                                ></div>
                                <div
                                  class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-1/2"
                                ></div>
                                <div class="space-y-2">
                                  <div
                                    class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full"
                                  ></div>
                                  <div
                                    class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-5/6"
                                  ></div>
                                </div>
                              </div>
                            </div>

                            <!-- Education Side -->
                            <div class="space-y-4 sm:space-y-6">
                              <div
                                v-for="n in 2"
                                :key="n"
                                class="bg-gray-100 dark:bg-zinc-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 space-y-3"
                              >
                                <div
                                  class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-1/3"
                                ></div>
                                <div
                                  class="h-5 sm:h-6 bg-gray-200 dark:bg-zinc-800 rounded w-3/4"
                                ></div>
                                <div
                                  class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-1/2"
                                ></div>
                                <div class="space-y-2">
                                  <div
                                    class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full"
                                  ></div>
                                  <div
                                    class="h-3 sm:h-4 bg-gray-200 dark:bg-zinc-800 rounded w-5/6"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </template>
              </Suspense>
            </ErrorBoundary>
          </main>
          <footer
            class="border-t dark:border-zinc-800 border-gray-200 transition-all duration-500"
          >
            <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center dark:text-gray-400 text-gray-600 text-sm mt-8">
                © 2022-{{ new Date().getFullYear() }} (Jerome Avecilla). All rights
                reserved.
              </div>
            </div>
          </footer>
        </PageTransition>
      </div>
    </Transition>
  </div>
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