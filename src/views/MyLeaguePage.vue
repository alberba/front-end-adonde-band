<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import { ref } from 'vue'

// Ejemplo de datos de clasificación
const clasificacion = ref([
  { pos: 1, equipo: 'Equipo 1', PJ: 10, G: 6, E: 2, P: 2, Ptos: 20 },
  { pos: 2, equipo: 'Equipo 2', PJ: 10, G: 5, E: 3, P: 2, Ptos: 18 },
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
        equipo1: { nombre: "Real Madrid", img: "/img/real_madrid.png" }, 
        equipo2: { nombre: "Barcelona", img: "/img/barcelona.png" }, 
        ganador: "Real Madrid" 
      },
      { 
        equipo1: { nombre: "Atletico", img: "/img/atletico.png" }, 
        equipo2: { nombre: "Sevilla", img: "/img/sevilla.png" }, 
        ganador: "Atletico" 
      },
      { 
        equipo1: { nombre: "Betis", img: "/img/betis.png" }, 
        equipo2: { nombre: "Valencia", img: "/img/valencia.png" }, 
        ganador: "Valencia" 
      },
      { 
        equipo1: { nombre: "Villarreal", img: "/img/villarreal.png" }, 
        equipo2: { nombre: "Getafe", img: "/img/getafe.png" }, 
        ganador: "Empate" 
      }
    ]
  },
  {
    encuentros: [
      { equipo1: { nombre: "Celta", img: "/img/celta.png" }, equipo2: { nombre: "Almeria", img: "/img/almeria.png" }, ganador: "Celta" },
      { equipo1: { nombre: "Osasuna", img: "/img/osasuna.png" }, equipo2: { nombre: "Mallorca", img: "/img/mallorca.png" }, ganador: "Osasuna" },
      { equipo1: { nombre: "Granada", img: "/img/granada.png" }, equipo2: { nombre: "Cadiz", img: "/img/cadiz.png" }, ganador: "Cadiz" },
      { equipo1: { nombre: "Rayo Vallecano", img: "/img/rayo.png" }, equipo2: { nombre: "Girona", img: "/img/girona.png" }, ganador: "Girona" }
    ]
  },
  {
    encuentros: [
      { equipo1: { nombre: "Barcelona", img: "/img/barcelona.png" }, equipo2: { nombre: "Atletico", img: "/img/atletico.png" }, ganador: "Atletico" },
      { equipo1: { nombre: "Sevilla", img: "/img/sevilla.png" }, equipo2: { nombre: "Betis", img: "/img/betis.png" }, ganador: "Empate" },
      { equipo1: { nombre: "Valencia", img: "/img/valencia.png" }, equipo2: { nombre: "Villarreal", img: "/img/villarreal.png" }, ganador: "Villarreal" },
      { equipo1: { nombre: "Real Madrid", img: "/img/real_madrid.png" }, equipo2: { nombre: "Getafe", img: "/img/getafe.png" }, ganador: "Real Madrid" }
    ]
  },
  {
    encuentros: [
      { equipo1: { nombre: "Girona", img: "/img/girona.png" }, equipo2: { nombre: "Mallorca", img: "/img/mallorca.png" }, ganador: "Girona" },
      { equipo1: { nombre: "Almeria", img: "/img/almeria.png" }, equipo2: { nombre: "Celta", img: "/img/celta.png" }, ganador: "Celta" },
      { equipo1: { nombre: "Granada", img: "/img/granada.png" }, equipo2: { nombre: "Osasuna", img: "/img/osasuna.png" }, ganador: "Osasuna" },
      { equipo1: { nombre: "Cadiz", img: "/img/cadiz.png" }, equipo2: { nombre: "Rayo Vallecano", img: "/img/rayo.png" }, ganador: "Cadiz" }
    ]
  },
  {
    encuentros: [
      { equipo1: { nombre: "Real Madrid", img: "/img/real_madrid.png" }, equipo2: { nombre: "Sevilla", img: "/img/sevilla.png" }, ganador: "Real Madrid" },
      { equipo1: { nombre: "Barcelona", img: "/img/barcelona.png" }, equipo2: { nombre: "Valencia", img: "/img/valencia.png" }, ganador: "Barcelona" },
      { equipo1: { nombre: "Atletico", img: "/img/atletico.png" }, equipo2: { nombre: "Betis", img: "/img/betis.png" }, ganador: "Betis" },
      { equipo1: { nombre: "Villarreal", img: "/img/villarreal.png" }, equipo2: { nombre: "Getafe", img: "/img/getafe.png" }, ganador: "Empate" }
    ]
  }
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
  <main class="px-10 mb-15 flex max-w-[860px] flex-col items-center justify-center gap-5 lg:w-[860px]">
    <!-- Contenedor pequeño que incluye solo el header -->
    <header class="m-3 flex w-full flex-col gap-3">
      <div class="flex flex-row items-center justify-between">
        <h1 class="text-4xl font-bold">{{ ligaNombre }}</h1>
        <button
          class="flex flex-row items-center gap-2 rounded-full bg-[#06f] px-3 py-2 text-white"
        >
          Estadísticas
          <img src="@/assets/svg/StatsIcon.svg" alt="" class="w-7" />
        </button>
      </div>
      <div class="mt-4 h-0 w-full border border-[#BBBBBB]"></div>
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
      <div class="-mt-5 w-full bg-[#DDDDDD] p-4">
        <table class="w-full text-[#242424]">
          <tbody>
            <tr
              v-for="(encuentro, index) in jornadas[jornadaNum - 1].encuentros"
              :key="index"
              class="border-b border-[#BBBBBB]"
            >
              <td class="text-2xl font-bold text-[#242424] flex-col items-center justify-center text-center">{{ encuentro.equipo1 }}</td>
              <td class="text-2xl font-bold text-[#242424] flex-col items-center justify-center text-center">{{ encuentro.ganador }}</td>
              <td class="text-2xl font-bold text-[#242424] flex-col items-center justify-center text-center">{{ encuentro.equipo2 }}</td>
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
      <div class="w-full bg-transparent p-4">
        <table class="flex flex-col gap-4 text-[#FFFFFF]">
          <tr class="flex gap-8 border-b text-2xl">
            <th class="w-16 font-bold">Pos</th>
            <th class="flex w-75 justify-start font-bold">Equipo</th>
            <th class="w-8 font-bold">PJ</th>
            <th class="w-8 font-bold">G</th>
            <th class="w-8 font-bold">E</th>
            <th class="w-8 font-bold">P</th>
            <th class="w-16 font-bold">Ptos</th>
          </tr>

          <tr
            v-for="(equipo, index) in clasificacion"
            :key="index"
            class="flex w-full flex-row gap-8 border-b border-[#9B9B9B] text-xl"
          >
            <th class="w-16">{{ equipo.pos }}</th>
            <th class="flex w-75 justify-start">{{ equipo.equipo }}</th>
            <th class="w-8">{{ equipo.PJ }}</th>
            <th class="w-8">{{ equipo.G }}</th>
            <th class="w-8">{{ equipo.E }}</th>
            <th class="w-8">{{ equipo.P }}</th>
            <th class="w-16">{{ equipo.Ptos }}</th>
          </tr>
        </table>
      </div>
    </div>
  </main>
</template>
