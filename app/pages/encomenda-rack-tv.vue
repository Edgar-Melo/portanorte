<template>
  <OrderPage
    product-name="Rack para TV"
    product-description="Faça sua compra personalizada do Rack para TV e receba no conforto da sua casa."
    product-image="/img/default-product.png"
    :product-specs="[
      { label: 'Largura', value: '1.60m' },
      { label: 'Profundidade', value: '0.40m' },
      { label: 'Altura', value: '0.60m' }
    ]"
    product-price="R$ 1.500,00"
    :price-calculation="[
      { label: 'Área (0.60m × 1.60m)', value: '0.96m²' },
      { label: '(R$ 1500.00)', value: 'R$ 1500.00' },
      { label: 'Tipo', value: 'Rack para TV Moderno' }
    ]"
    back-link="/sala"
  />
</template>

<script setup>
// Component is now handled by OrderPage component
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>