<template>
  <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
    <div class="text-center">
      <!-- Imagem do produto -->
      <div v-if="image" class="porta-zoom-container w-full h-64 overflow-hidden rounded-xl mb-6 bg-gray-50 relative">
        <img :src="image" :alt="title" class="porta-zoom-image w-full h-full object-contain cursor-pointer">
        <!-- Lupa circular -->
        <div class="magnifier" style="display: none;">
          <img :src="image" :alt="title + ' Ampliada'" class="magnifier-image">
        </div>
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
      <a v-else :href="buttonLink" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full text-center">{{ buttonText }}</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: '/img/Mesinha-Angelin.png'
  },
  title: {
    type: String,
    default: 'Mesinha-Angelin'
  },
  specs: {
    type: Array,
    default: () => [
      { label: 'Largura', value: '0,60cm' },
      { label: 'Poltronas', value: '4-unidades' },
      { label: 'Altura', value: '0,68cm' }
    ]
  },
  price: {
    type: String,
    default: 'R$ 1.400,00'
  },
  buttonText: {
    type: String,
    default: 'Comprar Agora'
  },
  buttonLink: {
    type: String,
    default: '/encomenda-mesinha-angelin'
  },
  buttonType: {
    type: String,
    default: 'button' // 'button' or 'link'
  }
})
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>