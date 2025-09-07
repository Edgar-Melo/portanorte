<template>
  <div class="bg-gradient-to-br from-primary-800 via-primary-500 to-primary-200">
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <DoorCalculator />
  </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ProductsSection from '~/components/ProductsSection.vue'
import DoorCalculator from '~/components/DoorCalculator.vue'
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
