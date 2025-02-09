/** * @component TechStackExpertise * @description Displays primary technical
expertise with interactive cards * Features hover effects, grayscale
transitions, and responsive grid layout */
<script setup lang="ts">
import { techStacksExpertise } from "@/data/techStackExpertise";
</script>

<template>
	<div class="expertise">
		<div class="expertise__grid">
			<div
				v-for="tech in techStacksExpertise"
				:key="tech.name"
				class="expertise__card group"
			>
				<div class="expertise__icon">
					<img :src="tech.icon" :title="tech.name" class="expertise__image" />
				</div>
				<span class="expertise__name">
					{{ tech.name }}
				</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* Main container */
.expertise {
	@apply w-full;
}

/* Grid layout */
.expertise__grid {
	@apply lg:ml-[225px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto;
}

/* Card styles */
.expertise__card {
	@apply relative flex flex-col items-center justify-center p-6 rounded-xl 
         dark:bg-zinc-900/10 bg-gray-50 transition-all duration-300 
         hover:scale-105 w-full;
}

/* Icon container */
.expertise__icon {
	@apply w-12 h-12 transition-all duration-300;
}

/* Image styles */
.expertise__image {
	@apply w-full h-full opacity-70 grayscale 
         group-hover:opacity-100 group-hover:grayscale-0 
         transition-all duration-300;
}

/* Name label */
.expertise__name {
	@apply mt-3 text-sm font-medium dark:text-gray-400 text-gray-600
         group-hover:text-gray-900 dark:group-hover:text-white;
}
</style>
