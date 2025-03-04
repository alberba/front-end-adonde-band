import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'

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
  const isAuthenticated = false // Aquí deberías implementar tu lógica de autenticación
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  }
  next()
})

export default router
