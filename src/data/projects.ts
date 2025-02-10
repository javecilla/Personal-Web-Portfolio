import { Project, ProjectCategoryItem } from "@/types/project";

// Import project images
import goldenMindsWeb from "@global/images/ref002.png";
import votingSystem from "@global/images/vt62as.png";
import phEnWeb from "@global/images/523aaa.png";
import portfolioWeb from "@global/images/t2131.png";
import inventoryWeb from "@global/images/551asfh.png";

// Import tech icons
import vueIcon from "@global/svgs/vue.svg?url";
import tsIcon from "@global/svgs/typescript.svg?url";
import tailwindIcon from "@global/svgs/tailwind.svg?url";
import laravelIcon from "@global/svgs/laravel.svg?url";
import bootstrapIcon from "@global/svgs/bootstrap.svg?url";
import jqueryIcon from "@global/svgs/jquery.svg?url";
import phpIcon from "@global/svgs/php.svg?url";
import jsIcon from "@global/svgs/javascript.svg?url";
import cssIcon from "@global/svgs/css3.svg?url";

export const projects: Project[] = [
	{
		title: "Portfolio Website",
		description:
			"My personal website serves as a digital portfolio, showcasing my projects, skills, and experiences. This project is a testament to my passion for web development and design. ",
		image: portfolioWeb,
		githubUrl: "https://github.com/javecilla/portfolio",
		demoUrl: "https://javecilla.vercel.app/",
		technologies: [
			{
				name: "Vue.js",
				icon: vueIcon,
			},
			{
				name: "TypeScript",
				icon: tsIcon,
			},
			{
				name: "Tailwind CSS",
				icon: tailwindIcon,
			},
		],
		category: "personal",
		isHighlight: false,
	},
	{
		title: "Golden Minds Official Website",
		description:
			"A solo project dedicated to building and maintaining the Official Website of Golden Minds Colleges-Academy. Designed as a dynamic platform, it serves the student community by providing essential information, updates, and resources to enhance their academic experience.",
		image: goldenMindsWeb,
		githubUrl: "https://github.com/javecilla/Golden-Minds-Colleges-Web-System",
		demoUrl: "https://www.goldenminds.edu.ph/",
		technologies: [
			{
				name: "Laravel",
				icon: laravelIcon,
			},
			{
				name: "Vue.js",
				icon: vueIcon,
			},
			{
				name: "Bootstrap",
				icon: bootstrapIcon,
			},
		],
		category: "client",
		isHighlight: true,
	},
	{
		title: "Online Voting System",
		description:
			"A solo project for Golden Minds Colleges developed a dynamic and Interactive Voting System, ensuring a seamless and engaging digital voting experience for the community.",
		image: votingSystem,
		githubUrl: "https://github.com/javecilla/Online-Voting-System",
		demoUrl: "https://voting.goldenmindsbulacan.com/",
		technologies: [
			{
				name: "Laravel",
				icon: laravelIcon,
			},
			{
				name: "jQuery",
				icon: jqueryIcon,
			},
			{
				name: "Bootstrap",
				icon: bootstrapIcon,
			},
		],
		category: "client",
		isHighlight: true,
	},
	{
		title: "Ph-En Vocabulary Web App",
		description:
			"A commision project by a fourth-year PUP students of BSED Major in English, designed to help users master diverse English vocabulary. This web app features reading exercises, pronunciation guides, and interactive quizzes with score tracking to enhance learning.",
		image: phEnWeb,
		githubUrl: "https://github.com/javecilla/Philippine_English_Vocabulary",
		demoUrl: "https://philippineenglishvocabulary.com/",
		technologies: [
			{
				name: "PHP",
				icon: phpIcon,
			},
			{
				name: "JavaScript",
				icon: jsIcon,
			},
			{
				name: "Bootstrap",
				icon: bootstrapIcon,
			},
		],
		category: "client",
		isHighlight: true,
	},
	{
		title: "Web-Based Inventory System",
		description:
			"The Inventory System is a comprehensive web-based solution developed as a thesis project during my Senior High School at Golden Minds Colleges. This project fulfills the requirements of the Information and Communication Technology (ICT) strand and aims to enhance the management of HRM tools and equipment inventories. ",
		image: inventoryWeb,
		githubUrl:
			"https://github.com/javecilla/Web-Based-Inventory-Management-System",
		demoUrl: "https://ims.goldenmindsbulacan.com/",
		technologies: [
			{
				name: "PHP",
				icon: phpIcon,
			},
			{
				name: "JavaScript",
				icon: jsIcon,
			},
			{
				name: "CSS",
				icon: cssIcon,
			},
		],
		category: "academic",
		isHighlight: false,
	},
	// Add more projects here
];

export const categories: ProjectCategoryItem[] = [
	{ id: "highlights", label: "Highlights" },
	{ id: "all", label: "All Projects" },
	{ id: "academic", label: "Academic" },
	{ id: "personal", label: "Personal" },
	{ id: "client", label: "Client" },
];
