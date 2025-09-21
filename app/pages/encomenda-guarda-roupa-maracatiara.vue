<template>
  <OrderPage
    product-name="Guarda-Roupa-Maracatiara"
    product-description="Faça sua compra personalizada do Guarda-Roupa Maracatiara e receba no conforto da sua casa."
    product-image="/img/Guarda-Roupa-Maracatiara.png"
    :product-specs="[
      { label: 'Largura', value: '2,10m' },
      { label: 'Altura', value: '2,10m' },
      { label: 'Profundidade', value: '0,50cm' }
    ]"
    product-price="R$ 7.000,00"
    :price-calculation="[
      { label: 'Largura × Altura', value: '2.10m × 2.10m' },
      { label: '(R$ 7000.00)', value: 'R$ 7.000,00' },
      { label: 'Tipo', value: 'Guarda-Roupa Maracatiara' }
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