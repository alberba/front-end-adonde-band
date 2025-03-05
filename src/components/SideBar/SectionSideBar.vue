<script setup lang="ts">
import ButtonChat from './ButtonChat.vue'
import type { Combate } from '@/types'

const props = defineProps<{ title: string; combates?: Combate[] }>()
</script>

<template>
  <section class="flex flex-col items-start gap-2">
    <div>
      <h4>{{ props.title }}</h4>
      <div class="border-b"></div>
    </div>
    <ButtonChat v-for="combate in props.combates" :key="combate.id">{{ combate.fighter1 }} vs {{ combate.fighter2 }}</ButtonChat>
  </section>
</template>
