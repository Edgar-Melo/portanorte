<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
          Nossas Portas
        </h2>
        <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
          Descubra a nossa ampla gama de portas em madeira de alta qualidade. Cada porta é feita com dedicação e atenção aos detalhes para o seu lar.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Porta Modelo 1 -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div
              ref="portaContainer"
              class="porta-zoom-container w-full h-64 overflow-hidden rounded-xl mb-6 bg-gray-50 relative"
              @mouseenter="showMagnifier"
              @mouseleave="hideMagnifier"
              @mousemove="updateMagnifier"
              @touchstart="showMagnifier"
              @touchmove="updateMagnifier"
              @touchend="hideMagnifier"
            >
              <img
                ref="portaResidencialImg"
                src="/img/Porta-Angelik-Horizonte.png"
                alt="Porta Residencial"
                class="porta-zoom-image w-full h-full object-contain"
              />

              <!-- Lupa circular -->
              <div
                ref="magnifier"
                class="magnifier"
                :style="magnifierStyle"
                v-show="showMagnifierGlass"
              >
                <img
                  ref="magnifierImg"
                  src="/img/Porta-Angelik-Horizonte.png"
                  alt="Porta Residencial Ampliada"
                  class="magnifier-image"
                  :style="magnifierImageStyle"
                />
              </div>
            </div>

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Porta-Angelik-Horizonte</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.10m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Larguras:</span>
                <span class="text-primary-800 font-semibold text-sm">0.80cm, 0.83cm, 0.93cm, 1.00M, 1.20M</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Espessura:</span>
                <span class="text-primary-800 font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Botão -->
            <ButtonPrimary @click="$router.push('/encomenda-porta-angelik')" class="w-full">Comprar Agora</ButtonPrimary>
          </div>
        </div>

        <!-- Porta Modelo 2 -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div 
              ref="portaCorrerContainer"
              class="porta-zoom-container h-64"
              @mouseenter="showPortaCorrerMagnifierFunc"
              @mouseleave="hidePortaCorrerMagnifierFunc"
              @mousemove="updatePortaCorrerMagnifierFunc"
              @touchstart="showPortaCorrerMagnifierFunc"
              @touchend="hidePortaCorrerMagnifierFunc"
              @touchmove="updatePortaCorrerMagnifierFunc"
            >
              <img 
                ref="portaCorrerImg"
                src="/img/Porta-Angelin-Colonial.png" 
                alt="Porta de Correr" 
                class="porta-zoom-image"
                @load="checkPortaCorrerImageLoaded"
              >
              <div 
                v-if="showPortaCorrerMagnifier"
                ref="portaCorrerMagnifier"
                class="magnifier"
                :style="portaCorrerMagnifierStyle"
              >
                <img 
                  ref="portaCorrerMagnifierImg"
                  :src="portaCorrerImg?.src" 
                  alt="Magnifier" 
                  class="magnifier-image"
                  :style="portaCorrerMagnifierImageStyle"
                >
              </div>
            </div>

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Porta-Angelin-Colonial</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.10m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Larguras:</span>
                <span class="text-primary-800 font-semibold text-sm">0.80cm, 0.83cm, 0.93cm, 1.00M, 1.20M</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Espessura:</span>
                <span class="text-primary-800 font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Botão -->
            <ButtonPrimary @click="$router.push('/encomenda-porta-angelin-colonial')" class="w-full">Comprar Agora</ButtonPrimary>
          </div>
        </div>

        <!-- Porta Modelo 3 -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div
              ref="portaPivotanteContainer"
              class="porta-zoom-container w-full h-48 overflow-hidden rounded-xl mb-6 bg-gray-50 relative"
              @mouseenter="showPortaPivotanteMagnifierFunc"
              @mouseleave="hidePortaPivotanteMagnifierFunc"
              @mousemove="updatePortaPivotanteMagnifierFunc"
              @touchstart="showPortaPivotanteMagnifierFunc"
              @touchmove="updatePortaPivotanteMagnifierFunc"
              @touchend="hidePortaPivotanteMagnifierFunc"
            >
              <img
                ref="portaPivotanteImg"
                src="/img/Porta-Angelin-Tradicional.png"
                alt="Porta Pivotante"
                class="porta-zoom-image w-full h-full object-cover"
                @load="checkPortaPivotanteImageLoaded"
              />

              <!-- Lupa circular -->
              <div
                v-if="showPortaPivotanteMagnifier"
                ref="portaPivotanteMagnifier"
                class="magnifier"
                :style="portaPivotanteMagnifierStyle"
              >
                <img
                  ref="portaPivotanteMagnifierImg"
                  :src="portaPivotanteImg?.src"
                  alt="Porta Pivotante Ampliada"
                  class="magnifier-image"
                  :style="portaPivotanteMagnifierImageStyle"
                />
              </div>
            </div>

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Porta Pivotante</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.40m</span>
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

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 2.200,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas-portas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Porta Modelo 4 -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 overflow-hidden rounded-xl mb-6">
              <img src="" alt="Porta de Madeira Maciça" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Porta de Madeira Maciça</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.10m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Largura:</span>
                <span class="text-primary-800 font-semibold">0.70m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Espessura:</span>
                <span class="text-primary-800 font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 2.800,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas-portas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Porta Modelo 5 -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 overflow-hidden rounded-xl mb-6">
              <img src="" alt="Porta com Vidro" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Porta com Vidro</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.10m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Largura:</span>
                <span class="text-primary-800 font-semibold">0.80m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Espessura:</span>
                <span class="text-primary-800 font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 1.600,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Porta Modelo 6 -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 overflow-hidden rounded-xl mb-6">
              <img src="" alt="Porta de Serviço" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Porta de Serviço</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.00m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Largura:</span>
                <span class="text-primary-800 font-semibold">0.60m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Espessura:</span>
                <span class="text-primary-800 font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 950,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas-portas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div id="call-to-action-portas" class="text-center mt-16">
        <div class="bg-primary-200 rounded-2xl p-8 text-primary-800 max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold mb-4">Não encontrou o que procura?</h3>
          <p class="text-xl mb-6 text-primary-700">
            Temos opções personalizadas para qualquer necessidade.
            Entre em contato para um orçamento sob medida.
          </p>
          <ButtonPrimary @click="$router.push('/encomendas-portas')">
            Faça um Orçamento
          </ButtonPrimary>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import ButtonSecondary from '~/components/ButtonSecondary.vue'

