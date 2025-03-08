<script setup lang="ts">
import type { Combate } from '@/types'
import SectionSideBar from './SectionSideBar.vue'
import ToggleSideBarIcon from '@/assets/svg/ToggleSideBarIcon.vue'
import { ref } from 'vue'

const combates: Combate[] = [
  {
    id: 1,
    fighter1: 'Soberbia',
    fighter2: 'Empatía',
    finished: true,
  },
  {
    id: 2,
    fighter1: 'Educación',
    fighter2: 'Simpatía',
    finished: true,
  },
  {
    id: 3,
    fighter1: 'Soberbia',
    fighter2: 'Empatía',
    finished: false,
  },
  {
    id: 4,
    fighter1: 'Educación',
    fighter2: 'Simpatía',
    finished: false,
  },
  {
    id: 5,
    fighter1: 'Soberbia',
    fighter2: 'Empatía',
    finished: false,
  },
  {
    id: 6,
    fighter1: 'Educación',
    fighter2: 'Simpatía',
    finished: false,
  },
  {
    id: 7,
    fighter1: 'Soberbia',
    fighter2: 'Empatía',
    finished: false,
  },
  {
    id: 8,
    fighter1: 'Educación',
    fighter2: 'Simpatía',
    finished: false,
  },
  {
    id: 9,
    fighter1: 'Soberbia',
    fighter2: 'Empatía',
    finished: false,
  },
  {
    id: 10,
    fighter1: 'Educación',
    fighter2: 'Simpatía',
    finished: false,
  },
  {
    id: 11,
    fighter1: 'Soberbia',
    fighter2: 'Empatía',
    finished: false,
  },
]

const props = defineProps<{ isHidden: boolean }>()

const darkMode = ref(document.documentElement.classList.contains('dark'))

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark')
  darkMode.value = !darkMode.value
}
</script>

<template>
  <aside
    class="min-h-screen w-[20rem] z-10 flex-col gap-16 bg-[#eee] px-6 py-4 transition-[margin] duration-300 ease-in-out dark:bg-[#3b3b3b]"
    :class="props.isHidden ? '-ml-[20rem]' : 'ml-0'"
  >
    <header class="flex flex-row items-center justify-between">
      <div class="font-bold">
        <h3 class="text-xs text-[#a8a8a8]">LaLiga EA Sports</h3>
        <h2 class="text-2xl">Jornada 24</h2>
      </div>
      <button @click="$emit('toggle-sidebar')" class="h-8 w-8 cursor-pointer object-contain">
        <ToggleSideBarIcon classList="w-8 h-8" />
      </button>
    </header>
    <div class="flex h-9/10 flex-col gap-2.5">
      <SectionSideBar
        title="Finalizado"
        :combates="combates.filter((combate) => combate.finished)"
      />
      <SectionSideBar
        title="En Progreso"
        :combates="combates.filter((combate) => !combate.finished)"
      />
    </div>
    <button class="w-9 h-9 flex justify-center items-center" @click="toggleDarkMode()">
      <img class="hidden dark:block" src="@/assets/svg/lightIcon.svg" alt="Modo claro" />
      <img class="dark:hidden" src="@/assets/svg/darkIcon.svg" alt="Modo oscuro" />
    </button>
  </aside>
</template>
