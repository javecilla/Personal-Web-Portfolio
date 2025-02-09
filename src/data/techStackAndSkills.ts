import { TechStackAndSkill } from "@/types/tech-stack";

// Import icons locally
import htmlIcon from "@svgs/html5.svg?url";
import cssIcon from "@svgs/css3.svg?url";
import jsIcon from "@svgs/javascript.svg?url";
import tsIcon from "@svgs/typescript.svg?url";
import vueIcon from "@svgs/vue.svg?url";
import tailwindIcon from "@svgs/tailwind.svg?url";
import bootstrapIcon from "@svgs/bootstrap.svg?url";
import jqueryIcon from "@svgs/jquery.svg?url";
import phpIcon from "@svgs/php.svg?url";
import laravelIcon from "@svgs/laravel.svg?url";
import mysqlIcon from "@svgs/mysql.svg?url";
import gitIcon from "@svgs/git.svg?url";
import vscodeIcon from "@svgs/vscode.svg?url";
import gitLabIcon from "@svgs/gitlab.svg?url";
import githubActionIcon from "@svgs/github-actions.svg?url";
import gitBashIcon from "@svgs/gitbash.svg?url";
import postmanIcon from "@svgs/postman.svg?url";
import githubPagesIcon from "@svgs/github-pages.svg?url";

import mysqlWorkbenchLogo from "@images/logos/mysql-workbench.jpg";
import githubDesktopLogo from "@images/logos/github-desktop.png";
import xamppApacheLogo from "@images/logos/xampp-apache.png";
import sublimeTextLogo from "@images/logos/sublime-text.png";
import godaddyLogo from "@images/logos/godaddy.png";
import hostingerLogo from "@images/logos/hostinger.png";

import vercelFavicon from "@images/logos/vercel.ico";
import hostgatorFavicon from "@images/logos/hostgator.ico";

export const techStackAndSkills: TechStackAndSkill[] = [
	{
		id: "frontend",
		label: "Front-end",
		skills: [
			{
				name: "HTML",
				icon: htmlIcon,
			},
			{
				name: "CSS",
				icon: cssIcon,
			},
			{
				name: "JavaScript",
				icon: jsIcon,
			},
			{
				name: "Bootstrap",
				icon: bootstrapIcon,
			},
			{
				name: "jQuery",
				icon: jqueryIcon,
			},
			{
				name: "Vue.js",
				icon: vueIcon,
			},
			{
				name: "TypeScript",
				icon: tsIcon,
			},
			{
				name: "Tailwind",
				icon: tailwindIcon,
			},
		],
	},
	{
		id: "backend",
		label: "Back-end",
		skills: [
			{
				name: "PHP",
				icon: phpIcon,
			},
			{
				name: "Laravel",
				icon: laravelIcon,
			},
		],
	},
	{
		id: "database",
		label: "Databases",
		skills: [
			{
				name: "MySQL",
				icon: mysqlIcon,
			},
		],
	},
	{
		id: "ci-cd",
		label: "CI/CD",
		skills: [
			{
				name: "Git",
				icon: gitIcon,
			},
			{
				name: "GitLab",
				icon: gitLabIcon,
			},
			{
				name: "Github Action",
				icon: githubActionIcon,
			},
		],
	},
	{
		id: "tools",
		label: "Development Tools",
		skills: [
			{
				name: "VS Code",
				icon: vscodeIcon,
			},
			{
				name: "Git Bash",
				icon: gitBashIcon,
			},

			{
				name: "GitHub Desktop",
				icon: githubDesktopLogo,
			},

			{
				name: "MySQL Workbench",
				icon: mysqlWorkbenchLogo,
			},

			{
				name: "XAMPP Apache",
				icon: xamppApacheLogo,
			},

			{
				name: "Sublime Text",
				icon: sublimeTextLogo,
			},

			{
				name: "Postman",
				icon: postmanIcon,
			},
		],
	},
	{
		id: "web-hosting",
		label: "Web Hosting (Experiences)",
		skills: [
			{
				name: "Github Pages",
				icon: githubPagesIcon,
			},

			{
				name: "Vercel",
				icon: vercelFavicon,
			},

			{
				name: "Hostgator",
				icon: hostgatorFavicon,
			},

			{
				name: "GoDaddy",
				icon: godaddyLogo,
			},
			{
				name: "Hostinger",
				icon: hostingerLogo,
			},
		],
	},
];
