// Define specific date format type
type AchievementDate = `${string} ${number}`;

// Define allowed categories
export type AchievementCategory = 'Competition' | 'Academic' | 'Professional' | 'Certification';

// Main interface
export interface Achievement {
  readonly category: AchievementCategory;  // Make it more type-safe with specific categories
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly date: AchievementDate;  // Enforce date format
  readonly location: string;
}
