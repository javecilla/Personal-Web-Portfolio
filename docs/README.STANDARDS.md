# Development Guidelines and Coding Standards

## Code Style and Structure
- Use TypeScript with functional and declarative patterns
- Follow DRY principles
- Use descriptive names with auxiliary verbs (isLoading, hasError)
- Directory structure:
  ```
  src/
  ├── assets/           # Static assets
  ├── components/       # UI components
  ├── composables/      # Composables  
  ├── constants/        # Static content
  ├── data/             # Predefined data
  ├── stores/           # Vuex stores
  ├── types/            # TypeScript types
  └── utils/            # Helper functions
  ```
- Use named exports for better tree-shaking

## Naming Conventions
- Directories: lowercase_with_undescore
- Components: PascalCase.vue
- Composables: useFeatureName.ts
- Stores: stores/featureName.ts

## TypeScript Guidelines
- Use interfaces over types
- Use const objects instead of enums
```typescript
// Instead of enum
export const UserRole = {
  ADMIN: 'admin',
  USER: 'user',
} as const;
type UserRole = typeof UserRole[keyof typeof UserRole];
```
- Explicit typing for functions
- Use readonly where appropriate

## Vue Components
- Use script setup syntax:
```vue
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
```
- Prefer async/await
- 2-space indentation
- Self-documenting code

## UI/Styling
- Tailwind CSS mobile-first
- Headless UI + Element Plus
- Use utility classes
- Dark mode support

## Performance
- VueUse for composition utilities
- Suspense for async components
- Code-splitting:
```typescript
const MyComponent = defineAsyncComponent(() => 
  import('./components/MyComponent.vue')
)
```
- Image optimization
- Bundle optimization

## Web Vitals Focus
- LCP optimization
- CLS prevention
- FID optimization
- Regular performance audits
