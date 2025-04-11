<script setup lang="ts">
import AddIcon from '@/assets/svg/AddIcon.vue'
import ButtonLeague from '@/components/ButtonLeague.vue'
import FooterApp from '@/components/FooterApp.vue'
import HeaderApp from '@/components/HeaderApp.vue'
import type { Liga } from '@/types'

const welcomeMessage = '¡Hola, ' + localStorage.getItem('username') + '!'

const ligas: Liga[] = [
  {
    leagueId: 1,
    state: 'pendiente',
    name: 'LaLiga EA Sports',
    urlImagen:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fifplay.com%2Fimg%2Fpublic%2Flaliga-logo.png&f=1&nofb=1&ipt=23bde28a17fadd8e4ab36893c3247fc039ddf921d0d8245eaa26b64d017074ce&ipo=images',
    user: 101,
    rounds: 38,
    matchTime: 90,
    bots: [1, 2, 3],
  },
  {
    leagueId: 2,
    state: 'finalizado',
    name: 'Bundesliga',
    urlImagen:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png',
    user: 102,
    rounds: 34,
    matchTime: 90,
    bots: [4, 5, 6],
  },
  {
    leagueId: 3,
    state: 'pendiente',
    name: 'Premier League',
    urlImagen:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png',
    user: 103,
    rounds: 38,
    matchTime: 90,
    bots: [7, 8, 9],
  },
]

const ligasEnCurso = ligas.filter((liga) => liga.state === 'pendiente')
const ligasFinalizadas = ligas.filter((liga) => liga.state === 'finalizado')
</script>

<template>
  <HeaderApp :title="welcomeMessage" :isHeading1="false" />

  <main
    class="xs:px-8 mb-10 flex w-full flex-col items-center justify-center px-3 sm:max-w-[860px] md:px-10 lg:w-[860px]"
  >
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

    <section class="mb-6 flex w-full flex-col items-center gap-4 font-semibold">
      <div class="flex w-full flex-col gap-1 text-[#9b9b9b]">
        <h2 class="text-xl">En vivo</h2>
        <div class="h-0 w-[120px] border"></div>
      </div>

      <ul class="flex flex-wrap justify-center gap-x-8 gap-y-5">
        <li v-for="liga in ligasEnCurso" :key="liga.leagueId" class="w-fit">
          <ButtonLeague :liga="liga" />
        </li>
      </ul>

      <RouterLink
        to="/createLeague"
        class="xs:w-fit xs:gap-4 xs:text-md flex w-38.5 flex-row items-center gap-2 rounded-2xl border-2 border-dashed bg-[#d3d3d3] px-5 py-3 text-sm sm:px-10 sm:py-6 sm:text-xl dark:bg-[#3b3b3b]"
      >
        <AddIcon classList="h-6 w-6 sm:h-8 sm:w-8 fill-black dark:fill-white" />
        Añadir Liga
      </RouterLink>
    </section>
    <section class="flex w-full flex-col items-center gap-4 font-semibold">
      <div class="flex w-full flex-col gap-1 text-[#9b9b9b]">
        <h2 class="text-xl">Finalizadas</h2>
        <div class="h-0 w-[120px] border"></div>
      </div>

      <ul class="flex flex-wrap justify-center gap-8">
        <li v-for="liga in ligasFinalizadas" :key="liga.leagueId" class="w-fit">
          <ButtonLeague :liga="liga" />
        </li>
      </ul>
    </section>
  </main>
  <FooterApp />
</template>
