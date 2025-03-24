<script setup lang="ts">
</script>

<template>
	<div class="introduction">
		<h1 class="introduction__title">
			Hi, I'm
			<span class="introduction__title-highlight">Jerome Avecilla</span>
		</h1>
		<p class="introduction__description" :style="{ contain: 'content' }">
			Building cool stuff with Vue.js, TypeScript, and Laravel—because the internet deserves better!
		</p>
		<span class="introduction__subtitle">
				<span 
					class="introduction__subtitle-muted"
					:class="[
						'text-[var(--text-muted)]',
						'dark:text-[var(--text-muted-dark)]',
						'text-2xl sm:text-3xl',
						'font-bold'
					]"
				>
					Aspiring
				</span>

			Full-Stack Web Developer
		</span>
		<p class="introduction__description">
			I'm passionate about turning creative ideas into interactive,
			user-friendly experiences that not only look great but work seamlessly.
			Whether it's crafting intuitive interfaces or optimizing performance, I
			focus on delivering digital solutions that help businesses and users
			connect effectively.
		</p>
	</div>
</template>

<style scoped>
.introduction {
	@apply relative space-y-4 sm:space-y-6 text-center p-3 xl:p-5 flex-grow;
}

.introduction__title {
	@apply text-3xl sm:text-4xl md:text-5xl dark:text-gray-400 text-gray-600 font-bold;
}

.introduction__title-highlight {
	@apply bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent;
}

.introduction__description {
	@apply dark:text-gray-400 text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed;
}

.introduction__subtitle {
	@apply text-2xl sm:text-3xl font-bold dark:text-white text-gray-600 block;
}

.introduction__subtitle-muted {
	@apply dark:text-gray-500 text-gray-400 font-bold;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>