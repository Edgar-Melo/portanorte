<template>
  <OrderPage
    product-name="Poltrona"
    product-description="Faça sua compra personalizada da Poltrona e receba no conforto da sua casa."
    product-image="/img/default-product.png"
    :product-specs="[
      { label: 'Largura', value: '0.80m' },
      { label: 'Profundidade', value: '0.85m' },
      { label: 'Altura', value: '0.90m' }
    ]"
    product-price="R$ 1.200,00"
    :price-calculation="[
      { label: 'Área (0.90m × 0.80m)', value: '0.72m²' },
      { label: '(R$ 1200.00)', value: 'R$ 1200.00' },
      { label: 'Tipo', value: 'Poltrona Confortável' }
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