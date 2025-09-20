<template>
  <OrderPage
    product-name="Mesa Angelin Rajado"
    product-description="Faça sua compra personalizada da Mesa Angelin Rajado e receba no conforto da sua casa."
    product-image="/img/Mesa-Angelin-Rajado.png"
    :product-specs="[
      { label: 'Comprimento', value: '1.60m' },
      { label: 'Largura', value: '0.90m' },
      { label: 'Altura', value: '0.82cm' },
      { label: 'Poltronas', value: '6-unid.' }
    ]"
    product-price="R$ 3.100,00"
    :price-calculation="[
      { label: 'Área (1.60m × 0.90m)', value: '1.44m²' },
      { label: '(R$ 3100.00)', value: 'R$ 3.100,00' },
      { label: 'Tipo', value: 'Mesa Angelin Rajado' }
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