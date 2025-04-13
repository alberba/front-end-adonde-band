<script setup lang="ts">
import DrawIcon from '@/assets/svg/clasificacion/DrawIcon.vue'
import WinIcon from '@/assets/svg/clasificacion/WinIcon.vue'
import FooterApp from '@/components/FooterApp.vue'
import HeaderApp from '@/components/HeaderApp.vue'
import router from '@/router'
import type { Participation, Match, League } from '@/types'
import Swal from 'sweetalert2'
import { ref } from 'vue'

// TODO: Descomentar cuando se tenga la API de partidos de una liga
// import { onMounted } from 'vue'
// import type { Match, Participation } from '@/types'
//import { ref, onMounted } from 'vue'
//import { useRoute } from 'vue-router'
//import type { League } from '@/types'

// const matches = ref<Match[]>([])


/*
const route = useRoute()
const leagueId = route.params.id as string
const token = localStorage.getItem('token')
const userId = parseInt(localStorage.getItem('userId') || '0')

const league = ref<League | null>(null)

async function loadLeague() {
  const response = await fetch(`http://localhost:8080/api/v0/league/${leagueId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    handleErrorResponse(response.status)
  } else {
    league.value = await response.json()
  }
}

async function startLeague() {
  if (!league.value) return

  const response = await fetch(
    `http://localhost:8080/api/v0/league/${league.value.leagueId}/start`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!response.ok) {
    handleErrorResponse(response.status)
  } else {
    alert('¡Liga iniciada correctamente!')
    loadLeague()
  }
}

function handleErrorResponse(status: number) {
  if (status === 401) alert('No autorizado')
  else alert('Error al procesar la solicitud')
}
*/

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

// // Para la gestión de la liga y su clasificación completa
// interface CompleteLeagueSummary {
//   league: League;
//   classification: Participation[];
// }

// // Para guardar múltiples ligas completas
// const completeLeagueSummaries = ref<CompleteLeagueSummary[]>([]);

// // Función para cargar una liga en base a su ID
// async function loadLeague(leagueId: number) {

//   // Se hace una llamada a la API para obtener la liga
//   const response = await fetch(`http://localhost:8080/api/v0/league/${leagueId}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   });

//   if (!response.ok) {
//     // Manejo de errores según el código de estado
//     handleErrorResponse(response.status);

//   } else {
//     // Si la respuesta es exitosa, se parsea a JSON y se devuelve el objeto LeagueResponseDTO
//     const league: League = await response.json();
//     return league;
//   }
// }

// // Función para obtener la clasificación completa de una liga en base a su ID
// async function loadLeaderboard(leagueId: number) {

//   const response = await fetch(`http://localhost:8080/api/v0/league/${leagueId}/leaderboard`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token')}`
//     },
//   });

//   if (!response.ok) {
//     // Manejo de errores según el código de estado
//     handleErrorResponse(response.status);

//   } else {
//     // Si la respuesta es exitosa, se parsea a JSON y se devuelve el objeto ParticipationResponseDTO[]
//     const leaderboard: Participation[] = await response.json();
//     return leaderboard;
//   }
// }

// // Función para cargar y almacenar la liga y su clasificación completa
// async function loadAndStoreLeague(leagueId: number): Promise<void> {
//   try {

//     // Llamada para cargar la liga
//     const leagueResponse = await loadLeague(leagueId);

//     if (!leagueResponse) {
//       throw new Error(`Error al cargar la liga con ID ${leagueId}`);
//     }

//     // Llamada para cargar la clasificación de la liga
//     const leaderboardResponse = await loadLeaderboard(leagueId);

//     if (!leaderboardResponse) {
//       throw new Error(`Error al cargar la clasificación de la liga con ID ${leagueId}`);
//     }

//     // Se crea el objeto que contiene toda la información de la liga y su leaderboard
//     const leagueSummary: CompleteLeagueSummary = {
//       league: leagueResponse,
//       classification: leaderboardResponse,
//     };

//     // Se agrega  a la lista de ligas completas
//     completeLeagueSummaries.value.push(leagueSummary);

//   } catch (error) {
//     console.error('Error al cargar y almacenar la liga completa:', error);
//   }
// }

// function handleErrorResponse(status: number) {
//   const errorMessages: Record<number, { title: string; text: string }> = {
//     400: { title: 'Error', text: 'Solicitud incorrecta' },
//     401: { title: 'Error', text: 'No autorizado' },
//     404: { title: 'Error', text: 'Liga o Clasificación no encontrada' },
//     408: { title: 'Error', text: 'Tiempo de espera agotado' },
//     500: { title: 'Error', text: 'Error interno del servidor. Contacta con el soporte' }
//   }

//   const error = errorMessages[status] || { title: 'Error', text: 'Error desconocido. Por favor, intenta de nuevo más tarde.' }
//   showErrorAlert(error.title, error.text)
// }

// function showErrorAlert(title: string, text: string) {
//   Swal.fire({
//     icon: 'error',
//     title,
//     text,
//     customClass: {
//       confirmButton: 'bg-[#06f] cursor-pointer text-white rounded border-0 text-base px-4 py-2 shadow-md font-medium'
//     },
//     buttonsStyling: false
//   })
// }

// onMounted(() => {
//   loadMatches()
//   loadLeague()
// })


