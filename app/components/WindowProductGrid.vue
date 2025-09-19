<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Janela Modelo 1 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div 
          class="porta-zoom-container w-full h-96 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative"
          @mouseenter="showMagnifier"
          @mouseleave="hideMagnifier"
          @mousemove="updateMagnifier"
          @touchstart="showMagnifier"
          @touchmove="updateMagnifier"
          @touchend="hideMagnifier"
        >
          <img 
            src="/img/Janela-Angelin-Tradicional.png" 
            alt="Janela-Angelin-Tradicional" 
            class="porta-zoom-image w-full h-full object-contain cursor-pointer"
            @load="checkImageLoaded"
          />

          <!-- Lupa circular -->
          <div
            class="magnifier"
            :style="magnifierStyle"
            v-show="showMagnifierGlass"
          >
            <img
              src="/img/Janela-Angelin-Tradicional.png"
              alt="Janela-Angelin-Tradicional Ampliada"
              class="magnifier-image"
              :style="magnifierImageStyle"
            />
          </div>
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela-Angelin-Tradicional</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">1.00m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">1.00m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <ButtonPrimary @click="$router.push('/encomenda-janela-angelin-tradicional')" class="w-full">Comprar Agora</ButtonPrimary>
      </div>
    </div>
    <!-- Janela Modelo 2 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div 
          class="porta-zoom-container w-full h-96 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative"
          @mouseenter="showMagnifier"
          @mouseleave="hideMagnifier"
          @mousemove="updateMagnifier"
          @touchstart="showMagnifier"
          @touchmove="updateMagnifier"
          @touchend="hideMagnifier"
        >
          <img 
            src="/img/Janela-Macacaúba-Horizonte.png" 
            alt="Janela-Macacaúba-Horizonte" 
            class="porta-zoom-image w-full h-full object-contain cursor-pointer"
            @load="checkImageLoaded"
          />

          <!-- Lupa circular -->
          <div
            class="magnifier"
            :style="magnifierStyle"
            v-show="showMagnifierGlass"
          >
            <img
              src="/img/Janela-Macacaúba-Horizonte.png"
              alt="Janela-Macacaúba-Horizonte Ampliada"
              class="magnifier-image"
              :style="magnifierImageStyle"
            />
          </div>
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela-Macacaúba-Horizonte</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">1.00m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">1.00m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <ButtonPrimary @click="$router.push('/encomenda-janela-angelin-tradicional')" class="w-full">Comprar Agora</ButtonPrimary>
      </div>
    </div>
    <!-- Janela Modelo 3 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="porta-zoom-container w-full h-96 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
          <img src="/img/Janela-Angelin-Colonial.png" alt="Janela-Angelin-Colonial" class="porta-zoom-image w-full h-full object-contain cursor-pointer">
          <!-- Lupa circular -->
          <div class="magnifier" style="left: 42.6667px; top: 234px; width: 150px; height: 150px; position: absolute; z-index: 1000; display: none;">
            <img src="/img/Janela-Angelin-Colonial.png" alt="Janela-Angelin-Colonial Ampliada" class="magnifier-image" style="transform: scale(2) translate(-117.667px, -312px); transform-origin: left top; width: 293.333px; height: 384px;">
          </div>
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela-Angelin-Colonial</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">1.20m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">1m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <ButtonPrimary @click="$router.push('/encomenda-janela-angelin-tradicional')" class="w-full">Comprar Agora</ButtonPrimary>
      </div>
    </div>
    <!-- Janela Modelo 4 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          <span class="text-primary-600 font-medium">Imagem em breve</span>
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela com Vidro</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">1.20m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">0.90m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <div class="mb-6">
          <div class="text-3xl font-bold text-primary-800 mb-2">R$ 1.000,00</div>
          <div class="text-sm text-primary-600">à vista ou parcelado</div>
        </div>
        <ButtonSecondary @click="$router.push('/encomendas-janelas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
      </div>
    </div>
    <!-- Janela Modelo 5 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          <span class="text-primary-600 font-medium">Imagem em breve</span>
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela Francesa</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">2.00m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">1.50m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <div class="mb-6">
          <div class="text-3xl font-bold text-primary-800 mb-2">R$ 1.800,00</div>
          <div class="text-sm text-primary-600">à vista ou parcelado</div>
        </div>
        <ButtonSecondary @click="$router.push('/encomendas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
      </div>
    </div>
    <!-- Janela Modelo 6 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          <span class="text-primary-600 font-medium">Imagem em breve</span>
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela de Serviço</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">0.80m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">0.50m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <div class="mb-6">
          <div class="text-3xl font-bold text-primary-800 mb-2">R$ 400,00</div>
          <div class="text-sm text-primary-600">à vista ou parcelado</div>
        </div>
        <ButtonSecondary @click="$router.push('/encomendas-janelas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import ButtonSecondary from '~/components/ButtonSecondary.vue'
