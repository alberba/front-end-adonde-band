import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import LoginPage from './views/LoginPage.vue'

createApp(LoginPage).use(router).mount('#app')
