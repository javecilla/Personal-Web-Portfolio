import { TechStackExpertise } from '@/types/tech-stack'

import vueIcon from '@global/svgs/vue.svg?url'
import tsIcon from '@global/svgs/typescript.svg?url'
import tailwindIcon from '@global/svgs/tailwind.svg?url'
import laravelIcon from '@global/svgs/laravel.svg?url'
import postgresqlIcon from '@global/svgs/postgresql.svg?url'

export const techStacksExpertise: readonly TechStackExpertise[] = [
  {
    name: 'Laravel',
    icon: laravelIcon,
    description: 'Developing robust backend systems with Laravel',
    percentage: 90,
  },
  {
    name: 'PostgreSQL',
    icon: postgresqlIcon,
    description: 'Designing and managing databases with PostgreSQL',
    percentage: 85,
  },
  {
    name: 'Tailwind',
    icon: tailwindIcon,
    description: 'Creating beautiful and responsive UIs with Tailwind CSS',
    percentage: 70,
  },
  {
    name: 'TypeScript',
    icon: tsIcon,
    description: 'Writing type-safe and maintainable code with TypeScript',
    percentage: 80,
  },
  {
    name: 'Vue.js',
    icon: vueIcon,
    description:
      'Building scalable and maintainable web applications with Vue.js',
    percentage: 90,
  },
] as const
