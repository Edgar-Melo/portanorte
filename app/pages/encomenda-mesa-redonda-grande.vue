<template>
  <OrderPage
    product-name="Mesa Redonda Grande"
    product-description="Faça sua compra personalizada da Mesa Redonda Grande e receba no conforto da sua casa."
    product-image="/img/Mesa-Redonda-Grande.png"
    :product-specs="[
      { label: 'Comprimento', value: '1.50m' },
      { label: 'Largura', value: '1,50cm' },
      { label: 'Altura', value: '0,76cm' },
      { label: 'Poltronas-Almofadadas', value: '6-unid.' }
    ]"
    product-price="R$ 7.000,00"
    :price-calculation="[
      { label: 'Área (1.50m × 1.50m)', value: '2.25m²' },
      { label: '(R$ 7000.00)', value: 'R$ 7.000,00' },
      { label: 'Tipo', value: 'Mesa Redonda Grande' }
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