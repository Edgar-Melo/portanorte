<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-primary-800">Porta Norte - Cama-Rustic-Bordada</h1>
          <NuxtLink to="/quartos" class="bg-primary-200 hover:bg-primary-300 text-primary-800 px-4 py-2 rounded-lg transition duration-300">
            ← Voltar
          </NuxtLink>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-6 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Título da Página -->
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">Cama-Rustic-Bordada</h2>
          <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
            Faça sua compra personalizada da Cama Rustic Bordada e receba no conforto da sua casa.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Informações do Produto -->
          <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
            <h3 class="text-2xl font-bold text-primary-800 mb-6">Informações do Produto</h3>

            <!-- Imagem do Produto -->
            <div class="mb-6">
              <img src="/img/Cama-Rustic-Bordada.png" alt="Cama-Rustic-Bordada" class="w-full h-64 object-contain rounded-xl bg-gray-50">
            </div>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Largura:</span>
                <span class="text-primary-800 font-semibold">1,40m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Comprimento:</span>
                <span class="text-primary-800 font-semibold">1,90m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">0,56cm</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">R$ 3.500,00</div>
              <div class="text-sm text-primary-600">à vista ou parcelado</div>
            </div>

            <!-- Observações -->
            <div class="mb-6">
              <p class="text-primary-700 font-medium">Obs.: Cama-Rustic-Bordada sem o Colchão</p>
            </div>

            <!-- Cálculo do Preço -->
            <div class="bg-primary-50 rounded-lg p-4 mb-6">
              <h4 class="text-lg font-semibold text-primary-800 mb-3">Cálculo do Preço:</h4>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span>Largura × Comprimento:</span>
                  <span>1.40m × 1.90m</span>
                </div>
                <div class="flex justify-between">
                  <span>(R$ 3500.00):</span>
                  <span>R$ 3.500,00</span>
                </div>
                <div class="flex justify-between">
                  <span>Tipo:</span>
                  <span>Cama Rustic Bordada</span>
                </div>
                <hr class="my-2">
                <div class="flex justify-between font-bold text-lg">
                  <span>Valor Total:</span>
                  <span>R$ 3.500,00</span>
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
                  required
                  class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <!-- WhatsApp -->
              <div>
                <label class="block text-primary-600 font-medium mb-2">WhatsApp</label>
                <input
                  v-model="formData.whatsapp"
                  type="tel"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <!-- Observações -->
              <div>
                <label class="block text-primary-600 font-medium mb-2">Observações</label>
                <textarea
                  v-model="formData.description"
                  rows="4"
                  class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 resize-vertical"
                  placeholder="Observações adicionais sobre a encomenda..."
                ></textarea>
              </div>

              <!-- Botão de Envio -->
              <button
                type="submit"
                :disabled="isSubmitting"
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
import { ref } from 'vue'

// Dados do formulário
const formData = ref({
  name: '',
  whatsapp: '',
  description: ''
})

const isSubmitting = ref(false)

// Enviar encomenda
const submitOrder = async () => {
  if (!formData.value.name || !formData.value.whatsapp) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }

  isSubmitting.value = true

  try {
    // Construir mensagem do WhatsApp
    const message = `PRODUTO QUE EU QUERO COMPRAR: 

Produto: Cama-Rustic-Bordada
Largura: 1,40m
Comprimento: 1,90m
Altura: 0,56cm
★ VALOR TOTAL: R$ 3.500,00 

📋 DADOS DO CLIENTE: 
Nome: ${formData.value.name || '[ ]'}
WhatsApp: ${formData.value.whatsapp || '[ ]'}
Observações: ${formData.value.description || '[ ]'}`

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message)

    // Abrir WhatsApp com a mensagem
    window.open(`https://wa.me/5596981379746?text=${encodedMessage}`, '_blank')

    // Limpar formulário
    formData.value.name = ''
    formData.value.whatsapp = ''
    formData.value.description = ''

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