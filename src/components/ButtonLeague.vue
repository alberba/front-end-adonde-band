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
      class="flex h-[145px] w-[250px] items-center justify-center rounded-t-xl bg-white px-[40px] py-[12px]"
    >
      <img :src="liga.imagePath" :alt="liga.nombre" :class="imageClass" class="object-contain" />
    </div>
    <h3 class="flex justify-center w-full rounded-b-xl bg-[#525252] py-3 px-2 text-xl">{{ liga.nombre }}</h3>
  </div>
</template>
