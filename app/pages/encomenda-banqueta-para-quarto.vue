<template>
  <OrderPage
    product-name="Banqueta para Quarto"
    product-description="Faça sua compra personalizada da Banqueta para Quarto e receba no conforto da sua casa."
    product-image="/img/Banqueta-para-Quarto.png"
    :product-specs="[
      { label: 'Largura', value: '0.45m' },
      { label: 'Profundidade', value: '0.35m' },
      { label: 'Altura', value: '0.50m' }
    ]"
    product-price="R$ 380,00"
    :price-calculation="[
      { label: 'Largura × Profundidade', value: '0.45m × 0.35m' },
      { label: '(R$ 380.00)', value: 'R$ 380,00' },
      { label: 'Tipo', value: 'Banqueta para Quarto' }
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