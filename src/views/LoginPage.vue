<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function tempRedirectHome() {
  router.push('/home')
}
</script>

<template>
  <header class="mx-12 my-2.5 flex flex-row items-center justify-between">
    <h1 class="text-[64px] font-bold">Bienvenido a BotSports</h1>
    <img class="h-[150px]" src="../assets/loginicon.svg" alt="" />
  </header>

  <main class="my-10 flex justify-center">
    <form
      action="post"
      class="flex w-2/5 flex-col items-center gap-4 rounded-md bg-white p-6 text-black"
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
        class="w-2xs rounded-full bg-[#06f] py-2 text-white"
      >
        Iniciar Sesión
      </button>
      <RouterLink to="/home">Iniciar Sesion</RouterLink>

      <a href="register" class="flex w-48 justify-center rounded-full bg-[#525252] py-2 text-white">
        Registrarse
      </a>
    </form>
  </main>
</template>
