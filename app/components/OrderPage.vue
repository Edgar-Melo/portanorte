<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-primary-800">Porta Norte - {{ productName }}</h1>
          <NuxtLink :to="backLink" class="bg-primary-200 hover:bg-primary-300 text-primary-800 px-4 py-2 rounded-lg transition duration-300">
            ← Voltar
          </NuxtLink>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-6 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Título da Página -->
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">{{ productName }}</h2>
          <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
            {{ productDescription }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Informações do Produto -->
          <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
            <h3 class="text-2xl font-bold text-primary-800 mb-6">Informações do Produto</h3>

            <!-- Imagem do Produto -->
            <div class="mb-6">
              <img :src="productImage" :alt="productName" class="w-full h-64 object-contain rounded-xl bg-gray-50">
            </div>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div v-for="spec in productSpecs" :key="spec.label" class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">{{ spec.label }}:</span>
                <span class="text-primary-800 font-semibold">{{ spec.value }}</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">{{ productPrice }}</div>
              <div class="text-sm text-primary-600">à vista ou parcelado</div>
            </div>

            <!-- Cálculo do Preço -->
            <div v-if="priceCalculation" class="bg-primary-50 rounded-lg p-4 mb-6">
              <h4 class="text-lg font-semibold text-primary-800 mb-3">Cálculo do Preço:</h4>
              <div class="space-y-2 text-sm">
                <div v-for="calc in priceCalculation" :key="calc.label" class="flex justify-between">
                  <span>{{ calc.label }}:</span>
                  <span>{{ calc.value }}</span>
                </div>
                <hr class="my-2">
                <div class="flex justify-between font-bold text-lg">
                  <span>Valor Total:</span>
                  <span>{{ productPrice }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulário de Encomenda -->
          <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
            <h3 class="text-2xl font-bold text-primary-800 mb-6">Finalizar Encomenda</h3>
            <form @submit.prevent="submitOrder" class="space-y-6">
              <!-- Nome do Cliente -->
              <div>
                <label class="block text-primary-600 font-medium mb-2">Nome Completo</label>
                <input v-model="formData.name" type="text" class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500" placeholder="Digite seu nome completo" required>
              </div>

              <!-- WhatsApp -->
              <div>
                <label class="block text-primary-600 font-medium mb-2">WhatsApp</label>
                <input v-model="formData.whatsapp" type="tel" class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500" placeholder="(00) 00000-0000" required>
              </div>

              <!-- Observações -->
              <div>
                <label class="block text-primary-600 font-medium mb-2">Observações</label>
                <textarea v-model="formData.observations" rows="4" class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 resize-vertical" placeholder="Observações adicionais sobre a encomenda..."></textarea>
              </div>

              <!-- Botão de Envio -->
              <button type="submit" :disabled="!isFormValid" class="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition duration-300">
                Enviar Pedido
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

// Props para configurar o produto
const props = defineProps({
  productName: {
    type: String,
    default: 'Produto'
  },
  productDescription: {
    type: String,
    default: 'Faça sua compra personalizada e receba no conforto da sua casa.'
  },
  productImage: {
    type: String,
    default: '/img/default-product.png'
  },
  productSpecs: {
    type: Array,
    default: () => []
  },
  productPrice: {
    type: String,
    default: 'R$ 0,00'
  },
  priceCalculation: {
    type: Array,
    default: () => null
  },
  backLink: {
    type: String,
    default: '/'
  }
})

const formData = reactive({
  name: '',
  whatsapp: '',
  observations: ''
})

const isFormValid = computed(() => {
  return formData.name.trim() && formData.whatsapp.trim()
})

const submitOrder = () => {
  if (!isFormValid.value) return

  // Construct WhatsApp message
  let message = ''
  
  // Check if this is a Sala product (back-link contains '/sala')
  const isSalaProduct = props.backLink && props.backLink.includes('/sala')
  
  if (isSalaProduct) {
    // New format for Sala products
    message = `PRODUTO QUE EU QUERO COMPRAR: 

Produto: ${props.productName}
`

    // Add specifications
    props.productSpecs.forEach(spec => {
      message += `${spec.label}: ${spec.value}
`
    })

    message += `★ VALOR TOTAL: ${props.productPrice} 

📋 DADOS DO CLIENTE: 
Nome: ${formData.name || '[ ]'}
WhatsApp: ${formData.whatsapp || '[ ]'}
Observações: ${formData.observations || '[ ]'}`
  } else {
    // Format for kitchen and other products
    message = `PRODUTO QUE EU QUERO COMPRAR: 

Produto: ${props.productName}
`

    // Add specifications
    props.productSpecs.forEach(spec => {
      message += `${spec.label}: ${spec.value}
`
    })

    message += `★ VALOR TOTAL: ${props.productPrice}

📋 DADOS DO CLIENTE: 
Nome: ${formData.name || '[ ]'}
WhatsApp: ${formData.whatsapp || '[ ]'}
Observações: ${formData.observations || '[ ]'}`
  }

  const encodedMessage = encodeURIComponent(message)
  const whatsappNumber = '+559681379746' // Número do WhatsApp para testes

  // Open WhatsApp with the message
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>