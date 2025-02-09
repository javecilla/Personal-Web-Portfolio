<template>
	<div class="loader">
		<div class="loading-container">
			<div class="loading-circle"></div>
			<div class="loading-circle"></div>
			<div class="loading-circle"></div>
			<div class="loading-shadow"></div>
			<div class="loading-shadow"></div>
			<div class="loading-shadow"></div>
		</div>
	</div>
</template>

<style scoped>
.loader {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 120px;
}

.loading-container {
	width: 100px;
	height: 100px;
	position: relative;
	transform-style: preserve-3d;
	perspective: 500px;
}

.loading-circle {
	position: absolute;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: linear-gradient(45deg, #3b82f6, #6366f1);
	animation: jump 0.8s ease-in-out infinite;
}

.loading-shadow {
	position: absolute;
	width: 20px;
	height: 4px;
	border-radius: 50%;
	background: rgba(0, 0, 0, 0.1);
	top: 62px;
	transform-origin: 50%;
	animation: shadow 0.8s ease-in-out infinite;
}

.loading-circle:nth-child(1),
.loading-shadow:nth-child(4) {
	left: 0;
	animation-delay: -0.3s;
}

.loading-circle:nth-child(2),
.loading-shadow:nth-child(5) {
	left: 40px;
	animation-delay: -0.15s;
}

.loading-circle:nth-child(3),
.loading-shadow:nth-child(6) {
	left: 80px;
	animation-delay: 0s;
}

@keyframes jump {
	0% {
		top: 40px;
		transform: scaleX(1) scaleY(1);
	}
	50% {
		top: 15px;
		transform: scaleX(1.2) scaleY(0.8);
	}
	100% {
		top: 40px;
		transform: scaleX(1) scaleY(1);
	}
}

@keyframes shadow {
	0% {
		transform: scaleX(1);
		opacity: 0.3;
	}
	50% {
		transform: scaleX(0.8);
		opacity: 0.1;
	}
	100% {
		transform: scaleX(1);
		opacity: 0.3;
	}
}

:root[class~="dark"] .loading-shadow {
	background: rgba(255, 255, 255, 0.1);
}
</style>
