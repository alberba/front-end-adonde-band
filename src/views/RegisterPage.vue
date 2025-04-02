<script setup lang="ts">
import FooterApp from '@/components/FooterApp.vue'
import { ref } from 'vue'
import { useAuthStore } from '@/store'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()

const router = useRouter()
function tempRedirectHome() {
  authStore.login()
  const redirectPath = localStorage.getItem('redirectPath')
  // Redirecciona en caso de que haya una ruta guardada, de lo contrario redirecciona a la raíz
  router.push(redirectPath || '/')
  localStorage.removeItem('redirectPath')
}

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden')
    return
  }

  const userData = {
    user: username.value,
    email: email.value,
    password: password.value,
  }

  try {
    const response = await fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })

    if (!response.ok) {
      throw new Error('Error en la solicitud')
    }

    const data = await response.json()
    console.log('Usuario registrado:', data)
    tempRedirectHome()
  } catch (error) {
    console.error('Error al registrar el usuario:', error)
    alert('Error al registrar el usuario')
  }
}
</script>

<template>
  <header class="flex w-full flex-row items-center justify-between px-10 py-2.5">
    <h1 class="text-4xl font-bold md:text-[48px] lg:text-[64px]">Bienvenido a BotSports</h1>
    <img class="h-[150px]" src="../assets/loginicon.svg" alt="" />
  </header>

  <main class="my-10 flex w-full justify-center">
    <form
      action="post"
      @submit.prevent="handleSubmit"
      class="flex w-full flex-col items-center gap-4 rounded-md bg-white p-6 text-black md:mx-24 lg:mx-36 lg:w-[700px]"
    >
      <label for="username" class="flex w-full flex-col">
        Nombre de usuario
        <input
          v-model="username"
          class="my-2 rounded-lg border-1 border-gray-400 px-3 py-2"
          type="text"
          id="username"
          name="username"
          placeholder="Escribe tu nombre de usuario"
          required
        />
      </label>
      <label for="email" class="flex w-full flex-col">
        Email
        <input
          v-model="email"
          class="my-2 rounded-lg border-1 border-gray-400 px-3 py-2"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
      </label>

      <div class="flex w-full flex-row items-center gap-8">
        <label for="password" class="flex w-full flex-col">
          Contraseña
          <input
            v-model="password"
            class="my-2 rounded-lg border-1 border-gray-400 px-3 py-2"
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
          />
        </label>
        <label for="confirm-password" class="flex w-full flex-col">
          Confirmar Contraseña
          <input
            v-model="confirmPassword"
            class="my-2 rounded-lg border-1 border-gray-400 px-3 py-2"
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirma tu contraseña"
            required
          />
        </label>
      </div>

      <button
        type="submit"
        class="flex w-48 justify-center rounded-full bg-[#525252] py-2 text-white"
      >
        Registrarse
      </button>
    </form>
  </main>
  <FooterApp />
</template>
