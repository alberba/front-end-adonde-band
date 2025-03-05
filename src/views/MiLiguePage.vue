<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import { ref } from 'vue'

// Ejemplo de datos de clasificación
const clasificacion = ref([
  { equipo: 'Equipo 1', PJ: 10, G: 6, E: 2, P: 2, Ptos: 20 },
  { equipo: 'Equipo 2', PJ: 10, G: 5, E: 3, P: 2, Ptos: 18 },
  // Agrega más equipos según sea necesario
])
</script>

<template>
<HeaderApp />
<main class="flex max-w-[860px] flex-col items-center justify-center lg:w-[860px] mb-15 gap-5">
    <!-- Contenedor pequeño que incluye solo el header -->
    <header class="m-3 flex w-full flex-col gap-3">
      <div class="flex flex-row items-center justify-between">
        <h1 class="text-4xl font-bold">{{ ligaNombre }}</h1>
        <button
          class="flex flex-row items-center gap-2 rounded-full bg-[#06f] px-3 py-2 text-white"
        >
          Estadísticas
          <img src="@/assets/StatsIcon.svg" alt="" class="w-7" />
        </button>
      </div>
      <div class="h-0 w-full border border-[#BBBBBB] mt-4"></div>
    </header>

    <!-- Contenedor que contiene tanto el container para las jornadas como el container de encuentros -->
    <div class="w-full flex flex-col gap-5">
      <!-- Container para la jornada -->
      <div class="w-full bg-[#BBBBBB] p-4">
        <div class="flex items-center justify-center">
          <button>
            <img src="@/assets/izquierdaicon.svg" alt="Izquierda" class="w-6 h-6 mr-3" />
          </button>
          <img src="@/assets/calendaricon.svg" alt="calendar" class="w-7 mr-2" />
          <div class="text-2xl font-bold text-[#242424]">JORNADA {{ jornadaNum }}</div>
          <button>
            <img src="@/assets/derechaicon.svg" alt="Derecha" class="w-6 h-6 ml-2" />
          </button>
        </div>
      </div>

      <!-- Container de los encuentros -->
      <div class="w-full bg-[#DDDDDD] p-4 -mt-5">
        <!-- Fila de encuentros -->
        <div v-for="(encuentro, index) in encuentros" :key="index" class="flex justify-center items-center py-2 border-b border-[#BBBBBB]">
          <div class="text-lg">{{ encuentro.equipo1 }} vs {{ encuentro.equipo2 }}</div>
        </div>
      </div>
    </div>

    <!-- Contenedor para la clasificación -->
    <div class="w-full flex flex-col gap-5">
      <!-- Header de la clasificación -->
      <header class="m-3 flex w-full flex-col gap-3">
        <div class="flex flex-row items-center justify-between">
          <h1 class="text-2xl font-bold text-[#9B9B9B]">Clasificación</h1>
        </div>
        <div class="h-0 w-40 border border-[#9B9B9B] mt-0"></div>
      </header>

      <!-- Cuadro de clasificación -->
      <div class="w-full bg-transparent p-4">
        <div class="grid grid-cols-6  gap-4 text-[#FFFFFF]">
          <div class="font-bold text-x5">Equipo</div>
          <div class="font-bold text-x2">PJ</div>
          <div class="font-bold text-x2">G</div>
          <div class="font-bold text-x2">E</div>
          <div class="font-bold text-x2">P</div>
          <div class="font-bold text-x2">Ptos</div>
          
          <div v-for="(equipo, index) in clasificacion" :key="index" class="contents w-full border-b border-[#242424]">
            <div>{{ equipo.equipo }}</div>
            <div>{{ equipo.PJ }}</div>
            <div>{{ equipo.G }}</div>
            <div>{{ equipo.E }}</div>
            <div>{{ equipo.P }}</div>
            <div>{{ equipo.Ptos }}</div>
            
          </div>
        </div>
    </div>
  </div>
</main>
</template>