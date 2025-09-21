<template>
  <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
    <div class="text-center">
      <!-- Imagem do produto -->
      <div v-if="image" class="porta-zoom-container w-full h-64 overflow-hidden rounded-xl mb-6 bg-gray-50 relative" ref="zoomContainer">
        <img :src="image" :alt="title" class="porta-zoom-image w-full h-full object-contain cursor-pointer">
        <!-- Lupa circular -->
        <div class="magnifier" style="display: none;" ref="magnifier">
          <img :src="image" :alt="title + ' Ampliada'" class="magnifier-image" ref="magnifierImg">
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
    default: 'Solicitar Orçamento'
  },
  buttonLink: {
    type: String,
    default: '/encomendas-cozinha'
  },
  buttonType: {
    type: String,
    default: 'link' // 'button' or 'link'
  }
})

const zoomContainer = ref(null)
const magnifier = ref(null)
const magnifierImg = ref(null)

onMounted(() => {
  if (!zoomContainer.value || !magnifier.value || !magnifierImg.value) return

  const container = zoomContainer.value
  const mag = magnifier.value
  const magImg = magnifierImg.value

  const showMagnifier = (e) => {
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Show magnifier
    mag.style.display = 'block'

    // Position magnifier
    const magSize = 120
    let magX = x - magSize / 2
    let magY = y - magSize / 2

    // Keep magnifier within container
    if (magX < 0) magX = 0
    if (magY < 0) magY = 0
    if (magX + magSize > rect.width) magX = rect.width - magSize
    if (magY + magSize > rect.height) magY = rect.height - magSize

    mag.style.left = `${magX}px`
    mag.style.top = `${magY}px`

    // Calculate zoom position
    const imgRect = container.querySelector('.porta-zoom-image').getBoundingClientRect()
    const scaleX = imgRect.width / rect.width
    const scaleY = imgRect.height / rect.height

    const zoomX = (x / rect.width) * 100 * scaleX
    const zoomY = (y / rect.height) * 100 * scaleY

    magImg.style.transform = `scale(2) translate(-${zoomX}%, -${zoomY}%)`
  }

  const hideMagnifier = () => {
    mag.style.display = 'none'
  }

  container.addEventListener('mouseenter', showMagnifier)
  container.addEventListener('mousemove', showMagnifier)
  container.addEventListener('mouseleave', hideMagnifier)
})
</script>

<style scoped>
/* Estilos para o container da imagem com zoom */
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

/* Estilos da lupa circular */
.magnifier {
  position: absolute !important;
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  pointer-events: none;
  z-index: 1000;
  border: 3px solid rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  width: 120px !important;
  height: 120px !important;
}

.magnifier-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
  transition: none;
  border-radius: 50%;
}

/* Animações suaves */
.magnifier {
  transition: opacity 0.2s ease-in-out;
}

.porta-zoom-container:hover .porta-zoom-image {
  opacity: 0.8;
}
</style>