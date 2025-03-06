<script setup lang="ts">
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
</script>

<template>
  <header class="px-10 flex w-full flex-row items-center justify-between py-2.5">
    <h1 class="text-4xl font-bold md:text-[48px] lg:text-[64px]">Bienvenido a BotSports</h1>
    <img class="h-[150px]" src="../assets/loginicon.svg" alt="" />
  </header>

  <main class="my-10 flex w-full justify-center">
    <form
      action="post"
      class="flex w-full flex-col items-center gap-4 rounded-md bg-white p-6 text-black md:mx-24 lg:mx-36 lg:w-[700px]"
    >
      <label for="email" class="flex w-full flex-col">
        Email
        <input
          class="my-2 rounded-lg border-1 border-gray-400 px-3 py-2"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
      </label>

      <label for="password" class="flex w-full flex-col">
        Contraseña
        <input
          class="my-2 rounded-lg border-1 border-gray-400 px-3 py-2"
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
        />
      </label>

      <a href="http://" class="self-start underline">Forgot Password?</a>

      <button
        @click="tempRedirectHome()"
        type="submit"
        class="mx-3 box-border w-full rounded-full bg-[#06f] py-2 text-white md:w-xs lg:w-2xs"
      >
        Iniciar Sesión
      </button>

      <a href="register" class="flex w-48 justify-center rounded-full bg-[#525252] py-2 text-white">
        Registrarse
      </a>
    </form>
  </main>
</template>
