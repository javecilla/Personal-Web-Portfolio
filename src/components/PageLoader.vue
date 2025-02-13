<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import { useStore } from '@/store'; // Import from local store file
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const store = useStore();
const loadingProgress = ref(0);
const loadingText = ref("Initializing...");
const emit = defineEmits(["load-complete"]);

const updateLoadingText = (progress: number) => {
	if (progress < 30) loadingText.value = "Loading assets...";
	else if (progress < 60) loadingText.value = "Preparing content...";
	else if (progress < 90) loadingText.value = "Almost there...";
	else loadingText.value = "Welcome Bossing!";
};

onMounted(() => {
	const progressInterval = setInterval(() => {
		if (loadingProgress.value < 98) {
			loadingProgress.value += Math.random() * 15;
			updateLoadingText(loadingProgress.value);
		} else if (store.getters.isFullyLoaded) {
			clearInterval(progressInterval);
			loadingProgress.value = 100;
			loadingText.value = "Complete!";
			emit("load-complete");
		}
	}, 100);

	onUnmounted(() => clearInterval(progressInterval));
});
</script>

<template>
	<Transition
		enter-active-class="transition-opacity duration-300"
		leave-active-class="transition-opacity duration-500"
		enter-from-class="opacity-0"
		leave-to-class="opacity-0"
	>
		<div
			v-if="!store.getters.isFullyLoaded"
			class="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
		>
			<div class="text-center">
				<LoadingSpinner />
				<div class="mt-6 space-y-2">
					<div class="text-sm font-medium dark:text-gray-300">
						{{ loadingText }}
					</div>
					<div
						class="w-48 h-1 mx-auto bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden"
					>
						<div
							class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 rounded-full"
							:style="{ width: `${loadingProgress}%` }"
						></div>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>