// Referências para a lupa
const portaContainer = ref(null)
const portaResidencialImg = ref(null)
const magnifier = ref(null)
const magnifierImg = ref(null)

// Referências para Porta de Correr
const portaCorrerContainer = ref(null)
const portaCorrerImg = ref(null)
const portaCorrerMagnifier = ref(null)
const portaCorrerMagnifierImg = ref(null)

// Referências para Porta Pivotante
const portaPivotanteContainer = ref(null)
const portaPivotanteImg = ref(null)
const portaPivotanteMagnifier = ref(null)
const portaPivotanteMagnifierImg = ref(null)

// Estado da lupa
const showMagnifierGlass = ref(false)
const magnifierStyle = ref({})
const magnifierImageStyle = ref({})
const imageLoaded = ref(false)

// Estado da lupa para Porta de Correr
const showPortaCorrerMagnifier = ref(false)
const portaCorrerMagnifierStyle = ref({})
const portaCorrerMagnifierImageStyle = ref({})
const portaCorrerImageLoaded = ref(false)

// Estado da lupa para Porta Pivotante
const showPortaPivotanteMagnifier = ref(false)
const portaPivotanteMagnifierStyle = ref({})
const portaPivotanteMagnifierImageStyle = ref({})
const portaPivotanteImageLoaded = ref(false)

// Configurações da lupa
const magnifierSize = 150 // Tamanho da lupa em pixels
const zoomLevel = 2 // Nível de zoom

// Verificar se a imagem está carregada
const checkImageLoaded = () => {
  if (portaResidencialImg.value && portaResidencialImg.value.complete) {
    imageLoaded.value = true
  }
}

// Verificar se a imagem da Porta de Correr está carregada
const checkPortaCorrerImageLoaded = () => {
  if (portaCorrerImg.value && portaCorrerImg.value.complete) {
    portaCorrerImageLoaded.value = true
  }
}

// Função para mostrar a lupa
const showMagnifier = (event) => {
  // Verificar se a imagem está carregada, se não estiver, tentar mostrar mesmo assim
  if (portaResidencialImg.value && portaResidencialImg.value.complete) {
    imageLoaded.value = true
  }

  // Mostrar a lupa mesmo se a imagem não estiver totalmente carregada
  showMagnifierGlass.value = true

  // Se temos um evento, atualizar imediatamente a posição
  if (event) {
    updateMagnifier(event)
  }
}

// Função para esconder a lupa
const hideMagnifier = () => {
  showMagnifierGlass.value = false
}

