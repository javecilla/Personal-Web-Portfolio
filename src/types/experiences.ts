export interface Experience {
	company: string;
	position: string;
	location: string;
	description: string;
	projects: {
		name: string;
		description: string;
	}[];
	startDate: string;
	endDate: string;
}

export interface Education {
	school: string;
	degree: string;
	campus: string;
	description: string;
	startDate: string;
	endDate: string;
}
