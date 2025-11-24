import { TechStackAndSkill, StackCategory } from '@/types/tech-stack'

// Import icons locally
import htmlIcon from '@global/svgs/html5.svg?url'
import cssIcon from '@global/svgs/css3.svg?url'
import jsIcon from '@global/svgs/javascript.svg?url'
import tsIcon from '@global/svgs/typescript.svg?url'
import vueIcon from '@global/svgs/vue.svg?url'
import tailwindIcon from '@global/svgs/tailwind.svg?url'
import bootstrapIcon from '@global/svgs/bootstrap.svg?url'
import jqueryIcon from '@global/svgs/jquery.svg?url'
import phpIcon from '@global/svgs/php.svg?url'
import laravelIcon from '@global/svgs/laravel.svg?url'
import mysqlIcon from '@global/svgs/mysql.svg?url'
import postgresqlIcon from '@global/svgs/postgresql.svg?url'
import firebaseIcon from '@global/svgs/firebase.svg?url'
import gitIcon from '@global/svgs/git.svg?url'
import gitLabIcon from '@global/svgs/gitlab.svg?url'
import githubActionIcon from '@global/svgs/github-actions.svg?url'
import githubPagesIcon from '@global/svgs/github-pages.svg?url'
import dockerIcon from '@global/svgs/docker.svg?url'

import infinityFreeLogo from '@global/svgs/infinityfree.svg?url'
import godaddyLogo from '@global/images/logos/godaddy.png'
import hostingerLogo from '@global/images/logos/hostinger.png'
import vercelFavicon from '@global/images/logos/vercel.ico'
import hostgatorFavicon from '@global/images/logos/hostgator.ico'
import googleCloudIcon from '@global/svgs/google-cloud.svg?url'

export const techStackAndSkills: readonly TechStackAndSkill[] = [
  {
    id: 'frontend' as StackCategory,
    label: 'Front-end',
    skills: [
      {
        name: 'HTML',
        icon: htmlIcon,
      },
      {
        name: 'CSS',
        icon: cssIcon,
      },
      {
        name: 'JavaScript',
        icon: jsIcon,
      },
      {
        name: 'Bootstrap',
        icon: bootstrapIcon,
      },
      {
        name: 'jQuery',
        icon: jqueryIcon,
      },
      {
        name: 'Vue.js',
        icon: vueIcon,
      },
      {
        name: 'TypeScript',
        icon: tsIcon,
      },
      {
        name: 'Tailwind',
        icon: tailwindIcon,
      },
    ],
  },
  {
    id: 'backend' as StackCategory,
    label: 'Back-end',
    skills: [
      {
        name: 'PHP',
        icon: phpIcon,
      },
      {
        name: 'Laravel',
        icon: laravelIcon,
      },
    ],
  },
  {
    id: 'database' as StackCategory,
    label: 'Databases',
    skills: [
      {
        name: 'MySQL',
        icon: mysqlIcon,
      },
      {
        name: 'PostgreSQL',
        icon: postgresqlIcon,
      },
      {
        name: 'Firebase',
        icon: firebaseIcon,
      },
    ],
  },
  {
    id: 'ci-cd' as StackCategory,
    label: 'DevOps Tools',
    skills: [
      {
        name: 'Git',
        icon: gitIcon,
      },
      {
        name: 'GitLab',
        icon: gitLabIcon,
      },
      {
        name: 'Github Action',
        icon: githubActionIcon,
      },
      {
        name: 'Docker',
        icon: dockerIcon,
      },
    ],
  },
  {
    id: 'web-hosting' as StackCategory,
    label: 'Web Hosting (Experiences)',
    skills: [
      {
        name: 'Github Pages',
        icon: githubPagesIcon,
      },

      {
        name: 'Vercel',
        icon: vercelFavicon,
      },

      {
        name: 'Hostgator',
        icon: hostgatorFavicon,
      },

      {
        name: 'GoDaddy',
        icon: godaddyLogo,
      },
      {
        name: 'Hostinger',
        icon: hostingerLogo,
      },
      {
        name: 'InfinityFree',
        icon: infinityFreeLogo,
      },
      {
        name: 'Google Cloud',
        icon: googleCloudIcon,
      },
    ],
  },
] as const
