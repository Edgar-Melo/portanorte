<template>
  <OrderPage
    product-name="Cômoda 6 Gavetas"
    product-description="Faça sua compra personalizada da Cômoda 6 Gavetas e receba no conforto da sua casa."
    product-image="/img/Comoda-Média.png"
    :product-specs="[
      { label: 'Largura', value: '0,97cm' },
      { label: 'Profundidade', value: '0,50cm' },
      { label: 'Altura', value: '0,97cm' }
    ]"
    product-price="R$ 1.700,00"
    :price-calculation="[
      { label: 'Área (0.97m × 0.50m)', value: '0.485m²' },
      { label: '(R$ 1700.00)', value: 'R$ 1.700,00' },
      { label: 'Tipo', value: 'Cômoda 6 Gavetas' }
    ]"
    back-link="/quartos"
  />
</template>

<script setup>
import OrderPage from '~/components/OrderPage.vue'
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>