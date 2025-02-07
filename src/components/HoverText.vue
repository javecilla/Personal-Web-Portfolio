<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  text: string;
  className?: string;
}>();

const words = computed(() => props.text.split(' '));
</script>

<template>
  <h2 :class="className">
    <div class="block">
      <span
        v-for="(word, index) in words.slice(0, 2)"
        :key="index"
        class="cursor-default inline-block transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
      >
        {{ word }}{{ index !== 1 ? '\u00A0' : '' }}
      </span>
    </div>
    <div class="mt-2 block"> <!-- Added mt-2 for spacing -->
      <span
        v-for="(word, index) in words.slice(2)"
        :key="index"
        class="cursor-default inline-block transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
      >
        {{ word }}
      </span>
    </div>
  </h2>
</template>
