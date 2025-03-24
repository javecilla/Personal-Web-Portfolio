<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { GithubIcon } from "lucide-vue-next";
import ThemeToggle from "@/components/ThemeToggle.vue";
import menuIcon from "@global/svgs/menu-icon.svg?raw";
import Sidebar from "@/components/Sidebar.vue";
import { navigationItems } from "@/data/navigation";
import BaseLink from '@//components/base/BaseLink.vue';

const isScrolled = ref(false);
const isSidebarOpen = ref(false);

const mobileMenuLabels = {
  open: 'Open navigation menu',
  close: 'Close navigation menu'
};

const handleScroll = () => {
	isScrolled.value = window.scrollY > 0;
};

const currentHash = ref(window.location.hash || '#about');

const updateActiveHash = () => {
  currentHash.value = window.location.hash || '#about';
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
  window.addEventListener('hashchange', updateActiveHash);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
  window.removeEventListener('hashchange', updateActiveHash);
});

const isActive = (href: string) => currentHash.value === href;
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
					<BaseLink 
						href="#about" 
						ariaLabel="Home"
						class="text-2xl font-bold"
					>
						<span
							class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
							>.me</span
						>
					</BaseLink>
					<!-- Desktop Navigation -->
					<nav class="hidden md:flex ml-10 space-x-8">
						<BaseLink
							v-for="item in navigationItems"
							:key="item.name"
							:href="item.href"
							:ariaLabel="item.name"
							variant="nav"
							:class="[
								isActive(item.href) ? 
								'text-blue-500 dark:text-blue-400 text-bold' : 
								'text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent'
							]"
						>
							{{ item.name }}
						</BaseLink>
					</nav>
				</div>

				<!-- Right side buttons -->
				<div class="flex items-center space-x-3">
					<ThemeToggle />
					<BaseLink
						href="https://github.com/javecilla"
						ariaLabel="Visit my GitHub profile"
						variant="icon"
						external
						class="p-2 dark:bg-zinc-800 bg-gray-200 rounded-full dark:hover:bg-zinc-700 hover:bg-gray-300 transition-all duration-300 ease-in-out inline-flex items-center justify-center"
					>
						<GithubIcon class="h-5 w-5 dark:text-white text-gray-900" />
					</BaseLink>

					<!-- Mobile menu button -->
					<button
						type="button"
						class="md:hidden p-2 dark:bg-zinc-800 bg-gray-200 rounded-full dark:hover:bg-zinc-700 hover:bg-gray-300 transition-all duration-300 ease-in-out inline-flex items-center justify-center"
						:aria-expanded="isSidebarOpen"
						:aria-label="isSidebarOpen ? mobileMenuLabels.close : mobileMenuLabels.open"
						@click="isSidebarOpen = true"
					>
						<span class="sr-only">{{ isSidebarOpen ? mobileMenuLabels.close : mobileMenuLabels.open }}</span>
						<div
							v-html="menuIcon"
							class="h-5 w-5 dark:text-white text-gray-900 flex items-center justify-center"
							aria-hidden="true"
						></div>
					</button>

					<BaseLink
						href="javascript:void(0)"
						ariaLabel="Download my resume"
						variant="button"
						class="hidden md:flex text-center items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all duration-300 px-6 cursor-not-allowed"
					>
						<span class="text-white font-medium">Resume</span>
					</BaseLink>
				</div>
			</div>
		</div>
	</header>
	<!-- Spacer to prevent content from going under fixed header -->
	<div class="h-16"></div>
</template>

<style scoped>
@supports not (backdrop-filter: blur(12px)) {
	.backdrop-blur-md {
		background-color: rgba(255, 255, 255, 0.95);
	}

	:global(.dark) .backdrop-blur-md {
		background-color: rgba(0, 0, 0, 0.95);
	}
}
</style>