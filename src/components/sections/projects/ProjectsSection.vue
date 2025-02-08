/** * @component ProjectsSection * @description Main projects section displaying
featured and filtered projects * Features category filtering, project cards, and
responsive grid layout */
<script setup lang="ts">
import { ref, computed } from "vue";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard.vue";
import ProjectFilter from "./ProjectFilter.vue";

const selectedCategory = ref("highlights");

const filteredProjects = computed(() => {
	if (selectedCategory.value === "highlights") {
		return projects.filter((project) => project.isHighlight);
	}
	if (selectedCategory.value === "all") {
		return projects;
	}
	return projects.filter(
		(project) => project.category === selectedCategory.value
	);
});
</script>

<template>
	<section class="projects section-bg">
		<!-- Header -->
		<div class="projects__header">
			<h2 class="projects__title section-title">Featured Projects</h2>
			<p class="projects__description section-text">
				Displayed below are my diverse portfolio of projects, including
				academic, personal, and large-scale endeavors. Take a closer look to
				witness my range of skills and expertise.
			</p>
		</div>

		<!-- Filter -->
		<div class="projects__filter">
			<ProjectFilter
				:selected-category="selectedCategory"
				@select="selectedCategory = $event"
			/>
		</div>

		<!-- Project Grid -->
		<div class="projects__grid">
			<ProjectCard
				v-for="project in filteredProjects"
				:key="project.title"
				:project="project"
			/>
		</div>
	</section>
</template>

<style scoped>
/* Main container */
.projects {
	@apply space-y-6 p-6 rounded-2xl transition-all duration-500 ease-in-out;
}

/* Header styles */
.projects__header {
	@apply text-center space-y-3;
}

.projects__title {
	@apply text-2xl sm:text-3xl font-bold;
}

.projects__description {
	@apply text-sm sm:text-base max-w-3xl mx-auto;
}

/* Filter section */
.projects__filter {
	@apply flex justify-center my-6;
}

/* Grid layout */
.projects__grid {
	@apply grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6;
}
</style>
