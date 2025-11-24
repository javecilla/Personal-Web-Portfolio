<script setup lang="ts"></script>

<template>
  <!-- Wrap skeleton in a single root div -->
  <div class="space-y-4 sm:space-y-6">
    <div
      class="ml-0 w-[80vw] max-w-full space-y-4 overflow-x-hidden sm:space-y-6 md:-ml-[26px] md:w-[1250px] md:overflow-x-visible"
    >
      <!-- Overview Section Skeleton -->
      <section class="space-y-3 overflow-hidden sm:space-y-4">
        <div class="flex flex-col gap-4 sm:gap-8 md:flex-row md:gap-12">
          <!-- Introduction Part -->
          <div class="w-full space-y-4 sm:space-y-6 md:w-1/2">
            <div class="space-y-3 sm:space-y-4">
              <div
                class="h-8 w-3/4 rounded-lg bg-gray-200 dark:bg-zinc-800 sm:h-12"
              ></div>
              <div
                class="h-3 w-full rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
              ></div>
              <div
                class="h-3 w-5/6 rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
              ></div>
            </div>
            <div class="flex flex-wrap gap-2 sm:gap-3">
              <div
                class="h-6 w-20 rounded-full bg-gray-200 dark:bg-zinc-800 sm:h-8 sm:w-24"
              ></div>
              <div
                class="h-6 w-24 rounded-full bg-gray-200 dark:bg-zinc-800 sm:h-8 sm:w-28"
              ></div>
              <div
                class="h-6 w-16 rounded-full bg-gray-200 dark:bg-zinc-800 sm:h-8 sm:w-20"
              ></div>
            </div>
          </div>
          <!-- Code Editor Part -->
          <div class="w-full md:w-1/2">
            <div
              class="aspect-[16/9] w-full rounded-xl bg-gray-200 dark:bg-zinc-800"
            ></div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Section Skeleton -->
      <section
        class="section-bg space-y-4 overflow-hidden rounded-xl p-3 sm:space-y-6 sm:rounded-2xl sm:p-6"
      >
        <div class="space-y-3 text-center sm:space-y-4">
          <div
            class="mx-auto h-6 w-40 rounded-lg bg-gray-200 dark:bg-zinc-800 sm:h-8 sm:w-48"
          ></div>
          <div
            class="mx-auto h-3 w-[95%] rounded bg-gray-200 dark:bg-zinc-800 sm:h-4 sm:w-2/3"
          ></div>
        </div>

        <!-- Expertise Grid -->
        <div
          class="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5"
        >
          <div
            v-for="n in 10"
            :key="n"
            class="relative flex flex-col items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-zinc-800/50 sm:rounded-xl sm:p-6"
          >
            <div
              class="h-8 w-8 rounded bg-gray-200 dark:bg-zinc-800 sm:h-12 sm:w-12"
            ></div>
            <div
              class="mt-2 h-3 w-12 rounded bg-gray-200 dark:bg-zinc-800 sm:mt-3 sm:h-4 sm:w-16"
            ></div>
          </div>
        </div>

        <!-- Skills Grid -->
        <div class="mt-8 space-y-6 sm:mt-12 sm:space-y-8">
          <div v-for="n in 6" :key="n" class="space-y-3 sm:space-y-4">
            <div
              class="h-5 w-24 rounded bg-gray-200 dark:bg-zinc-800 sm:h-6 sm:w-32"
            ></div>
            <div
              class="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
            >
              <div
                v-for="i in 4"
                :key="i"
                class="flex items-center gap-1 rounded-lg bg-gray-100 p-2 dark:bg-zinc-800/50 sm:gap-2 sm:rounded-xl sm:p-3"
              >
                <div
                  class="h-6 w-6 rounded bg-gray-200 dark:bg-zinc-800 sm:h-8 sm:w-8"
                ></div>
                <div
                  class="h-3 w-10 rounded bg-gray-200 dark:bg-zinc-800 sm:h-4 sm:w-16"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section Skeleton -->
      <section
        class="section-bg space-y-4 overflow-hidden rounded-xl p-3 sm:space-y-6 sm:rounded-2xl sm:p-6"
      >
        <div class="space-y-3 text-center">
          <div
            class="mx-auto h-6 w-40 rounded-lg bg-gray-200 dark:bg-zinc-800 sm:h-8 sm:w-48"
          ></div>
          <div
            class="mx-auto h-3 w-[95%] rounded bg-gray-200 dark:bg-zinc-800 sm:h-4 sm:w-2/3"
          ></div>
        </div>

        <!-- Project Filter -->
        <div
          class="my-4 flex justify-start gap-2 overflow-x-auto px-1 pb-2 sm:my-6 sm:justify-center sm:gap-4"
        >
          <div
            v-for="n in 5"
            :key="n"
            class="h-6 w-20 flex-shrink-0 rounded-full bg-gray-200 dark:bg-zinc-800 sm:h-8 sm:w-24"
          ></div>
        </div>

        <!-- Project Grid -->
        <div
          class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          <div
            v-for="n in 3"
            :key="n"
            class="group space-y-3 rounded-lg bg-gray-100 p-3 dark:bg-zinc-800/50 sm:space-y-4 sm:rounded-xl sm:p-4"
          >
            <div
              class="aspect-video rounded-lg bg-gray-200 dark:bg-zinc-800"
            ></div>
            <div class="space-y-2 sm:space-y-3">
              <div
                class="h-5 w-[90%] rounded bg-gray-200 dark:bg-zinc-800 sm:h-6"
              ></div>
              <div
                class="h-3 w-[95%] rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
              ></div>
            </div>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="i in 3"
                :key="i"
                class="h-6 w-6 rounded-full bg-gray-200 dark:bg-zinc-800 sm:h-8 sm:w-8"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Achievements Section Skeleton -->
      <section
        class="section-bg space-y-4 overflow-hidden rounded-xl p-3 sm:space-y-6 sm:rounded-2xl sm:p-6"
      >
        <div class="space-y-3 text-center">
          <div
            class="mx-auto h-6 w-40 rounded-lg bg-gray-200 dark:bg-zinc-800 sm:h-8 sm:w-48"
          ></div>
          <div
            class="mx-auto h-3 w-full rounded bg-gray-200 dark:bg-zinc-800 sm:h-4 sm:w-2/3"
          ></div>
        </div>

        <div
          class="mt-4 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-8 md:grid-cols-2"
        >
          <div
            class="aspect-video rounded-lg bg-gray-200 dark:bg-zinc-800 sm:rounded-xl"
          ></div>
          <div class="space-y-3 sm:space-y-4">
            <div
              class="h-5 w-1/4 rounded bg-gray-200 dark:bg-zinc-800 sm:h-6"
            ></div>
            <div
              class="h-6 w-3/4 rounded bg-gray-200 dark:bg-zinc-800 sm:h-8"
            ></div>
            <div class="space-y-2">
              <div
                class="h-3 w-full rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
              ></div>
              <div
                class="h-3 w-5/6 rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experiences/Education Section Skeleton -->
      <section
        class="section-bg overflow-hidden rounded-xl p-3 sm:rounded-2xl sm:p-6"
      >
        <div class="mb-6 space-y-3 text-center sm:mb-8">
          <div
            class="mx-auto h-6 w-48 rounded-lg bg-gray-200 dark:bg-zinc-800 sm:h-8 sm:w-64"
          ></div>
          <div
            class="mx-auto h-3 w-full rounded bg-gray-200 dark:bg-zinc-800 sm:h-4 sm:w-2/3"
          ></div>
        </div>

        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 transform bg-gray-200 dark:bg-zinc-800 md:block"
          ></div>

          <div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <!-- Experience Side -->
            <div class="space-y-4 sm:space-y-6">
              <div
                v-for="n in 2"
                :key="n"
                class="space-y-3 rounded-lg bg-gray-100 p-3 dark:bg-zinc-800/50 sm:rounded-xl sm:p-4"
              >
                <div
                  class="h-3 w-1/3 rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
                ></div>
                <div
                  class="h-5 w-3/4 rounded bg-gray-200 dark:bg-zinc-800 sm:h-6"
                ></div>
                <div
                  class="h-3 w-1/2 rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
                ></div>
                <div class="space-y-2">
                  <div
                    class="h-3 w-full rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
                  ></div>
                  <div
                    class="h-3 w-5/6 rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Education Side -->
            <div class="space-y-4 sm:space-y-6">
              <div
                v-for="n in 2"
                :key="n"
                class="space-y-3 rounded-lg bg-gray-100 p-3 dark:bg-zinc-800/50 sm:rounded-xl sm:p-4"
              >
                <div
                  class="h-3 w-1/3 rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
                ></div>
                <div
                  class="h-5 w-3/4 rounded bg-gray-200 dark:bg-zinc-800 sm:h-6"
                ></div>
                <div
                  class="h-3 w-1/2 rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
                ></div>
                <div class="space-y-2">
                  <div
                    class="h-3 w-full rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
                  ></div>
                  <div
                    class="h-3 w-5/6 rounded bg-gray-200 dark:bg-zinc-800 sm:h-4"
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

<style scope></style>
