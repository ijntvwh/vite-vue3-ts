import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import 'uno.css'
import '@unocss/reset/tailwind-compat.css'
import '@/style.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
