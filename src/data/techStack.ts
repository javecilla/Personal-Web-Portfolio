import { markRaw } from 'vue';
import VuejsIcon from '@/components/icons/VuejsIcon.vue';
import TypescriptIcon from '@/components/icons/TypescriptIcon.vue';
import JavascriptIcon from '@/components/icons/JavascriptIcon.vue';
import TailwindIcon from '@/components/icons/TailwindIcon.vue';
import LaravelIcon from '@/components/icons/LaravelIcon.vue';

interface TechStack {
  name: string;
  icon: any;  
  color: string;
}

export const techStacks: TechStack[] = [
  {
    name: 'Vue JS',
    icon: markRaw(VuejsIcon),  // Mark the component as raw to avoid Vue warning
    color: '#42b883'
  },
  {
    name: 'TypeScript',
    icon: markRaw(TypescriptIcon),
    color: '#007acc'
  },
  {
    name: 'JavaScript',
    icon: markRaw(JavascriptIcon),
    color: '#F7DF1E'
  },
  {
    name: 'Tailwind CSS',
    icon: markRaw(TailwindIcon),
    color: '#38bdf8'
  },
  {
    name: 'Laravel',
    icon: markRaw(LaravelIcon),
    color: '#FF2D20'
  }
];
