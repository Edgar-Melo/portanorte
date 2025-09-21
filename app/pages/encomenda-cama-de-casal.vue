<template>
  <OrderPage
    product-name="Cama de Casal"
    product-description="Faça sua compra personalizada da Cama de Casal e receba no conforto da sua casa."
    product-image="/img/Cama-de-Casal.png"
    :product-specs="[
      { label: 'Largura', value: '1.60m' },
      { label: 'Comprimento', value: '2.00m' },
      { label: 'Altura', value: '0.30m' }
    ]"
    product-price="R$ 2.200,00"
    :price-calculation="[
      { label: 'Largura × Comprimento', value: '1.60m × 2.00m' },
      { label: '(R$ 2200.00)', value: 'R$ 2.200,00' },
      { label: 'Tipo', value: 'Cama de Casal' }
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