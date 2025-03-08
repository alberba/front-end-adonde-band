<script setup lang="ts">
import FooterApp from '@/components/FooterApp.vue'
import HeaderApp from '@/components/HeaderApp.vue'
</script>

<template>
  <HeaderApp title="Mi Perfil" :isHeading1="true" />

  <main
    class="flex w-full max-w-4xl flex-col items-center justify-center rounded-xl bg-[#2a2a2a] p-6 px-10 py-10 shadow-xl"
  >
    <!-- Bienvenida al Perfil -->
    <header class="mb-6 w-full text-center text-3xl font-semibold text-white md:text-4xl">
      <h2 class="">¡Hola, Adonde Boy!</h2>
      <div class="mx-auto mt-2 w-1/4 border border-white"></div>
    </header>

    <!-- Imagen del Usuario -->
    <img src="@/assets/tempProfile.png" alt="" class="w-[150px] rounded-full object-contain" />

    <form
      action="post"
      class="mt-10 flex w-full flex-col items-center gap-4 rounded-md bg-[#2a2a2a] pb-6 text-white md:mx-24 lg:mx-36 lg:w-[700px]"
    >
      <fieldset class="mb-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
        <!-- Nombre -->
        <label for="name" class="text-white">
          Nombre
          <input
            id="name"
            type="text"
            class="w-full rounded-lg border-2 border-[#333] bg-[#171717] p-3 text-white"
            placeholder="Introduce tu nombre"
            required
        /></label>

        <!-- Correo electrónico -->
        <label for="email" class="text-white">
          Correo electrónico
          <input
            id="email"
            type="email"
            class="w-full rounded-lg border-2 border-[#333] bg-[#171717] p-3 text-white"
            placeholder="Introduce tu correo electrónico"
            required
        /></label>
      </fieldset>

      <fieldset class="flex flex-col items-center">
        <legend class="w-full mb-6 text-center text-2xl font-semibold text-white">
          Cambiar Contraseña
          <div class="mx-auto mt-2 w-1/7 border border-white"></div>
        </legend>
        <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          <label for="password" class="text-white">
            Contraseña
            <input
              id="password"
              type="password"
              class="w-full rounded-lg border-2 border-[#333] bg-[#171717] p-3 text-white"
              placeholder="Introduce tu contraseña"
              required
          /></label>

          <!-- Confirmar Contraseña -->
          <label for="confirmPassword" class="text-white">
            Confirmar contraseña
            <input
              id="confirmPassword"
              type="password"
              class="w-full rounded-lg border-2 border-[#333] bg-[#171717] p-3 text-white"
              placeholder="Confirma tu contraseña"
              required
          /></label>
        </div>
        <!-- Contraseña -->
      </fieldset>

      <!-- Botón Guardar cambios -->
      <button type="submit" class="mt-6 rounded-full bg-[#06f] px-6 py-3 text-lg text-white" aria-label="Guardar cambios">
        Guardar cambios
      </button>
    </form>
  </main>
  <FooterApp />
</template>
