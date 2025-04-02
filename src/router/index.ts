import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'
import ProfileView from '@/views/ProfilePage.vue'
import { useAuthStore } from '@/store'
import ChatPage from '@/views/ChatPage.vue'
import MyLeaguePage from '@/views/MyLeaguePage.vue'
import MyBotsPage from '@/views/MyBotsPage.vue'
import NewLeaguePage from '@/views/NewLeaguePage.vue'
import RegisterPage from '@/views/RegisterPage.vue'

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },
  { path: '/login', component: LoginView },
  { path: '/profile', component: ProfileView, meta: { requiresAuth: true } },
  { path: '/chat', component: ChatPage },
  { path: '/myLeague', component: MyLeaguePage },
  { path: '/createLeague', component: NewLeaguePage },
  { path: '/myBots', component: MyBotsPage },
  { path: '/register', component: RegisterPage },
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
