export interface TechStackExpertise {
  readonly name: string
  readonly icon: string
  readonly description: string
  readonly percentage: number
}

export interface Skill {
  readonly name: string
  readonly icon: string
}

export type StackCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'ci-cd'
  | 'tools'
  | 'web-hosting'

export interface TechStackAndSkill {
  readonly id: StackCategory | string
  readonly label: string
  readonly skills: readonly Skill[]
}
