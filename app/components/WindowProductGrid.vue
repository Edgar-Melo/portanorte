<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Janela Modelo 1 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="porta-zoom-container w-full h-96 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
          <img 
            src="/img/Janela-Angelin-Tradicional.png" 
            alt="Janela-Angelin-Tradicional" 
            class="porta-zoom-image w-full h-full object-contain cursor-pointer"
          />
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela-Angelin-Tradicional</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">1.00m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">1.00m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <ButtonPrimary @click="$router.push('/encomenda-janela-angelin-tradicional')" class="w-full">Comprar Agora</ButtonPrimary>
      </div>
    </div>
    <!-- Janela Modelo 2 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div 
          class="porta-zoom-container w-full h-96 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative"
        >
          <img 
            src="/img/Janela-Macacaúba-Horizonte.png" 
            alt="Janela-Macacaúba-Horizonte" 
            class="porta-zoom-image w-full h-full object-contain cursor-pointer"
          />
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela-Macacaúba-Horizonte</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">1.00m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">1.00m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <ButtonPrimary @click="$router.push('/encomenda-janela-angelin-tradicional')" class="w-full">Comprar Agora</ButtonPrimary>
      </div>
    </div>
    <!-- Janela Modelo 3 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="porta-zoom-container w-full h-96 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
          <img src="/img/Janela-Angelin-Colonial.png" alt="Janela-Angelin-Colonial" class="porta-zoom-image w-full h-full object-contain cursor-pointer">
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela-Angelin-Colonial</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">1.20m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">1m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <ButtonPrimary @click="$router.push('/encomenda-janela-angelin-tradicional')" class="w-full">Comprar Agora</ButtonPrimary>
      </div>
    </div>
    <!-- Janela Modelo 4 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          <span class="text-primary-600 font-medium">Imagem em breve</span>
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela com Vidro</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">1.20m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">0.90m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <div class="mb-6">
          <div class="text-3xl font-bold text-primary-800 mb-2">R$ 1.000,00</div>
          <div class="text-sm text-primary-600">à vista ou parcelado</div>
        </div>
        <ButtonSecondary @click="$router.push('/encomendas-janelas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
      </div>
    </div>
    <!-- Janela Modelo 5 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          <span class="text-primary-600 font-medium">Imagem em breve</span>
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela Francesa</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">2.00m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">1.50m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <div class="mb-6">
          <div class="text-3xl font-bold text-primary-800 mb-2">R$ 1.800,00</div>
          <div class="text-sm text-primary-600">à vista ou parcelado</div>
        </div>
        <ButtonSecondary @click="$router.push('/encomendas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
      </div>
    </div>
    <!-- Janela Modelo 6 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          <span class="text-primary-600 font-medium">Imagem em breve</span>
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela de Serviço</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">0.80m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">0.50m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <div class="mb-6">
          <div class="text-3xl font-bold text-primary-800 mb-2">R$ 400,00</div>
          <div class="text-sm text-primary-600">à vista ou parcelado</div>
        </div>
        <ButtonSecondary @click="$router.push('/encomendas-janelas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import ButtonSecondary from '~/components/ButtonSecondary.vue'
</script>

<style scoped>
/* Estilos para o container da imagem */
.porta-zoom-container {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  cursor: default;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.porta-zoom-image {
  transition: opacity 0.3s ease;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
