<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
          Nossos Móveis de Sala
        </h2>
        <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
          Descubra a nossa ampla gama de móveis de sala em madeira de alta qualidade. Cada peça é feita com dedicação e atenção aos detalhes para o seu lar.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Sofa 2 Lugares -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center">
              <HomeIcon class="w-16 h-16 text-primary-800" />
            </div>

            <!-- Nome do móvel -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Sofa 2 Lugares</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Comprimento:</span>
                <span class="text-primary-800 font-semibold">1.60m</span>
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
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 2.500,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <button @click="$router.push('/encomendas')" class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full">Solicitar Orçamento</button>
          </div>
        </div>

        <!-- Mesa de Centro -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center">
              <HomeIcon class="w-16 h-16 text-primary-800" />
            </div>

            <!-- Nome do móvel -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Mesa de Centro</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Comprimento:</span>
                <span class="text-primary-800 font-semibold">1.20m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Largura:</span>
                <span class="text-primary-800 font-semibold">0.60m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">0.45m</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 1.800,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Rack para TV -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center">
              <HomeIcon class="w-16 h-16 text-primary-800" />
            </div>

            <!-- Nome do móvel -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Rack para TV</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Comprimento:</span>
                <span class="text-primary-800 font-semibold">2.00m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Profundidade:</span>
                <span class="text-primary-800 font-semibold">0.40m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">1.80m</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 3.200,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Poltrona -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center">
              <HomeIcon class="w-16 h-16 text-primary-800" />
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
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 1.500,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Aparador -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center">
              <HomeIcon class="w-16 h-16 text-primary-800" />
            </div>

            <!-- Nome do móvel -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Aparador</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Comprimento:</span>
                <span class="text-primary-800 font-semibold">1.50m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Profundidade:</span>
                <span class="text-primary-800 font-semibold">0.45m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">0.90m</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 2.200,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Estante -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 bg-primary-200 rounded-xl mb-6 flex items-center justify-center">
              <HomeIcon class="w-16 h-16 text-primary-800" />
            </div>

            <!-- Nome do móvel -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Estante</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Largura:</span>
                <span class="text-primary-800 font-semibold">1.00m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Profundidade:</span>
                <span class="text-primary-800 font-semibold">0.30m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.00m</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 1.800,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-primary-200 rounded-2xl p-8 text-primary-800 max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold mb-4">Não encontrou o móvel ideal?</h3>
          <p class="text-xl mb-6 text-primary-700">
            Temos opções personalizadas de móveis de sala para qualquer necessidade.
            Entre em contato para um orçamento sob medida.
          </p>
          <ButtonPrimary @click="openWhatsApp">
            Fale Conosco
          </ButtonPrimary>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import ButtonSecondary from '~/components/ButtonSecondary.vue'
import { HomeIcon } from '@heroicons/vue/24/outline'

const openWhatsApp = () => {
  const phoneNumber = '5596981379746'
  const message = 'Olá! Gostaria de saber mais sobre os móveis da Porta Norte.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
