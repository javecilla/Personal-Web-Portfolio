export interface ProjectTech {
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

export interface ProjectCategoryItem {
	id: string;
	label: string;
}
