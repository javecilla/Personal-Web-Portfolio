<script setup lang="ts">
import { ref } from "vue";
import type { Experience, Education } from "@/types/experience";  // Fixed import path
import { experiences, education } from "@/data/experiences";

// Convert readonly arrays to mutable arrays for refs
const experiencess = ref<Experience[]>([...experiences]);
const educations = ref<Education[]>([...education]);
const isExperienceHovered = ref(false);
const isEducationHovered = ref(false);
</script>

<template>
	<section class="experiences-education section-bg">
		<div class="experiences-education__header">
			<h2 class="section-title">Work Experiences and Educational Background</h2>
			<p class="section-text">
				My professional journey and academic achievements that have shaped my
				career path in technology and development.
			</p>
		</div>

		<div class="experiences-education__content relative min-h-[600px]">
			<!-- Mobile Titles -->
			<div class="md:hidden space-y-8 px-4 mb-6">
					<h2 class="timeline-center-title">Work Experience</h2>
			</div>

			<!-- Frames -->
			<div class="frames-container">
				<!-- Experience Frame -->
				<div
					class="frame frame--left"
					@mouseenter="isExperienceHovered = true"
					@mouseleave="isExperienceHovered = false"
				>
					<div class="frame__dot frame__dot--lt"></div>
					<div class="frame__dot frame__dot--lb"></div>
					<div class="frame__content frame__content--left">
						<div
							v-for="experience in experiencess"
							:key="experience.company"
							class="frame__content--card experience__card"
						>
							<div class="card__content">
								<span class="card__content--date"
									>{{ experience.startDate }} - {{ experience.endDate }}</span
								>
									<h3 class="card_content--title">{{ experience.position }}</h3>
								<span class="card_content--subtitle"
									>{{ experience.company }} - {{ experience.location }}</span
								>
								<p class="card__content--description">
									{{ experience.description }}
								</p>
							</div>
						</div>
					</div>
					<div class="frame__blocker frame__blocker--left"></div>
				</div>

				<!-- Mobile Education Title -->
				<div class="md:hidden space-y-8 px-4 mt-12 mb-6">
						<h2 class="timeline-center-title timeline-center-title__education">Education</h2>
				</div>

				<!-- Education Frame -->
				<div
					class="frame frame--right"
					@mouseenter="isEducationHovered = true"
					@mouseleave="isEducationHovered = false"
				>
					<div class="frame__dot frame__dot--rt"></div>
					<div class="frame__dot frame__dot--rb"></div>
					<div class="frame__content frame__content--right">
						<div
							v-for="education in educations"
							:key="education.school"
							class="frame__content--card education__card"
						>
							<div class="card__content">
								<span class="card__content--date"
									>{{ education.startDate }} - {{ education.endDate }}</span
									>
									<h3 class="card_content--title">
									{{ education.degree }}
								</h3>
								<span class="card_content--subtitle"
									>{{ education.school }} - {{ education.campus }}</span
								>
								<p class="card__content--description">
									{{ education.description }}
								</p>
							</div>
						</div>
					</div>
					<div class="frame__blocker frame__blocker--right"></div>
				</div>
			</div>

			<!-- Desktop Timeline Line with Titles (hidden on mobile) -->
			<div class="timeline-center-content hidden md:block">
				<div class="timeline-vertical-line"></div>
				<div class="timeline-center-titles">
					<div class="timeline-title-wrapper experience">
							<h2 class="timeline-center-title">Work Experience</h2>
					</div>
					<div class="timeline-title-wrapper education">
							<h2 class="timeline-center-title">Education</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.experiences-education {
	@apply space-y-6 p-6 rounded-2xl;
}

.experiences-education__header {
	@apply space-y-3 mb-8 px-4 flex flex-col items-center;
}

.section-title {
	@apply text-start lg:text-center;
}

.section-text {
	@apply text-start lg:text-center max-w-3xl;
}

.frames-container {
	@apply relative w-full h-full flex justify-between gap-8 px-8
         md:flex-row flex-col;
}

