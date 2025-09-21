<template>
  <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 min-h-[400px] flex flex-col justify-between">
    <div>
      <div class="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
        <HomeIcon class="w-10 h-10 text-primary-800" />
      </div>
      <h3 class="text-2xl font-bold text-primary-800 mb-4">Portas</h3>
      <p class="text-primary-700 mb-6 leading-relaxed text-justify">
        Portas de madeira maciça com design elegante e acabamento perfeito.
        Variedade de estilos e tamanhos para todos os ambientes.
      </p>
    </div>
    <NuxtLink to="/portas" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full text-center">Ver Detalhes</NuxtLink>
  </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
/* Estilos específicos para o card de portas */
</style>
