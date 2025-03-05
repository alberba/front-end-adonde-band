import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'
import ProfileView from '@/views/ProfilePage.vue'
import { useAuthStore } from '@/store'
import ChatPage from '@/views/ChatPage.vue'

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },
  { path: '/login', component: LoginView },
  { path: '/profile', component: ProfileView, meta: { requiresAuth: true } },
  { path: '/chat', component: ChatPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Guard de navegación para verificar la autenticación
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !useAuthStore().isAuthenticated) {
    localStorage.setItem('redirectPath', to.fullPath)
    next('/login')
  }
  next()
})

export default router
