<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { GithubIcon } from "lucide-vue-next";
import ThemeToggle from "@components/ThemeToggle.vue";
import menuIcon from "@svgs/menu-icon.svg?raw";
import Sidebar from "@components/Sidebar.vue";
import { navigationItems } from "@/data/navigation";

const isScrolled = ref(false);
const isSidebarOpen = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
	<!-- Sidebar for mobile -->
	<Sidebar
		:is-open="isSidebarOpen"
		:on-close="() => (isSidebarOpen = false)"
		:nav-items="navigationItems"
	/>

	<header
		class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
		:class="[
			isScrolled
				? 'border-b backdrop-blur-md bg-white/30 dark:bg-black/30'
				: 'bg-transparent',
			'dark:border-zinc-800/50 border-gray-200/50',
		]"
	>
		<div class="max-w-[1230px] mx-auto px-4 sm:px-6 lg:px-1">
			<div class="flex h-16 items-center justify-between">
				<!-- Logo -->
				<div class="flex items-center">
					<a href="#" class="text-2xl font-bold">
						<span
							class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
							>.me</span
						>
					</a>
					<!-- Desktop Navigation -->
					<nav class="hidden md:flex ml-10 space-x-8">
						<a
							v-for="item in navigationItems"
							:key="item.name"
							:href="item.href"
							class="text-sm dark:text-gray-300 text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors"
						>
							{{ item.name }}
						</a>
					</nav>
				</div>

				<!-- Right side buttons -->
				<div class="flex items-center space-x-3">
					<ThemeToggle />
					<a
						href="https://github.com/javecilla"
						target="_blank"
						class="p-2 dark:bg-zinc-800 bg-gray-200 rounded-full dark:hover:bg-zinc-700 hover:bg-gray-300 transition-all duration-300 ease-in-out"
					>
						<GithubIcon class="h-5 w-5 dark:text-white text-gray-900" />
					</a>

					<!-- Mobile menu button -->
					<button
						class="md:hidden p-2 dark:bg-zinc-800 bg-gray-200 rounded-full dark:hover:bg-zinc-700 hover:bg-gray-300 transition-all duration-300 ease-in-out inline-flex items-center justify-center"
						@click="isSidebarOpen = true"
					>
						<div
							v-html="menuIcon"
							class="h-5 w-5 dark:text-white text-gray-900 flex items-center justify-center"
						></div>
					</button>

					<button
						class="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity text-sm"
					>
						<span>Resume</span>
					</button>
				</div>
			</div>
		</div>
	</header>
	<!-- Spacer to prevent content from going under fixed header -->
	<div class="h-16"></div>
</template>

<style scoped>
/* Optional: Add backdrop-filter support for older browsers */
@supports not (backdrop-filter: blur(12px)) {
	.backdrop-blur-md {
		background-color: rgba(255, 255, 255, 0.95);
	}

	:global(.dark) .backdrop-blur-md {
		background-color: rgba(0, 0, 0, 0.95);
	}
}
</style>
