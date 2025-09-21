<template>
  <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
    <div class="text-center">
      <!-- Imagem do produto -->
      <div v-if="image" class="w-full h-48 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
        <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer">
      </div>
      <div v-else class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
        <span class="text-primary-600 font-medium">Imagem em breve</span>
      </div>
      <!-- Nome do móvel -->
      <h3 class="text-2xl font-bold text-primary-800 mb-4">{{ title }}</h3>
      <!-- Especificações -->
      <div class="space-y-3 mb-6">
        <div v-for="spec in specs" :key="spec.label" class="flex justify-between items-center">
          <span class="text-primary-600 font-medium">{{ spec.label }}:</span>
          <span class="text-primary-800 font-semibold">{{ spec.value }}</span>
        </div>
      </div>
      <!-- Preço -->
      <div v-if="price" class="mb-6">
        <div class="text-3xl font-bold text-primary-800 mb-2">{{ price }}</div>
        <div class="text-sm text-primary-600">à vista ou parcelado</div>
      </div>
      <!-- Botão -->
      <button v-if="buttonType === 'button'" @click="$router.push(buttonLink)" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 w-full">{{ buttonText }}</button>
      <NuxtLink v-else :to="buttonLink" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full text-center">{{ buttonText }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: 'Produto'
  },
  specs: {
    type: Array,
    default: () => []
  },
  price: {
    type: String,
    default: null
  },
  buttonText: {
    type: String,
    default: 'Solicitar Orçamento'
  },
  buttonLink: {
    type: String,
    default: '/encomendas-quartos'
  },
  buttonType: {
    type: String,
    default: 'link' // 'button' or 'link'
  }
})
</script>

<style scoped>
/* Estilos específicos para o componente de produto de quarto */
</style>