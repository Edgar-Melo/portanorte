<template>
  <OrderPage
    product-name="Mesa Lateral"
    product-description="Faça sua compra personalizada da Mesa Lateral e receba no conforto da sua casa."
    product-image="/img/default-product.png"
    :product-specs="[
      { label: 'Largura', value: '0.50m' },
      { label: 'Profundidade', value: '0.50m' },
      { label: 'Altura', value: '0.55m' }
    ]"
    product-price="R$ 400,00"
    :price-calculation="[
      { label: 'Área (0.55m × 0.50m)', value: '0.28m²' },
      { label: '(R$ 400.00)', value: 'R$ 400.00' },
      { label: 'Tipo', value: 'Mesa Lateral Compacta' }
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