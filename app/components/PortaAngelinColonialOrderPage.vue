<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-primary-800">Porta Norte - Porta-Angelin-Colonial</h1>
          <button
            @click="$router.push('/portas')"
            class="bg-primary-200 hover:bg-primary-300 text-primary-800 px-4 py-2 rounded-lg transition duration-300"
          >
            ← Voltar às Portas
          </button>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-6 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Título da Página -->
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Porta-Angelin-Colonial
          </h2>
          <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
            Escolha a largura desejada e veja o valor final do seu produto personalizado.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Informações do Produto -->
          <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
            <h3 class="text-2xl font-bold text-primary-800 mb-6">Informações do Produto</h3>

            <!-- Imagem do Produto -->
            <div class="mb-6">
              <img
                src="/img/Porta-Angelin-Colonial.png"
                alt="Porta-Angelin-Colonial"
                class="w-full h-64 object-contain rounded-xl bg-gray-50"
              />
            </div>

            <!-- Especificações -->
            <div class="space-y-4 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Nome:</span>
                <span class="text-primary-800 font-semibold">Porta-Angelin-Colonial</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.10m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Espessura:</span>
                <span class="text-primary-800 font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Larguras Disponíveis -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold text-primary-800 mb-3">Larguras Disponíveis:</h4>
              <div class="grid grid-cols-3 gap-3">
                <button
                  v-for="largura in largurasDisponiveis"
                  :key="largura.value"
                  @click="selecionarLargura(largura)"
                  :class="[
                    'py-3 px-4 rounded-lg font-semibold transition duration-300 text-center',
                    larguraSelecionada?.value === largura.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-primary-100 hover:bg-primary-200 text-primary-800'
                  ]"
                >
                  {{ largura.label }}
                </button>
              </div>
            </div>

            <!-- Cálculo do Preço -->
            <div v-if="larguraSelecionada" class="bg-primary-50 rounded-lg p-4 mb-6">
              <h4 class="text-lg font-semibold text-primary-800 mb-3">Cálculo do Preço:</h4>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span>Área ({{ altura }}m × {{ larguraSelecionada.value }}m):</span>
                  <span>{{ area.toFixed(2) }}m²</span>
                </div>
                <div class="flex justify-between">
                  <span>Valor base (R$ 700,00/m²):</span>
                  <span>R$ {{ valorBase.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Completa: <strong>Porta + Batedor</strong></span>
                </div>
                <hr class="my-2">
                <div class="flex justify-between font-bold text-lg">
                  <span>Valor Total:</span>
                  <span>R$ {{ valorTotal.toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulário de Encomenda -->
          <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
            <h3 class="text-2xl font-bold text-primary-800 mb-6">Finalizar Encomenda</h3>

            <form @submit.prevent="submitOrder" class="space-y-6">
              <!-- Largura Selecionada -->
              <div v-if="larguraSelecionada">
                <label class="block text-primary-600 font-medium mb-2">Largura Selecionada</label>
                <div class="w-full px-4 py-3 rounded-lg bg-primary-50 border border-primary-200 text-primary-800 font-semibold">
                  {{ larguraSelecionada.label }} - Valor: R$ {{ valorTotal.toFixed(2) }}
                </div>
              </div>

              <!-- Nome do Cliente -->
              <div>
                <label class="block text-primary-600 font-medium mb-2">Nome Completo *</label>
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
                <label class="block text-primary-600 font-medium mb-2">WhatsApp *</label>
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
                  v-model="formData.observations"
                  rows="4"
                  class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 resize-vertical"
                  placeholder="Observações adicionais sobre a encomenda..."
                ></textarea>
              </div>

              <!-- Botão de Envio -->
              <button
                type="submit"
                :disabled="!larguraSelecionada"
                class="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition duration-300"
              >
                {{ larguraSelecionada ? 'Enviar Encomenda' : 'Selecione uma largura' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Dados do produto
const altura = 2.10 // metros
const valorPorMetroQuadrado = 700
const adicionalGrande = 200

// Larguras disponíveis
const largurasDisponiveis = [
  { label: '0.80cm', value: 0.80 },
  { label: '0.83cm', value: 0.83 },
  { label: '0.93cm', value: 0.93 },
  { label: '1.00M', value: 1.00 },
  { label: '1.20M', value: 1.20 }
]

// Estado reativo
const larguraSelecionada = ref(null)
const formData = ref({
  name: '',
  whatsapp: '',
  observations: ''
})

// Computeds para cálculos
const area = computed(() => {
  if (!larguraSelecionada.value) return 0
  return altura * larguraSelecionada.value.value
})

const valorBase = computed(() => {
  return area.value * valorPorMetroQuadrado
})

const valorTotal = computed(() => {
  let total = valorBase.value
  if (larguraSelecionada.value) {
    total += adicionalGrande
  }
  return total
})

// Funções
const selecionarLargura = (largura) => {
  larguraSelecionada.value = largura
}

const submitOrder = () => {
  if (!larguraSelecionada.value) {
    alert('Por favor, selecione uma largura antes de enviar a encomenda.')
    return
  }

  // Aqui você pode implementar o envio para WhatsApp ou backend
  const mensagem = `Olá! Gostaria de encomendar uma Porta-Angelin-Colonial com as seguintes especificações:

📏 Largura: ${larguraSelecionada.value.label}
📏 Altura: ${altura}m
📏 Área: ${area.value.toFixed(2)}m²
💰 Valor Total: R$ ${valorTotal.value.toFixed(2)}

👤 Nome: ${formData.value.name}
📱 WhatsApp: ${formData.value.whatsapp}
📝 Observações: ${formData.value.observations || 'Nenhuma'}`

  // Codificar a mensagem para URL
  const mensagemEncoded = encodeURIComponent(mensagem)
  const whatsappUrl = `https://wa.me/5596984263674?text=${mensagemEncoded}`

  // Abrir WhatsApp
  window.open(whatsappUrl, '_blank')

  // Resetar formulário
  formData.value = {
    name: '',
    whatsapp: '',
    observations: ''
  }
  larguraSelecionada.value = null
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>