<script setup lang="ts">
import { ref } from 'vue';
import { GithubIcon, Globe } from "lucide-vue-next";
import type { Project } from "@/types/project";
import ImageSkeleton from "@/components/ImageSkeleton.vue";
import BaseImage from '@/components/base/BaseImage.vue';

defineProps<{
	project: Project;
}>();

const emit = defineEmits<{
  (e: 'click', project: Project): void;
}>();

const imageLoaded = ref(false);

const handleImageLoad = () => {
	imageLoaded.value = true;
};
</script>

<template>
	<div 
		class="project-card group section-bg cursor-pointer"
		@click="emit('click', project)"
	>
		<!-- Project Image with Skeleton -->
		<div class="project-card__image-container">
			<Transition
				enter-active-class="transition-opacity duration-300"
				enter-from-class="opacity-0"
				enter-to-class="opacity-100"
			>
				<ImageSkeleton
					v-if="!imageLoaded"
					rounded="rounded-t-2xl"
					className="absolute inset-0 w-full h-full"
				/>
			</Transition>
			
			<div class="relative w-full h-full">
				<BaseImage
					:src="project.image"
					:alt="project.title"
					variant="project"
					rounded="2xl"
					:class="[
						'project-card__image',
						{ 'opacity-0': !imageLoaded }
					]"
					@load="handleImageLoad"
				>
					<template #overlay>
						<div class="project-card__image-overlay group-hover:opacity-0"></div>
					</template>
				</BaseImage>
			</div>
		</div>

		<!-- Content -->
		<div class="project-card__content">
			<div class="project-card__info">
				<h3 class="project-card__title section-title">
					{{ project.title }}
				</h3>

				<p class="project-card__description section-text">
					{{ project.description }}
				</p>

				<!-- Tech Stack and Button Container -->
				<div class="project-card__footer">
					<!-- Tech Stack -->
					<div class="project-card__tech">
						<div class="project-card__tech-icons">
							<img
								v-for="tech in project.technologies"
								:key="tech.name"
								:src="tech.icon"
								:alt="tech.name"
								:title="tech.name"
								class="project-card__tech-icon"
							/>
						</div>
					</div>

					<!-- Action Buttons -->
					<div class="project-card__actions">
						<a
							v-if="project.githubUrl"
							:href="project.githubUrl"
							target="_blank"
							class="project-card__action-btn"
							:title="'View source code on GitHub'"
						>
							<GithubIcon class="project-card__action-icon" />
						</a>
						<a
							v-if="project.demoUrl"
							:href="project.demoUrl"
							target="_blank"
							class="project-card__action-btn"
							:title="'View live demo'"
						>
							<Globe class="project-card__action-icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* Main container */
.project-card {
	@apply rounded-2xl transition-all duration-500 ease-in-out overflow-hidden;
	@apply hover:shadow-lg dark:hover:shadow-zinc-900/20 
         transform transition-all duration-300 
         hover:-translate-y-1;
}

/* Image container */
.project-card__image-container {
	@apply relative h-48 w-full overflow-hidden;
}

.project-card__image {
	@apply w-full h-full object-cover transition-all duration-500 grayscale 
         group-hover:grayscale-0 group-hover:scale-[1.05] group-hover:opacity-100;
}

.project-card__image-overlay {
	@apply absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
         transition-opacity duration-500;
}

/* Content section */
.project-card__content {
	@apply p-6 space-y-6;
}

.project-card__info {
	@apply space-y-4 flex flex-col items-start;
}

.project-card__title {
	@apply text-xl font-bold text-left;
}

.project-card__description {
	@apply text-sm line-clamp-4 text-left;
}

/* Footer section */
.project-card__footer {
	@apply flex items-center justify-between w-full pt-2;
}

/* Tech stack */
.project-card__tech {
	@apply flex items-center;
}

.project-card__tech-icons {
	@apply flex items-center gap-2 px-4 py-2 dark:bg-zinc-800 bg-gray-200 rounded-full 
         dark:hover:bg-zinc-700 hover:bg-gray-300 transition-all duration-300 ease-in-out;
}

.project-card__tech-icon {
	@apply w-[23px] h-[23px] transition-all duration-300 grayscale group-hover:grayscale-0;
}

/* Action buttons */
.project-card__actions {
	@apply flex items-center gap-2;
}

.project-card__action-btn {
	@apply inline-flex items-center justify-center w-[36px] h-[36px] dark:bg-zinc-800 
         bg-gray-200 rounded-full dark:hover:bg-zinc-700 hover:bg-gray-300 
         transition-all duration-300 ease-in-out;
}

.project-card__action-icon {
	@apply w-[20px] h-[20px] dark:text-white/80 text-gray-900;
}
</style>
