import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/home', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
