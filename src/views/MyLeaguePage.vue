<script setup lang="ts">
import FooterApp from '@/components/FooterApp.vue'
import HeaderApp from '@/components/HeaderApp.vue'
import router from '@/router'
import { ref } from 'vue'
// TODO: Descomentar cuando se tenga la API de partidos de una liga
// import { onMounted } from 'vue'

// const matches = ref<Combate[]>([])

// const loadMatches = async () => {
//   const response = await fetch(
// TODO: Alomejor cambiamos la ruta de la web a /leagueId/matchId
//     `http://localhost:8080/api/v0/league/${localStorage.getItem('league')}`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     }
//   )

//   if (!response.ok) {
//     alert('Error al cargar los partidos. Por favor, inténtalo de nuevo.')
//   } else {
//     const data = await response.json()
//     matches.value = data
//   }
// }

// onMounted(() => {
//   loadMatches()
// })

// Ejemplo de datos de clasificación
const clasificacion = ref([
  {
    pos: 1,
    equipo: 'Equipo 1',
    PJ: 10,
    G: 6,
    E: 2,
    P: 2,
    Ptos: 20,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 2,
    equipo: 'Equipo 2',
    PJ: 10,
    G: 5,
    E: 3,
    P: 2,
    Ptos: 18,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 3,
    equipo: 'Equipo 3',
    PJ: 10,
    G: 5,
    E: 2,
    P: 3,
    Ptos: 17,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 4,
    equipo: 'Equipo 4',
    PJ: 10,
    G: 4,
    E: 4,
    P: 2,
    Ptos: 16,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 5,
    equipo: 'Equipo 5',
    PJ: 10,
    G: 4,
    E: 3,
    P: 3,
    Ptos: 15,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 6,
    equipo: 'Equipo 6',
    PJ: 10,
    G: 4,
    E: 2,
    P: 4,
    Ptos: 14,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 7,
    equipo: 'Equipo 7',
    PJ: 10,
    G: 3,
    E: 4,
    P: 3,
    Ptos: 13,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 8,
    equipo: 'Equipo 8',
    PJ: 10,
    G: 3,
    E: 3,
    P: 4,
    Ptos: 12,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 9,
    equipo: 'Equipo 9',
    PJ: 10,
    G: 3,
    E: 2,
    P: 5,
    Ptos: 11,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 10,
    equipo: 'Equipo 10',
    PJ: 10,
    G: 2,
    E: 4,
    P: 4,
    Ptos: 10,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 11,
    equipo: 'Equipo 11',
    PJ: 10,
    G: 2,
    E: 3,
    P: 5,
    Ptos: 9,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 12,
    equipo: 'Equipo 12',
    PJ: 10,
    G: 2,
    E: 2,
    P: 6,
    Ptos: 8,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 13,
    equipo: 'Equipo 13',
    PJ: 10,
    G: 1,
    E: 4,
    P: 5,
    Ptos: 7,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 14,
    equipo: 'Equipo 14',
    PJ: 10,
    G: 1,
    E: 3,
    P: 6,
    Ptos: 6,
    img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
])

const ligaNombre = 'LaLiga EA Sports'

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
          img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href,
        },
        ganador: { img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
      },
      {
        equipo1: { nombre: 'Atletico', img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
        equipo2: {
          nombre: 'Sevilla',
          img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href,
        },
        ganador: { img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
      },
      {
        equipo1: { nombre: 'Betis', img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href },
        equipo2: {
          nombre: 'Valencia',
          img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
        },
        ganador: { img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href },
      },
      {
        equipo1: {
          nombre: 'Villarreal',
          img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href,
        },
        equipo2: { nombre: 'Getafe', img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
      },
    ],
  },
  {
    encuentros: [
      {
        equipo1: { nombre: 'Celta', img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
        equipo2: {
          nombre: 'Almeria',
          img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href,
        },
        ganador: { img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
      },
      {
        equipo1: {
          nombre: 'Osasuna',
          img: new URL('@/assets/svg/arg.svg', import.meta.url).href,
        },
        equipo2: { nombre: 'Mallorca', img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href },
      },
      {
        equipo1: {
          nombre: 'Granada',
          img: new URL('@/assets/svg/lesvi.svg', import.meta.url).href,
        },
        equipo2: { nombre: 'Cadiz', img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
        ganador: { img: new URL('@/assets/svg/arg.svg', import.meta.url).href },
      },
      {
        equipo1: {
          nombre: 'Rayo Vallecano',
          img: new URL('@/assets/svg/sky.svg', import.meta.url).href,
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
const misBots = ['Equipo 1', 'Equipo 3', 'Equipo 5'] // Ejemplo de equipos

const esMiBot = (nombreEquipo: string) => {
  return misBots.includes(nombreEquipo)
}

// TODO: Verificar si sigue siendo necesario
// const jornadaNum = ref(1)
// const jornadaMax = 12

// const incrementJornada = () => {
//   if (jornadaNum.value < jornadaMax) {
//     jornadaNum.value++
//   }
// }

// const decrementJornada = () => {
//   if (jornadaNum.value > 1) {
//     jornadaNum.value--
//   }
// }

const titleHeader = '¡Hola, ' + localStorage.getItem('username') + '!'
</script>

<template>
  <HeaderApp :title="titleHeader" :is-heading1="false" />
  <main
    class="mb-15 flex w-full flex-col items-center justify-center gap-5 px-4 sm:px-10 lg:w-[960px]"
  >
    <!-- Contenedor pequeño que incluye solo el header -->
    <header class="m-3 flex w-full flex-col gap-3">
      <h1 class="text-left text-4xl font-bold">{{ ligaNombre }}</h1>
      <div class="mt-0 h-0 w-full dark:border dark:border-[#525252]"></div>
    </header>

    <div class="flex w-full flex-col gap-5">
      <div class="w-full bg-[#BBBBBB] p-4 dark:bg-[#525252]">
        <div class="flex items-center justify-center">
          <!--
          <button @click="decrementJornada">
            <img
              src="@/assets/svg/izquierdaicon.svg"
              alt="Izquierda"
              class="mr-3 h-6 w-6 dark:brightness-0 dark:invert dark:filter"
            />
          </button>
          <img
            src="@/assets/svg/calendaricon.svg"
            alt="calendar"
            class="mr-2 w-7 dark:brightness-0 dark:invert dark:filter"
          />
          <div class="font-bold sm:text-xl">JORNADA {{ jornadaNum }}</div>
          <button @click="incrementJornada">
            <img
              src="@/assets/svg/derechaicon.svg"
              alt="Derecha"
              class="ml-2 h-6 w-6 dark:brightness-0 dark:invert dark:filter"
            />
          </button>
          -->
          <div class="font-bold sm:text-xl">ENCUENTROS</div>
        </div>
      </div>

      <!-- Container de los encuentros -->
      <div class="-mt-5 w-full bg-[#DDDDDD] p-4 dark:bg-[#2D2D2D]">
        <table class="w-full">
          <tbody>
            <!-- Itera sobre todas las jornadas -->
            <!-- elminar siguiente linea para poner encuentros por jornada
                  y no todos los encuentros a la vez    -->
            <template v-for="(jornada, jornadaIndex) in jornadas" :key="jornadaIndex">
              <!-- Itera sobre los encuentros de la jornada -->
              <!-- TODO: Cambiar el 1 del router push a un matchId-->
              <tr
                v-for="(encuentro, index) in jornada.encuentros"
                class="cursor-pointer"
                :key="index"
                @click="router.push('/match/1')"
              >
                <!-- Equipo 1 -->
                <td
                  class="flex flex-shrink-0 items-center justify-center space-x-4 text-sm font-bold sm:text-xl"
                >
                  <div class="text-center">{{ encuentro.equipo1.nombre }}</div>
                  <img
                    :src="encuentro.equipo1.img"
                    :alt="encuentro.equipo1.nombre"
                    class="h-5 w-5 sm:h-10 sm:w-10"
                  />
                </td>
                <!-- Icono del ganador -->
                <td class="text-center">
                  <img :src="encuentro.ganador.img" alt=" " class="h-5 w-5 sm:h-10 sm:w-10" />
                </td>
                <!-- Equipo 2 -->
                <td class="flex items-center justify-center space-x-4 text-sm font-bold sm:text-xl">
                  <div>{{ encuentro.equipo2.nombre }}</div>
                  <img
                    :src="encuentro.equipo2.img"
                    :alt="encuentro.equipo2.nombre"
                    class="h-5 w-5 sm:h-10 sm:w-10"
                  />
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Contenedor para la clasificación -->
    <div class="flex w-full flex-col gap-5">
      <!-- Header de la clasificación -->
      <header class="m-3 flex w-full flex-col gap-3">
        <div class="flex flex-row items-center justify-between">
          <h1 class="text-left text-2xl font-bold text-[#9B9B9B] dark:text-[#FFFFFF]">
            Clasificación
          </h1>
        </div>
        <div class="mt-0 h-0 w-40 border border-[#9B9B9B] dark:border-[#FFFFFF]"></div>
      </header>

      <!-- Cuadro de clasificación -->
      <div class="mx-auto rounded-lg bg-[#DDDDDD] p-2 dark:bg-[#2D2D2D]">
        <table class="w-full">
          <!-- Encabezados -->
          <thead class="sticky top-0 bg-[#DDDDDD] dark:bg-[#2D2D2D]">
            <tr class="gap-8 sm:text-2xl">
              <th class="w-16 px-1 py-2 font-bold sm:px-3 md:px-6">Pos</th>
              <th class="w-72 p-2 text-left font-bold">Equipo</th>
              <th class="w-8 px-1 py-2 font-bold sm:px-3 md:px-6">PJ</th>
              <th class="w-8 px-1 py-2 font-bold sm:px-3 md:px-6">G</th>
              <th class="w-8 px-1 py-2 font-bold sm:px-3 md:px-6">E</th>
              <th class="w-8 px-1 py-2 font-bold sm:px-3 md:px-6">P</th>
              <th class="w-16 px-1 py-2 font-bold sm:px-3 md:px-6">Ptos</th>
            </tr>
          </thead>

          <!-- Cuerpo de la tabla -->
          <tbody>
            <tr v-for="(equipo, index) in clasificacion" :key="index" class="border-t sm:text-xl">
              <td :class="['w-16 p-1 text-center', esMiBot(equipo.equipo) ? 'font-bold' : '']">
                {{ equipo.pos }}
              </td>
              <td
                :class="['flex items-center gap-1 p-1', esMiBot(equipo.equipo) ? 'font-bold' : '']"
              >
                <img :src="equipo.img" alt=" " class="h-6 w-6 lg:h-8 lg:w-8" />
                {{ equipo.equipo }}
              </td>
              <td :class="['w-8 p-1 text-center', esMiBot(equipo.equipo) ? 'font-bold' : '']">
                {{ equipo.PJ }}
              </td>
              <td :class="['w-8 p-1 text-center', esMiBot(equipo.equipo) ? 'font-bold' : '']">
                {{ equipo.G }}
              </td>
              <td :class="['w-8 p-1 text-center', esMiBot(equipo.equipo) ? 'font-bold' : '']">
                {{ equipo.E }}
              </td>
              <td :class="['w-8 p-1 text-center', esMiBot(equipo.equipo) ? 'font-bold' : '']">
                {{ equipo.P }}
              </td>
              <td :class="['w-16 p-1 text-center', esMiBot(equipo.equipo) ? 'font-bold' : '']">
                {{ equipo.Ptos }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
  <FooterApp />
</template>
