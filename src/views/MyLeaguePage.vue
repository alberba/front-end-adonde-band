<script setup lang="ts">
import DrawIcon from '@/assets/svg/clasificacion/DrawIcon.vue'
import WinIcon from '@/assets/svg/clasificacion/WinIcon.vue'
import FooterApp from '@/components/FooterApp.vue'
import HeaderApp from '@/components/HeaderApp.vue'
import router from '@/router'
import type { ParticipationResponse, Combate } from '@/types'
// TODO: Descomentar cuando se tenga la API de partidos de una liga
// import { onMounted } from 'vue'
// import type { Combate, Equipo } from '@/types'

// const matches = ref<Combate[]>([])

// const loadMatches = async () => {
//   const response = await fetch(
//     `http://localhost:8080/api/v0/league/${localStorage.getItem('league')}/match`,
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
const clasificacion: ParticipationResponse[] = [
  {
    pos: 1,
    cualidad: 'Soberbia',
    nombre: 'Equipo 1',
    PJ: 10,
    G: 6,
    E: 2,
    P: 2,
    Ptos: 20,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 2,
    cualidad: 'Soberbia',
    nombre: 'Equipo 2',
    PJ: 10,
    G: 5,
    E: 3,
    P: 2,
    Ptos: 18,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 3,
    cualidad: 'Soberbia',
    nombre: 'Equipo 3',
    PJ: 10,
    G: 5,
    E: 2,
    P: 3,
    Ptos: 17,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 4,
    cualidad: 'Soberbia',
    nombre: 'Equipo 4',
    PJ: 10,
    G: 4,
    E: 4,
    P: 2,
    Ptos: 16,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 5,
    cualidad: 'Soberbia',
    nombre: 'Equipo 5',
    PJ: 10,
    G: 4,
    E: 3,
    P: 3,
    Ptos: 15,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 6,
    cualidad: 'Soberbia',
    nombre: 'Equipo 6',
    PJ: 10,
    G: 4,
    E: 2,
    P: 4,
    Ptos: 14,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 7,
    cualidad: 'Soberbia',
    nombre: 'Equipo 7',
    PJ: 10,
    G: 3,
    E: 4,
    P: 3,
    Ptos: 13,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 8,
    cualidad: 'Soberbia',
    nombre: 'Equipo 8',
    PJ: 10,
    G: 3,
    E: 3,
    P: 4,
    Ptos: 12,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 9,
    cualidad: 'Soberbia',
    nombre: 'Equipo 9',
    PJ: 10,
    G: 3,
    E: 2,
    P: 5,
    Ptos: 11,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 10,
    cualidad: 'Soberbia',
    nombre: 'Equipo 10',
    PJ: 10,
    G: 2,
    E: 4,
    P: 4,
    Ptos: 10,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 11,
    cualidad: 'Soberbia',
    nombre: 'Equipo 11',
    PJ: 10,
    G: 2,
    E: 3,
    P: 5,
    Ptos: 9,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 12,
    cualidad: 'Soberbia',
    nombre: 'Equipo 12',
    PJ: 10,
    G: 2,
    E: 2,
    P: 6,
    Ptos: 8,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 13,
    cualidad: 'Soberbia',
    nombre: 'Equipo 13',
    PJ: 10,
    G: 1,
    E: 4,
    P: 5,
    Ptos: 7,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
  {
    pos: 14,
    cualidad: 'Soberbia',
    nombre: 'Equipo 14',
    PJ: 10,
    G: 1,
    E: 3,
    P: 6,
    Ptos: 6,
    imagen: new URL('@/assets/svg/arg.svg', import.meta.url).href,
  },
]

const ligaNombre = 'LaLiga EA Sports'

// Ejemplo de datos de jornadas con encuentros
const combates: Combate[] = [
  {
    matchId: 1,
    state: 'finalizado',
    result: 1,
    fighters: ['Real Madrid', 'Barcelona'],
    roundNumber: 1,
  },
  {
    matchId: 2,
    state: 'en curso',
    result: 1,
    fighters: ['Atletico', 'Sevilla'],
    roundNumber: 1,
  },
  {
    matchId: 3,
    state: 'finalizado',
    result: 2,
    fighters: ['Betis', 'Valencia'],
    roundNumber: 1,
  },
  {
    matchId: 4,
    state: 'finalizado',
    result: 1,
    fighters: ['Villarreal', 'Getafe'],
    roundNumber: 1,
  },
  {
    matchId: 5,
    state: 'en curso',
    result: 1,
    fighters: ['Celta', 'Almeria'],
    roundNumber: 1,
  },
  {
    matchId: 6,
    state: 'finalizado',
    result: 2,
    fighters: ['Osasuna', 'Mallorca'],
    roundNumber: 1,
  },
  {
    matchId: 7,
    state: 'en curso',
    result: 1,
    fighters: ['Granada', 'Cadiz'],
    roundNumber: 1,
  },
  {
    matchId: 8,
    state: 'finalizado',
    result: 1,
    fighters: ['Rayo Vallecano', 'Girona'],
    roundNumber: 1,
  },
  {
    matchId: 9,
    state: 'pendiente',
    result: 1,
    fighters: ['Barcelona', 'Atletico'],
    roundNumber: 2,
  },
  {
    matchId: 10,
    state: 'pendiente',
    result: 2,
    fighters: ['Sevilla', 'Betis'],
    roundNumber: 2,
  },
  {
    matchId: 11,
    state: 'pendiente',
    result: 1,
    fighters: ['Valencia', 'Villarreal'],
    roundNumber: 2,
  },
  {
    matchId: 12,
    state: 'pendiente',
    result: 1,
    fighters: ['Real Madrid', 'Getafe'],
    roundNumber: 2,
  },
  {
    matchId: 13,
    state: 'pendiente',
    result: 1,
    fighters: ['Girona', 'Mallorca'],
    roundNumber: 2,
  },
  {
    matchId: 14,
    state: 'pendiente',
    result: 1,
    fighters: ['Almeria', 'Celta'],
    roundNumber: 2,
  },
  {
    matchId: 15,
    state: 'pendiente',
    result: 1,
    fighters: ['Granada', 'Osasuna'],
    roundNumber: 2,
  },
  {
    matchId: 16,
    state: 'pendiente',
    result: 1,
    fighters: ['Cadiz', 'Rayo Vallecano'],
    roundNumber: 2,
  },
]

const jornadas = combates.reduce(
  (acc, combate) => {
    const round = combate.roundNumber
    if (!acc[round]) {
      acc[round] = []
    }
    acc[round].push(combate)
    return acc
  },
  {} as Record<number, Combate[]>
)

console.log(hola())

function hola() {
  for (const [jornada, numJornada] of Object.entries(jornadas)) {
    console.log(jornada)
    numJornada.forEach((encuentro) => {
      console.log(encuentro)
    })
  }
}
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
            <template v-for="[numJornada, jornada] of Object.entries(jornadas)" :key="numJornada">
              <!-- Itera sobre los encuentros de la jornada -->
              <!-- TODO: Cambiar el 1 del router push a un matchId-->
              <tr
                v-for="(encuentro, index) in jornada"
                class="flex h-12 w-full cursor-pointer items-center justify-center gap-8"
                :key="Number(numJornada) * 100 + index"
                @click="router.push('/match/1')"
              >
                <!-- Equipo 1 -->
                <td class="mr-10 flex w-75 justify-end gap-2.5 sm:text-xl">
                  <WinIcon
                    v-if="encuentro.result === 1 && encuentro.state === 'finalizado'"
                    classList="h-[27px] w-[27px]"
                  />
                  <div class="text-center">{{ encuentro.fighters[0] }}</div>
                </td>
                <!-- Icono del ganador -->
                <td>
                  <DrawIcon
                    v-if="encuentro.result === 2 && encuentro.state === 'finalizado'"
                    classList="h-5 w-5 sm:h-10 sm:w-21"
                  />
                  <div
                    v-else-if="encuentro.state === 'en curso'"
                    class="flex w-21 justify-center rounded-lg bg-red-500 px-2 py-1 text-sm font-bold"
                  >
                    EN VIVO
                  </div>
                  <div
                    class="flex h-5 w-5 items-center justify-center text-xl sm:h-10 sm:w-21"
                    v-else
                  >
                    vs
                  </div>
                </td>
                <!-- Equipo 2 -->
                <td class="ml-10 flex w-75 justify-start gap-2.5 sm:text-xl">
                  <div>{{ encuentro.fighters[1] }}</div>
                  <WinIcon
                    v-if="encuentro.result === 3 && encuentro.state === 'finalizado'"
                    classList="h-5 w-5 sm:h-10 sm:w-10"
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
              <td :class="['w-16 p-1 text-center', esMiBot(equipo.nombre) ? 'font-bold' : '']">
                {{ equipo.pos }}
              </td>
              <td
                :class="['flex items-center gap-1 p-1', esMiBot(equipo.nombre) ? 'font-bold' : '']"
              >
                <img :src="equipo.imagen" alt=" " class="h-6 w-6 lg:h-8 lg:w-8" />
                {{ equipo.nombre }}
              </td>
              <td :class="['w-8 p-1 text-center', esMiBot(equipo.nombre) ? 'font-bold' : '']">
                {{ equipo.PJ }}
              </td>
              <td :class="['w-8 p-1 text-center', esMiBot(equipo.nombre) ? 'font-bold' : '']">
                {{ equipo.G }}
              </td>
              <td :class="['w-8 p-1 text-center', esMiBot(equipo.nombre) ? 'font-bold' : '']">
                {{ equipo.E }}
              </td>
              <td :class="['w-8 p-1 text-center', esMiBot(equipo.nombre) ? 'font-bold' : '']">
                {{ equipo.P }}
              </td>
              <td :class="['w-16 p-1 text-center', esMiBot(equipo.nombre) ? 'font-bold' : '']">
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
