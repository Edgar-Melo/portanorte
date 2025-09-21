<template>
  <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
    <div class="text-center">
      <!-- Imagem do produto -->
      <div v-if="image" class="porta-zoom-container w-full h-64 overflow-hidden rounded-xl mb-6 bg-gray-50 relative" ref="zoomContainer">
        <img :src="image" :alt="title" class="porta-zoom-image w-full h-full object-contain cursor-pointer">
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
import { ref, onMounted } from 'vue'

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
    default: 'Comprar Agora'
  },
  buttonLink: {
    type: String,
    default: '/encomendas-cozinha'
  },
  buttonType: {
    type: String,
    default: 'button' // 'button' or 'link'
  }
})
</script>

<style scoped>
/* Estilos para o container da imagem */
.porta-zoom-container {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  cursor: default;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.porta-zoom-image {
  transition: opacity 0.3s ease;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>