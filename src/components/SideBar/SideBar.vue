<script setup lang="ts">
import type { Combate } from '@/types'
import SectionSideBar from './SectionSideBar.vue'

const combates: Combate[] = [
  {
    id: 1,
    fighter1: 'Carlos',
    fighter2: 'AdondeBoy',
    finished: true,
  },
  {
    id: 2,
    fighter1: 'Eduardo',
    fighter2: 'Ramiro',
    finished: true,
  },
  {
    id: 3,
    fighter1: 'Carlos',
    fighter2: 'AdondeBoy',
    finished: false,
  },
  {
    id: 4,
    fighter1: 'Eduardo',
    fighter2: 'Ramiro',
    finished: false,
  },
  {
    id: 5,
    fighter1: 'Carlos',
    fighter2: 'AdondeBoy',
    finished: false,
  },
  {
    id: 6,
    fighter1: 'Eduardo',
    fighter2: 'Ramiro',
    finished: false,
  },
  {
    id: 7,
    fighter1: 'Carlos',
    fighter2: 'AdondeBoy',
    finished: false,
  },
  {
    id: 8,
    fighter1: 'Eduardo',
    fighter2: 'Ramiro',
    finished: false,
  },
  {
    id: 9,
    fighter1: 'Carlos',
    fighter2: 'AdondeBoy',
    finished: false,
  },
  {
    id: 10,
    fighter1: 'Eduardo',
    fighter2: 'Ramiro',
    finished: false,
  },
  {
    id: 11,
    fighter1: 'Carlos',
    fighter2: 'AdondeBoy',
    finished: false,
  },
]
</script>

<template>
  <aside class="flex h-screen w-[20rem] flex-col gap-16 bg-[#3b3b3b] px-6 py-4">
    <header class="flex flex-row items-center justify-between">
      <div class="font-bold">
        <h3 class="text-xs text-[#a8a8a8]">LaLiga EA Sports</h3>
        <h2 class="text-2xl">Jornada 24</h2>
      </div>
      <button class="h-8 w-8 cursor-pointer object-contain">
        <img src="@/assets/svg/toggleSideBarIcon.svg" alt="" />
      </button>
    </header>
    <div class="flex flex-col gap-2.5">
      <SectionSideBar
        title="Finalizado"
        :combates="combates.filter((combate) => combate.finished)"
      />
      <SectionSideBar title="En Vivo" :combates="combates.filter((combate) => !combate.finished)" />
    </div>
  </aside>
</template>
