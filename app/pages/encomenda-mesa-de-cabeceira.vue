<template>
  <OrderPage
    product-name="Cama-Cabeceira-Simples"
    product-description="Faça sua compra personalizada da Cama-Cabeceira-Simples e receba no conforto da sua casa."
    product-image="/img/Cama-Cabeceira-Simples.png"
    :product-specs="[
      { label: 'Comprimento', value: '1,88m' },
      { label: 'Largura', value: '1,38m' },
      { label: 'Altura', value: '0,43cm' }
    ]"
    product-price="R$ 1.500,00"
    :price-calculation="[
      { label: 'Largura × Comprimento', value: '1,38m × 1,88m' },
      { label: '(R$ 1.500,00)', value: 'R$ 1.500,00' },
      { label: 'Tipo', value: 'Cama-Cabeceira-Simples' }
    ]"
    product-observation="Obs.: Cama-Cabeceira-Simples sem o Colchão"
    back-link="/quartos"
  />
</template>

<script setup>
import OrderPage from '~/components/OrderPage.vue'
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>