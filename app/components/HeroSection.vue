<template>
  <section class="relative min-h-screen bg-cover bg-center" style="background-image: url('/img/um móveleiro fabrica.png');">
    <!-- Overlay para melhor legibilidade do texto -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <!-- Conteúdo principal -->
    <div class="relative z-10 container mx-auto px-6 flex items-center min-h-screen">
      <div class="text-left animate-fade-in max-w-lg">
        <h1 class="text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span class="block text-white">Porta</span>
          <span class="block text-primary-600">Norte</span>
        </h1>
        <h2 class="text-3xl font-bold text-white mb-6">
          Móveis em Madeira de Qualidade
        </h2>
        <p class="text-xl text-white mb-10 leading-relaxed max-w-lg text-justify">
          Especialistas em portas, janelas e materiais para construção em Oiapoque.
          Transformamos madeira em arte, criando peças únicas para o seu lar.
          Oferecemos soluções personalizadas com dedicação e excelência.
        </p>
        <div class="flex flex-col sm:flex-row gap-6">
          <ButtonPrimary class="transform hover:scale-105 transition-transform duration-300 shadow-lg" @click="scrollToProducts">Ver Produtos</ButtonPrimary>
          <ButtonSecondary class="transform hover:scale-105 transition-transform duration-300 shadow-lg" @click="openQuoteModal">Faça um Orçamento</ButtonSecondary>
        </div>
      </div>
    </div>

    <!-- Modal de Orçamento -->
    <div v-if="showQuoteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold text-primary-800">Selecione os Produtos para Orçamento</h3>
          <button @click="closeQuoteModal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>

        <p class="text-primary-700 mb-6">Marque os produtos que você gostaria de incluir no seu orçamento:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <label v-for="product in products" :key="product.id" class="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
            <input
              v-model="selectedProducts"
              :value="product.id"
              type="checkbox"
              class="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
            >
            <div class="flex items-center space-x-3">
              <span class="text-2xl">{{ product.icon }}</span>
              <span class="text-primary-800 font-medium">{{ product.name }}</span>
            </div>
          </label>
        </div>

        <div class="flex justify-end space-x-4">
          <button
            @click="closeQuoteModal"
            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
          >
            Cancelar
          </button>
          <button
            @click="sendQuoteRequest"
            :disabled="selectedProducts.length === 0"
            class="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import ButtonSecondary from '~/components/ButtonSecondary.vue'

// Estado do modal
const showQuoteModal = ref(false)
const selectedProducts = ref([])

// Lista de produtos disponíveis
const products = [
  { id: 'doors', name: 'Portas', icon: '🚪' },
  { id: 'windows', name: 'Janelas', icon: '🪟' },
  { id: 'living-room', name: 'Sala de Estar', icon: '🛋️' },
  { id: 'kitchen', name: 'Cozinha', icon: '🍳' },
  { id: 'bedroom', name: 'Quarto', icon: '🛏️' },
  // { id: 'office', name: 'Escritório', icon: '💼' },
  // { id: 'bathroom', name: 'Banheiro', icon: '🛁' }
]

// Função para rolar suavemente até a seção de produtos
const scrollToProducts = () => {
  const productsSection = document.getElementById('products')
  if (productsSection) {
    productsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Abrir modal de orçamento
const openQuoteModal = () => {
  showQuoteModal.value = true
  selectedProducts.value = []
}

// Fechar modal de orçamento
const closeQuoteModal = () => {
  showQuoteModal.value = false
  selectedProducts.value = []
}

// Enviar solicitação de orçamento
const sendQuoteRequest = () => {
  if (selectedProducts.value.length === 0) return

  // Construir mensagem com produtos selecionados
  let message = 'Olá! Gostaria de solicitar um orçamento para os seguintes produtos:\n\n'
  
  selectedProducts.value.forEach(productId => {
    const product = products.find(p => p.id === productId)
    if (product) {
      message += `• ${product.name}\n`
    }
  })
  
  message += '\nPor favor, entre em contato para discutirmos os detalhes.'

  // Abrir WhatsApp
  const phoneNumber = '5596981379746'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')

  // Fechar modal
  closeQuoteModal()
}

const openWhatsApp = () => {
  const phoneNumber = '5596981379746'
  const message = 'Olá! Gostaria de saber mais sobre os produtos da Porta Norte.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
