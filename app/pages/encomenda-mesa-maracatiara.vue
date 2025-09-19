<template>
  <OrderPage
    product-name="Mesa-Maracatiara"
    product-description="Faça sua compra personalizada da Mesa-Maracatiara e receba no conforto da sua casa."
    product-image="/img/default-product.png"
    :product-specs="[
      { label: 'Comprimento', value: '1.80m' },
      { label: 'Largura', value: '0,80cm' },
      { label: 'Altura', value: '0,74cm' },
      { label: 'Poltronas', value: '6-unidades' }
    ]"
    product-price="R$ 3.200,00"
    :price-calculation="[
      { label: 'Área (0.74m × 0.80m)', value: '0.59m²' },
      { label: '(R$ 3200.00)', value: 'R$ 3200.00' },
      { label: 'Tipo', value: 'Mesa-Maracatiara Completa' }
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