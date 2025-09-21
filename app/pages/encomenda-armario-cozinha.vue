<template>
  <OrderPage
    product-name="Armário de Cozinha"
    product-description="Faça sua compra personalizada do Armário de Cozinha e receba no conforto da sua casa."
    product-image="/img/Armario de Cozinha.png"
    :product-specs="[
      { label: 'Largura', value: '0.80m' },
      { label: 'Profundidade', value: '0.39m' },
      { label: 'Altura', value: '1.70m' }
    ]"
    product-price="R$ 2.000,00"
    :price-calculation="[
      { label: 'Área (0.80m × 0.39m)', value: '0.31m²' },
      { label: '(R$ 2000.00)', value: 'R$ 2.000,00' },
      { label: 'Tipo', value: 'Armário de Cozinha' }
    ]"
    back-link="/cozinha"
  />
</template>

<script setup>
// Component is now handled by OrderPage component
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>