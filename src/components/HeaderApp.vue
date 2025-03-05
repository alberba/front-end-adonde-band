<script setup lang="ts">
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{ isHeading1: boolean; title: string }>()
const route = useRoute()
</script>

<template>
  <header class="flex w-full flex-row items-center justify-between py-2.5">
    <h1 v-if="props.isHeading1" class="text-3xl font-semibold">{{ props.title }}</h1>
    <h2 v-else class="text-[24px] font-semibold">{{ props.title }}</h2>
    <nav class="hidden flex-row items-center gap-4 sm:flex sm:gap-11">
      <div class="flex flex-row items-center gap-3">
        <!-- Muestra de botones dinámicos según actual página-->
        <div
          v-if="route.path != '/'"
          class="overflow-hidden rounded-full bg-[#525252] px-5 py-3 leading-none font-semibold"
        >
          <RouterLink to="/" class="leading-none">Mis Ligas</RouterLink>
        </div>
        <div
          v-if="route.path != '/misBots'"
          class="overflow-hidden rounded-full bg-[#525252] px-5 py-3 leading-none font-semibold"
        >
          <RouterLink to="/" class="leading-none">Mis Bots</RouterLink>
        </div>
      </div>
      <div class="overflow-hidden rounded-full">
        <RouterLink to="/">
          <img src="@/assets/tempProfile.png" alt="" />
        </RouterLink>
      </div>
    </nav>
    <button class="overflow-hidden rounded-full sm:hidden">
      <RouterLink to="/">
        <img src="@/assets/tempProfile.png" alt="" />
      </RouterLink>
    </button>
  </header>
</template>
