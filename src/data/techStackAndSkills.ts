interface Skill {
  name: string;
  icon: string;
}

interface TechStackAndSkill {
  id: string;
  label: string;
  skills: Skill[];
}

export const techStackAndSkills: TechStackAndSkill[] = [
  {
    id: 'frontend',
    label: 'Front-end',
    skills: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    ]
  },
  {
    id: 'backend',
    label: 'Back-end',
    skills: [
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    ]
  },
  {
    id: 'database',
    label: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    ]
  },
  {
    id: 'ci-cd',
    label: 'CI/CD',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
      { name: 'Github Action', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
    ]
  },
  {
    id: 'tools',
    label: 'Development Tools',
    skills: [
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Git Bash', icon: 'https://cdn.worldvectorlogo.com/logos/git-bash.svg' },
      { name: 'GitHub Desktop', icon: 'https://user-images.githubusercontent.com/1784648/97818784-c4fc1080-1ca4-11eb-8681-56ec3fa21756.png' },
      { name: 'MySQL Workbench', icon: 'https://img.utdstc.com/icon/f6f/11c/f6f11c75fda63dd454fa5db9610a77cfd6752be4db11010f2e4252551a4abccd:200' },
      { name: 'XAMPP Apache', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/XAMPP_Logo.png' },
      { name: 'Sublime Text', icon: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    ]
  },
  {
    id: 'web-hosting',
    label: 'Web Hosting (Experiences)',
    skills: [
      { name: 'Github Pages', icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-2.svg' },
      { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico' },
      { name: 'Hostgator', icon: 'https://www.hostgator.com/content/dam/hostgator/favicons/favicon.ico' },
      { name: 'GoDaddy', icon: 'https://img6.wsimg.com/ux/favicon/apple-icon-60x60.png'},
      { name: 'Hostinger', icon: 'https://www.elegantthemes.com/blog/wp-content/uploads/2024/05/Hostinger-Logo.png'}
    ]
  }
];
