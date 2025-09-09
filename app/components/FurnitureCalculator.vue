<template>
  <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
    <h2 class="text-3xl font-bold text-primary-800 mb-6 text-center">
      Calculadora de Móveis
    </h2>
    <p class="text-primary-700 mb-8 text-center">
      Calcule o valor estimado da sua encomenda
    </p>

    <div class="space-y-6">
      <!-- Input Largura -->
      <div>
        <label class="flex items-center text-primary-800 font-medium mb-2">
          <ArrowsRightLeftIcon class="w-5 h-5 mr-2" />
          Largura (metros)
        </label>
        <input
          v-model.number="width"
          type="number"
          step="0.01"
          class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90"
          placeholder="Ex: 1.50"
        >
      </div>

      <!-- Input Altura -->
      <div>
        <label class="flex items-center text-primary-800 font-medium mb-2">
          <ArrowsUpDownIcon class="w-5 h-5 mr-2" />
          Altura (metros)
        </label>
        <input
          v-model.number="height"
          type="number"
          step="0.01"
          class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90"
          placeholder="Ex: 2.00"
        >
      </div>

      <!-- Resultado -->
      <div class="mt-8 p-4 bg-primary-200 rounded-lg border border-primary-400">
        <h3 class="text-primary-800 font-semibold mb-2">Valor Estimado:</h3>
        <p class="text-2xl font-bold text-primary-800">R$ {{ ((result || 0)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</p>
        <p class="text-sm text-primary-600 mt-2">
          Área: {{ ((area || 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} m²
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowsRightLeftIcon, ArrowsUpDownIcon } from '@heroicons/vue/24/outline'

// Dados reativos para Móveis
const width = ref(0)
const height = ref(0)

// Cálculo da área para Móveis
const area = computed(() => width.value * height.value)

// Resultado final para Móveis
const result = computed(() => {
  if (width.value > 0 && height.value > 0) {
    return area.value * 1700
  }
  return null
})
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
