<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Janela Modelo 1 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          <img src="https://picsum.photos/400/300?random=31" alt="Janela Residencial" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela Residencial</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">1.20m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">0.80m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <div class="mb-6">
          <div class="text-3xl font-bold text-primary-800 mb-2">R$ 800,00</div>
          <div class="text-sm text-primary-600">à vista ou parcelado</div>
        </div>
        <NuxtLink to="/encomendas-janelas" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full">Solicitar Orçamento</NuxtLink>
      </div>
    </div>
    <!-- Janela Modelo 2 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          <img src="https://picsum.photos/400/300?random=32" alt="Janela de Correr" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela de Correr</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">1.50m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">1.20m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <div class="mb-6">
          <div class="text-3xl font-bold text-primary-800 mb-2">R$ 1.200,00</div>
          <div class="text-sm text-primary-600">à vista ou parcelado</div>
        </div>
        <ButtonSecondary @click="$router.push('/encomendas-janelas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
      </div>
    </div>
    <!-- Janela Modelo 3 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          <img src="https://picsum.photos/400/300?random=33" alt="Janela Basculante" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
        </div>
        <h3 class="text-2xl font-bold text-primary-800 mb-4">Janela Basculante</h3>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Altura:</span>
            <span class="text-primary-800 font-semibold">1.00m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Largura:</span>
            <span class="text-primary-800 font-semibold">0.60m</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-primary-600 font-medium">Espessura:</span>
            <span class="text-primary-800 font-semibold">3,5cm</span>
          </div>
        </div>
        <div class="mb-6">
          <div class="text-3xl font-bold text-primary-800 mb-2">R$ 600,00</div>
          <div class="text-sm text-primary-600">à vista ou parcelado</div>
        </div>
        <ButtonSecondary @click="$router.push('/encomendas-janelas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
      </div>
    </div>
    <!-- Janela Modelo 4 -->
    <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
      <div class="text-center">
        <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          <img src="https://picsum.photos/400/300?random=34" alt="Janela com Vidro" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
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
          <img src="https://picsum.photos/400/300?random=35" alt="Janela Francesa" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
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
          <img src="https://picsum.photos/400/300?random=36" alt="Janela de Serviço" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
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
import ButtonSecondary from '~/components/ButtonSecondary.vue'
</script>
