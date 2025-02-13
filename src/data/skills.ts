import { Skill, SkillLevel, SkillCategory } from '@/types/skill';

export const skills: readonly Skill[] = [
  {
    name: 'Vue.js',
    level: 'Advanced' as SkillLevel,
    category: 'Frontend' as SkillCategory,
    icon: 'vue-icon',
    yearsOfExperience: 2
  },
  // ...existing skills...
] as const;
