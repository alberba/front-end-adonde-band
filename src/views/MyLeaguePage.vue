<script setup lang="ts">
import FooterApp from '@/components/FooterApp.vue'
import HeaderApp from '@/components/HeaderApp.vue'
import router from '@/router'
import { ref } from 'vue'

// Ejemplo de datos de clasificación
const clasificacion = ref([
  { pos: 1, equipo: 'Equipo 1', PJ: 10, G: 6, E: 2, P: 2, Ptos: 20 },
  { pos: 2, equipo: 'Equipo 2', PJ: 10, G: 5, E: 3, P: 2, Ptos: 18 },
  { pos: 3, equipo: 'Equipo 3', PJ: 10, G: 5, E: 2, P: 3, Ptos: 17 },
  { pos: 4, equipo: 'Equipo 4', PJ: 10, G: 4, E: 4, P: 2, Ptos: 16 },
  { pos: 5, equipo: 'Equipo 5', PJ: 10, G: 4, E: 3, P: 3, Ptos: 15 },
  { pos: 6, equipo: 'Equipo 6', PJ: 10, G: 4, E: 2, P: 4, Ptos: 14 },
  { pos: 7, equipo: 'Equipo 7', PJ: 10, G: 3, E: 4, P: 3, Ptos: 13 },
  { pos: 8, equipo: 'Equipo 8', PJ: 10, G: 3, E: 3, P: 4, Ptos: 12 },
  { pos: 9, equipo: 'Equipo 9', PJ: 10, G: 3, E: 2, P: 5, Ptos: 11 },
  { pos: 10, equipo: 'Equipo 10', PJ: 10, G: 2, E: 4, P: 4, Ptos: 10 },
  { pos: 11, equipo: 'Equipo 11', PJ: 10, G: 2, E: 3, P: 5, Ptos: 9 },
  { pos: 12, equipo: 'Equipo 12', PJ: 10, G: 2, E: 2, P: 6, Ptos: 8 },
  { pos: 13, equipo: 'Equipo 13', PJ: 10, G: 1, E: 4, P: 5, Ptos: 7 },
  { pos: 14, equipo: 'Equipo 14', PJ: 10, G: 1, E: 3, P: 6, Ptos: 6 },

  // Agrega más equipos según sea necesario
])

