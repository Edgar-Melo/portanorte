<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
          Nossas Portas
        </h2>
        <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
          Descubra a nossa ampla gama de portas em madeira de alta qualidade. Cada porta é feita com dedicação e atenção aos detalhes para o seu lar.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Porta Modelo 1 -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <img src="/img/Porta-Angelik-Horizonte.png" alt="Porta Residencial" class="w-full h-48 object-cover rounded-xl mb-6" />

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Porta Residencial</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.10m</span>
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

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 1.200,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas-portas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Porta Modelo 2 -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <img src="" alt="Porta de Correr" class="w-full h-48 object-cover rounded-xl mb-6" />

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Porta de Correr</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.10m</span>
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
            <ButtonSecondary @click="$router.push('/encomendas-portas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Porta Modelo 3 -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <img src="" alt="Porta Pivotante" class="w-full h-48 object-cover rounded-xl mb-6" />

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Porta Pivotante</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.40m</span>
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
            <ButtonSecondary @click="$router.push('/encomendas-portas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Porta Modelo 4 -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <img src="" alt="Porta de Madeira Maciça" class="w-full h-48 object-cover rounded-xl mb-6" />

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Porta de Madeira Maciça</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.10m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Largura:</span>
                <span class="text-primary-800 font-semibold">0.70m</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Espessura:</span>
                <span class="text-primary-800 font-semibold">3,5cm</span>
              </div>
            </div>

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 2.800,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas-portas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Porta Modelo 5 -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <img src="" alt="Porta com Vidro" class="w-full h-48 object-cover rounded-xl mb-6" />

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Porta com Vidro</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.10m</span>
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

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 1.600,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Porta Modelo 6 -->
        <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
          <div class="text-center">
            <!-- Imagem do produto -->
            <img src="" alt="Porta de Serviço" class="w-full h-48 object-cover rounded-xl mb-6" />

            <!-- Nome da porta -->
            <h3 class="text-2xl font-bold text-primary-800 mb-4">Porta de Serviço</h3>

            <!-- Especificações -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-primary-600 font-medium">Altura:</span>
                <span class="text-primary-800 font-semibold">2.00m</span>
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

            <!-- Preço -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-primary-800 mb-2">
                R$ 950,00
              </div>
              <div class="text-sm text-primary-600">
                à vista ou parcelado
              </div>
            </div>

            <!-- Botão -->
            <ButtonSecondary @click="$router.push('/encomendas-portas')" class="w-full">Solicitar Orçamento</ButtonSecondary>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div id="call-to-action-portas" class="text-center mt-16">
        <div class="bg-primary-200 rounded-2xl p-8 text-primary-800 max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold mb-4">Não encontrou o que procura?</h3>
          <p class="text-xl mb-6 text-primary-700">
            Temos opções personalizadas para qualquer necessidade.
            Entre em contato para um orçamento sob medida.
          </p>
          <ButtonPrimary @click="$router.push('/encomendas-portas')">
            Faça um Orçamento
          </ButtonPrimary>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import ButtonSecondary from '~/components/ButtonSecondary.vue'

const openWhatsApp = () => {
  const phoneNumber = '5596981379746'
  const message = 'Olá! Gostaria de saber mais sobre as portas da Porta Norte.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
