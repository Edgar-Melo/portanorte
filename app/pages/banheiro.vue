<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-primary-800">Porta Norte - Móveis para Banheiro</h1>
          <button
            @click="$router.push('/')"
            class="bg-primary-200 hover:bg-primary-300 text-primary-800 px-4 py-2 rounded-lg transition duration-300"
          >
            ← Voltar ao Início
          </button>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-6 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Título da Página -->
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Móveis para Banheiro
          </h2>
          <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
            Transforme seu banheiro com móveis funcionais e elegantes.
            Organização e estilo para seu espaço pessoal.
          </p>
        </div>

        <!-- Grid de Produtos -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Armário de Banheiro -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <div class="w-full h-32 bg-primary-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/400/300?random=19" alt="Armário de Banheiro" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 mb-2">Armário de Banheiro</h3>
            <p class="text-primary-700 mb-4 text-sm leading-relaxed">
              Armário com portas e gavetas. Dimensões: 80x50x180cm. Espaço para toalhas e produtos.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-800">R$ 1.200,00</span>
              <NuxtLink
                to="/encomendas-banheiro"
                class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                Encomendar
              </NuxtLink>
            </div>
          </div>

          <!-- Espelho com Nicho -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <div class="w-full h-32 bg-primary-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/400/300?random=20" alt="Espelho com Nicho" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 mb-2">Espelho com Nicho</h3>
            <p class="text-primary-700 mb-4 text-sm leading-relaxed">
              Espelho iluminado com nicho integrado. Dimensões: 60x80cm. Perfeito para organização.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-800">R$ 450,00</span>
              <NuxtLink
                to="/encomendas-banheiro"
                class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                Encomendar
              </NuxtLink>
            </div>
          </div>

          <!-- Prateleira de Canto -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <div class="w-full h-32 bg-primary-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/400/300?random=21" alt="Prateleira de Canto" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 mb-2">Prateleira de Canto</h3>
            <p class="text-primary-700 mb-4 text-sm leading-relaxed">
              Prateleira triangular para canto. 3 níveis de armazenamento. Dimensões: 30x30x90cm.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-800">R$ 280,00</span>
              <NuxtLink
                to="/encomendas-banheiro"
                class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                Encomendar
              </NuxtLink>
            </div>
          </div>

          <!-- Cabideiro de Parede -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <div class="w-full h-32 bg-primary-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/400/300?random=22" alt="Cabideiro de Parede" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 mb-2">Cabideiro de Parede</h3>
            <p class="text-primary-700 mb-4 text-sm leading-relaxed">
              Cabideiro com 4 ganchos duplos. Perfeito para toalhas e roupões. Largura: 60cm.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-800">R$ 180,00</span>
              <NuxtLink
                to="/encomendas-banheiro"
                class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                Encomendar
              </NuxtLink>
            </div>
          </div>

          <!-- Bancada com Pia -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <div class="w-full h-32 bg-primary-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/400/300?random=23" alt="Bancada com Pia" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 mb-2">Bancada com Pia</h3>
            <p class="text-primary-700 mb-4 text-sm leading-relaxed">
              Bancada completa com cuba integrada. Dimensões: 120x50x85cm. Inclui torneira e sifão.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-800">R$ 2.800,00</span>
              <NuxtLink
                to="/encomendas-banheiro"
                class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                Encomendar
              </NuxtLink>
            </div>
          </div>

          <!-- Porta Toalhas -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <div class="w-full h-32 bg-primary-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/400/300?random=24" alt="Porta Toalhas" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 mb-2">Porta Toalhas</h3>
            <p class="text-primary-700 mb-4 text-sm leading-relaxed">
              Suporte para toalhas com design elegante. Capacidade para 2 toalhas. Altura: 60cm.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-800">R$ 120,00</span>
              <NuxtLink
                to="/encomendas-banheiro"
                class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                Encomendar
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Seção de Destaque -->
        <div class="bg-primary-50 rounded-2xl p-8 mb-12">
          <div class="text-center">
            <h3 class="text-3xl font-bold text-primary-800 mb-4">Por que escolher nossos móveis para banheiro?</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-primary-800 mb-2">Resistência à Umidade</h4>
                <p class="text-primary-700">Materiais especiais resistentes à umidade e fungos.</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-primary-800 mb-2">Fácil Limpeza</h4>
                <p class="text-primary-700">Superfícies lisas e tratadas para limpeza rápida e eficiente.</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-primary-800 mb-2">Personalização</h4>
                <p class="text-primary-700">Adapte cores e medidas às necessidades do seu banheiro.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div id="call-to-action-banheiro" class="text-center">
          <h3 class="text-3xl font-bold text-primary-800 mb-4">Pronto para transformar seu banheiro?</h3>
          <p class="text-xl text-primary-700 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e solicite uma cotação personalizada para seus móveis de banheiro.
          </p>
          <NuxtLink
            to="/encomendas-banheiro"
            class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg inline-block"
          >
            Solicitar Cotação
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Página de produtos para banheiro
</script>
