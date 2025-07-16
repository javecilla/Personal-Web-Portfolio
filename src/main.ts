import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from '@/App.vue'
import '@/assets/styles/app.css'
import '@/assets/styles/components.css'

console.log('[main.ts] Creating Vue app...')
const app = createApp(App)
console.log('[main.ts] Creating Pinia instance...')
const pinia = createPinia()
console.log('[main.ts] Installing Pinia...')
app.use(pinia)
// console.log('[main.ts] Installing ElementPlus...')
// app.use(ElementPlus)
console.log('[main.ts] Mounting app...')
app.mount('#app')
console.log('[main.ts] App mounted!')
