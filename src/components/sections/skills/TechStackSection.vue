<script setup lang="ts">
defineProps<{
  id?: string;
}>();
import TechStacksExpertise from "@/components/sections/skills/TechStackExpertise.vue";
import TechStackAndSkills from "@/components/sections/skills/TechStackAndSkills.vue";
</script>

<template>
	<section :id="id" class="tech-stack section-bg -mt-[100px]" style="margin-top: -50px">
		<!-- Section Header -->
		<div class="tech-stack__header">
			<h2 class="tech-stack__title section-title">Tech Stacks and Tools</h2>
			<p class="tech-stack__description section-text">
				These technologies empower me to create dynamic, responsive, and
				high-performance web applications.
			</p>
		</div>

		<!-- Primary Tech Stack Expertise -->
		<TechStacksExpertise />

		<!-- Additional Description -->
		<div class="tech-stack__subheader">
			<p class="tech-stack__description section-text">
				I'm thrilled to share my web development tech stack and skills. With
				ongoing learning and a passion for innovation, I continuously expand my
				knowledge to improve my skills and stay ahead of industry trends.
			</p>
		</div>

		<!-- Detailed Skills Grid -->
		<TechStackAndSkills />
	</section>
</template>

<style scoped>
/* Main container */
.tech-stack {
	@apply space-y-6 p-6 rounded-2xl transition-all duration-500 ease-in-out;
}

/* Header styles */
.tech-stack__header {
	@apply space-y-4 text-center;
}

.tech-stack__title {
	@apply text-2xl sm:text-3xl font-bold;
}

.tech-stack__description {
	@apply text-sm sm:text-base max-w-4xl mx-auto;
}

/* Subheader styles */
.tech-stack__subheader {
	@apply text-center;
}

/* Image hover effects */
:deep(img) {
	@apply opacity-70 transition-all duration-300;
}

:deep(.group:hover img) {
	@apply opacity-100;
}
</style>
