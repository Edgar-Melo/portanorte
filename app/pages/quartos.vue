<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">Nossos Móveis para Quartos</h2>
          <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
            Descubra nossa ampla gama de móveis para quartos. Cada peça é feita com dedicação e atenção aos detalhes para o seu descanso.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Móvel Modelo 1 -->
          <BedroomProductCard
            :image="'/img/Cama-Rostic.png'"
            :title="'Cama-Rustic'"
            :specs="[
              { label: 'Largura', value: '1.60m' },
              { label: 'Comprimento', value: '2.00m' },
              { label: 'Altura', value: '0.60cm' }
            ]"
            :price="'R$ 3.500,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-cama-rostic'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 2 -->
          <BedroomProductCard
            :image="'/img/Cama-Rustic-Bordada.png'"
            :title="'Cama-Rustic-Bordada'"
            :specs="[
              { label: 'Largura', value: '1,40m' },
              { label: 'Comprimento', value: '1,90m' },
              { label: 'Altura', value: '0,56cm' }
            ]"
            :price="'R$ 3.500,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-cama-rustic-bordada'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 3 -->
          <BedroomProductCard
            :image="'/img/Cama-Cabeceira-Simples.png'"
            :title="'Cama-Cabeceira-Simples'"
            :specs="[
              { label: 'Comprimento', value: '1,88m' },
              { label: 'Largura', value: '1,38m' },
              { label: 'Altura', value: '0,43cm' }
            ]"
            :price="'R$ 1.500,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-mesa-de-cabeceira'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 4 -->
          <BedroomProductCard
            :image="'/img/Comoda-Média.png'"
            :title="'Cômoda 6 Gavetas'"
            :specs="[
              { label: 'Largura', value: '0,97cm' },
              { label: 'Profundidade', value: '0,50cm' },
              { label: 'Altura', value: '0,97cm' }
            ]"
            :price="'R$ 1.700,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-comoda-6-gavetas'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 5 -->
          <BedroomProductCard
            :image="'/img/Comoda-Sapateira.png'"
            :title="'Cômoda-Sapateira'"
            :specs="[
              { label: 'Largura', value: '1,04m' },
              { label: 'Altura', value: '0,88cm' },
              { label: 'Profundidade', value: '0,47cm' }
            ]"
            :price="'R$ 1.700,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-comoda-sapateira'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 6 -->
          <BedroomProductCard
            :image="'/img/Guarda-Roupa-Maracatiara.png'"
            :title="'Guarda-Roupa-Maracatiara'"
            :specs="[
              { label: 'Largura', value: '2,10m' },
              { label: 'Altura', value: '2,10m' },
              { label: 'Profundidade', value: '0,50cm' }
            ]"
            :price="'R$ 7.000,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-guarda-roupa-maracatiara'"
            :buttonType="'button'"
          />
        </div>

        <!-- Call to Action -->
        <div id="call-to-action-quartos" class="text-center mt-16">
          <div class="bg-primary-200 rounded-2xl p-8 text-primary-800 max-w-4xl mx-auto">
            <h3 class="text-3xl font-bold mb-4">Não encontrou o que procura?</h3>
            <p class="text-xl mb-6 text-primary-700">
              Temos opções personalizadas para qualquer necessidade. Entre em contato para um orçamento sob medida.
            </p>
            <button @click="$router.push('/encomendas-quartos')" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">Faça um Orçamento</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BedroomProductCard from '~/components/BedroomProductCard.vue'
</script>

<style scoped>
/* Estilos específicos para a página de quartos */
</style>
