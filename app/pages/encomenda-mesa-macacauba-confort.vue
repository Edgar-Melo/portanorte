<template>
  <OrderPage
    product-name="Mesa Macacauba Confort"
    product-description="Faça sua compra personalizada da Mesa Macacauba Confort e receba no conforto da sua casa."
    product-image="/img/Mesa-Macacauba-Confort.png"
    :product-specs="[
      { label: 'Comprimento', value: '1.63m' },
      { label: 'Largura', value: '0,76cm' },
      { label: 'Altura', value: '0,74cm' },
      { label: 'Poltronas-Almofadadas', value: '6-unid.' }
    ]"
    product-price="R$ 3.200,00"
    :price-calculation="[
      { label: 'Área (1.63m × 0.76m)', value: '1.24m²' },
      { label: '(R$ 3200.00)', value: 'R$ 3.200,00' },
      { label: 'Tipo', value: 'Mesa Macacauba Confort' }
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