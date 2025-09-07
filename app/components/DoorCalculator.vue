<template>
  <section class="py-16">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Calculadora de Portas -->
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
          <h2 class="text-3xl font-bold text-white mb-6 text-center">
            Calculadora de Portas
          </h2>
          <p class="text-neutral-100 mb-8 text-center">
            Calcule o valor estimado da sua encomenda
          </p>

          <div class="space-y-6">
            <!-- Input Largura -->
            <div>
              <label class="flex items-center text-white font-medium mb-2">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"></path>
                </svg>
                Largura (metros)
              </label>
              <input
                v-model.number="width"
                type="number"
                step="0.01"
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90"
                placeholder="Tipo: 0.00"
              >
            </div>

            <!-- Input Altura -->
            <div>
              <label class="flex items-center text-white font-medium mb-2">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V4zM6 6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1V6z" clip-rule="evenodd"></path>
                </svg>
                Altura (metros)
              </label>
              <input
                v-model.number="height"
                type="number"
                step="0.01"
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90"
                placeholder="Tipo: 0.00"
              >
            </div>

            <!-- Resultado -->
            <div v-if="result !== null" class="mt-8 p-4 bg-primary-600 bg-opacity-20 rounded-lg border border-primary-500">
              <h3 class="text-white font-semibold mb-2">Valor Estimado:</h3>
              <p class="text-2xl font-bold text-white">R$ {{ ((result || 0)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</p>
              <p class="text-sm text-neutral-200 mt-2">
                Área: {{ ((area || 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} m²
                <span v-if="extra > 0">+ R$ {{ ((extra || 0)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} (largura ≥ 1m)</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Calculadora de Janelas -->
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
          <h2 class="text-3xl font-bold text-white mb-6 text-center">
            Calculadora de Janelas
          </h2>
          <p class="text-neutral-100 mb-8 text-center">
            Calcule o valor estimado da sua encomenda
          </p>

          <div class="space-y-6">
            <!-- Input Largura -->
            <div>
              <label class="flex items-center text-white font-medium mb-2">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"></path>
                </svg>
                Largura (metros)
              </label>
              <input
                v-model.number="width2"
                type="number"
                step="0.01"
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90"
                placeholder="Tipo: 0.00"
              >
            </div>

            <!-- Input Altura -->
            <div>
              <label class="flex items-center text-white font-medium mb-2">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V4zM6 6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1V6z" clip-rule="evenodd"></path>
                </svg>
                Altura (metros)
              </label>
              <input
                v-model.number="height2"
                type="number"
                step="0.01"
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90"
                placeholder="Tipo: 0.00"
              >
            </div>

            <!-- Resultado -->
            <div v-if="result2 !== null" class="mt-8 p-4 bg-primary-600 bg-opacity-20 rounded-lg border border-primary-500">
              <h3 class="text-white font-semibold mb-2">Valor Estimado:</h3>
              <p class="text-2xl font-bold text-white">R$ {{ ((result2 || 0)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</p>
              <p class="text-sm text-neutral-200 mt-2">
                Área: {{ ((area2 || 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} m²
              </p>
            </div>
          </div>
        </div>

        <!-- Calculadora de Móveis -->
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
          <h2 class="text-3xl font-bold text-white mb-6 text-center">
            Calculadora de Móveis
          </h2>
          <p class="text-neutral-100 mb-8 text-center">
            Calcule o valor estimado da sua encomenda
          </p>

          <div class="space-y-6">
            <!-- Input Largura -->
            <div>
              <label class="flex items-center text-white font-medium mb-2">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"></path>
                </svg>
                Largura (metros)
              </label>
              <input
                v-model.number="width3"
                type="number"
                step="0.01"
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90"
                placeholder="Tipo: 0.00"
              >
            </div>

            <!-- Input Altura -->
            <div>
              <label class="flex items-center text-white font-medium mb-2">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V4zM6 6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1V6z" clip-rule="evenodd"></path>
                </svg>
                Altura (metros)
              </label>
              <input
                v-model.number="height3"
                type="number"
                step="0.01"
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90"
                placeholder="Tipo: 0.00"
              >
            </div>

            <!-- Resultado -->
            <div v-if="result3 !== null" class="mt-8 p-4 bg-primary-600 bg-opacity-20 rounded-lg border border-primary-500">
              <h3 class="text-white font-semibold mb-2">Valor Estimado:</h3>
              <p class="text-2xl font-bold text-white">R$ {{ ((result3 || 0)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</p>
              <p class="text-sm text-neutral-200 mt-2">
                Área: {{ ((area3 || 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} m²
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Dados reativos para Portas
const width = ref(0)
const height = ref(0)

// Dados reativos para Janelas
const width2 = ref(0)
const height2 = ref(0)

// Cálculo da área para Portas
const area = computed(() => width.value * height.value)

// Extra para portas (se largura >= 1m)
const extra = computed(() => width.value >= 1 ? 200 : 0)

// Cálculo da área para Janelas
const area2 = computed(() => width2.value * height2.value)

// Resultado final para Portas
const result = computed(() => {
  if (width.value > 0 && height.value > 0) {
    return (area.value * 700) + extra.value
  }
  return null
})

// Dados reativos para Móveis
const width3 = ref(0)
const height3 = ref(0)

// Cálculo da área para Móveis
const area3 = computed(() => width3.value * height3.value)

// Resultado final para Móveis
const result3 = computed(() => {
  if (width3.value > 0 && height3.value > 0) {
    return area3.value * 1700
  }
  return null
})
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
