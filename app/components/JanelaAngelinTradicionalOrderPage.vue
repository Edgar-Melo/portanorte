<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-primary-800">Porta Norte - Janela-Macacaúba-Horizonte</h1>
          <button
            @click="$router.push('/janelas')"
            class="bg-primary-200 hover:bg-primary-300 text-primary-800 px-4 py-2 rounded-lg transition duration-300"
          >
            ← Voltar às Janelas
          </button>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-6 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Título da Página -->
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Janela-Macacaúba-Horizonte
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
                src="/img/Janela-Macacaúba-Horizonte.png"
                alt="Janela-Macacaúba-Horizonte"
                class="w-full h-64 object-contain rounded-xl bg-gray-50"
              />
            </div>

            <!-- Especificações -->
            <div class="space-y-4 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Nome:</span>
                <span class="text-primary-800 font-semibold">Janela-Macacaúba-Horizonte</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">1m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Espessura:</span>
                3,5cm
              </div>
            </div>

            <!-- Larguras Disponíveis -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold text-primary-800 mb-3">Larguras Disponíveis:</h4>
              <div class="grid grid-cols-3 gap-3">
                <button
                  v-for="largura in larguras"
                  :key="largura"
                  @click="selecionarLargura(largura)"
                  :class="[
                    'py-3 px-4 rounded-lg font-semibold transition duration-300 text-center',
                    larguraSelecionada === largura
                      ? 'bg-primary-600 text-white'
                      : 'bg-primary-100 hover:bg-primary-200 text-primary-800'
                  ]"
                >
                  {{ largura }}
                </button>
              </div>
            </div>

            <!-- Cálculo do Preço -->
            <div v-if="larguraSelecionada" class="bg-primary-50 rounded-lg p-4 mb-6">
              <h4 class="text-lg font-semibold text-primary-800 mb-3">Cálculo do Preço:</h4>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span>Área ({{ altura.toFixed(2) }}m × {{ larguraEmMetros.toFixed(2) }}m):</span>
                  <span>{{ area.toFixed(2) }}m²</span>
                </div>
                <div class="flex justify-between">
                  <span>Valor base (R$ {{ PRECO_POR_METRO_QUADRADO.toFixed(2) }}/m²):</span>
                  <span>R$ {{ area.value ? (area.value * PRECO_POR_METRO_QUADRADO).toFixed(2) : '0.00' }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Tipo: <strong>Janela Completa</strong></span>
                </div>
                <hr class="my-2">
                <div class="flex justify-between font-bold text-lg">
                  <span>Valor Total:</span>
                  <span>R$ {{ precoCalculado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulário de Encomenda -->
          <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
            <h3 class="text-2xl font-bold text-primary-800 mb-6">Finalizar Encomenda</h3>
            <form @submit.prevent="enviarEncomenda" class="space-y-6">
              <!-- Largura Selecionada -->
              <div v-if="larguraSelecionada">
                <label class="block text-primary-600 font-medium mb-2">Largura Selecionada:</label>
                <div class="bg-primary-50 px-4 py-3 rounded-lg font-semibold text-primary-800">
                  {{ larguraSelecionada }}
                </div>
              </div>

              <!-- Nome do Cliente -->
              <div>
                <label class="block text-primary-600 font-medium mb-2">Nome Completo</label>
                <input
                  v-model="form.nome"
                  type="text"
                  class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <!-- WhatsApp -->
              <div>
                <label class="block text-primary-600 font-medium mb-2">WhatsApp</label>
                <input
                  v-model="form.whatsapp"
                  type="tel"
                  class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <!-- Observações -->
              <div>
                <label class="block text-primary-600 font-medium mb-2">Observações</label>
                <textarea
                  v-model="form.observacoes"
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
                {{ larguraSelecionada ? 'Enviar Pedido' : 'Selecione uma largura' }}
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

// Larguras disponíveis para a Janela-Angelin-Tradicional
const larguras = ['1m']

// Estado reativo
const larguraSelecionada = ref('')
const form = ref({
  nome: '',
  whatsapp: '',
  observacoes: ''
})

// Constantes para cálculo
const altura = 1.0 // metros
const PRECO_POR_METRO_QUADRADO = 550.00

// Largura em metros (convertida de cm)
const larguraEmMetros = computed(() => {
  if (!larguraSelecionada.value) return 0
  return parseFloat(larguraSelecionada.value.replace('m', ''))
})

// Área calculada
const area = computed(() => {
  return altura * larguraEmMetros.value
})

// Preço calculado baseado na largura selecionada
const precoCalculado = computed(() => {
  if (!larguraSelecionada.value) return 0
  return area.value * PRECO_POR_METRO_QUADRADO
})

// Função para selecionar largura
const selecionarLargura = (largura) => {
  larguraSelecionada.value = largura
}

// Função para enviar encomenda via WhatsApp
const enviarEncomenda = () => {
  if (!larguraSelecionada.value) {
    alert('Por favor, selecione uma largura.')
    return
  }

  // Alerta se campos obrigatórios estiverem vazios, mas permite continuar
  if (!form.value.nome || !form.value.whatsapp) {
    if (!confirm('Os campos de nome e WhatsApp estão vazios. Deseja continuar mesmo assim?')) {
      return
    }
  }

  const mensagem = `PRODUTO QUE EU QUERO COMPRAR:
Produto: Janela-Macacaúba-Horizonte
Largura: ${larguraSelecionada.value}
Altura: ${altura.toFixed(2)}m
Espessura: 3,5cm

📐 CÁLCULO TÉCNICO:
Área: ${area.value.toFixed(2)}m²
Valor base (R$ ${PRECO_POR_METRO_QUADRADO.toFixed(2)}/m²): R$ ${area.value ? (area.value * PRECO_POR_METRO_QUADRADO).toFixed(2) : '0.00'}
Tipo: Janela Completa

💰 VALOR TOTAL: R$ ${precoCalculado.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}

${form.value.nome ? `📋 DADOS DO CLIENTE:
Nome: ${form.value.nome}
WhatsApp: ${form.value.whatsapp}
` : ''}${form.value.observacoes ? `📝 Observações: ${form.value.observacoes}` : ''}`

  const numeroWhatsApp = '5596981379746' // Número correto do WhatsApp
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`

  window.open(url, '_blank')

  // Reset form
  larguraSelecionada.value = ''
  form.value = {
    nome: '',
    whatsapp: '',
    observacoes: ''
  }
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>