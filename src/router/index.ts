import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'
import { useAuthStore } from '@/store'

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },
  { path: '/login', component: LoginView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Guard de navegación para verificar la autenticación
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !useAuthStore().isAuthenticated) {
    next('/login')
  }
  next()
})

export default router
