<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">Nossos Móveis para Sala</h2>
          <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
            Descubra nossa ampla gama de móveis para sala de estar. Cada peça é feita com dedicação e atenção aos detalhes para o seu lar.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MesinhaAngelinCard />

          <!-- Móvel Modelo 2 -->
          <MesinhaAngelinCard
            :image="'/img/Mesinha-Mista.png'"
            :title="'Mesinha-Mista'"
            :specs="[
              { label: 'Largura', value: '0,60cm' },
              { label: 'Poltronas', value: '4-unidades' },
              { label: 'Altura', value: '0,68cm' }
            ]"
            :price="'R$ 1.400,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-mesinha-mista'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 3 -->
          <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
            <div class="text-center">
              <!-- Imagem do produto -->
              <div 
                ref="estanteContainer"
                class="porta-zoom-container w-full h-64 overflow-hidden rounded-xl mb-6 bg-gray-50 relative"
                @mouseenter="showEstanteMagnifierFunc"
                @mouseleave="hideEstanteMagnifierFunc"
                @mousemove="updateEstanteMagnifierFunc"
                @touchstart="showEstanteMagnifierFunc"
                @touchmove="updateEstanteMagnifierFunc"
                @touchend="hideEstanteMagnifierFunc"
              >
                <img 
                  ref="estanteImg"
                  src="/img/Mesa-Maracatiara.png" 
                  alt="Estante Modular" 
                  class="porta-zoom-image w-full h-full object-contain cursor-pointer"
                  @load="estanteImageLoaded = true"
                >
                <!-- Lupa circular -->
                <div 
                  v-if="showEstanteMagnifier"
                  ref="estanteMagnifier"
                  class="magnifier"
                  :style="estanteMagnifierStyle"
                >
                  <img 
                    ref="estanteMagnifierImg"
                    src="/img/Mesa-Maracatiara.png" 
                    alt="Estante Modular Ampliada" 
                    class="magnifier-image"
                    :style="estanteMagnifierImageStyle"
                  >
                </div>
              </div>
              <!-- Nome do móvel -->
              <h3 class="text-2xl font-bold text-primary-800 mb-4">Estante Modular</h3>
              <!-- Especificações -->
              <div class="space-y-3 mb-6">
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Comprimento:</span>
                  <span class="text-primary-800 font-semibold">1.80m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Largura:</span>
                  <span class="text-primary-800 font-semibold">0,80cm</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Altura:</span>
                  <span class="text-primary-800 font-semibold">0,74cm</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Poltronas:</span>
                  <span class="text-primary-800 font-semibold">6-unidades</span>
                </div>
              </div>
              <!-- Preço -->
              <div class="mb-6">
                <div class="text-3xl font-bold text-primary-800 mb-2">R$ 3.200,00</div>
                <div class="text-sm text-primary-600">à vista ou parcelado</div>
              </div>
              <!-- Botão -->
              <button @click="$router.push('/encomenda-estante-modular')" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 w-full">Comprar Agora</button>
            </div>
          </div>

          <!-- Móvel Modelo 4 -->
          <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
            <div class="text-center">
              <!-- Imagem do produto -->
              <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <span class="text-primary-600 font-medium">Imagem em breve</span>
              </div>
              <!-- Nome do móvel -->
              <h3 class="text-2xl font-bold text-primary-800 mb-4">Poltrona</h3>
              <!-- Especificações -->
              <div class="space-y-3 mb-6">
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Largura:</span>
                  <span class="text-primary-800 font-semibold">0.80m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Profundidade:</span>
                  <span class="text-primary-800 font-semibold">0.85m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Altura:</span>
                  <span class="text-primary-800 font-semibold">0.90m</span>
                </div>
              </div>
              <!-- Preço -->
              <div class="mb-6">
                <div class="text-3xl font-bold text-primary-800 mb-2">R$ 1.200,00</div>
                <div class="text-sm text-primary-600">à vista ou parcelado</div>
              </div>
              <!-- Botão -->
              <NuxtLink to="/encomenda-poltrona" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full text-center">Comprar Agora</NuxtLink>
            </div>
          </div>

          <!-- Móvel Modelo 5 -->
          <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
            <div class="text-center">
              <!-- Imagem do produto -->
              <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <span class="text-primary-600 font-medium">Imagem em breve</span>
              </div>
              <!-- Nome do móvel -->
              <h3 class="text-2xl font-bold text-primary-800 mb-4">Mesa Lateral</h3>
              <!-- Especificações -->
              <div class="space-y-3 mb-6">
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Largura:</span>
                  <span class="text-primary-800 font-semibold">0.50m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Profundidade:</span>
                  <span class="text-primary-800 font-semibold">0.50m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Altura:</span>
                  <span class="text-primary-800 font-semibold">0.55m</span>
                </div>
              </div>
              <!-- Preço -->
              <div class="mb-6">
                <div class="text-3xl font-bold text-primary-800 mb-2">R$ 400,00</div>
                <div class="text-sm text-primary-600">à vista ou parcelado</div>
              </div>
              <!-- Botão -->
              <NuxtLink to="/encomenda-mesa-lateral" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full text-center">Comprar Agora</NuxtLink>
            </div>
          </div>

          <!-- Móvel Modelo 6 -->
          <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
            <div class="text-center">
              <!-- Imagem do produto -->
              <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <span class="text-primary-600 font-medium">Imagem em breve</span>
              </div>
              <!-- Nome do móvel -->
              <h3 class="text-2xl font-bold text-primary-800 mb-4">Rack para TV</h3>
              <!-- Especificações -->
              <div class="space-y-3 mb-6">
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Largura:</span>
                  <span class="text-primary-800 font-semibold">1.60m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Profundidade:</span>
                  <span class="text-primary-800 font-semibold">0.40m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Altura:</span>
                  <span class="text-primary-800 font-semibold">0.60m</span>
                </div>
              </div>
              <!-- Preço -->
              <div class="mb-6">
                <div class="text-3xl font-bold text-primary-800 mb-2">R$ 1.500,00</div>
                <div class="text-sm text-primary-600">à vista ou parcelado</div>
              </div>
              <!-- Botão -->
              <NuxtLink to="/encomenda-rack-tv" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full text-center">Comprar Agora</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div id="call-to-action-sala" class="text-center mt-16">
          <div class="bg-primary-200 rounded-2xl p-8 text-primary-800 max-w-4xl mx-auto">
            <h3 class="text-3xl font-bold mb-4">Não encontrou o que procura?</h3>
            <p class="text-xl mb-6 text-primary-700">
              Temos opções personalizadas para qualquer necessidade. Entre em contato para um orçamento sob medida.
            </p>
            <button @click="$router.push('/encomendas-sala')" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">Fazer Orçamento Personalizado</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Referências para o zoom da Estante Modular
