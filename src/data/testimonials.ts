import { Testimonial } from "@/types/testimonial";
import alexAvatar from '@global/images/avatars/alex.jpeg';
import ericAvatar from '@global/images/avatars/eric.jpeg';
import joelAvatar from '@global/images/avatars/joel.jpeg';
import lotjeAvatar from '@global/images/avatars/lotje.jpeg';
import robertAvatar from '@global/images/avatars/robert.jpeg';
import stefanAvatar from '@global/images/avatars/stefan.jpeg';

export const testimonials: readonly Testimonial[] = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "Engineering Manager",
        company: "TechGrowth Solutions",
        avatar: alexAvatar,
        content: "Jerome brings a perfect blend of technical excellence and creativity to every project. His implementation of our component library didn't just meet requirements - it exceeded them, with exceptional attention to accessibility and performance. He's become our go-to example for clean code architecture."
    },
    {
        id: 2,
        name: "Michael Rodriguez",
        role: "Senior Frontend Lead",
        company: "Digital Innovators Hub",
        avatar: ericAvatar,
        content: "Working with Jerome was transformative for our frontend team. His expertise in Vue.js and modern web technologies helped us reduce page load times by 60% and improve user engagement metrics significantly."
    },
    {
        id: 3,
        name: "Emily Zhang",
        role: "Tech Lead",
        company: "Future Stack Labs",
        avatar: joelAvatar,
        content: "Jerome is a rare find in the development world. His ability to transform complex requirements into elegant solutions is remarkable. During our collaboration, he not only delivered outstanding code but also brought innovative ideas that significantly improved our project architecture. His commitment to clean code and best practices raised the bar for our entire team. This project is a testament to his exceptional skills and dedication."
    },
    {
        id: 4,
        name: "David Park",
        role: "Product Manager",
        company: "InnovateTech Solutions",
        avatar: lotjeAvatar,
        content: "What sets Jerome apart is his ability to understand business objectives beyond the code. He proactively suggested optimizations that reduced our deployment time by 45% and implemented advanced caching strategies that significantly improved our app's performance."
    },
    {
        id: 5,
        name: "Lisa Johnson",
        role: "UX Director",
        company: "Creative Digital Labs",
        avatar: robertAvatar,
        content: "Jerome stands out for his exceptional ability to bridge the gap between design and development. His implementation of our micro-interactions and animations brought our UI to life while maintaining stellar performance. "
    },
    {
        id: 6,
        name: "Alex Thompson",
        role: "CTO",
        company: "NextGen Startups",
        avatar: stefanAvatar,
        content: "In my 15 years of leading tech teams, Jerome is among the most promising developers I've worked with. His full-stack expertise and ability to optimize both frontend and backend performance led to a 70% improvement in our application's load time."
    },
] as const;