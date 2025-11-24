export type AchievementDate = `${string} ${number}`

export type AchievementCategory =
  | 'Competition'
  | 'Academic'
  | 'Professional'
  | 'Certification'

export interface Achievement {
  readonly category: AchievementCategory
  readonly title: string
  readonly description: string
  readonly image: string
  readonly date: AchievementDate
  readonly location: string
}