const ligaNombre = 'LaLiga EA Sports'
const jornadaNum = ref(1)
const jornadaMax = 12
// Ejemplo de datos de jornadas con encuentros
const jornadas = ref([
  {
    encuentros: [
      {
        equipo1: {
          nombre: 'Real Madrid',
          img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
        },
        equipo2: {
          nombre: 'Barcelona',
          img: new URL('@/assets/svg/sky.svg', import.meta.url).href,
        },
        ganador: { img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
      },
      {
        equipo1: { nombre: 'Atletico', img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
        equipo2: { nombre: 'Sevilla', img: new URL('@/assets/svg/sky.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
      },
      {
        equipo1: { nombre: 'Betis', img: new URL('@/assets/svg/sky.svg', import.meta.url).href },
        equipo2: {
          nombre: 'Valencia',
          img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href,
        },
        ganador: { img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href },
      },
      {
        equipo1: {
          nombre: 'Villarreal',
          img: new URL('@/assets/svg/sky.svg', import.meta.url).href,
        },
        equipo2: { nombre: 'Getafe', img: new URL('@/assets/svg/gay.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/gay.svg', import.meta.url).href },
      },
    ],
  },
  {
    encuentros: [
      {
        equipo1: { nombre: 'Celta', img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href },
        equipo2: { nombre: 'Almeria', img: new URL('@/assets/svg/gay.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href },
      },
      {
        equipo1: {
          nombre: 'Osasuna',
          img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href,
        },
        equipo2: { nombre: 'Mallorca', img: new URL('@/assets/svg/gay.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href },
      },
      {
        equipo1: { nombre: 'Granada', img: new URL('@/assets/svg/gay.svg', import.meta.url).href },
        equipo2: { nombre: 'Cadiz', img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
      },
      {
        equipo1: {
          nombre: 'Rayo Vallecano',
          img: new URL('@/assets/svg/gay.svg', import.meta.url).href,
        },
        equipo2: { nombre: 'Girona', img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
      },
    ],
  },
  {
    encuentros: [
      {
        equipo1: {
          nombre: 'Barcelona',
          img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
        },
        equipo2: { nombre: 'Atletico', img: new URL('@/assets/svg/sky.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
      },
      {
        equipo1: {
          nombre: 'Sevilla',
          img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href,
        },
        equipo2: { nombre: 'Betis', img: new URL('@/assets/svg/gay.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href },
      },
      {
        equipo1: { nombre: 'Valencia', img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
        equipo2: {
          nombre: 'Villarreal',
          img: new URL('@/assets/svg/sky.svg', import.meta.url).href,
        },
        ganador: { img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
      },
      {
        equipo1: {
          nombre: 'Real Madrid',
          img: new URL('@/assets/svg/gay.svg', import.meta.url).href,
        },
        equipo2: { nombre: 'Getafe', img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/gay.svg', import.meta.url).href },
      },
    ],
  },
  {
    encuentros: [
      {
        equipo1: { nombre: 'Girona', img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
        equipo2: { nombre: 'Mallorca', img: new URL('@/assets/svg/sky.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
      },
      {
        equipo1: {
          nombre: 'Almeria',
          img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href,
        },
        equipo2: { nombre: 'Celta', img: new URL('@/assets/svg/gay.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href },
      },
      {
        equipo1: { nombre: 'Granada', img: new URL('@/assets/svg/gay.svg', import.meta.url).href },
        equipo2: { nombre: 'Osasuna', img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/gay.svg', import.meta.url).href },
      },
      {
        equipo1: { nombre: 'Cadiz', img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href },
        equipo2: {
          nombre: 'Rayo Vallecano',
          img: new URL('@/assets/svg/sky.svg', import.meta.url).href,
        },
        ganador: { img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href },
      },
    ],
  },
])

const incrementJornada = () => {
  if (jornadaNum.value < jornadaMax) {
    jornadaNum.value++
  }
}

const decrementJornada = () => {
  if (jornadaNum.value > 1) {
    jornadaNum.value--
  }
}
</script>

<template>
  <HeaderApp title="¡Hola, AdondeBoy!" :is-heading1="false" />
  <main
    class="mb-15 flex max-w-[860px] flex-col items-center justify-center gap-5 px-10 lg:w-[860px]"
  >
    <!-- Contenedor pequeño que incluye solo el header -->
    <header class="m-3 flex w-full flex-col flex-wrap gap-3">
      <div class="flex flex-row items-center justify-between">
        <h1 class="text-4xl font-bold">{{ ligaNombre }}</h1>
        <button
          class="flex flex-row items-center gap-2 rounded-full bg-[#06f] px-3 py-2 text-white"
        >
          Estadísticas
          <img src="@/assets/svg/StatsIcon.svg" alt="" class="w-7" />
        </button>
      </div>
      <div class="mt-2 h-0 w-full border border-[#BBBBBB]"></div>
    </header>

    <!-- Contenedor que contiene tanto el container para las jornadas como el container de encuentros -->
    <div class="flex w-full flex-col gap-5">
      <!-- Container para la jornada -->
      <div class="w-full bg-[#BBBBBB] p-4">
        <div class="flex items-center justify-center">
          <button @click="decrementJornada">
            <img src="@/assets/svg/izquierdaicon.svg" alt="Izquierda" class="mr-3 h-6 w-6" />
          </button>
          <img src="@/assets/svg/calendaricon.svg" alt="calendar" class="mr-2 w-7" />
          <div class="text-2xl font-bold text-[#242424]">JORNADA {{ jornadaNum }}</div>
          <button @click="incrementJornada">
            <img src="@/assets/svg/derechaicon.svg" alt="Derecha" class="ml-2 h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Container de los encuentros -->
      <div class="-mt-5 w-full overflow-x-auto bg-[#DDDDDD] p-4">
        <table class="border-colapse w-full text-[#242424]">
          <tbody>
            <tr
              v-for="(encuentro, index) in jornadas[jornadaNum - 1].encuentros"
              :key="index"
              class="border-b border-[#BBBBBB] cursor-pointer"
              @click="router.push('/chat')"
            >
              <td
                class="flex flex-shrink-0 items-center justify-center space-x-4 text-2xl font-bold text-[#242424]"
              >
                <div class="text-center">{{ encuentro.equipo1.nombre }}</div>
                <img
                  :src="encuentro.equipo1.img"
                  :alt="encuentro.equipo1.nombre"
                  class="h-10 w-10"
                />
              </td>
              <td class=""><img :src="encuentro.ganador.img" alt=" " class="h-10 w-10" /></td>
              <td
                class="flex items-center justify-center space-x-4 text-2xl font-bold text-[#242424]"
              >
                <div>{{ encuentro.equipo2.nombre }}</div>
                <img
                  :src="encuentro.equipo2.img"
                  :alt="encuentro.equipo2.nombre"
                  class="h-10 w-10"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Contenedor para la clasificación -->
    <div class="flex w-full flex-col gap-5">
      <!-- Header de la clasificación -->
      <header class="m-3 flex w-full flex-col gap-3">
        <div class="flex flex-row items-center justify-between">
          <h1 class="text-2xl font-bold text-[#9B9B9B]">Clasificación</h1>
        </div>
        <div class="mt-0 h-0 w-40 border border-[#9B9B9B]"></div>
      </header>

      <!-- Cuadro de clasificación -->
      <div class="w-full overflow-x-auto bg-transparent p-4">
        <div class="max-h-[300px] overflow-y-auto">
          <table class="w-full border-collapse text-[#FFFFFF]">
            <!-- Encabezados -->
            <thead class="sticky top-0 bg-[#242424]">
              <tr class="border-b text-2xl">
                <th class="w-16 p-2 font-bold">Pos</th>
                <th class="p-2 text-left font-bold">Equipo</th>
                <th class="w-8 p-2 font-bold">PJ</th>
                <th class="w-8 p-2 font-bold">G</th>
                <th class="w-8 p-2 font-bold">E</th>
                <th class="w-8 p-2 font-bold">P</th>
                <th class="w-16 p-2 font-bold">Ptos</th>
              </tr>
            </thead>

            <!-- Cuerpo de la tabla -->
            <tbody>
              <tr
                v-for="(equipo, index) in clasificacion"
                :key="index"
                class="border-b border-[#9B9B9B] text-xl"
              >
                <td class="w-16 p-2 text-center">{{ equipo.pos }}</td>
                <td class="p-2">{{ equipo.equipo }}</td>
                <td class="w-8 p-2 text-center">{{ equipo.PJ }}</td>
                <td class="w-8 p-2 text-center">{{ equipo.G }}</td>
                <td class="w-8 p-2 text-center">{{ equipo.E }}</td>
                <td class="w-8 p-2 text-center">{{ equipo.P }}</td>
                <td class="w-16 p-2 text-center">{{ equipo.Ptos }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  <FooterApp />
</template>
