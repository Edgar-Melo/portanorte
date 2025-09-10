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
            <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
              </svg>
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
            <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
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
            <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
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
            <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
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
            <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
              </svg>
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
            <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
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
        <div class="text-center">
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
