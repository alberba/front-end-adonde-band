import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'sweetalert2/dist/sweetalert2.min.css'

const app =  createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
