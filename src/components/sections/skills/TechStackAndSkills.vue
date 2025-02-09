/** * @component TechStackAndSkills * @description Displays categorized
technical skills with interactive grid layout * Features responsive design,
hover effects, and dynamic sizing based on skill count */
<script setup lang="ts">
import { techStackAndSkills } from "@/data/techStackAndSkills";
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
							<img
								:src="skill.icon"
								:alt="skill.name"
								:title="skill.name"
								class="skills__icon"
							/>
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
	@apply flex items-center justify-center transition-all duration-300;
}

/* Icon image */
.skills__icon {
	@apply w-8 h-8 object-contain grayscale group-hover:grayscale-0 
         transition-all duration-300;
}

/* Category label */
.skills__label {
	@apply mt-3 text-sm font-medium dark:text-gray-400 text-gray-600;
}
</style>
