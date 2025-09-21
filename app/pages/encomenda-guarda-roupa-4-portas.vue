<template>
  <OrderPage
    product-name="Guarda-Roupa 4 Portas"
    product-description="Faça sua compra personalizada do Guarda-Roupa 4 Portas e receba no conforto da sua casa."
    product-image="/img/Guarda-Roupa-4-Portas.png"
    :product-specs="[
      { label: 'Largura', value: '2.00m' },
      { label: 'Profundidade', value: '0.60m' },
      { label: 'Altura', value: '2.20m' }
    ]"
    product-price="R$ 3.500,00"
    :price-calculation="[
      { label: 'Largura × Profundidade', value: '2.00m × 0.60m' },
      { label: '(R$ 3500.00)', value: 'R$ 3.500,00' },
      { label: 'Tipo', value: 'Guarda-Roupa 4 Portas' }
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