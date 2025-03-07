<script setup lang="ts">
import { ref } from 'vue'
const darkMode = ref(document.documentElement.classList.contains('dark'))

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark')
  darkMode.value = !darkMode.value
}
</script>

<template>
  <RouterView />
  <button class="absolute bottom-0 left-0 mb-4 ml-6 flex h-9 w-9 items-center justify-center cursor-pointer" @click="toggleDarkMode()">
    <img class="hidden dark:block" src="@/assets/svg/lightIcon.svg" alt="Modo claro" />
    <img class="dark:hidden" src="@/assets/svg/darkIcon.svg" alt="Modo oscuro" />
  </button>
</template>
