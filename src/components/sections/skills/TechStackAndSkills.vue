/** * @component TechStackAndSkills * @description Displays categorized
technical skills with interactive grid layout * Features responsive design,
hover effects, and dynamic sizing based on skill count */
<script setup lang="ts">
import { ref } from 'vue';
import ImageSkeleton from "@/components/ImageSkeleton.vue";
import { techStackAndSkills } from "@/data/techStackAndSkills";

// Track loading state for each icon
const loadedIcons = ref(new Set<string>());

const handleIconLoad = (skillName: string) => {
  loadedIcons.value.add(skillName);
};

const isIconLoaded = (skillName: string): boolean => {
  return loadedIcons.value.has(skillName);
};
</script>

<template>
	<div class="skills">
		<div class="skills__grid">
			<div
				v-for="category in techStackAndSkills"
				:key="category.id"
				class="skills__category"
			>
				<div
					class="skills__card group"
					:class="{
						'w-full sm:w-auto': true,
						'sm:min-w-fit': category.skills.length <= 2,
						'sm:w-auto': category.skills.length > 2,
					}"
				>
					<div
						class="skills__icons"
						:class="{
							'sm:flex-nowrap': category.skills.length <= 4,
						}"
					>
						<div
							v-for="skill in category.skills"
							:key="skill.name"
							class="skills__icon-wrapper"
						>
							<div class="skills__icon-container">
								<Transition
									enter-active-class="transition-opacity duration-300"
									enter-from-class="opacity-0"
									enter-to-class="opacity-100"
									leave-active-class="transition-opacity duration-300"
									leave-from-class="opacity-100"
									leave-to-class="opacity-0"
								>
									<ImageSkeleton
										v-show="!isIconLoaded(skill.name)"
										rounded="rounded-md"
										className="skills__icon-skeleton"
									/>
								</Transition>
								<img
									:src="skill.icon"
									:alt="skill.name"
									:title="skill.name"
									class="skills__icon"
									:class="{ 'skills__icon--loaded': isIconLoaded(skill.name) }"
									@load="handleIconLoad(skill.name)"
								/>
							</div>
						</div>
					</div>
					<span class="skills__label">
						{{ category.label }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* Main container */
.skills {
	@apply max-w-4xl mx-auto space-y-6;
}

/* Grid layout */
.skills__grid {
	@apply flex flex-wrap gap-6 justify-center;
}

/* Category container */
.skills__category {
	@apply flex flex-col items-center;
}

/* Card styles */
.skills__card {
	@apply dark:bg-zinc-900/10 bg-gray-50 p-4 rounded-xl flex flex-col items-center 
         transition-all duration-300 hover:scale-105;
}

/* Icons container */
.skills__icons {
	@apply flex flex-wrap gap-3 justify-center items-center;
}

/* Individual icon wrapper */
.skills__icon-wrapper {
	@apply relative flex items-center justify-center w-8 h-8;
}

.skills__icon-container {
	@apply relative w-full h-full;
}

/* Icon image */
.skills__icon {
	@apply w-8 h-8 object-contain grayscale group-hover:grayscale-0 
         transition-all duration-300 absolute inset-0 opacity-0;
}

.skills__icon--loaded {
	@apply opacity-100 z-20;
}

.skills__icon-skeleton {
	@apply w-8 h-8 absolute inset-0 z-10;
}

/* Category label */
.skills__label {
	@apply mt-3 text-sm font-medium dark:text-gray-400 text-gray-600;
}
</style>