// Função para atualizar a posição da lupa
const updateMagnifier = (event) => {
  if (!portaContainer.value || !portaResidencialImg.value || !showMagnifierGlass.value || !imageLoaded.value) return

  const container = portaContainer.value
  const img = portaResidencialImg.value

  // Obter as dimensões e posição do container
  const containerRect = container.getBoundingClientRect()

  // Calcular a posição do mouse/touch relativa ao container
  let clientX, clientY
  if (event.touches && event.touches.length > 0) {
    // Touch event
    clientX = event.touches[0].clientX
    clientY = event.touches[0].clientY
  } else {
    // Mouse event
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

  // Calcular a posição da lupa (centralizada no mouse/touch)
  let magnifierX = mouseX - magnifierSize / 2
  let magnifierY = mouseY - magnifierSize / 2

  // Restringir a lupa aos limites do container
  magnifierX = Math.max(0, Math.min(magnifierX, containerRect.width - magnifierSize))
  magnifierY = Math.max(0, Math.min(magnifierY, containerRect.height - magnifierSize))

  // Calcular a porcentagem da posição do mouse no container (0-1)
  const percentX = mouseX / containerRect.width
  const percentY = mouseY / containerRect.height

  // Calcular o deslocamento da imagem ampliada
  // Para zoom de 2x, precisamos mover a imagem para mostrar a área correta
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

const openWhatsApp = () => {
  const phoneNumber = '5596981379746'
  const message = 'Olá! Gostaria de saber mais sobre as portas da Porta Norte.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

// Funções para Porta de Correr
const showPortaCorrerMagnifierFunc = (event) => {
  if (portaCorrerImg.value && portaCorrerImg.value.complete) {
    portaCorrerImageLoaded.value = true
  }
  showPortaCorrerMagnifier.value = true
  if (event) {
    updatePortaCorrerMagnifier(event)
  }
}

const hidePortaCorrerMagnifierFunc = () => {
  showPortaCorrerMagnifier.value = false
}

const updatePortaCorrerMagnifierFunc = (event) => {
  if (!portaCorrerContainer.value || !portaCorrerImg.value || !showPortaCorrerMagnifier.value || !portaCorrerImageLoaded.value) return

  const container = portaCorrerContainer.value
  const img = portaCorrerImg.value
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
    hidePortaCorrerMagnifier()
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

  portaCorrerMagnifierStyle.value = {
    left: `${magnifierX}px`,
    top: `${magnifierY}px`,
    width: `${magnifierSize}px`,
    height: `${magnifierSize}px`,
    position: 'absolute',
    zIndex: '1000'
  }

  portaCorrerMagnifierImageStyle.value = {
    transform: `scale(${zoomLevel}) translate(${-offsetX}px, ${-offsetY}px)`,
    transformOrigin: 'top left',
    width: `${containerRect.width}px`,
    height: `${containerRect.height}px`
  }
}

// Funções para Porta Pivotante
const showPortaPivotanteMagnifierFunc = (event) => {
  if (portaPivotanteImg.value && portaPivotanteImg.value.complete) {
    portaPivotanteImageLoaded.value = true
  }
  showPortaPivotanteMagnifier.value = true
  if (event) {
    updatePortaPivotanteMagnifier(event)
  }
}

const hidePortaPivotanteMagnifierFunc = () => {
  showPortaPivotanteMagnifier.value = false
}

const updatePortaPivotanteMagnifierFunc = (event) => {
  if (!portaPivotanteContainer.value || !portaPivotanteImg.value || !showPortaPivotanteMagnifier.value || !portaPivotanteImageLoaded.value) return

  const container = portaPivotanteContainer.value
  const img = portaPivotanteImg.value
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
    hidePortaPivotanteMagnifier()
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

  portaPivotanteMagnifierStyle.value = {
    left: `${magnifierX}px`,
    top: `${magnifierY}px`,
    width: `${magnifierSize}px`,
    height: `${magnifierSize}px`,
    position: 'absolute',
    zIndex: '1000'
  }

  portaPivotanteMagnifierImageStyle.value = {
    transform: `scale(${zoomLevel}) translate(${-offsetX}px, ${-offsetY}px)`,
    transformOrigin: 'top left',
    width: `${containerRect.width}px`,
    height: `${containerRect.height}px`
  }
}

const checkPortaPivotanteImageLoaded = () => {
  if (portaPivotanteImg.value && portaPivotanteImg.value.complete) {
    portaPivotanteImageLoaded.value = true
  }
}

// Configurar event listeners quando o componente for montado
onMounted(() => {
  if (portaResidencialImg.value) {
    if (portaResidencialImg.value.complete) {
      imageLoaded.value = true
    } else {
      portaResidencialImg.value.addEventListener('load', () => {
        imageLoaded.value = true
      })
    }
  }

  if (portaCorrerImg.value) {
    if (portaCorrerImg.value.complete) {
      portaCorrerImageLoaded.value = true
    } else {
      portaCorrerImg.value.addEventListener('load', () => {
        portaCorrerImageLoaded.value = true
      })
    }
  }

  if (portaPivotanteImg.value) {
    if (portaPivotanteImg.value.complete) {
      portaPivotanteImageLoaded.value = true
    } else {
      portaPivotanteImg.value.addEventListener('load', () => {
        portaPivotanteImageLoaded.value = true
      })
    }
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
