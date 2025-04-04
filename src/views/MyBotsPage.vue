<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import FooterApp from '@/components/FooterApp.vue'
import ButtonLeague from '@/components/ButtonLeague.vue'
import BotoneraModo from '@/components/BotoneraModo.vue'
import { ref, watch } from 'vue'
import type { Liga } from '@/types'
import { useRouter } from 'vue-router'

// Para el cambio de página
const router = useRouter()
function goToCreateBots() {
  // Ajusta la ruta '/createBots' a la que hayas definido en tu router.
  router.push('/createBot')
}

// Declaración de las diferentes Ligas dónde participan mis bots:
const ligas = ref<Liga[]>([
  {
    id: 1,
    nombre: 'RBOTITO (Empatía)', // Sería más bien el nombre del Bot
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    finalizado: false,
    clasificacion: [
      { pos: 1, nombre: 'MisterX', cualidad: 'Valentía', imagen: "",  PJ: 2, G: 1, E: 1, P: 0, Ptos: 4 },
      { pos: 2, nombre: 'MisterY', cualidad: 'Sinceridad', imagen: "", PJ: 2, G: 1, E: 0, P: 1, Ptos: 3 },
      { pos: 3, nombre: 'C3PO', cualidad: 'Soledad', imagen: new URL('@/assets/svg/spain.svg', import.meta.url).href, PJ: 3, G: 2, E: 1, P: 0, Ptos: 7 },
      { pos: 4, nombre: 'Rbotito', cualidad: 'Empatia', imagen: new URL('@/assets/svg/argentina.svg', import.meta.url).href, PJ: 3, G: 2, E: 0, P: 1, Ptos: 6 },
      { pos: 5, nombre: 'Ramingo', cualidad: 'Envidia', imagen: new URL('@/assets/svg/argentina.svg', import.meta.url).href, PJ: 4, G: 1, E: 2, P: 1, Ptos: 5 },
      // ...
    ],
  },
  {
    id: 2,
    nombre: 'PEPITA (Soledad)', // Sería más bien el nombre del Bot
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png',
    finalizado: false,
    clasificacion: [
      { pos: 1, nombre: 'MisterX', cualidad: 'Valentía', imagen: "", PJ: 2, G: 1, E: 1, P: 0, Ptos: 4 },
      { pos: 2, nombre: 'MisterY', cualidad: 'Sinceridad', imagen: "", PJ: 2, G: 1, E: 0, P: 1, Ptos: 3 },
      { pos: 3, nombre: 'Luris', cualidad: 'Soledad', imagen: new URL('@/assets/svg/spain.svg', import.meta.url).href, PJ: 3, G: 2, E: 1, P: 0, Ptos: 7 },
      { pos: 4, nombre: 'Rbotito', cualidad: 'Empatia', imagen: new URL('@/assets/svg/argentina.svg', import.meta.url).href, PJ: 3, G: 2, E: 0, P: 1, Ptos: 6 },
      { pos: 5, nombre: 'Ramingo', cualidad: 'Envidia', imagen: new URL('@/assets/svg/argentina.svg', import.meta.url).href, PJ: 4, G: 1, E: 2, P: 1, Ptos: 5 },
      // ...
    ],
  },
  {
    id: 2,
    nombre: 'TUTTO_FREE (Generosidad)', // Sería más bien el nombre del Bot
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png',
    finalizado: false,
    clasificacion: [
      { pos: 1, nombre: 'MisterX', cualidad: 'Valentía', imagen: "", PJ: 2, G: 1, E: 1, P: 0, Ptos: 4 },
      { pos: 2, nombre: 'MisterY', cualidad: 'Sinceridad', imagen: "", PJ: 2, G: 1, E: 0, P: 1, Ptos: 3 },
      { pos: 3, nombre: 'C3PO', cualidad: 'Soledad', imagen: new URL('@/assets/svg/spain.svg', import.meta.url).href, PJ: 3, G: 2, E: 1, P: 0, Ptos: 7 },
      { pos: 4, nombre: 'Tutto_Free', cualidad: 'Generosidad', imagen: new URL('@/assets/svg/argentina.svg', import.meta.url).href, PJ: 3, G: 2, E: 0, P: 1, Ptos: 6 },
      { pos: 5, nombre: 'Ramingo', cualidad: 'Envidia', imagen: new URL('@/assets/svg/argentina.svg', import.meta.url).href, PJ: 4, G: 1, E: 2, P: 1, Ptos: 5 },
      // ...
    ],
  },
])

// Nombre del bot a buscar en la liga:
const botName = ref('Rbotito')

// Estado para mostrar/ocultar la ventana de ayuda
const showHelpModal = ref(false)

