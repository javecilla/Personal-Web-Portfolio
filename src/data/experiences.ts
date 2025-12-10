import { Experience, EmploymentType, Education } from '@/types/experience'

export const experiences: readonly Experience[] = [
  {
    company: 'Self Employed',
    position: 'Freelance Web Developer',
    type: 'Freelance' as EmploymentType,
    location: 'Online',
    description:
      'Developed and maintained websites for clients, including front-end UI/UX improvements and backend integration.',
    projects: [
      {
        name: 'Ph-En Vocabulary Web App',
        description:
          'I developed the Philippine-English Vocabulary Web App as a commissioned project for fourth-year Bachelor of Secondary Education (BSED) students majoring in English at Polytechnic University of the Philippines (PUP). Designed to enhance vocabulary mastery, this web app offers interactive learning tools, pronunciation guides, and quizzes to support effective language acquisition.',
      },
      {
        name: 'Kalat Mo, Yaman Ko',
        description:
          'I developed Kalat Mo, Yaman Ko, a community-driven digital platform designed to transform clutter into opportunities and strengthen local connections through sustainability. This platform empowers users to share, give away, and repurpose pre-loved items, aligning with the core principles of Reduce, Reuse, and Recycle. Beyond just item sharing, it’s a space built to promote eco-conscious living and foster a collaborative community ecosystem. I was referred by my professor to join the project team as the Frontend Developer, where I handled the full front-end implementation—ensuring a clean, responsive, and accessible user interface. The platform also integrates an automated CI/CD pipeline for frictionless deployment and iteration.',
      },
    ],
    startDate: 'January 2022',
    endDate: 'Present',
  },
  {
    company: 'Golden Minds Colleges',
    position: 'IT Assistant',
    type: 'Part-time' as EmploymentType,
    location: 'Sta. Maria, Bulacan',
    description:
      'Since 2022 at Golden Minds Colleges, I rapidly transitioned from optimizing front-end UI/UX to leading the design, development, and maintenance of their core digital infrastructure. I collaborated on seamless backend integration and implemented innovative full-stack solutions to streamline operations and enhance performance, directly aligning with institutional goals.',
    projects: [
      {
        name: 'Golden Minds Colleges Official Website',
        description:
          "Spearheaded the complete redesign of the college's website, leveraging modern technologies to enhance usability, accessibility, and search engine optimization (SEO). Successfully migrated the domain from .com to .edu.ph, ensuring compliance with educational institution standards. Achieved a 30% improvement in page load speed and a 25% increase in organic traffic within three months of launch.",
      },
      {
        name: 'Online Voting System',
        description:
          "Developed a secure and user-friendly online voting system for the college's events and activities. Implemented features such as candidate registration, voting, and results tracking. Achieved a 95% user satisfaction rate through regular feedback sessions and system improvements.",
      },
      {
        name: 'Student Information System (SIS)',
        description:
          'Contributed to the ongoing development and maintenance of the Student Information System, starting with front-end UI/UX improvements and later expanding to backend integration. Collaborated with the IT Coordinator to ensure the system remains reliable, secure, and capable of supporting the diverse requirements of the college community. Our efforts have streamlined administrative processes and improved accessibility for students and staff.',
      },
    ],
    startDate: 'May 2022',
    endDate: 'January 2025',
  },
] as const

export const education: Education[] = [
  {
    school: 'Bulacan State University',
    degree:
      'Bachelor of Science in Information Technology Specialized in Web and Mobile Application Development',
    campus: 'Malolos Main Campus',
    description: '',
    startDate: 'July 2023',
    endDate: 'Present',
  },
  {
    school: 'Golden Minds Colleges',
    degree:
      'Technical Vocational Livelihood in Information and Communication Technology',
    campus: 'Sta. Maria Campus',
    description:
      'Completed Senior High School with a focus on ICT, gaining foundational knowledge in programming, web development, and computer systems.',
    startDate: 'August 2021',
    endDate: 'June 2023',
  },
]
