<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import FooterApp from '@/components/FooterApp.vue'
import ButtonLeague from '@/components/ButtonLeague.vue'
import BotoneraModo from '@/components/BotoneraModo.vue'

import { ref, watch, onMounted } from 'vue'
import type { League } from '@/types'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

// Para el cambio de página
const router = useRouter()
function goToCreateBots() {
  // Ajusta la ruta '/createBots' a la que hayas definido en tu router.
  router.push('/createBot')
}

// Definimos las interfaces de respuesta para la gestión de los bots:
// - id: Es el identificador del bot
interface BotSummaryResponse {
  id: number
  name: string
  description: string
}

interface BotResponse {
  botId: number
  name: string
  description: string
  urlImage: string
  nWins: number
  nLosses: number
  nDraws: number
}

// Variables para almacenar los datos de los bots:
const botSummaries = ref<BotSummaryResponse[]>([])
const botsDetails = ref<BotResponse[]>([])

// Identificador del usuario (esto vendría del LocalStorage al hacer el login):
// Pendiente de mirar como hacerlo de momento este es de ejemplo.
const userId = localStorage.getItem('userId') || 'Angelito'


// Función para obtener el listado de bots del usuario
async function loadBotSummaries() {

  // Se hace una llamada a la API para obtener el listado de bots del usuario
  const response = await fetch(
    `http://localhost:8080/api/v0/bot/${userId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  )

  if (!response.ok) {
    // Manejo de errores según el código de estado
    handleErrorResponse(response.status)

  } else {
    // Si la respuesta es correcta, se parsea a JSON y se asigna a la variable botSummaries
    const data: BotSummaryResponse[] = await response.json()
    botSummaries.value = data
  }
}

// Función para obtener el detalle de cada bot de la lista
async function loadBotDetails() {
  // Se recorre cada bot de la lista
  for (const botsummary of botSummaries.value) {

    // Se hace una llamada a la API para obtener el detalle de cada bot
    const response = await fetch(
      `http://localhost:8080/api/v0/bot/${botsummary.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )

    if (!response.ok) {
      // Manejo de errores según el código de estado
      handleErrorResponse(response.status)

    } else {
      // Si la respuesta es correcta, se parsea a JSON y se asigna a la variable botDetails
      const data: BotResponse = await response.json()
      botsDetails.value.push(data)
    }
  }
}

// Función principal para cargar los datos de los bots de un usuario
async function loadBotsData() {
  // Se obtiene la lista de bots:
  await loadBotSummaries()

  // A continuación, se obtiene el resumen de clasificación de cada bot
  await loadBotLeagueSummaries() // (Quizá tendría que ir aquí)

  // A continuación, se obtienen los detalles de cada bot
  await loadBotDetails()
}

// Para asegurar que los datos se cargan al iniciar el componente
onMounted(() => {
  loadBotsData()
  //loadBotLeagueSummaries()
})

function handleErrorResponse(status: number) {
  const errorMessages: Record<number, { title: string; text: string }> = {
    401: { title: 'Error', text: 'No autorizado' },
    404: { title: 'Error', text: 'Listado de bots no encontrado' },
    408: { title: 'Error', text: 'Tiempo de espera agotado' },
    500: { title: 'Error', text: 'Error interno del servidor. Contacta con el soporte' }
  }

  const error = errorMessages[status] || { title: 'Error', text: 'Error desconocido. Por favor, intenta de nuevo más tarde.' }
  showErrorAlert(error.title, error.text)
}

function showErrorAlert(title: string, text: string) {
  Swal.fire({
    icon: 'error',
    title,
    text,
    customClass: {
      confirmButton: 'bg-[#06f] cursor-pointer text-white rounded border-0 text-base px-4 py-2 shadow-md font-medium'
    },
    buttonsStyling: false
  })
}

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Simulamos una respuesta de la API con dos bots
botSummaries.value = [
    { id: 1, name: 'Bot A', description: 'Valentía' },
    { id: 2, name: 'Bot B', description: 'Empatía' }
  ]

botsDetails.value = [
    {
      botId: 1,
      name: 'Bot A',
      description: 'Valentía',
      urlImage: 'https://www.biospheresustainable.com/assets/arxius/e7a4c74a9304fde3454e87f76f7cc726.png',
      nWins: 10,
      nLosses: 5,
      nDraws: 2,
    },
    {
      botId: 2,
      name: 'Bot B',
      description: 'Empatía',
      urlImage: 'https://www.biospheresustainable.com/assets/arxius/7acec8002648e59ca4f9d9674faec7c8.png',
      nWins: 8,
      nLosses: 7,
      nDraws: 2,
    },
  ]

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Estado para el bot seleccionado
const selectedBot = ref<BotResponse | null>(null)

