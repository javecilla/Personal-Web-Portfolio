import { TechStackExpertise } from "@/types/tech-stack";

// Import icons from local assets
import vueIcon from "@/assets/svgs/vue.svg?url";
import tsIcon from "@/assets/svgs/typescript.svg?url";
import tailwindIcon from "@/assets/svgs/tailwind.svg?url";
import laravelIcon from "@/assets/svgs/laravel.svg?url";

export const techStacksExpertise: TechStackExpertise[] = [
	{
		name: "Vue.js",
		icon: vueIcon,
		description:
			"Building scalable and maintainable web applications with Vue.js",
		percentage: 90,
	},
	{
		name: "TypeScript",
		icon: tsIcon,
		description: "Writing type-safe and maintainable code with TypeScript",
		percentage: 85,
	},
	{
		name: "Tailwind CSS",
		icon: tailwindIcon,
		description: "Creating beautiful and responsive UIs with Tailwind CSS",
		percentage: 95,
	},
	{
		name: "Laravel",
		icon: laravelIcon,
		description: "Developing robust backend systems with Laravel",
		percentage: 80,
	},
];
