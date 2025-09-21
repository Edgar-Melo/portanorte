<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-primary-800">Porta Norte - {{ productName }}</h1>
          <NuxtLink to="/cozinha" class="bg-primary-200 hover:bg-primary-300 text-primary-800 px-4 py-2 rounded-lg transition duration-300">
            ← Voltar à Cozinha
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
            Faça sua compra personalizada do {{ productName }} e receba no conforto da sua casa.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Informações do Produto -->
          <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
            <h3 class="text-2xl font-bold text-primary-800 mb-6">Informações do Produto</h3>

            <!-- Imagem ilustrativa -->
            <div class="mb-6">
              <img :src="productName === 'Mesa-Mista-com-Bancos' ? '/img/Mesa-Mista-com-Bancos.png' : `/img/${productName}.png`" :alt="productName" class="w-full h-64 object-contain rounded-xl bg-gray-50">
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
              <div class="text-3xl font-bold text-primary-800 mb-2">R$ {{ productPrice }},00</div>
              <div class="text-sm text-primary-600">à vista ou parcelado</div>
            </div>

            <!-- Cálculo do Preço -->
            <div class="bg-primary-50 rounded-lg p-4 mb-6">
              <h4 class="text-lg font-semibold text-primary-800 mb-3">Cálculo do Preço:</h4>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span>(R$ {{ productPrice }},00):</span>
                  <span>R$ {{ productPrice }},00</span>
                </div>
                <div class="flex justify-between">
                  <span>Tipo:</span>
                  <span>{{ productName }}</span>
                </div>
                <hr class="my-2">
                <div class="flex justify-between font-bold text-lg">
                  <span>Valor Total:</span>
                  <span>R$ {{ productPrice }},00</span>
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
                <input
                  v-model="formData.name"
                  type="text"
                  class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500"
                  placeholder="Digite seu nome completo"
                  required
                >
              </div>

              <!-- WhatsApp -->
              <div>
                <label class="block text-primary-600 font-medium mb-2">WhatsApp</label>
                <input
                  v-model="formData.whatsapp"
                  type="tel"
                  class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500"
                  placeholder="(00) 00000-0000"
                  required
                >
              </div>

              <!-- Observações -->
              <div>
                <label class="block text-primary-600 font-medium mb-2">Observações</label>
                <textarea
                  v-model="formData.observations"
                  rows="4"
                  class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 resize-vertical"
                  placeholder="Observações adicionais sobre a encomenda..."
                ></textarea>
              </div>

              <!-- Botão de Envio -->
              <button
                type="submit"
                :disabled="!isFormValid || isSubmitting"
                class="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition duration-300"
              >
                {{ isSubmitting ? 'Enviando...' : 'Enviar Pedido' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Dados dinâmicos baseados na query
const productName = ref(route.query.product || 'Mesa-Mista-com-Bancos')
const productPrice = ref(route.query.price || '2000')
const isMesa = computed(() => productName.value.includes('Mesa'))
const specLabels = computed(() => isMesa.value ? ['Comprimento', 'Largura', 'Altura', 'Bancos'] : ['Largura', 'Profundidade', 'Altura'])
const productSpecs = ref(route.query.specs ? route.query.specs.split('x').map((s, i) => ({
  label: specLabels.value[i] || specLabels.value[0],
  value: s + (isMesa.value ? '' : 'm')
})) : [
  { label: 'Comprimento', value: '1m' },
  { label: 'Largura', value: '0,78cm' },
  { label: 'Altura', value: '0,76cm' },
  { label: 'Bancos', value: '2-unidades' }
])

// Dados do formulário
const formData = reactive({
  name: '',
  whatsapp: '',
  observations: ''
})

const isSubmitting = ref(false)

const isFormValid = computed(() => {
  return formData.name.trim() && formData.whatsapp.trim()
})

// Enviar encomenda
const submitOrder = async () => {
  if (!isFormValid.value) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }

  isSubmitting.value = true

  try {
    // Construir mensagem do WhatsApp
    let message = `PRODUTO QUE EU QUERO COMPRAR: 

Produto: ${productName.value} 
Largura: ${productSpecs.value[0].value} 
Profundidade: ${productSpecs.value[1].value} 
Altura: ${productSpecs.value[2].value}

★ VALOR TOTAL: R$ ${productPrice.value},00

★ 📋 DADOS DO CLIENTE: 
Nome: ${formData.name} 
WhatsApp: ${formData.whatsapp} 
Observações: ${formData.observations}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = '+559681379746'

    // Abrir WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')

    // Limpar formulário
    formData.name = ''
    formData.whatsapp = ''
    formData.observations = ''

  } catch (error) {
    console.error('Erro ao enviar encomenda:', error)
    alert('Erro ao enviar encomenda. Tente novamente.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
