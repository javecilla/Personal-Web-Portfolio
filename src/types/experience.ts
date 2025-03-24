export interface ExperienceProject {
  readonly name: string;
  readonly description: string;
}

export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Freelance';

export interface Experience {
  readonly company: string;
  readonly position: string;
  readonly type: EmploymentType;
  readonly startDate: string;
  readonly endDate?: string;
  readonly location: string;
  readonly description: string;
  readonly responsibilities?: readonly string[];
  readonly technologies?: readonly string[];
  readonly projects?: readonly ExperienceProject[];
}

export interface Education {
  readonly school: string;
  readonly degree: string;
  readonly campus: string;
  readonly description: string;
  readonly startDate: string;
  readonly endDate: string;
}
