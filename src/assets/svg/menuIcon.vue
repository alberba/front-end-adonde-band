<script setup lang="ts">
const props = defineProps<{ classList: string }>()
</script>
<template>
  <svg :class="props.classList" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 12h18M3 6h18M3 18h18"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
