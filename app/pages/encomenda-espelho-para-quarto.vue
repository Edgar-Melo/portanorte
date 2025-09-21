<template>
  <OrderPage
    product-name="Espelho para Quarto"
    product-description="Faça sua compra personalizada do Espelho para Quarto e receba no conforto da sua casa."
    product-image="/img/Espelho-para-Quarto.png"
    :product-specs="[
      { label: 'Largura', value: '0.80m' },
      { label: 'Altura', value: '1.60m' },
      { label: 'Profundidade', value: '0.05m' }
    ]"
    product-price="R$ 650,00"
    :price-calculation="[
      { label: 'Largura × Altura', value: '0.80m × 1.60m' },
      { label: '(R$ 650.00)', value: 'R$ 650,00' },
      { label: 'Tipo', value: 'Espelho para Quarto' }
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