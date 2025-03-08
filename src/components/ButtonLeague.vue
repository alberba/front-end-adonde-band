<script setup lang="ts">
import type { Liga } from '@/types'
import { computed } from 'vue'
const props = defineProps<{ liga: Liga }>()
const liga = props.liga

const imageClass = computed(() => {
  const img = new Image()
  img.src = props.liga.imagePath
  return img.width > img.height ? 'w-full' : 'h-full'
})
</script>

<template>
  <div class="w-fit">
    <div
      class="flex h-[145px] w-[250px] items-center justify-center rounded-t-xl bg-white px-[40px] py-[12px] border-t-2 border-l-2 border-r-2 border-[#d3d3d3]"
    >
      <img :src="liga.imagePath" :alt="liga.nombre" :class="imageClass" class="object-contain" />
    </div>
    <h3
      class="flex w-full justify-center rounded-b-xl bg-[#d3d3d3] px-2 py-3 text-xl font-semibold dark:bg-[#525252]"
    >
      {{ liga.nombre }}
    </h3>
  </div>
</template>
