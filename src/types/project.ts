export interface ProjectTech {
  name: string;
  icon: string;
}

export const enum ProjectCategory {
  PERSONAL = 'personal',
  CLIENT = 'client',
  ACADEMIC = 'academic'
}

export interface ProjectCategoryItem {
  id: ProjectCategory | 'all' | 'highlights';
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
  technologies: ProjectTech[];
  category: ProjectCategory;
  isHighlight?: boolean;
}