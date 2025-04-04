<script setup lang="ts">
import { ref } from 'vue'
import HeaderApp from '@/components/HeaderApp.vue'
import FooterApp from '@/components/FooterApp.vue'
import addPhoto from '@/assets/svg/addPhoto.svg'
import { useRouter } from 'vue-router'

// Para el cambio de página
const router = useRouter()
function goToMyBots() {
  // Ajusta la ruta '/createBots' a la que hayas definido en tu router.
  router.push('/myBots')
}

// Estado para los campos del formulario
const nombre = ref('')
const cualidad = ref('')
const apiUrl = ref('')

// Estado y referencias para la imagen
const imageUrl = ref<string | null>(null)
const fileInputRef = ref<HTMLInputElement | null>(null)

// Manejador para el cambio del archivo (subida de imagen)
function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (!files?.length) return

  const file = files[0]

  // Verificar que sea un tipo MIME de imagen
  if (!file.type.startsWith('image/')) {
    alert('Por favor, selecciona un archivo de imagen válido.')
    return
  }

  // Leer y mostrar la vista previa
  const reader = new FileReader()
  reader.onload = () => {
    imageUrl.value = reader.result as string
  }
  reader.readAsDataURL(file)
}

function onImageClick() {
  fileInputRef.value?.click()
}

// Para gestionar el envío del formulario
async function onSubmitForm() {
  try {

    // Verificación de que el usuario subió una imagen
    if (!imageUrl.value) {
      alert('Por favor, selecciona una imagen antes de crear el bot.')
      return
    }

    const botData = {
      nombre: nombre.value,
      //img: imageUrl.value,
      cualidad: cualidad.value,
      // apiUrl: apiUrl.value,
    }

    // Llamada a la API - POST para crear el bot
    const response = await fetch('http://localhost:8080/bot/crearbot', {
      method: 'POST',
      // Se añade el token de autorización en el header
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(botData),
    })

    // Comprobamos si la respuesta es correcta
    if (!response.ok) {

      // Pendiente la comprobación de los distintos códigos de error

      throw new Error('Error al crear el bot. Código de estado: ' + response.status)
    }

    // Mostramos la respuesta y confirmamos
    const data = await response.json()
    console.log('Bot creado:', data)
    alert('Bot guardado con éxito')

    // Limpiamos los campos del formulario
    nombre.value = ''
    cualidad.value = ''
    apiUrl.value = ''
    imageUrl.value = null
    if (fileInputRef.value) {
      fileInputRef.value.value = ''
    }

  } catch (error) {
    console.error('Error al crear el bot:', error)
    alert('Ocurrió un error al guardar el bot')
  }
}
</script>

<template>
  <HeaderApp title="Mis Bots" :is-heading1="true" />
  <main
    class="xs:px-8 mb-10 flex w-full flex-col items-center justify-center px-3 sm:max-w-[860px] md:px-10 lg:w-[860px]">
    <header class="m-3 flex w-full flex-col gap-2">
      <div class="flex flex-row items-center justify-between">
        <h1 class="text-4xl font-bold">Nuevo Bot</h1>
      </div>
      <div class="h-0 w-full border"></div>
    </header>

    <div class="mb-4 flex w-full flex-col items-center gap-12 rounded-2xl bg-[#2a2a2a] py-5">

      <!-- Imagen del Bot -->
      <div class="relative cursor-pointer" @click="onImageClick">
        <img :src="imageUrl ? imageUrl : addPhoto" alt="Imagen del Bot"
          class="h-[150px] w-[150px] rounded-lg border-2 border-gray-500 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
        <input ref="fileInputRef" type="file" accept="image/*" class="hidden" @change="onFileChange" />
      </div>

      <!-- Formulario -->
      <form @submit.prevent="onSubmitForm"
        class="flex w-full flex-col items-center gap-8 rounded-md px-18 font-bold text-white">
        <fieldset class="mb-4 grid w-full grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">

          <!-- Nombre -->
          <label for="name" class="flex flex-col">
            Nombre
            <input id="name" v-model="nombre" type="text"
              class="w-full rounded-xl bg-[#c1c1c1] p-2.5 text-sm placeholder:text-[#878787] dark:bg-[#4e4e4e]"
              placeholder="Introduce el nombre..." required />
          </label>

          <!-- Cualidad -->
          <label for="cualidad" class="flex flex-col">
            Cualidad
            <input id="cualidad" v-model="cualidad" type="text"
              class="w-full rounded-xl bg-[#c1c1c1] p-2.5 text-sm placeholder:text-[#878787] dark:bg-[#4e4e4e]"
              placeholder="Introduce la cualidad..." required />
          </label>

          <!-- API URL -->
          <label for="api-url" class="flex flex-col sm:col-span-2">
            API URL
            <input id="api-url" v-model="apiUrl" type="text"
              class="w-full rounded-xl bg-[#c1c1c1] p-2.5 text-sm placeholder:text-[#878787] dark:bg-[#4e4e4e]"
              placeholder="Introduce la URL..." required />
          </label>
        </fieldset>


        <!-- Botón para crear un bot -->
        <button type="submit" class="rounded-full bg-[#06f] px-6 py-2 -mt-4 text-[16px] font-bold text-white">
          Crear Bot
        </button>

        <!-- Botón para volver a mis bots -->
        <button class="rounded-full bg-[#06f] px-6 py-2 -mt-3 mb-2 text-[16px] font-bold text-white"
          @click="goToMyBots">
          Volver a Mis Bots
        </button>

      </form>
    </div>
  </main>
  <FooterApp />
</template>
