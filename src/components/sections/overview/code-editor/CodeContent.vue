<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import Prism from "@/utils/prism-config";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-vue-next";

interface Props {
	code: string;
	language?: string;
	isMobile: boolean;
}

const props = defineProps<Props>();
const isCodeExpanded = ref(false);
const codeWrapperRef = ref<HTMLElement | null>(null);

function getLineNumbers(code: string): number {
	return code.split("\n").length;
}

function formatCode(code: string): string {
	return code
		.split("\n")
		.map((line) => (line.trim() === "" ? " " : line))
		.join("\n");
}

function highlightCode() {
	requestAnimationFrame(() => {
		const codeElements = document.querySelectorAll("pre code.language-vue");
		codeElements.forEach((element) => {
			if (element && element.textContent) {
				const cleanCode = formatCode(element.textContent);
				try {
					const highlighted = Prism.highlight(
						cleanCode,
						Prism.languages[props.language || "vue"],
						props.language || "vue"
					);
					element.innerHTML = highlighted;
				} catch (error) {
					console.error("Highlighting error:", error);
				}
			}
		});
	});
}

function toggleCodeExpansion() {
	isCodeExpanded.value = !isCodeExpanded.value;

	if (!isCodeExpanded.value && codeWrapperRef.value) {
		codeWrapperRef.value.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}
}

// Watch for code changes and rehighlight
watch(() => props.code, highlightCode);

// Initial highlighting
onMounted(highlightCode);
</script>

<template>
	<div class="code-content" ref="codeWrapperRef">
		<div
			class="code-content__container"
			:class="{
				'code-content__container--collapsed': !isCodeExpanded,
				'code-content__container--mobile': isMobile,
				'code-content__container--expanded': isCodeExpanded,
			}"
		>
			<div class="code-content__wrapper">
				<div class="code-content__mask">
					<!-- Line numbers -->
					<div class="code-content__gutter">
						<div
							v-for="n in getLineNumbers(code)"
							:key="n"
							class="code-content__line-number"
						>
							{{ n }}
						</div>
					</div>

					<!-- Code content -->
					<div class="code-content__area">
						<pre><code 
							:class="['code-content__code', 'language-' + (language || 'vue')]" 
							v-html="Prism.highlight(code, Prism.languages[language || 'vue'], language || 'vue')"
						></code></pre>
					</div>
				</div>
			</div>

			<!-- Gradient overlay when collapsed -->
			<div v-if="!isCodeExpanded" class="code-content__overlay"></div>
		</div>

		<!-- Show More/Less Button - Show on both mobile and desktop -->
		<div class="code-content__controls">
			<button @click="toggleCodeExpansion" class="code-content__button">
				<span class="code-content__button-text">
					{{ isCodeExpanded ? "Show Less" : "Show More" }}
				</span>
				<ChevronDownIcon
					v-if="!isCodeExpanded"
					class="code-content__button-icon"
				/>
				<ChevronUpIcon v-else class="code-content__button-icon" />
			</button>
		</div>
	</div>
</template>

<style scoped>
.code-content {
	@apply bg-gray-100 dark:bg-zinc-900/50 p-2 sm:p-4 w-full transition-opacity duration-300;
}

.code-content__container {
	@apply overflow-hidden text-start relative dark:bg-[#0C0C0C] bg-gray-200/50;
}

.code-content__container--collapsed {
	@apply max-h-[500px] sm:max-h-[500px];
}

.code-content__container--mobile {
	@apply max-h-[400px] overflow-y-auto;
}

.code-content__container--mobile.code-content__container--expanded {
	max-height: none;
}

.code-content__wrapper {
	@apply relative;
	min-height: 100%;
	background: transparent;
}

.code-content__mask {
	@apply relative w-full overflow-hidden;
}

.code-content__gutter {
	@apply absolute left-0 top-0 bottom-0 w-14 dark:bg-[#0C0C0C] bg-gray-200/50 
           dark:border-zinc-800/50 border-gray-300 border-r p-4 text-right select-none z-10;
}

.code-content__line-number {
	@apply text-xs leading-6 dark:text-zinc-500 text-gray-400;
}

.code-content__area {
	@apply ml-14 overflow-x-auto;
	width: calc(100% - 3.5rem);
}

.code-content__area pre {
	@apply dark:bg-[#0C0C0C] bg-gray-100/50 h-full;
}

.code-content__code {
	@apply font-mono text-sm leading-6 whitespace-pre px-4 block h-full;
	font-family: "JetBrains Mono", monospace !important;
}

.code-content__overlay {
	@apply absolute bottom-0 left-0 right-0 h-20 dark:from-zinc-900/20 from-gray-300/50 bg-gradient-to-t to-transparent;
}

.code-content__controls {
	@apply flex justify-center mt-4;
}

.code-content__button {
	@apply flex items-center space-x-2 px-4 py-2 rounded bg-zinc-800/50 
		   hover:bg-zinc-800/70 transition-colors duration-200;
}

.code-content__button-text {
	@apply text-sm text-gray-300;
}

.code-content__button-icon {
	@apply w-4 h-4 text-gray-300;
}

/* Token colors */
:deep(.token.comment) {
	@apply text-[#6a9955];
}
:deep(.token.tag) {
	@apply text-[#569cd6];
}
:deep(.token.attr-name) {
	@apply text-[#9cdcfe];
}
:deep(.token.attr-value) {
	@apply text-[#ce9178];
}
:deep(.token.string) {
	@apply text-[#ce9178];
}
:deep(.token.keyword) {
	@apply text-[#c586c0];
}
:deep(.token.function) {
	@apply text-[#dcdcaa];
}
:deep(.token.punctuation) {
	@apply text-[#808080];
}

/* Responsive styles */
@media (max-width: 640px) {
	.code-content {
		@apply p-0 w-full;
		max-width: 80vw;
	}

	.code-content__container {
		height: auto;
		max-height: calc(100vh - 300px);
		width: 100%;
		overflow-x: hidden;
	}

	.code-content__container.code-content__container--expanded {
		max-height: none;
	}

	.code-content__wrapper {
		@apply w-full;
	}

	.code-content__mask {
		@apply w-full overflow-x-hidden;
	}

	.code-content__area {
		@apply ml-10;
		width: calc(100% - 2.5rem);
		height: 100%;
		overflow-y: auto;
		overflow-x: auto;
	}

	.code-content__area pre {
		@apply w-full;
		min-width: fit-content;
	}

	.code-content__code {
		@apply text-xs whitespace-pre;
		width: max-content;
	}

	.code-content__gutter {
		@apply w-10 p-3;
		height: 100%;
		position: absolute;
		z-index: 10;
	}

	.code-content__overlay {
		display: none;
	}

	.code-content__controls {
		@apply mt-2;
	}

	.code-content__button {
		@apply px-3 py-1.5 text-xs;
	}

	.code-content__button-icon {
		@apply w-3 h-3;
	}
}
</style>
