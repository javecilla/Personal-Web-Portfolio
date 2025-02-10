import { createApp } from 'vue'
import { store, key } from './store'
import App from '@/App.vue'

// Create app instance
const app = createApp(App)
// Install store with key
app.use(store, key)

// Handle initialization
const initialize = async () => {
  // Import styles after app creation
  await import('@/style.css')
  await import('@assets/styles/components.css')
  
  // Mount app after styles are loaded
  app.mount('#app')
}

// Initialize app
initialize().catch(console.error)