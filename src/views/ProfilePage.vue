<template>
  <header class="flex w-full flex-col sm:flex-row items-center justify-between py-4 px-6">
    <h1 class="text-white text-[28px] sm:text-[24px] font-bold mb-4 sm:mb-0">Mi perfil</h1>
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-8">
      <button style="background-color: rgb(82, 82, 82);" class="text-white px-6 py-2 rounded-full">
        Mis Ligas
      </button>
      <button style="background-color: rgb(82, 82, 82);" class="text-white px-6 py-2 rounded-full">
        Mis Bots
      </button>
    </div>
  </header>

  <main class="flex flex-col items-center justify-center py-10">
    <div class="flex flex-col items-center justify-center bg-[#2a2a2a] p-6 rounded-xl w-full max-w-4xl shadow-xl">

      <!-- Bienvenida al Perfil -->
      <div class="text-center mb-6 text-white text-4xl font-semibold">
        <h2>¡Hola, Adonde Boy!</h2>
        <div class="w-[80%] mx-auto border-b-2 border-[#525252] mt-2"></div>
      </div>

      <!-- Imagen del Usuario -->
      <div class="relative mb-6 w-[150px] h-[150px] bg-red-500 rounded-full flex items-center justify-center text-white text-[64px] font-bold">
        <span>Ad</span>
      </div>

      <form action="post" class="flex w-full flex-col items-center gap-4 rounded-md bg-[#2a2a2a] p-6 text-white md:mx-24 lg:mx-36 lg:w-[700px]">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <!-- Nombre -->
          <div class="w-full">
            <label for="name" class="text-white">Nombre</label>
            <input
              id="name"
              type="text"
              class="w-full p-3 rounded-lg border-2 border-[#333] bg-[#121212] text-white"
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
              class="w-full p-3 rounded-lg border-2 border-[#333] bg-[#121212] text-white"
              placeholder="Introduce tu correo electrónico..."
              required
            />
          </div>
        </div>

        <div class="mb-12"></div>
        <div class="text-center mb-6 text-white text-2xl font-semibold">
          <h2>Cambiar Contraseña</h2>
          <div class="w-[80%] mx-auto border-b-2 border-[#525252] mt-2"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <!-- Contraseña -->
          <div class="w-full">
            <label for="password" class="text-white">Contraseña</label>
            <input
              id="password"
              type="password"
              class="w-full p-3 rounded-lg border-2 border-[#333] bg-[#121212] text-white"
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
              class="w-full p-3 rounded-lg border-2 border-[#333] bg-[#121212] text-white"
              placeholder="Confirma tu contraseña..."
              required
            />
          </div>
        </div>

        <!-- Botón Guardar cambios -->
        <button
          type="submit"
          class="bg-[#06f] py-3 px-6 text-white rounded-full text-lg mt-6"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  </main>
</template>