.frame {
	@apply relative bg-transparent border-2 
         dark:border-zinc-800/90 border-gray-300/80 rounded-xl
         hover:border-blue-500/50 transition-all duration-300
         md:w-auto w-full;
}
.frame__dot {
	@apply absolute w-5 h-5 rounded-full dark:bg-zinc-800/100 bg-gray-300/80 
         border-2 dark:border-transparent border-white z-30
         transition-all duration-500 ease-in-out;
}
.frame__blocker {
	@apply dark:bg-[#060606] bg-gray-50;
}
.frame__content {
	@apply p-6 space-y-4 relative z-50;
}

.frame__content--card {
	@apply rounded-xl text-start relative z-50;
}

.card__content {
	@apply space-y-2 relative z-50;
}

.card__content--date {
	@apply inline-flex items-center rounded-[5px] bg-gray-200 dark:bg-zinc-800/30 
         px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300;
}

.card_content--title {
	@apply text-lg md:text-xl font-bold text-gray-900 dark:text-white;
}

.card_content--subtitle {
	@apply block text-sm text-gray-600 dark:text-gray-300 font-semibold;
}

.card__content {
	@apply mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed;
}

/* Left Frame */
.experience__card {
	@apply w-full md:w-[450px] mb-6;
}
.frame--left {
	@apply md:w-[380px] w-full md:h-[530px] 
         md:translate-x-[70px] md:translate-y-[70px]
         translate-x-0 translate-y-0 z-20;
}
.frame__dot--lt {
	@apply top-[40px] left-[-10px];
}

.frame__dot--lb {
	@apply top-[460px] left-[-10px];
}
.frame__blocker--left {
	@apply absolute top-[60px] left-[-6px] w-[12px] h-[415px] z-10;
}

.frame__content--left {
	@apply mt-[65px] md:-ml-[115px] ml-0 space-y-6;
}

/* Right Frame */
.frame__content--right {
	@apply mt-[60px] md:mr-[50px] mr-0 space-y-8;
}
.education__card {
	@apply w-full md:w-[480px] mb-6;
}
.frame--right {
	@apply md:w-[100px] w-full md:h-[530px]  
         md:-translate-x-[350px] md:translate-y-[10px]
         translate-x-0 translate-y-0 z-20;
}

.frame__dot--rt {
	@apply top-[40px] right-[-10px];
}

.frame__dot--rb {
	@apply top-[460px] right-[-10px];
}
.frame__blocker--right {
	@apply absolute top-[60px] right-[-6px] w-[12px] h-[415px] z-10;
}

.timeline-center-content {
	@apply absolute left-1/2 top-0 w-full h-full transform -translate-x-1/2;
}

.timeline-vertical-line {
	@apply absolute left-1/2 top-0 w-[2px] h-full 
         dark:bg-zinc-800/10 bg-gray-300/20 transform -translate-x-1/2 z-0
         transition-all duration-500 ease-in-out;
}

.timeline-center-titles {
	@apply absolute left-1/2 top-1/2 h-full transform -translate-x-1/2 flex flex-col items-center;
}

.timeline-title-wrapper {
	@apply relative flex items-center justify-center;
}

.timeline-title-wrapper.experience {
	@apply translate-x-[-50px] translate-y-[10%] transform rotate-90;
}

.timeline-title-wrapper.education {
	@apply translate-x-[50px] -translate-y-[300%] transform -rotate-90;
}

.timeline-title-gradient {
	@apply text-gray-900 dark:text-[#F3F3F3];
}

.timeline-center-title {
	@apply text-3xl font-bold tracking-[0.1em] whitespace-nowrap
         text-gray-900 dark:text-[#F3F3F3] opacity-90 uppercase
         md:text-5xl;
}

/* Add hover styles for frames */
.frame--left:hover {
	@apply border-blue-500/50;
}

.frame--right:hover {
	@apply border-blue-500/50;
}

/* Add hover styles for dots */
.frame--left:hover .frame__dot,
.frame--right:hover .frame__dot {
	@apply border-blue-500/50;
}

/* Experience hover effects */
.frame--left:hover ~ .timeline-center-content .timeline-vertical-line {
	@apply bg-gradient-to-b from-blue-500 to-purple-500 opacity-20;
}

.frame--left:hover .frame__dot {
	@apply bg-gradient-to-r from-blue-500 to-purple-500 border-transparent;
}

/* Education hover effects */
.frame--right:hover ~ .timeline-center-content .timeline-vertical-line {
	@apply bg-gradient-to-b from-blue-500 to-purple-500 opacity-20;
}

.frame--right:hover .frame__dot {
	@apply bg-gradient-to-r from-blue-500 to-purple-500 border-transparent;
}

/* Mobile timeline adjustments */
@media (max-width: 768px) {
	/* Hide timeline elements on mobile */
	.frame__dot,
	.frame__blocker,
	.timeline-vertical-line {
		@apply hidden;
	}

	.timeline-center-title {
		@apply text-2xl tracking-normal mb-4;
	}

	/* Adjust frame content padding */
	.frame__content {
		@apply pl-0;
	}

	.frame__content--left,
	.frame__content--right {
		@apply mt-0 ml-0 mr-0;
	}

	/* Adjust container spacing */
	.frames-container {
		@apply px-4 gap-0 space-y-8;
	}

	.frame {
		@apply border-0;
	}

	/* Ensure content is properly spaced */
	.experiences-education__content {
		@apply min-h-0;
	}

	.card__content {
		@apply pl-4 border-l-2 dark:border-zinc-800/90 border-gray-300/80;
	}
}
</style>
