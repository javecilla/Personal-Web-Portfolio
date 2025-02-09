<script setup lang="ts">
import { onMounted, ref } from "vue";
import LoadingSpinner from "@components/LoadingSpinner.vue";

const isLoading = ref(true);
const loadingProgress = ref(0);
const loadingText = ref("Initializing...");
const emit = defineEmits(["load-complete"]);

const updateLoadingText = (progress: number) => {
	if (progress < 30) loadingText.value = "Loading assets...";
	else if (progress < 60) loadingText.value = "Preparing content...";
	else if (progress < 90) loadingText.value = "Almost there...";
	else loadingText.value = "Launching...";
};

const simulateProgress = () => {
	const interval = setInterval(() => {
		if (loadingProgress.value < 98) {
			loadingProgress.value += Math.random() * 10;
			updateLoadingText(loadingProgress.value);
		} else {
			clearInterval(interval);
		}
	}, 200);
	return interval;
};

const checkAssetsLoaded = () => {
	return new Promise((resolve) => {
		// Wait for all images to load
		Promise.all(
			Array.from(document.images)
				.filter((img) => !img.complete)
				.map(
					(img) =>
						new Promise((resolve) => {
							img.onload = img.onerror = resolve;
						})
				)
		).then(() => resolve(true));
	});
};

onMounted(async () => {
	const progressInterval = simulateProgress();

	try {
		// Wait for fonts to load
		await document.fonts.ready;
		// Wait for images to load
		await checkAssetsLoaded();
		// Add any other initialization logic here

		clearInterval(progressInterval);
		loadingProgress.value = 100;
		loadingText.value = "Welcome!";

		setTimeout(() => {
			isLoading.value = false;
			emit("load-complete");
		}, 500);
	} catch (error) {
		console.error("Error during loading:", error);
		clearInterval(progressInterval);
		isLoading.value = false;
		emit("load-complete");
	}
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
			v-if="isLoading"
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
