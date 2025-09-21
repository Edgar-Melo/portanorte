<template>
  <OrderPage
    product-name="Cômoda-Sapateira"
    product-description="Faça sua compra personalizada da Cômoda Sapateira e receba no conforto da sua casa."
    product-image="/img/Comoda-Sapateira.png"
    :product-specs="[
      { label: 'Largura', value: '1,04m' },
      { label: 'Altura', value: '0,88cm' },
      { label: 'Profundidade', value: '0,47cm' }
    ]"
    product-price="R$ 1.700,00"
    :price-calculation="[
      { label: 'Largura × Profundidade', value: '1.04m × 0.47m' },
      { label: '(R$ 1700.00)', value: 'R$ 1.700,00' },
      { label: 'Tipo', value: 'Cômoda Sapateira' }
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