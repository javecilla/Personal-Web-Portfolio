// Define both the constant and its type in the same file
export const ProjectCategoryEnum = {
    PERSONAL: 'personal',
    CLIENT: 'client',
    ACADEMIC: 'academic'
} as const;

// Export the type for use in other files
export type ProjectCategory = (typeof ProjectCategoryEnum)[keyof typeof ProjectCategoryEnum];