// Funciones para abrir y cerrar el menú de edición
function openEditMenu(bot: BotResponse) {
  // Se copia el bot seleccionado para editarlo
  selectedBot.value = { ...bot }
}
function closeEditMenu() {
  selectedBot.value = null
}

// Función para guardar los cambios del bot y actualizarlo mediante la API
async function saveBotChanges() {

  // Se verifica que haya un bot seleccionado para editar
  if (selectedBot.value) {

    // Creamos el objeto con los datos que se enviarán a la API
    const updateData = {
      name: selectedBot.value.name,
      description: selectedBot.value.description,
      urlImagen: selectedBot.value.urlImage,
      endpoint: ''
    };

    // Se llama a la API con el método PUT para actualizar el bot.
    const response = await fetch(`http://localhost:8080/api/v0/bot/${selectedBot.value.botId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(updateData)
    });

    if (!response.ok) {
      // Manejo de errores según el código de estado
      handleErrorResponse(response.status);

    } else {
      // Si la llamada fue exitosa:
      const updatedBot = await response.json();

      // Se busca el índice del bot actualizado dentro del array local.
      const botIndex = botsDetails.value.findIndex(
        (bot) => bot.botId === selectedBot.value!.botId
      );

      // Se actualiza el bot en el array con los datos recibidos de la API.
      if (botIndex !== -1) {
        botsDetails.value[botIndex] = updatedBot;
      }

      // Posiblemente esto se podría quitar al comprobar que se cambia correctamente
      Swal.fire({
        icon: 'success',
        title: 'Bot actualizado',
        text: 'El bot se ha actualizado correctamente'
      });

      closeEditMenu();
    }
  }
}

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Estructura de una liga
interface LeagueResponse {
  leagueId: number;
  state: string;
  name: string;
  urlImagen: string;
  user: number;
  rounds: number;
  matchTime: number;
  bots: number[];
}

// Estructura de la respuesta de clasificación de una liga
interface ParticipationResponse {
  botId: number;
  name: string;
  points: number;
  position: number;
  nWins: number;
  nDraws: number;
  nLosses: number;
}

// Para representar lo que se quiere guardar para cada bot
interface BotLeagueSummary {
  botId: number;
  league: LeagueResponse;
  classification: ParticipationResponse[]; // [Pos - 1][Pos][Pos + 1]
}

// Para almacenar la información de clasificación en liga de cada bot
const botLeagueSummaries = ref<BotLeagueSummary[]>([]);

// Función para cargar todas las ligas
async function loadAllLeagues() {

  // Se hace una llamada a la API para obtener el listado de todas las ligas
  const response = await fetch(`http://localhost:8080/api/v0/league`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    // Manejo de errores según el código de estado
    handleErrorResponse(response.status);

  } else {
    // Si la respuesta es correcta, se parsea a JSON y se asigna a la variable leagues
    const leagues: LeagueResponse[] = await response.json();
    return leagues;
  }
}

// Función para encontrar la liga en la que participa un bot
function findLeagueForBot(leagues: LeagueResponse[], botId: number) {
  return leagues.find(league => league.state === 'IN_PROCESS' && league.bots.includes(botId));
}

// Función para cargar la clasificación completa de una liga
async function getLeagueLeaderboard(leagueId: number) {

  // Se hace una llamada a la API para obtener la clasificación de una liga
  const response = await fetch(`http://localhost:8080/api/v0/league/${leagueId}/leaderboard`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    // Manejo de errores según el código de estado
    handleErrorResponse(response.status);
  } else {
    // Si la respuesta es correcta, se parsea a JSON y se asigna a la variable leaderboard
    const leaderboard: ParticipationResponse[] = await response.json();
    return leaderboard;
  }
}

// Función para extraer las posiciones superior, actual e inferior del bot en la clasificación
function extractPositions(leaderboard: ParticipationResponse[], bot: BotResponse) {

  // Buscamos el índice del bot en la clasificación:
  const index = leaderboard.findIndex(entry =>
    entry.botId === bot.botId || entry.name.toLowerCase() === bot.name.toLowerCase()
  );

  // Si no se encuentra el bot en la clasificación (aunque nunca debería pasar):
  if (index === -1) {
    return [];
  }

  // Definimos el rango: buscamos desde index - 1 a index + 1.
  const start = Math.max(index - 1, 0);
  const end = Math.min(index + 1, leaderboard.length - 1);

  // Devolvemos la clasificación filtrada para mostrar solo las posiciones que nos interesan:
  return leaderboard.filter((_, i) => i >= start && i <= end);
}

// Función para cargar el resumen de liga de cada bot
async function loadBotLeagueSummaries() {
  try {

    // Se cargan todas las ligas:
    const allLeagues = await loadAllLeagues();

    // Se recorre cada bot en la lista
    for (const bot of botsDetails.value) {

      // Busca en las ligas las que estén en IN_PROCESS y contengan este bot
      const leagueFound = allLeagues ? findLeagueForBot(allLeagues, bot.botId) : undefined;

      if (leagueFound) {

        // Se obtiene la clasificación de la liga encontrada:
        const leaderboard = await getLeagueLeaderboard(leagueFound.leagueId);

        // Se extraen las posiciones superior, actual e inferior del bot en la clasificación:
        const posicionesClasi = leaderboard ? extractPositions(leaderboard, bot) : [];

        if (posicionesClasi.length > 0) {
          botLeagueSummaries.value.push({
            botId: bot.botId,
            league: leagueFound,
            classification: posicionesClasi,
          });
        }
      }
    }
  } catch (error) {
    console.error('Error al cargar los datos de ligas y clasificaciones:', error);
    /*
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudieron cargar los datos de las ligas y clasificaciones.',
      customClass: {
        confirmButton:
          'bg-[#06f] cursor-pointer text-white rounded border-0 text-base px-4 py-2 shadow-md font-medium transition-shadow duration-150 hover:shadow-lg',
      },
      buttonsStyling: false,
    });
    */
  }
}

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Simulación de la respuesta de la API para pruebas

const botsDetailsTest = ref<BotResponse[]>([
  { botId: 1, name: 'Bot A', description: 'Valentía', urlImage: 'https://example.com/botA.png', nWins: 10, nLosses: 5, nDraws: 2 },
  { botId: 2, name: 'Bot B', description: 'Empatía', urlImage: 'https://example.com/botB.png', nWins: 8, nLosses: 7, nDraws: 2 },
  { botId: 3, name: 'Bot C', description: 'Curiosidad', urlImage: 'https://example.com/botC.png', nWins: 12, nLosses: 3, nDraws: 1 },
  { botId: 4, name: 'Bot D', description: 'Silencio', urlImage: 'https://example.com/botD.png', nWins: 5, nLosses: 10, nDraws: 3 } // Este bot NO participa en liga
]);

const botLeagueSummariesTest = ref<BotLeagueSummary[]>([
  {
    botId: 1,
    league: {
      leagueId: 1,
      state: 'IN_PROCESS',
      name: 'Premier League',
      urlImagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
      user: 101,
      rounds: 38,
      matchTime: 90,
      bots: [1],
    },
    classification: [
      {
        botId: 100,
        name: "Other1",
        points: 30,
        position: 1,
        nWins: 10,
        nDraws: 0,
        nLosses: 0,
      },
      {
        botId: 1,
        name: "Bot A",
        points: 28,
        position: 2,
        nWins: 9,
        nDraws: 1,
        nLosses: 2,
      },
      {
        botId: 101,
        name: "Other2",
        points: 26,
        position: 3,
        nWins: 8,
        nDraws: 2,
        nLosses: 3,
      }
    ]
  },
  {
    botId: 2,
    league: {
      leagueId: 2,
      state: 'IN_PROCESS',
      name: 'Bundesliga',
      urlImagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png',
      user: 102,
      rounds: 34,
      matchTime: 90,
      bots: [2],
    },
    classification: [
      {
        botId: 105,
        name: "Other6",
        points: 33,
        position: 2,
        nWins: 10,
        nDraws: 3,
        nLosses: 2,
      },
      {
        botId: 2,
        name: "Bot B",
        points: 31,
        position: 3,
        nWins: 9,
        nDraws: 4,
        nLosses: 3,
      },
      {
        botId: 106,
        name: "Other7",
        points: 29,
        position: 4,
        nWins: 8,
        nDraws: 4,
        nLosses: 4,
      }
    ]
  },
  {
    botId: 3,
    league: {
      leagueId: 3,
      state: 'IN_PROCESS',
      name: 'Serie A',
      urlImagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Serie_A.svg/225px-Serie_A.svg.png',
      user: 103,
      rounds: 38,
      matchTime: 90,
      bots: [3],
    },
    classification: [
      {
        botId: 3,
        name: "Bot C",
        points: 40,
        position: 1,
        nWins: 13,
        nDraws: 1,
        nLosses: 1,
      },
      {
        botId: 108,
        name: "Other9",
        points: 38,
        position: 2,
        nWins: 12,
        nDraws: 2,
        nLosses: 1,
      }
    ]
  }
]);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Declaración de las diferentes Ligas dónde participan mis bots:
const clasificaciones: Record<
  string,
  ParticipationResponse[]
> = {
  premierLeague: [
    {
      pos: 1,
      nombre: 'MisterX',
      cualidad: 'Valentía',
      imagen: '',
      PJ: 2,
      G: 1,
      E: 1,
      P: 0,
      Ptos: 4,
    },
    {
      pos: 2,
      nombre: 'MisterY',
      cualidad: 'Sinceridad',
      imagen: '',
      PJ: 2,
      G: 1,
      E: 0,
      P: 1,
      Ptos: 3,
    },
    {
      pos: 3,
      nombre: 'C3PO',
      cualidad: 'Soledad',
      imagen: new URL('@/assets/svg/spain.svg', import.meta.url).href,
      PJ: 3,
      G: 2,
      E: 1,
      P: 0,
      Ptos: 7,
    },
    {
      pos: 4,
      nombre: 'Rbotito',
      cualidad: 'Empatia',
      imagen: new URL('@/assets/svg/argentina.svg', import.meta.url).href,
      PJ: 3,
      G: 2,
      E: 0,
      P: 1,
      Ptos: 6,
    },
    {
      pos: 5,
      nombre: 'Ramingo',
      cualidad: 'Envidia',
      imagen: new URL('@/assets/svg/argentina.svg', import.meta.url).href,
      PJ: 4,
      G: 1,
      E: 2,
      P: 1,
      Ptos: 5,
    },
  ],
  bundesliga: [
    {
      pos: 1,
      nombre: 'MisterX',
      cualidad: 'Valentía',
      imagen: '',
      PJ: 2,
      G: 1,
      E: 1,
      P: 0,
      Ptos: 4,
    },
    {
      pos: 2,
      nombre: 'MisterY',
      cualidad: 'Sinceridad',
      imagen: '',
      PJ: 2,
      G: 1,
      E: 0,
      P: 1,
      Ptos: 3,
    },
    {
      pos: 3,
      nombre: 'Luris',
      cualidad: 'Soledad',
      imagen: new URL('@/assets/svg/spain.svg', import.meta.url).href,
      PJ: 3,
      G: 2,
      E: 1,
      P: 0,
      Ptos: 7,
    },
    {
      pos: 4,
      nombre: 'Rbotito',
      cualidad: 'Empatia',
      imagen: new URL('@/assets/svg/argentina.svg', import.meta.url).href,
      PJ: 3,
      G: 2,
      E: 0,
      P: 1,
      Ptos: 6,
    },
    {
      pos: 5,
      nombre: 'Ramingo',
      cualidad: 'Envidia',
      imagen: new URL('@/assets/svg/argentina.svg', import.meta.url).href,
      PJ: 4,
      G: 1,
      E: 2,
      P: 1,
      Ptos: 5,
    },
  ],
  serieA: [
    {
      pos: 1,
      nombre: 'MisterX',
      cualidad: 'Valentía',
      imagen: '',
      PJ: 2,
      G: 1,
      E: 1,
      P: 0,
      Ptos: 4,
    },
    {
      pos: 2,
      nombre: 'MisterY',
      cualidad: 'Sinceridad',
      imagen: '',
      PJ: 2,
      G: 1,
      E: 0,
      P: 1,
      Ptos: 3,
    },
    {
      pos: 3,
      nombre: 'C3PO',
      cualidad: 'Soledad',
      imagen: new URL('@/assets/svg/spain.svg', import.meta.url).href,
      PJ: 3,
      G: 2,
      E: 1,
      P: 0,
      Ptos: 7,
    },
    {
      pos: 4,
      nombre: 'Tutto_Free',
      cualidad: 'Generosidad',
      imagen: new URL('@/assets/svg/argentina.svg', import.meta.url).href,
      PJ: 3,
      G: 2,
      E: 0,
      P: 1,
      Ptos: 6,
    },
    {
      pos: 5,
      nombre: 'Ramingo',
      cualidad: 'Envidia',
      imagen: new URL('@/assets/svg/argentina.svg', import.meta.url).href,
      PJ: 4,
      G: 1,
      E: 2,
      P: 1,
      Ptos: 5,
    },
  ],
}

const ligas: League[] = [
  {
    leagueId: 1,
    state: 'pendiente',
    name: 'Premier League',
    urlImagen:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    user: 101,
    rounds: 38,
    matchTime: 90,
    bots: [1, 2, 3, 4, 5],
  },
  {
    leagueId: 2,
    state: 'pendiente',
    name: 'Bundesliga',
    urlImagen:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png',
    user: 102,
    rounds: 34,
    matchTime: 90,
    bots: [1, 2, 3, 4, 5],
  },
  {
    leagueId: 3,
    state: 'pendiente',
    name: 'Serie A',
    urlImagen:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png',
    user: 103,
    rounds: 38,
    matchTime: 90,
    bots: [1, 2, 3, 4, 5],
  },
]

const ligaSeleccionada = ref<League | null>(null)
// Nombre del bot a buscar en la liga:
const botName = ref('Rbotito')

// Estado para mostrar/ocultar la ventana de ayuda
const showHelpModal = ref(false)

// Estado para mostrar/ocultar la ventana de elegir liga
const ChooseLeague = ref(false)

// Resumen del bot
const resumenBot = ref({
  victorias: 0,
  empates: 0,
  derrotas: 0,
  ligasJugadas: [] as League[],
})

// Función para calcular el resumen del bot
function getBotSummary(botName: string) {
  let totalG = 0
  let totalE = 0
  let totalP = 0
  const ligasJugadas: League[] = [] // Ahora es un arreglo de Liga

  ligas.forEach((liga) => {
    const row = clasificaciones[toCamelCase(liga.name)]?.find(
      (item) => item.nombre.toLowerCase() === botName.toLowerCase()
    )
    if (row) {
      totalG += row.G
      totalE += row.E
      totalP += row.P
      // Agregamos la liga completa
      ligasJugadas.push(liga)
    }
  })

  resumenBot.value = {
    victorias: totalG,
    empates: totalE,
    derrotas: totalP,
    ligasJugadas,
  }
}

function toCamelCase(str: string) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
}

