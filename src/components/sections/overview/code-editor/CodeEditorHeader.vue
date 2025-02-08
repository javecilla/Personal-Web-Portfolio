/** * @component CodeEditorHeader * @description Header component for the code
editor with VS Code-like window controls and tabs */
<script setup lang="ts">
interface Props {
	/** Currently active tab */
	activeTab: string;
}

interface Emits {
	/** Event emitted when active tab changes */
	(e: "update:activeTab", value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

// Available tabs
const tabs = ["Output", "Code"];

/**
 * Handles tab switching
 * @param tab The tab to switch to
 */
function setActiveTab(tab: string) {
	emit("update:activeTab", tab.toLowerCase());
}
</script>

<template>
	<div class="editor-header">
		<!-- Window Controls (macOS style) -->
		<div class="editor-header__controls">
			<div class="editor-header__buttons">
				<div class="editor-header__button editor-header__button--close"></div>
				<div
					class="editor-header__button editor-header__button--minimize"
				></div>
				<div
					class="editor-header__button editor-header__button--maximize"
				></div>
			</div>
		</div>

		<!-- Navigation Tabs -->
		<div class="editor-header__tabs">
			<button
				v-for="tab in tabs"
				:key="tab"
				@click="setActiveTab(tab)"
				class="editor-header__tab"
				:class="{
					'editor-header__tab--active': props.activeTab === tab.toLowerCase(),
				}"
			>
				{{ tab }}
			</button>
		</div>
	</div>
</template>

<style scoped>
/* Header container styles */
.editor-header {
	@apply rounded-[15px_15px_0_0] overflow-hidden dark:bg-zinc-900/50 bg-[#F3F3F3];
}

/* Window controls styles */
.editor-header__controls {
	@apply flex items-center justify-between p-2 sm:px-4 sm:py-2 border-b dark:border-zinc-800 border-gray-200;
}

.editor-header__buttons {
	@apply flex space-x-2;
}

.editor-header__button {
	@apply w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full;
}

.editor-header__button--close {
	@apply bg-[#ff5f56];
}

.editor-header__button--minimize {
	@apply bg-[#ffbd2e];
}

.editor-header__button--maximize {
	@apply bg-[#27c93f];
}

/* Tab navigation styles */
.editor-header__tabs {
	@apply flex border-b dark:border-zinc-800/50 border-gray-200;
}

.editor-header__tab {
	@apply flex-1 sm:flex-none px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm 
		   transition-all duration-200 relative rounded-none hover:scale-[1.02] 
		   hover:-translate-y-[1px] dark:text-gray-400 text-gray-600
		   hover:text-gray-900 dark:hover:text-gray-200 
		   hover:bg-[#F4F4FB] dark:hover:bg-zinc-800/20 tracking-wider
		   bg-[#F3F3F3] dark:bg-transparent;
}

.editor-header__tab--active {
	@apply text-gray-900 dark:text-white bg-[#F4F4FB] dark:bg-zinc-900/40 font-medium 
		   after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] 
		   after:bg-blue-500;
}

/* Tab hover animation */
.editor-header__tab::after {
	content: "";
	transform-origin: center;
	transition: transform 0.2s ease;
}

.editor-header__tab:hover::after {
	transform: scaleX(1.1);
}
</style>