// Resumen del bot
const resumenBot = ref({
  victorias: 0,
  empates: 0,
  derrotas: 0,
  ligasJugadas: [] as Liga[],
})

// Función para calcular el resumen del bot
function getBotSummary(botName: string) {
  let totalG = 0
  let totalE = 0
  let totalP = 0
  const ligasJugadas: Liga[] = []  // Ahora es un arreglo de Liga

  ligas.value.forEach((liga) => {
    const row = liga.clasificacion.find(
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

// Actualizar el resumen cada vez que cambie el nombre del bot
watch(botName, () => {
  getBotSummary(botName.value)
})

// Calcular el resumen al iniciar
getBotSummary(botName.value)

function getIndicesByBotName(league: Liga, name: string): number[] {
  // Buscamos la posición en la clasificación:
  const index = league.clasificacion.findIndex(item => item.nombre.toLowerCase() === name.toLowerCase())

  // Si el bot no está en la clasificación, devolvemos []
  if (index === -1) {
    return []
  }

  const posBot = index + 1
  const indices = [posBot - 1, posBot, posBot + 1]

  // Filtramos para quedarnos solo con índices válidos
  return indices.filter(i => i > 0 && i <= league.clasificacion.length)
}
</script>

<template>
  <HeaderApp title="Mis Bots" :is-heading1="true" />
  <main class="flex max-w-[860px] flex-col items-center justify-center gap-5 px-10 lg:w-[860px]">
    <div className="bg-[#2a2a2a] pt-4 pl-16 pr-16 pb-12 rounded-2xl mb-4">

      <!-- Botón Crear Bot -->
      <div class="mt-4 flex justify-center gap-x-4">
        <button
          class="flex items-center gap-2 rounded-full bg-[#06f] px-6 py-2 text-[16px] font-bold text-white"
          @click="goToCreateBots"
        >
          <img src="@/assets/svg/add.svg" alt="Icono" class="h-5 w-5" />
          Crear Bot
        </button>
      </div>

      <BotoneraModo>
        <!-- Modo Clasificación -->
        <template #clasificacion>
          <div>
            <!-- Se itera sobre cada liga -->
            <section
              v-for="liga in ligas"
              :key="liga.id"
              class="w-full pt-4 pb-4 pl-8 pr-8 mb-4"
            >
              <!-- Nombre del Bot -->
              <h2 class="text-center text-[32px] font-bold text-white">
                {{ liga.nombre.split(' (')[0] }}
              </h2>

              <!-- Cualidad del Bot -->
              <h3 class="text-center text-[32px] font-semibold text-white">
                ({{ liga.nombre.split(' (')[1]?.replace(')', '') }})
              </h3>

              <!-- Línea Separadora -->
              <div class="mx-auto mt-1 mb-4 h-[2px] w-2/3 bg-gray-500"></div>

              <p class="text-center text-[16px] text-white font-bold mb-2">
                  Posición en la Liga Actual
              </p>

              <!-- Si el bot tiene una posición dentro de la liga:-->
              <div v-if="getIndicesByBotName(liga, botName).length">
                <table class="mx-auto w-full max-w-[600px] border-collapse text-white">
                  <thead>
                    <tr class="border-b border-gray-600 text-left text-sm">
                      <th class="px-3 py-2 text-center text-[24px]">Pos</th>
                      <th class="px-4 py-2 text-left text-[24px] whitespace-nowrap">Nombre</th>
                      <th class="px-4 py-2 text-left text-[24px] whitespace-nowrap">Cualidad</th>
                      <th class="px-2 py-2 text-center text-[24px]">PJ</th>
                      <th class="px-2 py-2 text-center text-[24px]">G</th>
                      <th class="px-2 py-2 text-center text-[24px]">E</th>
                      <th class="px-2 py-2 text-center text-[24px]">P</th>
                      <th class="px-3 py-2 text-center text-[24px]">Ptos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="i in getIndicesByBotName(liga, botName)"
                      :key="i"
                      class="border-b border-gray-500 text-sm"
                      :class="{
                        'font-bold text-[#FADA5E]': liga.clasificacion[i - 1].nombre === botName
                      }"
                    >
                      <td class="px-3 py-2 text-center text-[18px]">
                        {{ liga.clasificacion[i - 1].pos }}
                      </td>
                      <td class="px-4 py-2 text-left text-[18px] whitespace-nowrap flex items-center">
                        <img
                          :src="liga.clasificacion[i - 1].imagen"
                          alt=""
                          class="mr-2"
                        />
                        {{ liga.clasificacion[i - 1].nombre }}
                      </td>
                      <td class="px-4 py-2 text-left text-[20px] whitespace-nowrap">
                        {{ liga.clasificacion[i - 1].cualidad }}
                      </td>
                      <td class="px-2 py-2 text-center text-[20px]">
                        {{ liga.clasificacion[i - 1].PJ }}
                      </td>
                      <td class="px-2 py-2 text-center text-[20px]">
                        {{ liga.clasificacion[i - 1].G }}
                      </td>
                      <td class="px-2 py-2 text-center text-[20px]">
                        {{ liga.clasificacion[i - 1].E }}
                      </td>
                      <td class="px-2 py-2 text-center text-[20px]">
                        {{ liga.clasificacion[i - 1].P }}
                      </td>
                      <td class="px-3 py-2 text-center text-[20px]">
                        {{ liga.clasificacion[i - 1].Ptos }}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- "Ver liga" -->
                <div class="mt-4 flex justify-center gap-x-4">
                  <button class="rounded-full bg-[#06f] px-6 py-2 text-[16px] font-bold text-white">
                    Ver Liga Actual
                  </button>
                  <button class="rounded-full bg-[#06f] px-6 py-2 text-[16px] font-bold text-white">
                    Ver Historial de Ligas
                  </button>
                </div>
              </div>

              <!-- Si getIndicesByBotName() está vacío, mostramos el mensaje de que no participa -->
              <div v-else>
                <p class="text-center text-[16px] text-[#8D8D8D] font-bold mb-6 mt-6">
                  En ninguna liga actualmente...
                </p>

                <!-- Botones -->
                <div class="mt-4 flex justify-center gap-x-4">
                  <button class="rounded-full bg-white px-6 py-2 text-[16px] font-bold text-black">
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
          <div>
            <!-- Se itera sobre cada liga -->
            <section
              v-for="liga in ligas"
              :key="liga.id"
              class="w-full pt-4 pb-4 pl-8 pr-8 mb-4"
            >
              <!-- Nombre del Bot -->
              <h2 class="text-center text-[32px] font-bold text-white">
                {{ liga.nombre.split(' (')[0] }}
              </h2>

              <!-- Cualidad del Bot -->
              <h3 class="text-center text-[32px] font-semibold text-white">
                ({{ liga.nombre.split(' (')[1]?.replace(')', '') }})
              </h3>

              <!-- Línea Separadora -->
              <div class="mx-auto mt-1 mb-4 h-[2px] w-2/3 bg-gray-500"></div>

              <!-- Calculamos el resumen "al vuelo" para el botName actual -->
              <div v-if="(resumenBot.victorias + resumenBot.empates + resumenBot.derrotas > 0) && getIndicesByBotName(liga, botName).length">                <!-- Mostramos las estadísticas -->

                <!-- Mostramos las estadísticas -->
                <div class="mt-2 flex items-center justify-center gap-12 text-white">

                  <!-- Empates -->
                  <div class="flex flex-col items-center">
                    <div class="mt-4 text-[32px] font-bold">
                      {{ resumenBot.empates }}
                    </div>
                    <div class="mb-1 h-[1px] w-8 bg-white"></div>
                    <div class="text-[20px] font-semibold">
                      Empate
                    </div>
                  </div>

                  <!-- Victorias -->
                  <div class="flex flex-col items-center -mt-4">
                    <div class="text-[48px] font-bold">
                      {{ resumenBot.victorias }}
                    </div>
                    <div class="-mt-2 mb-1 h-[1px] w-8 bg-white"></div>
                    <div class="text-[24px] font-semibold">
                      Victorias
                    </div>
                  </div>

                  <!-- Derrotas -->
                  <div class="flex flex-col items-center">
                    <div class="mt-4 text-[32px] font-bold">
                      {{ resumenBot.derrotas }}
                    </div>
                    <div class="mb-1 h-[1px] w-8 bg-white"></div>
                    <div class="text-[20px] font-semibold">
                      Derrotas
                    </div>
                  </div>
                </div>

                <!-- Ligas Jugadas -->
                <p class="mt-4 text-[24px] font-semibold text-white text-center">Ligas Jugadas</p>
                <div class="mt-3 flex flex-wrap items-center justify-center gap-6">
                  <ButtonLeague
                    v-for="liga in resumenBot.ligasJugadas"
                    :key="liga.id"
                    :liga="liga"
                  />
                </div>
              </div>

              <!-- Si no ha jugado en ninguna liga, mostramos un mensaje -->
              <div v-else>

                <p class="text-center text-[16px] text-[#8D8D8D] font-bold mb-6 mt-6">
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
        </template>
      </BotoneraModo>
    </div>
  </main>

  <FooterApp>
    <!-- Ícono de ayuda -->
    <img
      src="@/assets/svg/ayuda.svg"
      alt="Ayuda"
      class="h-6 w-6 cursor-pointer"
      @click="showHelpModal = true"
    />
  </FooterApp>

  <!-- Modal para la gestión de la ayuda -->
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
