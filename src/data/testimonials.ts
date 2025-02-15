import { Testimonial } from "@/types/testimonial";
import bernardoAvatar from '@global/images/avatars/bernardo.jpeg';
import estrellaAvatar from '@global/images/avatars/estrella.jpg';
import juanerioAvatar from '@global/images/avatars/juanerio.png';
import derekAvatar from '@global/images/avatars/derek.jpg';
import jeloAvatar from '@global/images/avatars/jelo.jpg';
import michealDummyAvatar from '@global/images/avatars/lotje.jpeg';

export const testimonials: readonly Testimonial[] = [
    {
        id: 1,
        name: "Alex Gayle M. Bernardo",
        role: "4th Year BSED Major in English (PUP)",
        company: "",
        avatar: bernardoAvatar,
        content: "Jerome consistently delivers technical excellence and innovative solutions to our projects. His ability to grasp our requirements and exceed expectations is truly remarkable. Talagang masaya kami sa kanyang contributions, as he is both a team player and a positive presence in all our meetings."
    },
    {
        id: 2,
        name: "Junilo V. Flores",
        role: "IT Coordinator",
        company: "Golden Minds Colleges",
        avatar: jeloAvatar,
        content: "Working with Jerome was transformative for our frontend team. His expertise in Vue.js and modern web technologies helped us reduce page load times by 60% and improve user engagement metrics significantly."
    },
    {
        id: 3,
        name: "Mariel T. Estrella",
        role: "Reasearch Leader",
        company: "",
        avatar: estrellaAvatar,
        content: "Jerome is a creative and advanced thinker who is always looking for innovative solutions to complex problems. His ability to transform our research findings into a beautiful and engaging web experience is unmatched. He is a true team player and always brings a positive attitude to our meetings. Nakakatuwa siyang kasama sa team, hindi ka niya pababayaan sa meeting at laging handa siya sa mga katanungan mo. His communication sa amin ay napakaganda, smooth, walang ghosting and consistent. Kaya for me if kailangan mo ng developer for your project or thesis, si Jerome ang tama na developer for you."
    },
    {
        id: 4,
        name: "Michael Rodriguez",
        role: "Programmer",
        company: "InnovateTech Solutions",
        avatar: michealDummyAvatar,
        content: "Jerome is a skilled student developer who is always willing to go the extra mile to ensure that the project is successful. His eagerness to learn new technologies that align with the market allows him to deliver high-quality results that exceed my expectations."
    },
    {
        id: 5,
        name: "Engr. Derek Malibiran",
        role: "School President",
        company: "Golden Minds Colleges",
        avatar: derekAvatar,
        content: "What sets Jerome apart is his ability to understand business objectives beyond the code. He proactively suggested optimizations that reduced our deployment time by 45% and implemented advanced caching strategies that significantly improved our system's performance at Golden Minds Colleges."
    },
    {
        id: 6,
        name: "Rose Angeline L. Juanerio",
        role: "4th Year BSED Major in English (PUP)",
        company: "",
        avatar: juanerioAvatar,
        content: "Jerome is communication skills with us is always clear and concise. He is always willing to go the extra mile to ensure that our project is successful. His ability to understand our needs and deliver results that exceed our expectations is impressive."
    },
] as const;