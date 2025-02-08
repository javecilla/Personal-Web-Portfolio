import projectA from "@global/assets/images/ref002.png";
import projectB from "@global/assets/images/523aaa.png";
import projectC from "@global/assets/images/551asfh.png";
import projectD from "@global/assets/images/t2131.png";

interface ProjectTech {
  name: string;
  icon: string;
}

export type ProjectCategory = "academic" | "personal" | "client";

export interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
  technologies: ProjectTech[];
  category: ProjectCategory;
  isHighlight?: boolean;
}

export const projects: Project[] = [
    {
        title: "Portfolio Website",
        description: "My personal website serves as a digital portfolio, showcasing my projects, skills, and experiences. This project is a testament to my passion for web development and design. ",
        image: projectD, 
        githubUrl: "https://github.com/javecilla/portfolio",
        demoUrl: "https://javecilla.vercel.app/",
        technologies: [
          {
            name: "Vue.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
          },
          {
            name: "TypeScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          },
          {
            name: "Tailwind CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          }
        ],
        category: "personal",
        isHighlight: false
    },
    {
        title: "Golden Minds Official Website",
        description: "A solo project dedicated to building and maintaining the Official Website of Golden Minds Colleges-Academy. Designed as a dynamic platform, it serves the student community by providing essential information, updates, and resources to enhance their academic experience.",
        image: projectA, 
        githubUrl: "https://github.com/javecilla/Golden-Minds-Colleges-Web-System",
        demoUrl: "https://www.goldenminds.edu.ph/",
        technologies: [
          {
            name: "Laravel",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
          },
          {
            name: "Vue.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
          },
          {
            name: "Bootstrap",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
          }
        ],
        category: "client",
        isHighlight: true
    },
    {
        title: "Online Voting System",
        description: "A solo project for Golden Minds Colleges developed a dynamic and Interactive Voting System, ensuring a seamless and engaging digital voting experience for the community.",
        image: "https://camo.githubusercontent.com/bb8cf6b3e0eef08c831ceff3ec20a7ade4803822fc1cd2a5345605cf10f5e89a/68747470733a2f2f7374617469632e676f6c64656e6d696e647362756c6163616e2e636f6d2f6173736574732f696d616765732f6465762f34313331414441642e706e67",
        githubUrl: "https://github.com/javecilla/Online-Voting-System",
        demoUrl: "https://voting.goldenmindsbulacan.com/",
        technologies: [
        {
            name: "Laravel",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
        },
        {
            name: "jQuery",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"
        },
        {
            name: "Bootstrap",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
        }
        ],
        category: "client",
        isHighlight: true
    },
    {
        title: "Ph-En Vocabulary Web App",
        description: "A commision project by a fourth-year PUP students of BSED Major in English, designed to help users master diverse English vocabulary. This web app features reading exercises, pronunciation guides, and interactive quizzes with score tracking to enhance learning.",
        image: projectB,
        githubUrl: "https://github.com/javecilla/Philippine_English_Vocabulary",
        demoUrl: "https://philippineenglishvocabulary.com/",
        technologies: [
        {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
        },
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"        
        },
        {
            name: "Bootstrap",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
        }
        ],
        category: "client",
        isHighlight: true
    },
    {
        title: "Web-Based Inventory System",
        description: "The Inventory System is a comprehensive web-based solution developed as a thesis project during my Senior High School at Golden Minds Colleges. This project fulfills the requirements of the Information and Communication Technology (ICT) strand and aims to enhance the management of HRM tools and equipment inventories. ",
        image: projectC,
        githubUrl: "https://github.com/javecilla/Web-Based-Inventory-Management-System",
        demoUrl: "https://ims.goldenmindsbulacan.com/",
        technologies: [
        {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
        },
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"        
        },
        {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        }
        ],
        category: "academic",
        isHighlight: false
    },
  // Add more projects here
];

export const categories = [
  { id: "highlights", label: "Highlights" },
  { id: "all", label: "All Projects" },
  { id: "academic", label: "Academic" },
  { id: "personal", label: "Personal" },
  { id: "client", label: "Client" }
] as const;
