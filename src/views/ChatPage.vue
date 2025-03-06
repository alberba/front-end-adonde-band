<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import MessageApp from '@/components/MessageApp.vue'
import SideBar from '@/components/SideBar/SideBar.vue'
import type { Mensaje } from '@/types'
import { ref } from 'vue'

const mensajes: Mensaje[] = [
  {
    id: 1,
    texto:
      'El Calo la chupa un montón, el calo la chupa un montón, el calo la chupa un monton, el calo la chupa un monton, el calo la chupa un monton, el calo la chupa un monton, el calo la chupa un monton, el calo la chupa un monton, el calo la chupa un monton, el calo la chupa un monton, el calo la chupa un monton, el calo la chupa un monton',
    imgPath: 'tempProfile.png',
  },
  {
    id: 2,
    texto: 'Santi Chupa muchos pitos, como tu hermana, pancho',
    imgPath: 'Logo_CM.png',
  },
  {
    id: 3,
    texto:
      'Zelda zelda bro zelda zelda videojuegos videojuegos. Vite el nuevo Mario 40 4K 656FPS? Re Chevere',
    imgPath: 'tempProfile.png',
  },
  {
    id: 4,
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet  vel nunc in interdum. Donec at fringilla ipsum. Etiam dignissim orci ut  tempus dictum. Nam tellus sem, dapibus eget porttitor ultricies,  porttitor laoreet ante. Sed pellentesque est ac scelerisque pulvinar.  Aliquam convallis ligula ac scelerisque vehicula. Ut tristique odio  tellus, eget rhoncus est porttitor at.',
    imgPath: 'Logo_CM.png',
  },
  {
    id: 5,
    texto: 'Brosi, la verdad es que me has convencido, soy maricon.',
    imgPath: 'tempProfile.png',
  },
]

const sideBarHidden = ref(false)
const toggleSideBar = () => {
  sideBarHidden.value = !sideBarHidden.value
}
</script>

<template>
  <div class="flex h-full w-full flex-row">
    <SideBar @toggle-sidebar="toggleSideBar" :isHidden="sideBarHidden" />
    <div class="w-full">
      <HeaderApp :isHeading1="true" title="Carlos vs AdondeBoy">
        <button
          @click="toggleSideBar()"
          :class="sideBarHidden ? 'block' : 'hidden'"
          class="h-8 w-8 cursor-pointer object-contain"
        >
          <img src="@/assets/svg/toggleSideBarIcon.svg" alt="" />
        </button>
      </HeaderApp>
      <main class="flex w-full flex-col gap-6 px-32">
        <div v-for="mensaje in mensajes" :key="mensaje.id">
          <MessageApp :id="mensaje.id" :imgPath="mensaje.imgPath">{{ mensaje.texto }}</MessageApp>
        </div>
      </main>
    </div>
  </div>
</template>
