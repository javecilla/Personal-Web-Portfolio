<script setup lang="ts">
import { techStackAndSkills } from '@/data/techStackAndSkills';
</script>

<template>
    <!-- Tech Stack Categories with Hover Effect -->
    <div class="max-w-4xl mx-auto space-y-6">
        <div class="flex flex-wrap gap-6 justify-center">
          <div v-for="category in techStackAndSkills" :key="category.id" class="flex flex-col items-center">
            <div 
              class="group bg-gray-100 dark:bg-zinc-900/50 p-4 rounded-xl flex flex-col items-center transition-all duration-300 hover:scale-105"
              :class="{
                'w-full sm:w-auto': true,
                'sm:min-w-fit': category.skills.length <= 2,
                'sm:w-auto': category.skills.length > 2
              }"
            >
              <div 
                class="flex flex-wrap gap-3 justify-center items-center"
                :class="{
                  'sm:flex-nowrap': category.skills.length <= 4
                }"
              >
                <div 
                  v-for="skill in category.skills" 
                  :key="skill.name" 
                  class="flex items-center justify-center transition-all duration-300"
                >
                  <img 
                    :src="skill.icon" 
                    :alt="skill.name"
                    :title="skill.name"
                    class="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <span class="mt-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                {{ category.label }}
              </span>
            </div>
          </div>
        </div>
      </div>
</template>