const clasificacion: Participation[] = [
  {
    botId: 1,
    name: 'Bot 1',
    points: 20,
    position: 1,
    nWins: 6,
    nDraws: 2,
    nLosses: 2,
    nMatches: 10,
  },
  {
    botId: 2,
    name: 'Bot 2',
    points: 18,
    position: 2,
    nWins: 5,
    nDraws: 3,
    nLosses: 2,
    nMatches: 10,
  },
  {
    botId: 3,
    name: 'Bot 3',
    points: 17,
    position: 3,
    nWins: 5,
    nDraws: 2,
    nLosses: 3,
    nMatches: 10,
  },
  {
    botId: 4,
    name: 'Bot 4',
    points: 16,
    position: 4,
    nWins: 4,
    nDraws: 4,
    nLosses: 2,
    nMatches: 10,
  },
  {
    botId: 5,
    name: 'Bot 5',
    points: 15,
    position: 5,
    nWins: 4,
    nDraws: 3,
    nLosses: 3,
    nMatches: 10,
  },
  {
    botId: 6,
    name: 'Bot 6',
    points: 14,
    position: 6,
    nWins: 4,
    nDraws: 2,
    nLosses: 4,
    nMatches: 10,
  },
  {
    botId: 7,
    name: 'Bot 7',
    points: 13,
    position: 7,
    nWins: 3,
    nDraws: 4,
    nLosses: 3,
    nMatches: 10,
  },
  {
    botId: 8,
    name: 'Bot 8',
    points: 12,
    position: 8,
    nWins: 3,
    nDraws: 3,
    nLosses: 4,
    nMatches: 10,
  },
  {
    botId: 9,
    name: 'Bot 9',
    points: 11,
    position: 9,
    nWins: 3,
    nDraws: 2,
    nLosses: 5,
    nMatches: 10,
  },
  {
    botId: 10,
    name: 'Bot 10',
    points: 10,
    position: 10,
    nWins: 2,
    nDraws: 4,
    nLosses: 4,
    nMatches: 10,
  },
  {
    botId: 11,
    name: 'Bot 11',
    points: 9,
    position: 11,
    nWins: 2,
    nDraws: 3,
    nLosses: 5,
    nMatches: 10,
  },
  {
    botId: 12,
    name: 'Bot 12',
    points: 8,
    position: 12,
    nWins: 2,
    nDraws: 2,
    nLosses: 6,
    nMatches: 10,
  },
  {
    botId: 13,
    name: 'Bot 13',
    points: 7,
    position: 13,
    nWins: 1,
    nDraws: 4,
    nLosses: 5,
    nMatches: 10,
  },
  {
    botId: 14,
    name: 'Bot 14',
    points: 6,
    position: 14,
    nWins: 1,
    nDraws: 3,
    nLosses: 6,
    nMatches: 10,
  },
];

const ligaNombre = 'LaLiga EA Sports'

// Ejemplo de datos de jornadas con encuentros
const combates: Match[] = [
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
  {} as Record<number, Match[]>
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
const misBots = ['Bot 1', 'Bot 3', 'Bot 5'] // Ejemplo de Bots de un usuario

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

const userIdApi = 0
const userId = Number(localStorage.getItem('userId') || '0')
</script>

<template>
  <HeaderApp :title="titleHeader" :is-heading1="false" />
  <main
    class="mb-15 flex w-full flex-col items-center justify-center gap-5 px-4 sm:px-10 lg:w-[960px]"
  >
    <!-- Contenedor pequeño que incluye solo el header -->
    <header class="m-3 flex w-full flex-col gap-3">
  <div class="flex flex-row justify-between">
    <h1 class="text-left text-4xl font-bold">{{ league?.name }}</h1>

    <!-- Mostrar botones solo si el user es el owner -->
    <div class="flex flex-row gap-4 font-bold text-xl" v-if="userId === league?.user">
      <!-- Mostrar botón solo si la liga está pendiente -->
      <button
        v-if="league?.state === 'pendiente'"
        class="cursor-pointer px-4.5 py-3 bg-[#06f] text-white rounded-3xl"
        @click="startLeague"
      >
        Empezar Liga
      </button>

      <!-- Redirigir a configuración (puedes cambiar la ruta) -->
      <RouterLink
        :to="`/league/${league?.leagueId}/config`"
        class="cursor-pointer px-4.5 py-3 bg-[#06f] text-white rounded-3xl"
      >
        Configuración
      </RouterLink>
    </div>
  </div>

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
              <th class="w-72 p-2 text-left font-bold">Nombre</th>
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
              <td :class="['w-16 p-1 text-center', esMiBot(equipo.name) ? 'font-bold text-[#FADA5E]' : '']">
                {{ equipo.position }}
              </td>
              <td
                :class="['flex items-center gap-1 p-1', esMiBot(equipo.name) ? 'font-bold text-[#FADA5E]' : '']"
              >
                <!--<img :src="equipo.imagen" alt=" " class="h-6 w-6 lg:h-8 lg:w-8" />-->
                {{ equipo.name }}
              </td>
              <td :class="['w-8 p-1 text-center', esMiBot(equipo.name) ? 'font-bold text-[#FADA5E]' : '']">
                {{ equipo.nMatches }}
              </td>
              <td :class="['w-8 p-1 text-center', esMiBot(equipo.name) ? 'font-bold text-[#FADA5E]' : '']">
                {{ equipo.nWins }}
              </td>
              <td :class="['w-8 p-1 text-center', esMiBot(equipo.name) ? 'font-bold text-[#FADA5E]' : '']">
                {{ equipo.nDraws }}
              </td>
              <td :class="['w-8 p-1 text-center', esMiBot(equipo.name) ? 'font-bold text-[#FADA5E]' : '']">
                {{ equipo.nLosses }}
              </td>
              <td :class="['w-16 p-1 text-center', esMiBot(equipo.name) ? 'font-bold text-[#FADA5E]' : '']">
                {{ equipo.points }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
  <FooterApp />
</template>
