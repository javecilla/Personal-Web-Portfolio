import type { Experience, Education } from "@/types/experiences";

export const experiences: Experience[] = [
	{
		company: "Golden Minds Colleges",
		position: "IT Assistant",
		location: "Sta. Maria, Bulacan",
		description:
			"My journey at Golden Minds Colleges began in 2022 when my advisor, Junilo Victoriano Flores, the school's sole IT professional specializing in web development, referred me to Sir Derek Malibiran, the Owner and President of the school. I joined the development team, initially focusing on front-end UI/UX improvements to enhance the college's digital platforms. Over time, I expanded my role to include backend integration, collaborating closely with Sir Jelo. Today, I lead the design, development, and maintenance of the college's digital assets, implementing innovative solutions to optimize performance, improve user experience, and meet business requirements.",
		projects: [
			{
				name: "Golden Minds Colleges Official Website",
				description:
					"Spearheaded the complete redesign of the college's website, leveraging modern technologies to enhance usability, accessibility, and search engine optimization (SEO). Successfully migrated the domain from .com to .edu.ph, ensuring compliance with educational institution standards. Achieved a 30% improvement in page load speed and a 25% increase in organic traffic within three months of launch.",
			},
			{
				name: "Online Voting System",
				description:
					"Developed a secure and user-friendly online voting system for the college's events and activities. Implemented features such as candidate registration, voting, and results tracking. Achieved a 95% user satisfaction rate through regular feedback sessions and system improvements.",
			},
			{
				name: "Student Information System (SIS)",
				description:
					"Contributed to the ongoing development and maintenance of the Student Information System, starting with front-end UI/UX improvements and later expanding to backend integration. Collaborated with the IT Coordinator to ensure the system remains reliable, secure, and capable of supporting the diverse requirements of the college community. Our efforts have streamlined administrative processes and improved accessibility for students and staff.",
			},
		],
		startDate: "May 2022",
		endDate: "Present",
	},
];

export const education: Education[] = [
	{
		school: "Bulacan State University",
		degree:
			"Bachelor of Science in Information Technology Specialized in Web Development",
		campus: "Main Campus",
		description: "",
		startDate: "July 2023",
		endDate: "Present",
	},
	{
		school: "Golden Minds Colleges",
		degree:
			"Technical Vocational Livelihood Information Communication Technology",
		campus: "Sta. Maria Campus",
		description:
			"Completed Senior High School with a focus on ICT, gaining foundational knowledge in programming, web development, and computer systems.",
		startDate: "August 2021",
		endDate: "June 2023",
	},
];
