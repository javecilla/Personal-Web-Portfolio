import { Achievement } from "@/types/achievement";
import ImageA from "@global/assets/images/h1.jpg";
import ImageB from "@global/assets/images/h2.jpg";

export const achievements: Achievement[] = [
	{
		category: "Competition",
		title: "BulSU 13th IT Congress – Hackathon Champion",
		description:
			"Amid the electrifying atmosphere of the IT Congress Side Events, our team dove headfirst into the Hackathon, ready to tackle real-world challenges. Fueled by creativity, caffeine, and pure determination, we coded our way to victory! Our challenge? Develop an innovative eCommerce website from scratch within the given time limit. With seamless UI and UX logic, and a user-friendly shopping experience, we impressed the judges and clinched the championship title. This victory showcased our expertise in front-end development, problem-solving, and teamwork, proving that pressure is just fuel for innovation!",
		image: ImageA,
		date: "May 2023",
		location: "Bulacan State University (Main Campus)",
	},
	{
		category: "Academic",
		title: "Best Capstone of the Year - Research & Innovation",
		description:
			"Months of research, sleepless nights, and countless debugging sessions led to something truly remarkable! Our team developed a Web-Based Inventory Management System, designed to streamline stock tracking, optimize resource allocation, and eliminate inefficiencies for businesses. Our innovative approach and technical execution earned us the Best Thesis of the Year award at Golden Minds Colleges (GMC). This achievement highlights our skills in software development, database management, and system automation, proving that well-built technology can transform business operations.",
		image: ImageB,
		date: "April 2022",
		location: "Golden Minds Colleges Senior High School",
	},
];
