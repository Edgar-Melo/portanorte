<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">Nossos Móveis para Sala</h2>
          <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
            Descubra nossa ampla gama de móveis para sala de estar. Cada peça é feita com dedicação e atenção aos detalhes para o seu lar.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Móvel Modelo 1 -->
          <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
            <div class="text-center">
              <!-- Imagem do produto -->
              <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <span class="text-primary-600 font-medium">Imagem em breve</span>
              </div>
              <!-- Nome do móvel -->
              <h3 class="text-2xl font-bold text-primary-800 mb-4">Sofá 3 Lugares</h3>
              <!-- Especificações -->
              <div class="space-y-3 mb-6">
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Largura:</span>
                  <span class="text-primary-800 font-semibold">2.20m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Profundidade:</span>
                  <span class="text-primary-800 font-semibold">0.90m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Altura:</span>
                  <span class="text-primary-800 font-semibold">0.85m</span>
                </div>
              </div>
              <!-- Preço -->
              <div class="mb-6">
                <div class="text-3xl font-bold text-primary-800 mb-2">R$ 2.500,00</div>
                <div class="text-sm text-primary-600">à vista ou parcelado</div>
              </div>
              <!-- Botão -->
              <NuxtLink to="/encomendas-sala" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full text-center">Solicitar Orçamento</NuxtLink>
            </div>
          </div>

          <!-- Móvel Modelo 2 -->
          <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
            <div class="text-center">
              <!-- Imagem do produto -->
              <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <span class="text-primary-600 font-medium">Imagem em breve</span>
              </div>
              <!-- Nome do móvel -->
              <h3 class="text-2xl font-bold text-primary-800 mb-4">Mesa de Centro</h3>
              <!-- Especificações -->
              <div class="space-y-3 mb-6">
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Largura:</span>
                  <span class="text-primary-800 font-semibold">1.20m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Profundidade:</span>
                  <span class="text-primary-800 font-semibold">0.60m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Altura:</span>
                  <span class="text-primary-800 font-semibold">0.45m</span>
                </div>
              </div>
              <!-- Preço -->
              <div class="mb-6">
                <div class="text-3xl font-bold text-primary-800 mb-2">R$ 800,00</div>
                <div class="text-sm text-primary-600">à vista ou parcelado</div>
              </div>
              <!-- Botão -->
              <NuxtLink to="/encomendas-sala" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full text-center">Solicitar Orçamento</NuxtLink>
            </div>
          </div>

          <!-- Móvel Modelo 3 -->
          <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
            <div class="text-center">
              <!-- Imagem do produto -->
              <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <span class="text-primary-600 font-medium">Imagem em breve</span>
              </div>
              <!-- Nome do móvel -->
              <h3 class="text-2xl font-bold text-primary-800 mb-4">Estante Modular</h3>
              <!-- Especificações -->
              <div class="space-y-3 mb-6">
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Largura:</span>
                  <span class="text-primary-800 font-semibold">1.80m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Profundidade:</span>
                  <span class="text-primary-800 font-semibold">0.35m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Altura:</span>
                  <span class="text-primary-800 font-semibold">2.00m</span>
                </div>
              </div>
              <!-- Preço -->
              <div class="mb-6">
                <div class="text-3xl font-bold text-primary-800 mb-2">R$ 1.800,00</div>
                <div class="text-sm text-primary-600">à vista ou parcelado</div>
              </div>
              <!-- Botão -->
              <NuxtLink to="/encomendas-sala" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full text-center">Solicitar Orçamento</NuxtLink>
            </div>
          </div>

          <!-- Móvel Modelo 4 -->
          <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
            <div class="text-center">
              <!-- Imagem do produto -->
              <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <span class="text-primary-600 font-medium">Imagem em breve</span>
              </div>
              <!-- Nome do móvel -->
              <h3 class="text-2xl font-bold text-primary-800 mb-4">Poltrona</h3>
              <!-- Especificações -->
              <div class="space-y-3 mb-6">
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Largura:</span>
                  <span class="text-primary-800 font-semibold">0.80m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Profundidade:</span>
                  <span class="text-primary-800 font-semibold">0.85m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Altura:</span>
                  <span class="text-primary-800 font-semibold">0.90m</span>
                </div>
              </div>
              <!-- Preço -->
              <div class="mb-6">
                <div class="text-3xl font-bold text-primary-800 mb-2">R$ 1.200,00</div>
                <div class="text-sm text-primary-600">à vista ou parcelado</div>
              </div>
              <!-- Botão -->
              <NuxtLink to="/encomendas-sala" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full text-center">Solicitar Orçamento</NuxtLink>
            </div>
          </div>

          <!-- Móvel Modelo 5 -->
          <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
            <div class="text-center">
              <!-- Imagem do produto -->
              <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <span class="text-primary-600 font-medium">Imagem em breve</span>
              </div>
              <!-- Nome do móvel -->
              <h3 class="text-2xl font-bold text-primary-800 mb-4">Mesa Lateral</h3>
              <!-- Especificações -->
              <div class="space-y-3 mb-6">
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Largura:</span>
                  <span class="text-primary-800 font-semibold">0.50m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Profundidade:</span>
                  <span class="text-primary-800 font-semibold">0.50m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Altura:</span>
                  <span class="text-primary-800 font-semibold">0.55m</span>
                </div>
              </div>
              <!-- Preço -->
              <div class="mb-6">
                <div class="text-3xl font-bold text-primary-800 mb-2">R$ 400,00</div>
                <div class="text-sm text-primary-600">à vista ou parcelado</div>
              </div>
              <!-- Botão -->
              <NuxtLink to="/encomendas-sala" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full text-center">Solicitar Orçamento</NuxtLink>
            </div>
          </div>

          <!-- Móvel Modelo 6 -->
          <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
            <div class="text-center">
              <!-- Imagem do produto -->
              <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <span class="text-primary-600 font-medium">Imagem em breve</span>
              </div>
              <!-- Nome do móvel -->
              <h3 class="text-2xl font-bold text-primary-800 mb-4">Rack para TV</h3>
              <!-- Especificações -->
              <div class="space-y-3 mb-6">
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Largura:</span>
                  <span class="text-primary-800 font-semibold">1.60m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Profundidade:</span>
                  <span class="text-primary-800 font-semibold">0.40m</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-primary-600 font-medium">Altura:</span>
                  <span class="text-primary-800 font-semibold">0.60m</span>
                </div>
              </div>
              <!-- Preço -->
              <div class="mb-6">
                <div class="text-3xl font-bold text-primary-800 mb-2">R$ 1.500,00</div>
                <div class="text-sm text-primary-600">à vista ou parcelado</div>
              </div>
              <!-- Botão -->
              <NuxtLink to="/encomendas-sala" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full text-center">Solicitar Orçamento</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div id="call-to-action-sala" class="text-center mt-16">
          <div class="bg-primary-200 rounded-2xl p-8 text-primary-800 max-w-4xl mx-auto">
            <h3 class="text-3xl font-bold mb-4">Não encontrou o que procura?</h3>
            <p class="text-xl mb-6 text-primary-700">
              Temos opções personalizadas para qualquer necessidade. Entre em contato para um orçamento sob medida.
            </p>
            <button @click="$router.push('/encomendas-sala')" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">Faça um Orçamento</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// const openWhatsApp = () => {
//   const phoneNumber = '5596981379746'
//   const message = 'Olá! Gostaria de saber mais sobre os móveis para sala da Porta Norte.'
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
//   window.open(whatsappUrl, '_blank')
// }
</script>

<style scoped>
/* Estilos específicos para a página de sala */
</style>
