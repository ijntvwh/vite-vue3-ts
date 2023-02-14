import routes from 'virtual:generated-pages'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.scss'

const router = createRouter({
  history: createWebHistory(),
  routes,
})
console.log('routes', routes)
const app = createApp(App)
app.use(router)
app.mount('#app')
