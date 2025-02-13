export type ProjectStatus = 'completed' | 'ongoing' | 'maintenance';
export type ProjectType = 'web' | 'mobile' | 'desktop' | 'api';
export type TechStack = string;

export interface ProjectTech {
  readonly name: string;
  readonly icon: string;
}

export enum ProjectCategory {
  PERSONAL = 'personal',
  CLIENT = 'client',
  ACADEMIC = 'academic'
}

export interface ProjectCategoryItem {
  readonly id: ProjectCategory | 'all' | 'highlights';
  readonly label: string;
}

export interface Project {
  readonly id: string | number;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly status?: ProjectStatus;
  readonly type?: ProjectType;
  readonly techStack?: readonly TechStack[];
  readonly technologies?: readonly ProjectTech[];
  readonly sourceCode?: string;
  readonly githubUrl?: string;
  readonly liveDemo?: string;
  readonly demoUrl?: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly category: ProjectCategory;
  readonly isHighlight: boolean;
}