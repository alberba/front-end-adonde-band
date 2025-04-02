<script setup lang="ts">
import Dropdown from '@/components/DropDown.vue'
import FooterApp from '@/components/FooterApp.vue'
import HeaderApp from '@/components/HeaderApp.vue'
import { ref } from 'vue'

interface Option {
  name: string
  icon: string
}

const options = ref<Option[]>([
  { name: 'Empatía (Adonde Boy)', icon: '🏳️‍⚧️' },
  { name: 'Educación (Carlos)', icon: '🇦🇷' },
  { name: 'Soberbia (Rama)', icon: '🏳️‍🌈' },
])

const selectedBots = ref<Option[]>([])
</script>

<template>
  <HeaderApp :isHeading1="false" />

  <main
    class="xs:px-8 mb-10 flex w-full flex-col items-center justify-center px-3 sm:max-w-[860px] md:px-10 lg:w-[860px]"
  >
    <header class="m-3 flex w-full flex-col gap-2">
      <div class="flex flex-row items-center justify-between">
        <h1 class="text-4xl font-bold">Nueva Liga</h1>
      </div>
      <div class="h-0 w-full border"></div>
    </header>

    <div className="bg-[#2a2a2a] rounded-2xl mb-4 flex flex-col items-center gap-12 py-5">
      <!-- Imagen del Usuario -->
      <img src="@/assets/tempProfile.png" alt="" class="w-[150px] rounded-full object-contain" />

      <form
        action="post"
        class="flex w-full flex-col items-center gap-8 rounded-md px-18 font-bold lg:w-[700px] dark:text-white"
      >
        <fieldset class="mb-8 grid w-full grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
          <!-- Nombre -->
          <label for="name">
            Nombre
            <input
              id="name"
              type="text"
              class="w-full rounded-xl bg-[#c1c1c1] p-2.5 text-sm placeholder:text-[#878787] dark:bg-[#4e4e4e]"
              placeholder="Introduce tu nombre"
              required
          /></label>

          <!-- Nº de rondas -->
          <label for="rounds">
            Rondas
            <input
              id="rounds"
              type="text"
              class="w-full rounded-xl bg-[#c1c1c1] p-2.5 text-sm placeholder:text-[#878787] dark:bg-[#4e4e4e]"
              placeholder="Introduce el número de rondas"
              required
          /></label>

          <!-- Tiempo de partida -->
          <label for="matchTime">
            Tiempo de partida (segundos)
            <input
              id="matchTime"
              type="text"
              class="w-full rounded-xl bg-[#c1c1c1] p-2.5 text-sm placeholder:text-[#878787] dark:bg-[#4e4e4e]"
              placeholder="Introduce un número"
              required
          /></label>
        </fieldset>

        <fieldset class="flex w-full flex-col">
          <legend class="mb-6 w-full text-2xl font-semibold">
            Bots
            <div class="mt-2 w-2/7 border dark:border-white"></div>
          </legend>
          <!-- Selección de Bots -->
          <Dropdown
            :options="options"
            @update:selected="
              (value) => {
                selectedBots = value
              }
            "
          />
        </fieldset>
        <!-- Botón Crear Liga -->
        <button
          type="submit"
          class="mt-6 rounded-full bg-[#06f] px-6 py-3 text-lg text-white"
          aria-label="Guardar cambios"
        >
          Crear Liga
        </button>
      </form>
    </div>
  </main>
  <FooterApp />
</template>