// Actualizar el resumen cada vez que cambie el nombre del bot
watch(botName, () => {
  getBotSummary(botName.value)
})

// Calcular el resumen al iniciar
getBotSummary(botName.value)

function getIndicesByBotName(league: League, name: string): number[] {
  // Buscamos la posición en la clasificación:
  const classification = clasificaciones[toCamelCase(league.name)]
  const index = classification?.findIndex(
    (item) => item.nombre.toLowerCase() === name.toLowerCase()
  )

  // Si el bot no está en la clasificación, devolvemos []
  if (index === -1 || index === undefined) {
    return []
  }

  const posBot = index + 1
  const indices = [posBot - 1, posBot, posBot + 1]

  // Filtramos para quedarnos solo con índices válidos
  return indices.filter((i) => i > 0 && i <= classification.length)
}
</script>

<template>
  <HeaderApp title="Mis Bots" :is-heading1="true" />
  <main
    class="xs:px-8 mb-10 flex w-full flex-col items-center justify-center gap-5 px-3 sm:max-w-[860px] md:px-10 lg:w-[860px]"
  >
    <div
      class="mb-4 flex w-full max-w-full flex-col items-center gap-12 rounded-2xl bg-[#2a2a2a] px-3 py-5 sm:px-8 md:px-16"
    >
      <!-- Botón Crear Bot -->
      <div class="mt-4 -mb-8 flex w-full justify-center">
        <button
          class="flex items-center gap-x-2 rounded-full bg-[#06f] px-6 py-2 text-[16px] font-bold text-white"
          @click="goToCreateBots"
        >
          <img src="@/assets/svg/add.svg" alt="Icono" class="h-5 w-5" />
          Crear Bot
        </button>
      </div>

      <BotoneraModo>
        <!-- Modo Clasificación -->
        <template #clasificacion>
          <div class="w-full">
            <!-- Se itera sobre cada liga -->
            <section v-for="liga in ligas" :key="liga.leagueId" class="mb-4 w-full px-4 pt-4 pb-4">
              <!-- Nombre del Bot -->
              <h2 class="text-center text-[32px] font-bold text-white">
                {{ liga.name.split(' (')[0] }}
              </h2>

              <!-- Cualidad del Bot -->
              <h3 class="text-center text-[32px] font-semibold text-white">
                ({{ liga.name.split(' (')[1]?.replace(')', '') }})
              </h3>

              <!-- Línea Separadora -->
              <div class="mx-auto mt-1 mb-4 h-[2px] w-2/3 bg-gray-500"></div>

              <p class="mb-2 text-center text-[16px] font-bold text-white">
                Posición en la Liga Actual
              </p>

              <!-- Si el bot tiene una posición dentro de la liga -->
              <div v-if="getIndicesByBotName(liga, botName).length">
                <table class="mx-auto w-full table-auto border-collapse text-white">
                  <thead>
                    <tr class="border-b border-gray-600 text-left">
                      <th
                        class="px-3 py-2 text-center text-[18px] whitespace-nowrap sm:text-[24px]"
                      >
                        Pos
                      </th>
                      <th class="px-4 py-2 text-left text-[18px] whitespace-nowrap sm:text-[24px]">
                        Nombre
                      </th>
                      <th class="px-4 py-2 text-left text-[18px] whitespace-nowrap sm:text-[24px]">
                        Cualidad
                      </th>
                      <th class="px-2 py-2 text-center text-[18px] sm:text-[24px]">PJ</th>
                      <th class="px-2 py-2 text-center text-[18px] sm:text-[24px]">G</th>
                      <th class="px-2 py-2 text-center text-[18px] sm:text-[24px]">E</th>
                      <th class="px-2 py-2 text-center text-[18px] sm:text-[24px]">P</th>
                      <th class="px-3 py-2 text-center text-[18px] sm:text-[24px]">Ptos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="i in getIndicesByBotName(liga, botName)"
                      :key="i"
                      class="border-b border-gray-500"
                      :class="{
                        'font-bold text-[#FADA5E]':
                          clasificaciones[toCamelCase(liga.name)][i - 1].nombre.toLowerCase() ===
                          botName.toLowerCase(),
                      }"
                    >
                      <td
                        class="px-3 py-2 text-center text-[16px] whitespace-nowrap sm:text-[20px]"
                      >
                        {{ clasificaciones[toCamelCase(liga.name)][i - 1].pos }}
                      </td>
                      <td
                        class="flex items-center px-4 py-2 text-left text-[16px] whitespace-nowrap sm:text-[20px]"
                      >
                        <img
                          :src="clasificaciones[toCamelCase(liga.name)][i - 1].imagen"
                          alt=""
                          class="mr-2"
                        />
                        {{ clasificaciones[toCamelCase(liga.name)][i - 1].nombre }}
                      </td>
                      <td class="px-4 py-2 text-left text-[16px] whitespace-nowrap sm:text-[20px]">
                        {{ clasificaciones[toCamelCase(liga.name)][i - 1].cualidad }}
                      </td>
                      <td class="px-2 py-2 text-center text-[16px] sm:text-[20px]">
                        {{ clasificaciones[toCamelCase(liga.name)][i - 1].PJ }}
                      </td>
                      <td class="px-2 py-2 text-center text-[16px] sm:text-[20px]">
                        {{ clasificaciones[toCamelCase(liga.name)][i - 1].G }}
                      </td>
                      <td class="px-2 py-2 text-center text-[16px] sm:text-[20px]">
                        {{ clasificaciones[toCamelCase(liga.name)][i - 1].E }}
                      </td>
                      <td class="px-2 py-2 text-center text-[16px] sm:text-[20px]">
                        {{ clasificaciones[toCamelCase(liga.name)][i - 1].P }}
                      </td>
                      <td class="px-3 py-2 text-center text-[16px] sm:text-[20px]">
                        {{ clasificaciones[toCamelCase(liga.name)][i - 1].Ptos }}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- Botones "Ver Liga Actual" y "Ver Historial de Ligas" -->
                <div class="mt-6 flex flex-wrap justify-center gap-x-4">
                  <button class="rounded-full bg-[#06f] px-6 py-2 text-[16px] font-bold text-white">
                    Ver Liga Actual
                  </button>
                  <button class="rounded-full bg-[#06f] px-6 py-2 text-[16px] font-bold text-white">
                    Ver Historial de Ligas
                  </button>
                </div>
              </div>

              <!-- Si no participa en la liga -->
              <div v-else>
                <p class="mt-6 mb-6 text-center text-[16px] font-bold text-[#8D8D8D]">
                  En ninguna liga actualmente...
                </p>
                <div class="mt-4 flex justify-center gap-x-4">
                  <button
                    class="rounded-full bg-white px-6 py-2 text-[16px] font-bold text-black"
                    @click="ChooseLeague = true"
                  >
                    Apuntarse
                  </button>
                </div>
                <div class="mt-4 flex justify-center gap-x-4">
                  <button class="rounded-full bg-[#06f] px-6 py-2 text-[16px] font-bold text-white">
                    Ver Historial de Ligas
                  </button>
                </div>
              </div>
            </section>
          </div>
        </template>

        <!-- Modo Resumen -->
        <template #resumen>
          <div class="w-full">
            <section
              v-for="bot in botsDetails"
              :key="bot.botId"
              class="mb-4 w-full px-4 pt-4 pb-4"
            >
              <!-- Contenedor principal -->
              <div class="flex flex-col gap-4 p-4 rounded-lg sm:flex-row">
                <!-- Contenedor del texto (nombre y cualidad) -->
                <div class="flex flex-col justify-center text-center sm:text-left">
                  <h2 class="text-[32px] font-bold text-center text-white">
                    {{ bot.name.toUpperCase() }}
                  </h2>
                  <h3 class="text-[24px] font-semibold text-center text-white">
                    ({{ bot.description }})
                  </h3>
                </div>

                <!-- Contenedor de la imagen -->
                <div
                  class="flex items-center justify-center cursor-pointer"
                  @click="openEditMenu(bot)"
                >
                  <img
                    :src="bot.urlImage"
                    alt="Imagen del Bot"
                    class="h-[200px] w-[200px] rounded-lg border-2 border-gray-500 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              </div>

              <!-- Línea separadora -->
              <div class="mx-auto mt-1 mb-4 h-[2px] w-full bg-gray-500"></div>

              <!-- Contenedor de estadísticas -->
              <div
                class="mt-2 flex flex-row items-center justify-center gap-12 text-white"
              >

                <!-- Empates -->
                <div class="flex flex-col items-center">
                  <div class="mt-4 text-[32px] font-bold">
                    {{ bot.nDraws }}
                  </div>
                  <div class="mb-1 h-[1px] w-8 bg-white"></div>
                  <div class="text-[20px] font-semibold">Empates</div>
                </div>

                <!-- Victorias -->
                <div class="-mt-4 flex flex-col items-center">
                  <div class="text-[48px] font-bold">
                    {{ bot.nWins }}
                  </div>
                  <div class="-mt-2 mb-1 h-[1px] w-8 bg-white"></div>
                  <div class="text-[24px] font-semibold">Victorias</div>
                </div>

                <!-- Derrotas -->
                <div class="flex flex-col items-center">
                  <div class="mt-4 text-[32px] font-bold">
                    {{ bot.nLosses }}
                  </div>
                  <div class="mb-1 h-[1px] w-8 bg-white"></div>
                  <div class="text-[20px] font-semibold">Derrotas</div>
                </div>
              </div>
            </section>
          </div>
        </template>

        <!-- Resumen del Bot - Anterior Versión
          <div class="w-full">
            <section v-for="liga in ligas" :key="liga.leagueId" class="mb-4 w-full px-4 pt-4 pb-4">
              <h2 class="text-center text-[32px] font-bold text-white">
                {{ liga.name.split(' (')[0] }}
              </h2>
              <h3 class="text-center text-[32px] font-semibold text-white">
                ({{ liga.name.split(' (')[1]?.replace(')', '') }})
              </h3>
              <div class="mx-auto mt-1 mb-4 h-[2px] w-2/3 bg-gray-500"></div>
              <div
                v-if="
                  resumenBot.victorias + resumenBot.empates + resumenBot.derrotas > 0 &&
                  getIndicesByBotName(liga, botName).length
                "
              >
                <div
                  class="mt-2 flex flex-col items-center justify-center gap-12 text-white sm:flex-row"
                >
                  <div class="flex flex-col items-center">
                    <div class="mt-4 text-[32px] font-bold">
                      {{ resumenBot.empates }}
                    </div>
                    <div class="mb-1 h-[1px] w-8 bg-white"></div>
                    <div class="text-[20px] font-semibold">Empate</div>
                  </div>
                  <div class="-mt-4 flex flex-col items-center">
                    <div class="text-[48px] font-bold">
                      {{ resumenBot.victorias }}
                    </div>
                    <div class="-mt-2 mb-1 h-[1px] w-8 bg-white"></div>
                    <div class="text-[24px] font-semibold">Victorias</div>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="mt-4 text-[32px] font-bold">
                      {{ resumenBot.derrotas }}
                    </div>
                    <div class="mb-1 h-[1px] w-8 bg-white"></div>
                    <div class="text-[20px] font-semibold">Derrotas</div>
                  </div>
                </div>
                <p class="mt-4 text-center text-[24px] font-semibold text-white">Ligas Jugadas</p>
                <div class="mt-3 flex flex-wrap items-center justify-center gap-6">
                  <ButtonLeague
                    v-for="liga in resumenBot.ligasJugadas"
                    :key="liga.leagueId"
                    :liga="liga"
                  />
                </div>
              </div>
              <div v-else>
                <p class="mt-6 mb-6 text-center text-[16px] font-bold text-[#8D8D8D]">
                  No ha jugado en ninguna liga...
                </p>
                <div class="mt-4 flex justify-center gap-x-4">
                  <button class="rounded-full bg-white px-6 py-2 text-[16px] font-bold text-black">
                    Apuntarse
                  </button>
                </div>
              </div>
            </section>
          </div>
        </template>-->
      </BotoneraModo>
    </div>
  </main>

  <!-- Menú flotante para editar -->
  <div
    v-if="selectedBot"
    class="fixed inset-0 flex items-center justify-center backdrop-blur-[3px] bg-black/30"
  >
    <div class="w-[400px] rounded-lg bg-[#2a2a2a] p-6 text-white">
      <h2 class="mb-4 text-center text-2xl font-bold">Modificar Bot</h2>
      <form @submit.prevent="saveBotChanges">
        <div class="mb-4">
          <label for="bot-name" class="block text-sm font-semibold">Nombre</label>
          <input
            id="bot-name"
            v-model="selectedBot.name"
            type="text"
            class="w-full rounded-lg bg-[#4e4e4e] p-2 text-white"
          />
        </div>
        <div class="mb-4">
          <label for="bot-description" class="block text-sm font-semibold">Descripción</label>
          <input
            id="bot-description"
            v-model="selectedBot.description"
            type="text"
            class="w-full rounded-lg bg-[#4e4e4e] p-2 text-white"
          />
        </div>
        <div class="mb-4">
          <label for="bot-image" class="block text-sm font-semibold">URL de la Imagen</label>
          <input
            id="bot-image"
            v-model="selectedBot.urlImage"
            type="text"
            class="w-full rounded-lg bg-[#4e4e4e] p-2 text-white"
          />
        </div>
        <div class="flex justify-center gap-4">
          <button
            type="button"
            class="rounded-lg bg-gray-500 px-4 py-2 text-white"
            @click="closeEditMenu"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="rounded-lg bg-[#06f] px-4 py-2 text-white"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Modal para seleccionar liga -->
  <div
    v-show="ChooseLeague"
    class="fixed inset-0 flex items-center justify-center backdrop-blur-[3px]"
    @click.self="ChooseLeague = false"
  >
    <div
      class="w-[570px] rounded-xl bg-[#1D1D1D] p-6 text-center text-white"
      :class="ChooseLeague ? 'scale-100' : 'scale-75'"
    >
      <h2 class="mb-2 text-center text-2xl font-bold">Seleccionar Liga</h2>
      <div class="mx-0 mt-0 mb-4 h-[1px] w-full bg-[#FFFFFF]"></div>

      <!-- Lista de ligas -->
      <ul class="mx-auto rounded-lg bg-[#DDDDDD] p-2 dark:bg-[#353535]">
        <li
          v-for="liga in ligas"
          :key="liga.leagueId"
          :class="[
            'flex cursor-pointer items-center rounded-md p-2',

            ligaSeleccionada?.leagueId === liga.leagueId
              ? 'border-2 border-blue-500'
              : 'border border-transparent',
          ]"
          @click="ligaSeleccionada = liga"
        >
          <div class="flex w-full items-center">
            <img
              :src="liga.urlImagen"
              alt="Liga"
              class="mr-2 h-16 w-16 rounded-md bg-white object-contain p-2"
            />
            <span class="text-lg font-semibold text-black dark:text-white">
              {{ liga.name }}
            </span>
          </div>
        </li>
      </ul>

      <!-- Botón Apuntarse -->
      <button
        class="mt-2 rounded-md bg-[#06f] px-4 py-2 font-semibold text-white"
        @click="ChooseLeague = false"
      >
        Apuntarse
      </button>
    </div>
  </div>
  <!-- Footer

      <Dropdown
          :options="ligas.map(liga => ({ name: liga.name, icon: liga.urlImagen }))"
          @update:selected="
              (value) => {
                ligaSeleccionada = ligas.find(liga => liga.name === value.name) || null
              }
            "
        />
      -->
  <FooterApp>
    <img
      src="@/assets/svg/ayuda.svg"
      alt="Ayuda"
      class="h-6 w-6 cursor-pointer"
      @click="showHelpModal = true"
    />
  </FooterApp>

  <!-- Modal de ayuda -->
  <div
    v-show="showHelpModal"
    class="fixed inset-0 flex items-center justify-center backdrop-blur-[3px]"
  >
    <div
      class="w-[300px] rounded-xl bg-[#525252] p-6 text-center text-white"
      :class="showHelpModal ? 'scale-100' : 'scale-75'"
    >
      <h2 class="mb-4 text-xl font-bold">Ayuda</h2>
      <ul class="mb-4 list-inside text-left">
        <li><strong>PJ</strong>: Partidas jugadas</li>
        <li><strong>G</strong>: Ganadas (3 puntos)</li>
        <li><strong>E</strong>: Empatadas (1 punto)</li>
        <li><strong>P</strong>: Perdidas (0 puntos)</li>
      </ul>
      <button
        class="mt-2 rounded-md bg-[#06f] px-4 py-2 font-semibold text-white"
        @click="showHelpModal = false"
      >
        Volver
      </button>
    </div>
  </div>
</template>
