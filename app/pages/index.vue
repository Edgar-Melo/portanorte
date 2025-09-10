<template>
  <div class="min-h-screen">
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <ContactSection />

    <!-- Botão Flutuante do WhatsApp -->
    <WhatsAppButton />
  </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ProductsSection from '~/components/ProductsSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import WhatsAppButton from '~/components/WhatsAppButton.vue'
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
