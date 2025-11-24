export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'DevOps'
  | 'Tools'
  | 'Other'

export interface Skill {
  readonly name: string
  readonly level: SkillLevel
  readonly category: SkillCategory
  readonly icon?: string
  readonly yearsOfExperience: number
}
