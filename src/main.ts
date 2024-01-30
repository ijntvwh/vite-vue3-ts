import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/style.scss'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
