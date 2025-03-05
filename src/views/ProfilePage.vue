<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
</script>

<template>
  <HeaderApp title="Mi Perfil" :isHeading1="true" />

  <main class="flex flex-col items-center justify-center py-10">
    <div
      class="flex w-full max-w-4xl flex-col items-center justify-center rounded-xl bg-[#2a2a2a] p-6 shadow-xl"
    >
      <!-- Bienvenida al Perfil -->
      <div class="mb-6 text-center text-4xl font-semibold text-white">
        <h2>¡Hola, Adonde Boy!</h2>
        <div class="mx-auto mt-2 w-[80%] border-b-2 border-[#525252]"></div>
      </div>

      <!-- Imagen del Usuario -->
      <div
        class="relative mb-6 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-red-500 text-[64px] font-bold text-white"
      >
        <span>Ad</span>
      </div>

      <form
        action="post"
        class="flex w-full flex-col items-center gap-4 rounded-md bg-[#2a2a2a] p-6 text-white md:mx-24 lg:mx-36 lg:w-[700px]"
      >
        <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          <!-- Nombre -->
          <div class="w-full">
            <label for="name" class="text-white">Nombre</label>
            <input
              id="name"
              type="text"
              class="w-full rounded-lg border-2 border-[#333] bg-[#121212] p-3 text-white"
              placeholder="Introduce tu nombre..."
              required
            />
          </div>

          <!-- Correo electrónico -->
          <div class="w-full">
            <label for="email" class="text-white">Correo electrónico</label>
            <input
              id="email"
              type="email"
              class="w-full rounded-lg border-2 border-[#333] bg-[#121212] p-3 text-white"
              placeholder="Introduce tu correo electrónico..."
              required
            />
          </div>
        </div>

        <div class="mb-12"></div>
        <div class="mb-6 text-center text-2xl font-semibold text-white">
          <h2>Cambiar Contraseña</h2>
          <div class="mx-auto mt-2 w-[80%] border-b-2 border-[#525252]"></div>
        </div>

        <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          <!-- Contraseña -->
          <div class="w-full">
            <label for="password" class="text-white">Contraseña</label>
            <input
              id="password"
              type="password"
              class="w-full rounded-lg border-2 border-[#333] bg-[#121212] p-3 text-white"
              placeholder="Introduce tu contraseña..."
              required
            />
          </div>

          <!-- Confirmar Contraseña -->
          <div class="w-full">
            <label for="confirmPassword" class="text-white">Confirmar contraseña</label>
            <input
              id="confirmPassword"
              type="password"
              class="w-full rounded-lg border-2 border-[#333] bg-[#121212] p-3 text-white"
              placeholder="Confirma tu contraseña..."
              required
            />
          </div>
        </div>

        <!-- Botón Guardar cambios -->
        <button type="submit" class="mt-6 rounded-full bg-[#06f] px-6 py-3 text-lg text-white">
          Guardar cambios
        </button>
      </form>
    </div>
  </main>
</template>
