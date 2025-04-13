<script setup lang="ts">
import ToggleSideBarIcon from '@/assets/svg/ToggleSideBarIcon.vue'
import FooterApp from '@/components/FooterApp.vue'
import HeaderApp from '@/components/HeaderApp.vue'
import MessageApp from '@/components/MessageApp.vue'
import SideBar from '@/components/SideBar/SideBar.vue'
import type { Message } from '@/types'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { onMounted, ref } from 'vue'
//import { useRoute } from 'vue-router'

// TODO: Reemplazar con el API
const mensajes: Message[] = [
  {
    botId: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at euismod neque, a ullamcorper metus. Integer cursus ultricies tortor sed auctor. Proin ultrices tortor tortor, et posuere urna sagittis non. Donec nibh tellus, aliquet vel elit a, malesuada aliquet nunc. Sed pulvinar, ligula sit amet vulputate venenatis, nulla lectus ultrices justo, pharetra vestibulum lectus magna non turpis. Duis at justo nec ipsum bibendum aliquet at id quam. Vivamus auctor enim tellus, id luctus neque ornare a. Curabitur placerat augue ut cursus luctus. Curabitur venenatis ex non porttitor sollicitudin. Nullam in efficitur erat. Maecenas arcu felis, lacinia varius enim sit amet, suscipit faucibus magna. Proin et tempor felis. Duis vulputate ornare tortor, ut ultrices eros cursus sed. Aenean nec justo eros. Nam interdum nisi sed nisl iaculis dapibus. ',
    time: 1744100393,
  },
  {
    botId: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: 1744100394,
  },
  {
    botId: 1,
    text: 'Pellentesque sed sem scelerisque, lacinia arcu ac, placerat velit. Nam pellentesque mattis metus eu convallis. Nulla facilisi. Nam in rutrum turpis. In hac habitasse platea dictumst.',
    time: 1744100395,
  },
  {
    botId: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet  vel nunc in interdum. Donec at fringilla ipsum. Etiam dignissim orci ut  tempus dictum. Nam tellus sem, dapibus eget porttitor ultricies,  porttitor laoreet ante. Sed pellentesque est ac scelerisque pulvinar.  Aliquam convallis ligula ac scelerisque vehicula. Ut tristique odio  tellus, eget rhoncus est porttitor at.',
    time: 1744100396,
  },
  {
    botId: 1,
    text: 'Brosi, la verdad es que me has convencido.',
    time: 1744100397,
  },
]

const imgPaths = ['Logo_CM.png', 'tempProfile.png']

// TODO: Descomentar cuando se tenga la API de mensajes
// const route = useRoute()
// const matchId = route.params.matchId as string

// const mensajes = ref<Mensaje[]>([])
// const imgPaths = ref<string[]>([])

// const loadMessages = async () => {
//   const response = await fetch(`http://localhost:8080/api/v0/match/${matchId}/message`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   })

//   if (!response.ok) {
//     alert('Error al cargar los mensajes. Por favor, inténtalo de nuevo.')
//   } else {
//     const data = await response.json()
//     mensajes.value = data
//     imgPaths.value = await obtenerImgsPath(data)
//   }
// }

// onMounted(() => {
//   loadMessages()
// })

// const obtenerImgsPath = async (mensajes: Mensaje[]) => {
//   const ids = new Set(mensajes.map((mensaje) => mensaje.botId))
//   const imgPaths = await Promise.all(
//     Array.from(ids).map(async (id) => {
//       const response = await fetch(`http://localhost:8080/api/v0/bot/${id}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       })
//       if (response.ok) {
//         const data = await response.json()
//         return data.imgPath // Assuming the API returns an `imgPath` field
//       } else {
//         console.error(`Failed to fetch image for botId ${id}`)
//         return null
//       }
//     })
//   )
//   console.log('Image paths:', imgPaths.filter(Boolean)) // Log valid image paths
//   return imgPaths.filter(Boolean) // Return valid image paths
// }

const sideBarHidden = ref(false)
const toggleSideBar = () => {
  sideBarHidden.value = !sideBarHidden.value
}
</script>

<template>
  <div class="flex h-screen w-full flex-row">
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
      <main class="mr-1 mb-6 overflow-y-auto">
        <div
          class="mx-auto mb-12 flex max-w-5xl flex-col justify-center gap-3 px-2 sm:gap-6 md:px-8"
        >
          <div v-for="(mensaje, index) in mensajes" :key="index">
            <MessageApp :id="index" :imgPath="imgPaths">{{ mensaje.text }}</MessageApp>
          </div>
        </div>
      </main>
      <FooterApp :hideDarkLight="true" />
    </div>
  </div>
</template>
