<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import FooterApp from '@/components/FooterApp.vue'
import { ref } from 'vue'
import type { Liga } from '@/types'

// Declaración de las diferentes Ligas dónde participan mis bots:
const ligas = ref<Liga[]>([
  {
    id: 1,
    nombre: 'Empatía', // Sería más bien el nombre del Bot
    imagePath: '',
    finalizado: false,
    clasificacion: [
      { pos: 1, equipo: 'MisterX', PJ: 2, G: 1, E: 1, P: 0, Ptos: 4 },
      { pos: 2, equipo: 'MisterY', PJ: 2, G: 1, E: 0, P: 1, Ptos: 3 },
      { pos: 3, equipo: 'Carlos', PJ: 3, G: 2, E: 1, P: 0, Ptos: 7 },
      { pos: 4, equipo: 'AdondeBoy', PJ: 3, G: 2, E: 0, P: 1, Ptos: 6 },
      { pos: 5, equipo: 'Ramiro', PJ: 4, G: 1, E: 2, P: 1, Ptos: 5 },
      // ...
    ],
  },
  {
    id: 1,
    nombre: 'Generosidad', // Sería más bien el nombre del Bot
    imagePath: '',
    finalizado: false,
    clasificacion: [
      { pos: 1, equipo: 'MisterX', PJ: 2, G: 1, E: 1, P: 0, Ptos: 4 },
      { pos: 2, equipo: 'MisterY', PJ: 2, G: 1, E: 0, P: 1, Ptos: 3 },
      { pos: 3, equipo: 'Carlos', PJ: 3, G: 2, E: 1, P: 0, Ptos: 7 },
      { pos: 4, equipo: 'AdondeBoy', PJ: 3, G: 2, E: 0, P: 1, Ptos: 6 },
      { pos: 5, equipo: 'Ramiro', PJ: 4, G: 1, E: 2, P: 1, Ptos: 5 },
      // ...
    ],
  },
])

// Posición del Bot en la clasificación
const posBot = ref(4)

// Estado para mostrar/ocultar la ventana de ayuda
const showHelpModal = ref(false)

// Función para obtener los índices que se deben mostrar para la clasificación de una liga
function getIndices(league: Liga): number[] {
  const indices = [posBot.value - 1, posBot.value, posBot.value + 1]

  // Filtramos para quedarnos solo con índices válidos
  return indices.filter((i) => i > 0 && i <= league.clasificacion.length)
}
</script>

<template>
  <HeaderApp title="Mis Bots" :is-heading1="true" />
  <main class="flex max-w-[860px] flex-col items-center justify-center gap-5 px-10 lg:w-[860px]">
    <!-- Se itera sobre cada liga -->
    <section
      v-for="liga in ligas"
      :key="liga.id"
      class="w-full rounded-md border-3 border-[#3A3A3A] bg-[#1E1E1E] p-2 shadow-md transition-shadow hover:shadow-sm hover:shadow-gray-500"
    >
      <!-- Nombre del Bot -->
      <h2 class="text-center text-[32px] font-bold text-white">{{ liga.nombre }}</h2>
      <div class="mx-auto mt-1 mb-4 h-[2px] w-1/2 bg-gray-500"></div>

      <!-- Tabla: muestra la clasificación completa -->
      <table class="mx-auto w-full max-w-[600px] border-collapse text-white">
        <thead>
          <tr class="border-b border-gray-600 text-left text-sm">
            <th class="w-32 py-2 text-center text-[24px]">Pos</th>
            <th class="w-64 py-2 text-[24px]">Equipo</th>
            <th class="w-16 py-2 text-center text-[24px]">PJ</th>
            <th class="w-16 py-2 text-center text-[24px]">G</th>
            <th class="w-16 py-2 text-center text-[24px]">E</th>
            <th class="w-16 py-2 text-center text-[24px]">P</th>
            <th class="w-32 py-2 text-center text-[24px]">Ptos</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="i in getIndices(liga)"
            :key="i"
            class="border-b border-gray-500 text-sm"
            :class="{ 'font-bold text-[#FADA5E]': i === posBot }"
          >
            <td class="py-2 text-center text-[20px]">{{ liga.clasificacion[i - 1].pos }}</td>
            <td class="py-2 text-[20px]">{{ liga.clasificacion[i - 1].equipo }}</td>
            <td class="py-2 text-center text-[20px]">{{ liga.clasificacion[i - 1].PJ }}</td>
            <td class="py-2 text-center text-[20px]">{{ liga.clasificacion[i - 1].G }}</td>
            <td class="py-2 text-center text-[20px]">{{ liga.clasificacion[i - 1].E }}</td>
            <td class="py-2 text-center text-[20px]">{{ liga.clasificacion[i - 1].P }}</td>
            <td class="py-2 text-center text-[20px]">{{ liga.clasificacion[i - 1].Ptos }}</td>
          </tr>
        </tbody>
      </table>

      <!-- "Ver liga" -->
      <div class="mt-4 flex justify-center">
        <button class="rounded-full bg-[#06f] px-6 py-2 text-[16px] font-bold text-white">
          Ver liga
        </button>
      </div>
    </section>
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
