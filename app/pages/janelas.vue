<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <WindowPageTitle />

      <WindowProductGrid />

      <WindowCallToAction />
    </div>
  </section>
</template>

<script setup>
import WindowPageTitle from '~/components/WindowPageTitle.vue'
import WindowProductGrid from '~/components/WindowProductGrid.vue'
import WindowCallToAction from '~/components/WindowCallToAction.vue'
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