import { ref } from 'vue'

// Estado da lupa
const showMagnifierGlass = ref(false)
const magnifierStyle = ref({})
const magnifierImageStyle = ref({})
const imageLoaded = ref(false)

// Configurações da lupa
const magnifierSize = 150 // Tamanho da lupa em pixels
const zoomLevel = 2 // Nível de zoom

// Verificar se a imagem está carregada
const checkImageLoaded = () => {
  imageLoaded.value = true
}

// Função para mostrar a lupa
const showMagnifier = () => {
  showMagnifierGlass.value = true
}

// Função para esconder a lupa
const hideMagnifier = () => {
  showMagnifierGlass.value = false
}

// Função para atualizar a posição da lupa
const updateMagnifier = (event) => {
  if (!showMagnifierGlass.value || !imageLoaded.value) return

  const container = event.currentTarget
  const img = container.querySelector('img')

  if (!container || !img) return

  // Obter as dimensões e posição do container
  const containerRect = container.getBoundingClientRect()

  // Calcular a posição do mouse/touch relativa ao container
  let clientX, clientY
  if (event.touches && event.touches.length > 0) {
    clientX = event.touches[0].clientX
    clientY = event.touches[0].clientY
  } else {
    clientX = event.clientX
    clientY = event.clientY
  }

  const mouseX = clientX - containerRect.left
  const mouseY = clientY - containerRect.top

  // Verificar se o mouse/touch está dentro do container
  if (mouseX < 0 || mouseX > containerRect.width || mouseY < 0 || mouseY > containerRect.height) {
    hideMagnifier()
    return
  }

  // Calcular a posição da lupa
  let magnifierX = mouseX - magnifierSize / 2
  let magnifierY = mouseY - magnifierSize / 2

  // Restringir a lupa aos limites do container
  magnifierX = Math.max(0, Math.min(magnifierX, containerRect.width - magnifierSize))
  magnifierY = Math.max(0, Math.min(magnifierY, containerRect.height - magnifierSize))

  // Calcular a porcentagem da posição do mouse no container
  const percentX = mouseX / containerRect.width
  const percentY = mouseY / containerRect.height

  // Calcular o deslocamento da imagem ampliada
  const offsetX = percentX * containerRect.width
  const offsetY = percentY * containerRect.height

  // Atualizar os estilos
  magnifierStyle.value = {
    left: `${magnifierX}px`,
    top: `${magnifierY}px`,
    width: `${magnifierSize}px`,
    height: `${magnifierSize}px`,
    position: 'absolute',
    zIndex: '1000'
  }

  magnifierImageStyle.value = {
    transform: `scale(${zoomLevel}) translate(${-offsetX}px, ${-offsetY}px)`,
    transformOrigin: 'top left',
    width: `${containerRect.width}px`,
    height: `${containerRect.height}px`
  }
}
</script>

<style scoped>
/* Estilos para o container da imagem */
.porta-zoom-container {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  cursor: default;
  background: white;
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
  border: 2px solid #374151;
  overflow: hidden;
  z-index: 1000;
}

.magnifier-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
