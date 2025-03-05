<script setup lang="ts">
import ButtonLeague from '@/components/ButtonLeague.vue'
import HeaderApp from '@/components/HeaderApp.vue'
import type { Liga } from '@/types'
const ligas: Liga[] = [
  {
    id: 1,
    nombre: 'LaLiga EA Sports',
    imagePath:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fifplay.com%2Fimg%2Fpublic%2Flaliga-logo.png&f=1&nofb=1&ipt=23bde28a17fadd8e4ab36893c3247fc039ddf921d0d8245eaa26b64d017074ce&ipo=images',
    finalizado: false,
  },
  {
    id: 2,
    nombre: 'Bundesliga',
    imagePath:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png',
    finalizado: true,
  },
  {
    id: 3,
    nombre: 'Premier League',
    imagePath:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    finalizado: false,
  },
]

const ligasEnCurso = ligas.filter((liga) => !liga.finalizado)
const ligasFinalizadas = ligas.filter((liga) => liga.finalizado)
</script>

<template>
  <HeaderApp title="¡Hola, AdondeBoy!" :isHeading1="false" />

  <main class="mb-10 flex max-w-[860px] flex-col items-center justify-center px-10 lg:w-[860px]">
    <header class="m-3 flex w-full flex-col gap-2">
      <div class="flex flex-row items-center justify-between">
        <h1 class="text-4xl font-bold">Mis Ligas</h1>
        <button
          class="flex flex-row items-center gap-2 rounded-full bg-[#06f] px-3 py-2 text-white"
        >
          Ordenar
          <img src="@/assets/svg/orderIcon.svg" alt="" class="w-7" />
        </button>
      </div>

      <div class="h-0 w-full border"></div>
    </header>

    <section class="mb-6 flex w-full flex-col items-center gap-4">
      <div class="flex w-full flex-col gap-1 text-[#9b9b9b]">
        <h2 class="text-xl">En vivo</h2>
        <div class="h-0 w-[120px] border"></div>
      </div>

      <ul class="flex flex-wrap justify-center gap-x-8 gap-y-5">
        <li v-for="liga in ligasEnCurso" :key="liga.id" class="w-fit">
          <ButtonLeague :liga="liga" />
        </li>
      </ul>

      <button
        class="flex w-fit flex-row items-center gap-4 rounded-2xl border-2 border-dashed bg-[#3b3b3b] px-10 py-6 text-xl"
      >
        <img src="@/assets/svg/addIcon.svg" alt="" />Añadir Liga
      </button>
    </section>
    <section class="flex w-full flex-col items-center gap-4">
      <div class="flex w-full flex-col gap-1 text-[#9b9b9b]">
        <h2 class="text-xl">Finalizadas</h2>
        <div class="h-0 w-[120px] border"></div>
      </div>

      <ul class="flex flex-wrap justify-center gap-8">
        <li v-for="liga in ligasFinalizadas" :key="liga.id" class="w-fit">
          <ButtonLeague :liga="liga" />
        </li>
      </ul>
    </section>
  </main>
</template>
