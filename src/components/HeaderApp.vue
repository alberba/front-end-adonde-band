<script setup lang="ts">
import { useRoute } from 'vue-router'

const props = defineProps<{ isHeading1: boolean; title: string }>()
const route = useRoute()

const isChatPage = route.path === '/chat'
</script>

<template>
  <header class="flex w-full flex-row items-center justify-between px-8 py-4 md:px-10">
    <div class="flex flex-row gap-2 md:gap-8">
      <slot></slot>
      <h1 v-if="props.isHeading1" class="text-xl font-semibold md:text-3xl">{{ props.title }}</h1>
      <h2 v-else class="text-2xl font-semibold">{{ props.title }}</h2>
    </div>
    <nav class="flex flex-row items-center gap-4" :class="isChatPage ? 'lg:gap-11' : 'sm:gap-11'">
      <div
        class="hidden flex-row items-center gap-3"
        :class="isChatPage ? 'lg:flex' : 'sm:flex'"
      >
        <!-- Muestra de botones dinámicos según actual página-->
        <RouterLink
          to="/"
          v-if="route.path != '/'"
          class="overflow-hidden rounded-full bg-[#525252] px-5 py-3 leading-none font-semibold"
        >
          Mis Ligas
        </RouterLink>
        <RouterLink
          to="/myBots"
          v-if="route.path != '/myBots'"
          class="overflow-hidden rounded-full bg-[#525252] px-5 py-3 leading-none font-semibold"
        >
          Mis Bots
        </RouterLink>
      </div>
      <div class="w-10 overflow-hidden rounded-full object-contain md:w-[54px]">
        <RouterLink to="/profile">
          <img src="@/assets/tempProfile.png" alt="" />
        </RouterLink>
      </div>
      <button class="block w-8" :class="isChatPage ? 'lg:hidden' : 'sm:hidden'">
        <img src="@/assets/svg/menuIcon.svg" alt="" srcset="" />
      </button>
    </nav>
  </header>
</template>
