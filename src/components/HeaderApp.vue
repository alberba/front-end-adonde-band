<template>
  <header class="mx-12 my-2.5 flex flex-row items-center justify-between">
    <h2 class="text-[24px]">¡Hola, AdondeBoy!</h2>
    <nav class="flex flex-row items-center gap-11">
      <div class="font-semibol overflow-hidden rounded-full bg-[#525252] px-5 py-3 leading-none">
        <RouterLink to="/" class="leading-none">Mis Bots</RouterLink>
      </div>
      <div class="overflow-hidden rounded-full">
        <RouterLink to="/">
          <img src="@/assets/tempProfile.png" alt="" />
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
