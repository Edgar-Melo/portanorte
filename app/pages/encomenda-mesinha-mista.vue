<template>
  <OrderPage
    product-name="Mesinha-Mista"
    product-description="Faça sua compra personalizada da Mesinha-Mista e receba no conforto da sua casa."
    product-image="/img/Mesinha-Mista.png"
    :product-specs="[
      { label: 'Largura', value: '0,60cm' },
      { label: 'Poltronas', value: '4-unidades' },
      { label: 'Altura', value: '0,68cm' }
    ]"
    product-price="R$ 1.400,00"
    :price-calculation="[
      { label: 'Área (0.68cm × 0.60cm)', value: '0.408cm²' },
      { label: '(R$ 1400.00)', value: 'R$ 1400.00' },
      { label: 'Tipo', value: 'Mesinha Completa de Mista c/ 4-Poltronas' }
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