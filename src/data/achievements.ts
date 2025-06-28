import { Achievement, AchievementCategory } from "@/types/achievement";
import ImageA from "@global/images/h1.jpg";
import ImageB from "@global/images/h2.jpg";
//import ImageC from "@global/images/h3.jpg";
import ImageD from "@global/images/h4.jpg";
import ImageE from "@global/images/h5.jpg";
import ImageF1 from "@global/images/Computer_Hardware_Basics.png";
import ImageF2 from "@global/images/Introduction_to_IoT.png";
import ImageF3 from "@global/images/Network_Support_and_Security.png";
import ImageF4 from "@global/images/Operating_Systems_Basics.png";
import ImageF5 from "@global/images/Networking_Devices_and_Initial_Configurations.png";
import ImageF6 from "@global/images/Networking-basics.png";

export const achievements: readonly Achievement[] = [
	{
		category: "Competition" as AchievementCategory,
		title: "BulSU 13th IT Congress – Hackathon Champion",
		description:
			"Amid the electrifying atmosphere of the IT Congress Side Events, our team dove headfirst into the Hackathon, ready to tackle real-world challenges. Fueled by creativity, caffeine, and pure determination, we coded our way to victory! Our challenge? Develop an innovative eCommerce website from scratch within the given time limit. With seamless UI and UX logic, and a user-friendly shopping experience, we impressed the judges and clinched the championship title. This victory showcased our expertise in front-end development, problem-solving, and teamwork, proving that pressure is just fuel for innovation!",
		image: ImageA,
		date: "May 2023",
		location: "Bulacan State University (Main Campus)",
	},
	{
		category: "Academic" as AchievementCategory,
		title: "Best Capstone of the Year - Research and Innovation",
		description:
			"Months of research, sleepless nights, and countless debugging sessions led to something truly remarkable! Our team developed a Web-Based Inventory Management System, designed to streamline stock tracking, optimize resource allocation, and eliminate inefficiencies for businesses. Our innovative approach and technical execution earned us the Best Thesis of the Year award at Golden Minds Colleges (GMC).",
		image: ImageB,
		date: "April 2022",
		location: "Golden Minds Colleges Senior High School",
	},
	{
		category: "Academic" as AchievementCategory,
		title: "BSIT Dean's Lister 2024-2025",
		description:
			"As a dedicated student, I am proud to be recognized as a Dean's Lister in the BSIT program. This recognition is a testament to my academic excellence, academic integrity, and commitment to my studies. I am honored to have been selected for this prestigious award, and I am excited to continue my academic journey and make a positive impact in the field of Information Technology.",
		image: ImageD,
		date: "May 2025",
		location: "Bulacan State University (Main Campus)",
	},
	{
		category: "Academic" as AchievementCategory,
		title: "Excellence in Computer System Servicing",
		description:
			"Awarded for outstanding performance and technical proficiency in Computer System Servicing. This recognition highlights my hands-on skills in computer hardware diagnostics, system maintenance, troubleshooting, and network setup. It reflects my commitment to practical learning and my ability to apply technical knowledge in real-world scenarios, preparing me for future challenges in the IT field.",
		image: ImageE,
		date: "April 2022",
		location: "Golden Minds Colleges (Sta. Maria Campus)",
	},
	{
		category: "Certification" as AchievementCategory,
		title: "Computer Hardware Basics",
		description:
			"Awarded for the successful completion of the Computer Hardware Basics course under the Cisco Networking Academy, hosted by Bulacan State University. This certification reflects my foundational knowledge in hardware components, system assembly, troubleshooting, and maintenance. It marks a key step in strengthening my technical skills in computer systems.",
		image: ImageF1,
		date: "May 2024",
		location: "Bulacan State University (Main Campus)",
	},
	{
		category: "Certification" as AchievementCategory,
		title: "Introduction to IoT and Digital Transformation",
		description:
			"Recognized for completing the 'Introduction to IoT and Digital Transformation' course through the Cisco Networking Academy at Bulacan State University. This certification demonstrates my understanding of Internet of Things (IoT) concepts, digital transformation trends, and the integration of smart technologies in modern systems. It reflects my commitment to staying current with emerging technologies in the IT field.",
		image: ImageF2,
		date: "November 2024",
		location: "Bulacan State University (Main Campus)",
	},
	{
		category: "Certification" as AchievementCategory,
		title: "Network Support and Security",
		description:
			"Certified for successfully completing the 'Network Support and Security' course offered by Bulacan State University through the Cisco Networking Academy. This certification demonstrates my skills in network troubleshooting, basic security implementation, and maintaining secure, reliable network infrastructures—essential competencies for any aspiring IT professional.",
		image: ImageF3,
		date: "April 2025",
		location: "Bulacan State University (Main Campus)",
	},
	{
		category: "Certification" as AchievementCategory,
		title: "Operating Systems Basics",
		description:
			"Awarded for successfully completing the 'Operating Systems Basics' course through the Cisco Networking Academy. This certification demonstrates proficiency in managing both Windows and Linux environments, including using administrative tools, shell scripting, implementing basic Linux security, and configuring network connectivity. It reflects a strong foundation in understanding desktop and mobile operating systems.",
		image: ImageF4,
		date: "March 2024",
		location: "Cisco Networking Academy (via Bulacan State University)",
	},
	{
		category: "Certification" as AchievementCategory,
		title: "Networking Devices and Initial Configuration",
		description:
			"Awarded for the successful completion of the 'Networking Devices and Initial Configuration' course through the Cisco Networking Academy at Bulacan State University. This certification highlights my understanding of fundamental networking concepts, including the identification and configuration of routers, switches, and basic network infrastructure—laying the groundwork for more advanced networking and system administration skills.",
		image: ImageF5,
		date: "February 2025",
		location: "Bulacan State University (Main Campus)",
	},
	{
		category: "Certification" as AchievementCategory,
		title: "Networking Basics",
		description:
			"Certified for the successful completion of the 'Networking Basics' course through the Cisco Networking Academy at Bulacan State University. This certification demonstrates foundational knowledge in networking concepts such as IP addressing, network topology, protocols, and device roles—serving as a critical first step in my networking and IT infrastructure journey.",
		image: ImageF6,
		date: "January 2025",
		location: "Bulacan State University (Main Campus)",
	},	
] as const;
