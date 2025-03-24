export const ProjectCategoryEnum = {
    PERSONAL: 'personal',
    CLIENT: 'client',
    ACADEMIC: 'academic'
} as const;

export type ProjectCategory = (typeof ProjectCategoryEnum)[keyof typeof ProjectCategoryEnum];
