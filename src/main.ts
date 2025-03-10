import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import '@/assets/styles/app.css'
import '@/assets/styles/components.css'

// Create app instance
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

// Initialize Element Plus and other dependencies asynchronously
Promise.all([
  import('element-plus'),
  import('element-plus/dist/index.css'),
  import('dayjs/locale/en')
]).then(([ElementPlus]) => {
  app.use(ElementPlus.default, { size: 'default' })
  app.mount('#app')
})