const estanteContainer = ref(null)
const estanteImg = ref(null)
const estanteMagnifier = ref(null)
const estanteMagnifierImg = ref(null)

// Estado do zoom
const showEstanteMagnifier = ref(false)
const estanteMagnifierStyle = ref({})
const estanteMagnifierImageStyle = ref({})
const estanteImageLoaded = ref(false)

// Configurações do zoom
const magnifierSize = 120
const zoomLevel = 2

// Função para mostrar o zoom
const showEstanteMagnifierFunc = (event) => {
  if (estanteImg.value && estanteImg.value.complete) {
    estanteImageLoaded.value = true
  }
  showEstanteMagnifier.value = true
  if (event) {
    updateEstanteMagnifierFunc(event)
  }
}

// Função para esconder o zoom
const hideEstanteMagnifierFunc = () => {
  showEstanteMagnifier.value = false
}

// Função para atualizar a posição do zoom
const updateEstanteMagnifierFunc = (event) => {
  if (!estanteContainer.value || !estanteImg.value || !showEstanteMagnifier.value || !estanteImageLoaded.value) return

  const container = estanteContainer.value
  const img = estanteImg.value
  const containerRect = container.getBoundingClientRect()

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

  if (mouseX < 0 || mouseX > containerRect.width || mouseY < 0 || mouseY > containerRect.height) {
    hideEstanteMagnifierFunc()
    return
  }

  let magnifierX = mouseX - magnifierSize / 2
  let magnifierY = mouseY - magnifierSize / 2

  magnifierX = Math.max(0, Math.min(magnifierX, containerRect.width - magnifierSize))
  magnifierY = Math.max(0, Math.min(magnifierY, containerRect.height - magnifierSize))

  const percentX = mouseX / containerRect.width
  const percentY = mouseY / containerRect.height

  const offsetX = percentX * containerRect.width
  const offsetY = percentY * containerRect.height

  estanteMagnifierStyle.value = {
    left: `${magnifierX}px`,
    top: `${magnifierY}px`,
    width: `${magnifierSize}px`,
    height: `${magnifierSize}px`,
    position: 'absolute',
    zIndex: '1000'
  }

  estanteMagnifierImageStyle.value = {
    transform: `scale(${zoomLevel}) translate(${-offsetX}px, ${-offsetY}px)`,
    transformOrigin: 'top left',
    width: `${containerRect.width}px`,
    height: `${containerRect.height}px`
  }
}

// const openWhatsApp = () => {
//   const phoneNumber = '5596981379746'
//   const message = 'Olá! Gostaria de saber mais sobre os móveis para sala da Porta Norte.'
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
//   window.open(whatsappUrl, '_blank')
// }
</script>

<style scoped>
/* Estilos específicos para a página de sala */

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
