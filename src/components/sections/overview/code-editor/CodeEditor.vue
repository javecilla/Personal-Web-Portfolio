/** * @component CodeEditor * @description A VS Code-like editor component that
displays both code and its output * Features tabs for switching between output
preview and code view */
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import CodeEditorHeader from "@components/sections/overview/code-editor/CodeEditorHeader.vue";
import CodeContent from "@components/sections/overview/code-editor/CodeContent.vue";
import AboutMeSection from "@components/sections/overview/about-me/AboutMe.vue";

interface Props {
	/** The source code to display in the editor */
	code: string;
}

const props = defineProps<Props>();

// State management
const activeTab = ref("output");
const isMobile = ref(false);

/**
 * Checks if the current viewport is mobile width
 * Updates isMobile state accordingly
 */
function checkMobile() {
	isMobile.value = window?.innerWidth < 640;
}

// Lifecycle hooks for mobile detection
onMounted(() => {
	checkMobile();
	window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
	window.removeEventListener("resize", checkMobile);
});
</script>

<template>
	<div class="code-editor">
		<div class="code-editor__container">
			<!-- Editor Header with Tabs -->
			<CodeEditorHeader v-model:activeTab="activeTab" />

			<!-- Content Area -->
			<div class="code-editor__content">
				<div class="code-editor__content-inner">
					<div class="code-editor__tabs">
						<!-- Output Preview Tab -->
						<div
							v-show="activeTab === 'output'"
							class="code-editor__tab"
							:class="{
								'code-editor__tab--active': activeTab === 'output',
								'code-editor__tab--inactive': activeTab !== 'output',
							}"
						>
							<AboutMeSection />
						</div>

						<!-- Code View Tab -->
						<CodeContent
							v-show="activeTab === 'code'"
							:code="code"
							:is-mobile="isMobile"
							language="vue"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* Main container styles */
.code-editor {
	@apply max-w-[1400px] mx-auto w-full mt-8 relative px-4 sm:px-0;
}

.code-editor__container {
	@apply rounded-[15px_15px_15px_15px] dark:shadow-2xl shadow-lg shadow-gray-200/50 dark:shadow-black/20 overflow-hidden;
}

/* Content area styles */
.code-editor__content {
	@apply relative min-h-[400px];
}

.code-editor__content-inner {
	@apply h-full;
}

.code-editor__tabs {
	@apply relative h-full;
}

/* Tab styles */
.code-editor__tab {
	@apply dark:bg-zinc-900/10 p-3 sm:p-6 w-full h-full transition-opacity duration-300;
}

.code-editor__tab--active {
	@apply opacity-100 relative;
}

.code-editor__tab--inactive {
	@apply opacity-0 pointer-events-none absolute;
}

/* Mobile responsive styles */
@media (max-width: 640px) {
	.code-editor {
		@apply px-0;
	}

	.code-editor__content {
		min-height: auto;
		@apply mx-auto w-full;
	}

	.code-editor__tab {
		@apply p-0;
	}
}
</style>
