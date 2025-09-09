<template>
  <div class="min-h-screen">
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <DoorCalculator />
    <ContactSection />
  </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ProductsSection from '~/components/ProductsSection.vue'
import DoorCalculator from '~/components/DoorCalculator.vue'
import ContactSection from '~/components/ContactSection.vue'
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
