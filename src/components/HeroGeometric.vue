<script setup lang="ts">
import ElegantShape from "@components/ElegantShape.vue";

withDefaults(
	defineProps<{
		badge?: string;
		title1?: string;
		title2?: string;
	}>(),
	{
		badge: "Jerome Avecilla",
		title1: "Aspiring",
		title2: "Full-Stack Developer",
	}
);
</script>

<template>
	<div
		class="relative w-screen min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#030303] -mx-[calc(100vw-100%)]"
	>
		<div
			class="absolute inset-0 w-screen bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl"
		/>

		<div class="absolute inset-0 w-screen overflow-hidden">
			<ElegantShape
				:delay="0.3"
				:width="600"
				:height="140"
				:rotate="12"
				gradient="from-indigo-500/[0.15]"
				class-name="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
			/>
			<ElegantShape
				:delay="0.5"
				:width="500"
				:height="120"
				:rotate="-15"
				gradient="from-rose-500/[0.15]"
				class-name="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
			/>
			<!-- Add more ElegantShapes as needed -->
		</div>

		<div class="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
			<div class="max-w-3xl mx-auto text-center">
				<div
					class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12 opacity-0 animate-fadeUp"
				>
					<span class="text-sm text-white/60 tracking-wide">{{ badge }}</span>
				</div>

				<h1
					class="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight opacity-0 animate-fadeUp"
				>
					<span
						class="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
						>{{ title1 }}</span
					>
					<br />
					<span
						class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
					>
						{{ title2 }}
					</span>
				</h1>
			</div>
		</div>

		<div
			class="absolute inset-0 w-screen bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none"
		/>
	</div>
</template>

<style scoped>
.animate-fadeUp {
	animation: fadeUp 1s cubic-bezier(0.25, 0.4, 0.25, 1) forwards;
}

@keyframes fadeUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

/* Add animation delays */
h1.animate-fadeUp {
	animation-delay: 0.7s;
}

.inline-flex.animate-fadeUp {
	animation-delay: 0.5s;
}
</style>
