<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import { ref } from 'vue'

// Ejemplo de datos de clasificación
const clasificacion = ref([
  { pos: 1, equipo: 'Equipo 1', PJ: 10, G: 6, E: 2, P: 2, Ptos: 20 },
  { pos: 2, equipo: 'Equipo 2', PJ: 10, G: 5, E: 3, P: 2, Ptos: 18 },
  { pos: 3, equipo: 'Equipo 3', PJ: 10, G: 7, E: 1, P: 2, Ptos: 22 },
  { pos: 4, equipo: 'Equipo 4', PJ: 10, G: 6, E: 2, P: 2, Ptos: 20 },
  { pos: 5, equipo: 'Equipo 5', PJ: 10, G: 5, E: 3, P: 2, Ptos: 18 },
  // Agrega más equipos según sea necesario
])

const PosBot = ref(3) // Posición actual del bot
</script>

<template>
  <HeaderApp title="Mis Bots" :is-heading1="false" />
  <main class="mb-15 flex max-w-[860px] flex-col items-center justify-center gap-5 lg:w-[860px]">
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

        <tr v-for="i in [PosBot - 1, PosBot, PosBot + 1]" :key="i"
         v-if="i > 0 && i <= clasificacion.length"
         class="flex w-full flex-row gap-8 border-b border-[#9B9B9B] text-xl">
          <th class="w-16">{{ clasificacion[i - 1].pos }}</th>
          <th class="flex w-75 justify-start">{{ clasificacion[i - 1].equipo }}</th>
          <th class="w-8">{{ clasificacion[i - 1].PJ }}</th>
          <th class="w-8">{{ clasificacion[i - 1].G }}</th>
          <th class="w-8">{{ clasificacion[i - 1].E }}</th>
          <th class="w-8">{{ clasificacion[i - 1].P }}</th>
          <th class="w-16">{{ clasificacion[i - 1].Ptos }}</th>
        </tr>
      </table>
    </div>
  </main>
</template>