<script setup lang="ts">
import ToggleSideBarIcon from '@/assets/svg/ToggleSideBarIcon.vue'
import FooterApp from '@/components/FooterApp.vue'
import HeaderApp from '@/components/HeaderApp.vue'
import MessageApp from '@/components/MessageApp.vue'
import SideBar from '@/components/SideBar/SideBar.vue'
import type { Mensaje } from '@/types'
import { ref } from 'vue'

const mensajes: Mensaje[] = [
  {
    id: 1,
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at euismod neque, a ullamcorper metus. Integer cursus ultricies tortor sed auctor. Proin ultrices tortor tortor, et posuere urna sagittis non. Donec nibh tellus, aliquet vel elit a, malesuada aliquet nunc. Sed pulvinar, ligula sit amet vulputate venenatis, nulla lectus ultrices justo, pharetra vestibulum lectus magna non turpis. Duis at justo nec ipsum bibendum aliquet at id quam. Vivamus auctor enim tellus, id luctus neque ornare a. Curabitur placerat augue ut cursus luctus. Curabitur venenatis ex non porttitor sollicitudin. Nullam in efficitur erat. Maecenas arcu felis, lacinia varius enim sit amet, suscipit faucibus magna. Proin et tempor felis. Duis vulputate ornare tortor, ut ultrices eros cursus sed. Aenean nec justo eros. Nam interdum nisi sed nisl iaculis dapibus. ',
    imgPath: 'tempProfile.png',
  },
  {
    id: 2,
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgPath: 'Logo_CM.png',
  },
  {
    id: 3,
    texto:
      'Pellentesque sed sem scelerisque, lacinia arcu ac, placerat velit. Nam pellentesque mattis metus eu convallis. Nulla facilisi. Nam in rutrum turpis. In hac habitasse platea dictumst.',
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
    texto: 'Brosi, la verdad es que me has convencido.',
    imgPath: 'tempProfile.png',
  },
]

const sideBarHidden = ref(false)
const toggleSideBar = () => {
  sideBarHidden.value = !sideBarHidden.value
}
</script>

<template>
  <div class="flex min-h-screen w-full flex-row">
    <SideBar @toggle-sidebar="toggleSideBar" :isHidden="sideBarHidden" />
    <div class="w-full flex-col sm:flex" :class="sideBarHidden ? 'flex' : 'hidden'">
      <HeaderApp :isHeading1="true" title="Soberbia vs Empatía">
        <button
          @click="toggleSideBar()"
          :class="sideBarHidden ? 'block' : 'hidden'"
          class="h-8 w-8 cursor-pointer object-contain"
        >
          <ToggleSideBarIcon classList="h-8 w-8" />
        </button>
      </HeaderApp>
      <main class="md:px-8 mx-auto mb-12 flex max-w-5xl flex-col justify-center gap-3 sm:gap-6 px-2">
        <div v-for="mensaje in mensajes" :key="mensaje.id">
          <MessageApp :id="mensaje.id" :imgPath="mensaje.imgPath">{{ mensaje.texto }}</MessageApp>
        </div>
      </main>
      <FooterApp :hideDarkLight="true" />
    </div>
  </div>
</template>
