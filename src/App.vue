<script setup lang="ts">
import { ref } from "vue";

import PageLoader from "@/components/PageLoader.vue";
import PageTransition from "@/components/PageTransition.vue";
import CustomCursor from "@/components/CustomCursor.vue";
import MouseLight from "@/components/MouseLight.vue";
import NavBar from "@/components/NavBar.vue";
import OverviewSection from "@/components/sections/overview/OverviewSection.vue";
import TechStackSection from "./components/sections/skills/TechStackSection.vue";
import ProjectsSection from "@/components/sections/projects/ProjectsSection.vue";
import AchievementsSection from "@/components/sections/achievements/AchievementsSection.vue";

const isLoaded = ref(false);
const assetsLoaded = ref(false);

const handleLoadComplete = () => {
	assetsLoaded.value = true;
	setTimeout(() => {
		isLoaded.value = true;
	}, 100);
};
</script>

<template>
	<div
		class="max-w-[1400px] mx-auto bg-white dark:bg-[#060606] text-gray-900 dark:text-white transition-all duration-500 ease-in-out"
	>
		<CustomCursor />
		<MouseLight />
		<PageLoader @load-complete="handleLoadComplete" />
		<PageTransition :is-loaded="isLoaded" class="w-full">
			<NavBar />

			<main class="py-3 sm:py-8 space-y-6">
				<OverviewSection />
				<TechStackSection />
				<ProjectsSection />
				<AchievementsSection />
			</main>

			<footer
				class="border-t dark:border-zinc-800 border-gray-200 transition-all duration-500"
			>
				<div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
					<div
						class="text-center dark:text-gray-400 text-gray-600 text-sm mt-8"
					>
						© 2022-{{ new Date().getFullYear() }} (Jerome Avecilla). All rights
						reserved.
					</div>
				</div>
			</footer>
		</PageTransition>
	</div>
</template>

<style>
/* Tailwind Directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Fonts */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

/* Global Classes */
@layer components {
	/* Section Classes */
	.section-bg {
		@apply dark:bg-zinc-900/10 bg-gray-50 transition-all duration-500 ease-in-out;
	}

	.section-title {
		@apply dark:text-white text-gray-600;
	}

	.section-text {
		@apply dark:text-gray-400 text-gray-600;
	}

	/* Button Classes */
	.btn {
		@apply px-4 py-2 rounded-md transition-all duration-300;
	}

	.btn-primary {
		@apply bg-blue-500 text-white hover:bg-blue-600;
	}

	/* Card Classes */
	.card {
		@apply rounded-xl shadow-lg transition-all duration-300;
	}

	.card-hover {
		@apply hover:scale-105;
	}

	/* Project Section Classes */
	.project-gradient {
		@apply bg-gradient-to-r from-blue-500 to-purple-500;
	}

	.project-icon-btn {
		@apply inline-flex items-center justify-center rounded-full 
			   dark:bg-zinc-800 bg-gray-200 dark:hover:bg-zinc-700 
			   hover:bg-gray-300 transition-all duration-300;
	}

	.project-tech-badge {
		@apply flex items-center gap-2 px-4 py-2 rounded-full 
			   dark:bg-zinc-800 bg-gray-200 dark:hover:bg-zinc-700 
			   hover:bg-gray-300 transition-all duration-300;
	}
}

/* Root Variables */
:root {
	--font-inter: "Inter", sans-serif;
}

/* Base Styles */
html,
body {
	min-height: 100vh;
}

body {
	font-family: var(--font-inter);
}

html.dark {
	color-scheme: dark;
	background-color: #000000;
	transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar for dark mode */
html.dark ::-webkit-scrollbar-track {
	background: #18181b;
}

html.dark ::-webkit-scrollbar-thumb {
	background: #27272a;
}

html.dark ::-webkit-scrollbar-thumb:hover {
	background: #3f3f46;
}

/* Custom scrollbar for light mode */
::-webkit-scrollbar-track {
	background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
	background: #888;
}

::-webkit-scrollbar-thumb:hover {
	background: #555;
}

/* Smooth scroll behavior */
html {
	scroll-behavior: smooth;
	transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover animations */
a,
button {
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Utility Classes */
.overview {
	margin-top: 10px !important;
}

.aspiring-job-title {
	line-height: 55px;
}

.grayscale {
	filter: grayscale(100%);
}

/* Global Transitions */
* {
	transition-property: background-color, border-color, color, fill, stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 500ms;
}
</style>
