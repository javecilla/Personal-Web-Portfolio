export interface TechStackExpertise {
	name: string;
	icon: string;
	description: string;
	percentage: number;
}

export interface Skill {
	name: string;
	icon: string;
}

export interface TechStackAndSkill {
	id: string;
	label: string;
	skills: Skill[];
}
