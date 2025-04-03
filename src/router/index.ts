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
import NewBotPage from '@/views/NewBotPage.vue'

// TODO: Descomentar las rutas protegidas cuando se suba a producción
// const routes = [
//   { path: '/', component: HomePage, meta: { requiresAuth: true } },
//   { path: '/login', component: LoginView },
//   { path: '/profile', component: ProfileView, meta: { requiresAuth: true } },
//   { path: '/chat', component: ChatPage, meta: { requiresAuth: true } },
//   { path: '/myLeague', component: MyLeaguePage, meta: { requiresAuth: true } },
//   { path: '/createLeague', component: NewLeaguePage, meta: { requiresAuth: true } },
//   { path: '/myBots', component: MyBotsPage, meta: { requiresAuth: true } },
//   { path: '/createBot', component: NewBotPage, meta: { requiresAuth: true } },
//   { path: '/register', component: RegisterPage },
// ]

// RUTAS SIN PROTECCIÓN (SOLO PARA DESARROLLO)
const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginView },
  { path: '/profile', component: ProfileView },
  { path: '/chat', component: ChatPage },
  { path: '/myLeague', component: MyLeaguePage },
  { path: '/createLeague', component: NewLeaguePage },
  { path: '/myBots', component: MyBotsPage },
  { path: '/createBot', component: NewBotPage },
  { path: '/register', component: RegisterPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Guard de navegación para verificar la autenticación
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    localStorage.setItem('redirectPath', to.fullPath)
    next('/login')
  }

  next()
})

export default router
