<template>
  <header class="flex w-full flex-row items-center justify-between py-2.5">
    <h2 class="text-[24px]">¡Hola, AdondeBoy!</h2>
    <nav class="hidden flex-row items-center gap-4 sm:flex sm:gap-11">
      <div class="font-semibol overflow-hidden rounded-full bg-[#525252] px-5 py-3 leading-none">
        <RouterLink to="/" class="leading-none">Mis Bots</RouterLink>
      </div>
      <div class="overflow-hidden rounded-full">
        <RouterLink to="/">
          <img src="@/assets/tempProfile.png" alt="" />
        </RouterLink>
      </div>
    </nav>
    <button class="sm:hidden overflow-hidden rounded-full">
      <RouterLink to="/">
        <img src="@/assets/tempProfile.png" alt="" />
      </RouterLink>
    </button>
  </header>
</template>
