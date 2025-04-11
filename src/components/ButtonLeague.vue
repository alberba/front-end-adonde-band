<script setup lang="ts">
import type { Liga } from '@/types'
import { computed } from 'vue'
const props = defineProps<{ liga: Liga }>()
const liga = props.liga

const imageClass = computed(() => {
  const img = new Image()
  img.src = props.liga.urlImagen
  return img.width > img.height ? 'w-full' : 'h-full'
})
</script>

<template>
  <RouterLink to="/myLeague">
    <div
      class="flex h-[90px] w-38.5 xs:w-48 xs:h-28 sm:h-[145px] sm:w-[250px] items-center justify-center rounded-t-xl bg-white px-[40px] py-[12px] border-t-2 border-l-2 border-r-2 border-[#d3d3d3]"
    >
      <img :src="liga.urlImagen" :alt="liga.name" :class="imageClass" class="object-contain" />
    </div>
    <h3
      class="flex w-full justify-center rounded-b-xl bg-[#d3d3d3] px-2 py-3 text-sm sm:text-xl font-semibold dark:bg-[#525252]"
    >
      {{ liga.name }}
    </h3>
  </RouterLink>
</template>
