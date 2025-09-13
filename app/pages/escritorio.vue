<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-primary-800">Porta Norte - Móveis para Escritório</h1>
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
            Móveis para Escritório
          </h2>
          <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
            Transforme seu espaço de trabalho com móveis funcionais e elegantes.
            Produtividade e conforto para seu dia a dia profissional.
          </p>
        </div>

        <!-- Grid de Produtos -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Mesa de Escritório -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <div class="w-full h-32 bg-primary-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/400/300?random=25" alt="Mesa de Escritório" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 mb-2">Mesa de Escritório</h3>
            <p class="text-primary-700 mb-4 text-sm leading-relaxed">
              Mesa funcional com gavetas e espaço para computador. Dimensões: 120x60x75cm.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-800">R$ 1.800,00</span>
              <NuxtLink
                to="/encomendas-escritorio"
                class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                Encomendar
              </NuxtLink>
            </div>
          </div>

          <!-- Cadeira de Escritório -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <div class="w-full h-32 bg-primary-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/400/300?random=26" alt="Cadeira de Escritório" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 mb-2">Cadeira de Escritório</h3>
            <p class="text-primary-700 mb-4 text-sm leading-relaxed">
              Cadeira ergonômica com ajuste de altura e encosto reclinável. Conforto máximo.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-800">R$ 950,00</span>
              <NuxtLink
                to="/encomendas-escritorio"
                class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                Encomendar
              </NuxtLink>
            </div>
          </div>

          <!-- Estante para Livros -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <div class="w-full h-32 bg-primary-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/400/300?random=27" alt="Estante para Livros" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 mb-2">Estante para Livros</h3>
            <p class="text-primary-700 mb-4 text-sm leading-relaxed">
              Estante modular com 5 prateleiras. Organização perfeita para seus livros e documentos.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-800">R$ 1.200,00</span>
              <NuxtLink
                to="/encomendas-escritorio"
                class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                Encomendar
              </NuxtLink>
            </div>
          </div>

          <!-- Armário Arquivo -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <div class="w-full h-32 bg-primary-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/400/300?random=28" alt="Armário Arquivo" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 mb-2">Armário Arquivo</h3>
            <p class="text-primary-700 mb-4 text-sm leading-relaxed">
              Armário com gavetas organizadoras. Perfeito para armazenar documentos importantes.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-800">R$ 2.100,00</span>
              <NuxtLink
                to="/encomendas-escritorio"
                class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                Encomendar
              </NuxtLink>
            </div>
          </div>

          <!-- Mesa Auxiliar -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <div class="w-full h-32 bg-primary-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/400/300?random=29" alt="Mesa Auxiliar" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 mb-2">Mesa Auxiliar</h3>
            <p class="text-primary-700 mb-4 text-sm leading-relaxed">
              Mesa compacta para computador secundário ou impressora. Dimensões: 80x50x75cm.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-800">R$ 650,00</span>
              <NuxtLink
                to="/encomendas-escritorio"
                class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                Encomendar
              </NuxtLink>
            </div>
          </div>

          <!-- Suporte para Monitor -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            <div class="w-full h-32 bg-primary-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/400/300?random=30" alt="Suporte para Monitor" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </div>
            <h3 class="text-xl font-bold text-primary-800 mb-2">Suporte para Monitor</h3>
            <p class="text-primary-700 mb-4 text-sm leading-relaxed">
              Suporte ergonômico ajustável para monitores de até 27". Altura e ângulo reguláveis.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary-800">R$ 380,00</span>
              <NuxtLink
                to="/encomendas-escritorio"
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
            <h3 class="text-3xl font-bold text-primary-800 mb-4">Por que escolher nossos móveis para escritório?</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-primary-800 mb-2">Qualidade Superior</h4>
                <p class="text-primary-700">Materiais nobres e acabamento impecável para durar anos.</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-primary-800 mb-2">Ergonomia</h4>
                <p class="text-primary-700">Design ergonômico para maior conforto e produtividade.</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-primary-800 mb-2">Personalização</h4>
                <p class="text-primary-700">Adapte as medidas e acabamentos às suas necessidades.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div id="call-to-action-escritorio" class="text-center">
          <h3 class="text-3xl font-bold text-primary-800 mb-4">Pronto para transformar seu escritório?</h3>
          <p class="text-xl text-primary-700 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e solicite uma cotação personalizada para seus móveis de escritório.
          </p>
          <NuxtLink
            to="/encomendas-escritorio"
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
// Página de produtos para escritório
</script>
