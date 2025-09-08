<template>
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
          <ArrowsRightLeftIcon class="w-5 h-5 mr-2" />
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
          <ArrowsUpDownIcon class="w-5 h-5 mr-2" />
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
      <div class="mt-8 p-4 bg-primary-600 bg-opacity-20 rounded-lg border border-primary-500">
        <h3 class="text-white font-semibold mb-2">Valor Estimado:</h3>
        <p class="text-2xl font-bold text-white">R$ {{ ((result || 0)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</p>
        <p class="text-sm text-neutral-200 mt-2">
          Área: {{ ((area || 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} m²
          <span v-if="extra > 0">+ R$ {{ ((extra || 0)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} (largura ≥ 1m)</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowsRightLeftIcon, ArrowsUpDownIcon } from '@heroicons/vue/24/outline'

// Dados reativos para Portas
const width = ref(0)
const height = ref(0)

// Cálculo da área para Portas
const area = computed(() => width.value * height.value)

// Extra para portas (se largura >= 1m)
const extra = computed(() => width.value >= 1 ? 200 : 0)

// Resultado final para Portas
const result = computed(() => {
  if (width.value > 0 && height.value > 0) {
    return (area.value * 700) + extra.value
  }
  return null
})
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
