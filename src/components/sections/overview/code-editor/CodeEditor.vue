<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import CodeEditorHeader from "./CodeEditorHeader.vue";
import CodeContent from "./CodeContent.vue";
import AboutMeSection from "@/components/sections/about/AboutMeSection.vue";

interface Props {
	code: string;
}

const props = defineProps<Props>();
const activeTab = ref("output");
const isMobile = ref(false);

function checkMobile() {
	isMobile.value = window?.innerWidth < 640;
}

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
						<!-- Output Tab -->
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

						<!-- Code Tab -->
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
.code-editor {
	@apply max-w-[1400px] mx-auto w-full mt-8 relative px-4 sm:px-0;
}

.code-editor__container {
	@apply rounded-[15px_15px_15px_15px] shadow-2xl overflow-hidden;
}

.code-editor__content {
	@apply relative min-h-[400px];
}

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

.code-editor__content-inner {
	@apply h-full;
}

.code-editor__tabs {
	@apply relative h-full;
}

.code-editor__tab {
	@apply dark:bg-zinc-900/10 p-3 sm:p-6 w-full h-full transition-opacity duration-300;
}

.code-editor__tab--active {
	@apply opacity-100 relative;
}

.code-editor__tab--inactive {
	@apply opacity-0 pointer-events-none absolute;
}
</style>
