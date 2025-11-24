<script setup lang="ts">
  import ElegantShape from '@/components/ElegantShape.vue'

  withDefaults(
    defineProps<{
      badge?: string
      title1?: string
      title2?: string
    }>(),
    {
      badge: 'Jerome Avecilla',
      title1: 'Aspiring',
      title2: 'Full-Stack Developer',
    }
  )
</script>

<template>
  <div
    class="relative -mx-[calc(100vw-100%)] flex min-h-[80vh] w-screen items-center justify-center overflow-hidden bg-[#030303]"
  >
    <div
      class="absolute inset-0 w-screen bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl"
    />

    <div class="absolute inset-0 w-screen overflow-hidden">
      <ElegantShape
        :delay="0.3"
        :width="600"
        :height="140"
        :rotate="12"
        gradient="from-indigo-500/[0.15]"
        class-name="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
      />
      <ElegantShape
        :delay="0.5"
        :width="500"
        :height="120"
        :rotate="-15"
        gradient="from-rose-500/[0.15]"
        class-name="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
      />
    </div>

    <div class="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
      <div class="mx-auto max-w-3xl text-center">
        <div
          class="animate-fadeUp mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 opacity-0 md:mb-12"
        >
          <span class="text-sm tracking-wide text-white/60">{{ badge }}</span>
        </div>

        <h1
          class="animate-fadeUp mb-6 text-4xl font-bold tracking-tight opacity-0 sm:text-6xl md:mb-8 md:text-8xl"
        >
          <span
            class="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent"
            >{{ title1 }}</span
          >
          <br />
          <span
            class="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent"
          >
            {{ title2 }}
          </span>
        </h1>
      </div>
    </div>

    <div
      class="pointer-events-none absolute inset-0 w-screen bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80"
    />
  </div>
</template>

<style scoped>
  .animate-fadeUp {
    animation: fadeUp 1s cubic-bezier(0.25, 0.4, 0.25, 1) forwards;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1.animate-fadeUp {
    animation-delay: 0.7s;
  }

  .inline-flex.animate-fadeUp {
    animation-delay: 0.5s;
  }
</style>
