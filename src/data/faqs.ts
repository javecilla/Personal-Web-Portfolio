import { FAQ } from '@/types/faqs'

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'I provide comprehensive web development solutions including frontend development with Vue.js blend with TypeScript, backend development with Laravel, database design, API development, and cloud deployment. I specialize in building responsive, performant, and scalable web applications.',
  },
  {
    id: 2,
    question: 'Do you accept project commissions?',
    answer:
      'Yes, I am open to project commissions. I work with clients on a project basis to deliver custom web solutions tailored to their needs. Feel free to reach out to discuss your project requirements and get a quote.',
  },
  {
    id: 3,
    question: 'How much would it cost to hire you for a project?',
    answer:
      'The cost of hiring me for a project depends on the scope of work, complexity, and timeline. I provide competitive pricing for my services and work with clients to deliver high-quality web solutions within their budget. ',
  },
  {
    id: 4,
    question:
      'Do you provide maintenance and support after project completion?',
    answer:
      'Yes, I offer post-launch support and maintenance packages. This includes bug fixes, performance monitoring, security updates, and feature enhancements. I can discuss specific maintenance terms based on your project needs.',
  },
  {
    id: 5,
    question: 'How do you handle project communication and updates?',
    answer:
      'I maintain clear communication through regular updates via your preferred channel (email, teams, etc.). I provide weekly progress reports, conduct sprint reviews when needed, and ensure transparent documentation throughout the development process.',
  },
  {
    id: 6,
    question: 'How do you handle project deadlines and timelines?',
    answer:
      'I prioritize deadlines and timelines by ensuring that each project is completed within the specified timeframe. I work closely with my clients to set realistic and achievable goals, and I provide regular updates and feedback to help ensure that the project stays on track.',
  },
] as const
