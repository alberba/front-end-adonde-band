<script lang="ts" setup>
const props = defineProps<{ id: number; imgPath: string }>()

const isTextLeft = props.id % 2 === 0
const bgColor = !isTextLeft ? 'bg-[#06f]' : 'bg-[#606060]'
const radiusClass = ['rounded-3xl', !isTextLeft ? 'rounded-br-none' : 'rounded-bl-none']

function getAssetUrl(fileName: string) {
  return new URL(`../assets/${fileName}`, import.meta.url).href
}
</script>

<template>
  <div class="flex items-end gap-2" :class="isTextLeft ? 'justify-start' : 'justify-end'">
    <img
      v-if="isTextLeft"
      :src="getAssetUrl(props.imgPath)"
      alt="Profile"
      class="w-8 rounded-full object-contain"
    />
    <div :class="[bgColor, radiusClass]" class="max-w-xl p-3.5"><slot class=""></slot></div>
    <img
      v-if="!isTextLeft"
      :src="getAssetUrl(props.imgPath)"
      alt="Profile"
      class="w-8 rounded-full object-contain"
    />
  </div>
</template>
