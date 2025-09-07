<template>
  <section class="py-20 bg-gradient-to-br from-primary-800 via-primary-500 to-primary-200 relative">
    <!-- Elementos decorativos de fundo -->
    <div class="absolute inset-0 bg-black bg-opacity-5"></div>
    <div class="absolute top-20 left-20 w-40 h-40 bg-accent-300 rounded-full opacity-10 blur-2xl"></div>
    <div class="absolute bottom-20 right-20 w-60 h-60 bg-primary-400 rounded-full opacity-10 blur-3xl"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Detalhes dos Produtos
        </h2>
        <p class="text-xl text-neutral-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Conheça nossas opções de portas personalizadas com medidas e preços específicos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Porta Modelo 1 -->
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 bg-gradient-to-br from-accent-400 to-primary-500 rounded-xl mb-6 flex items-center justify-center">
              <HomeIcon class="w-16 h-16 text-white" />
            </div>

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-white mb-4">Porta Residencial</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Altura:</span>
                <span class="text-white font-semibold">2.10m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Largura:</span>
                <span class="text-white font-semibold">0.80m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Espessura:</span>
                <span class="text-white font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-accent-300 mb-2">
                R$ 1.200,00
              </div>
              <div class="text-sm text-neutral-300">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <button class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full">Solicitar Orçamento</button>
          </div>
        </div>

        <!-- Porta Modelo 2 -->
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 bg-gradient-to-br from-primary-500 to-accent-400 rounded-xl mb-6 flex items-center justify-center">
              <HomeIcon class="w-16 h-16 text-white" />
            </div>

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-white mb-4">Porta de Correr</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Altura:</span>
                <span class="text-white font-semibold">2.10m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Largura:</span>
                <span class="text-white font-semibold">1.20m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Espessura:</span>
                <span class="text-white font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-accent-300 mb-2">
                R$ 1.800,00
              </div>
              <div class="text-sm text-neutral-300">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Porta Modelo 3 -->
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 bg-gradient-to-br from-accent-500 to-primary-400 rounded-xl mb-6 flex items-center justify-center">
              <HomeIcon class="w-16 h-16 text-white" />
            </div>

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-white mb-4">Porta Pivotante</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Altura:</span>
                <span class="text-white font-semibold">2.40m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Largura:</span>
                <span class="text-white font-semibold">0.90m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Espessura:</span>
                <span class="text-white font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-accent-300 mb-2">
                R$ 2.200,00
              </div>
              <div class="text-sm text-neutral-300">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Porta Modelo 4 -->
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl mb-6 flex items-center justify-center">
              <HomeIcon class="w-16 h-16 text-white" />
            </div>

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-white mb-4">Porta de Madeira Maciça</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Altura:</span>
                <span class="text-white font-semibold">2.10m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Largura:</span>
                <span class="text-white font-semibold">0.70m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Espessura:</span>
                <span class="text-white font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-accent-300 mb-2">
                R$ 2.800,00
              </div>
              <div class="text-sm text-neutral-300">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Porta Modelo 5 -->
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 bg-gradient-to-br from-accent-300 to-primary-600 rounded-xl mb-6 flex items-center justify-center">
              <HomeIcon class="w-16 h-16 text-white" />
            </div>

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-white mb-4">Porta com Vidro</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Altura:</span>
                <span class="text-white font-semibold">2.10m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Largura:</span>
                <span class="text-white font-semibold">0.80m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Espessura:</span>
                <span class="text-white font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-accent-300 mb-2">
                R$ 1.600,00
              </div>
              <div class="text-sm text-neutral-300">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Porta Modelo 6 -->
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
          <div class="text-center">
            <!-- Imagem do produto -->
            <div class="w-full h-48 bg-gradient-to-br from-primary-600 to-accent-300 rounded-xl mb-6 flex items-center justify-center">
              <HomeIcon class="w-16 h-16 text-white" />
            </div>

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-white mb-4">Porta de Serviço</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Altura:</span>
                <span class="text-white font-semibold">2.00m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Largura:</span>
                <span class="text-white font-semibold">0.60m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-200 font-medium">Espessura:</span>
                <span class="text-white font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-accent-300 mb-2">
                R$ 950,00
              </div>
              <div class="text-sm text-neutral-300">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold mb-4">Não encontrou o que procura?</h3>
          <p class="text-xl mb-6 opacity-90">
            Temos opções personalizadas para qualquer necessidade.
            Entre em contato para um orçamento sob medida.
          </p>
          <ButtonPrimary @click="$router.push('/encomendas')">
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
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
