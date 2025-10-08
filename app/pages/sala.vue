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
          <MesinhaAngelinCard />

          <!-- Móvel Modelo 2 -->
          <MesinhaAngelinCard
            :image="'/img/Mesinha-Mista.png'"
            :title="'Mesinha-Mista'"
            :specs="[
              { label: 'Largura', value: '0,60cm' },
              { label: 'Poltronas', value: '4-unidades' },
              { label: 'Altura', value: '0,68cm' }
            ]"
            :price="'R$ 1.400,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-mesinha-mista'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 3 -->
          <MesinhaAngelinCard
            :image="'/img/Mesa-Redonda-Grande.png'"
            :title="'Mesa-Redonda-Grande'"
            :specs="[
              { label: 'Comprimento', value: '1.50m' },
              { label: 'Largura', value: '1,50cm' },
              { label: 'Altura', value: '0,76cm' },
              { label: 'Poltronas-Almofadadas', value: '6-unid.' }
            ]"
            :price="'R$ 7.000,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-mesa-redonda-grande'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 4 -->
          <MesinhaAngelinCard
            :image="'/img/Mesa-Maracatiara.png'"
            :title="'Mesa-Maracatiara'"
            :specs="[
              { label: 'Comprimento', value: '1.80m' },
              { label: 'Largura', value: '0,80cm' },
              { label: 'Altura', value: '0,74cm' },
              { label: 'Poltronas', value: '6-unidades' }
            ]"
            :price="'R$ 3.200,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-mesa-maracatiara'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 5 -->
          <MesinhaAngelinCard
            :image="'/img/Mesa-Macacauba-Confort.png'"
            :title="'Mesa-Macacauba-Confort'"
            :specs="[
              { label: 'Comprimento', value: '1.63m' },
              { label: 'Largura', value: '0,76cm' },
              { label: 'Altura', value: '0,74cm' },
              { label: 'Poltronas-Almofadadas', value: '6-unid.' }
            ]"
            :price="'R$ 3.200,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-mesa-macacauba-confort'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 6 -->
          <MesinhaAngelinCard
            :image="'/img/Mesa-Angelin-Rajado.png'"
            :title="'Mesa-Angelin-Pintado'"
            :specs="[
              { label: 'Comprimento', value: '1.60m' },
              { label: 'Largura', value: '0.90m' },
              { label: 'Altura', value: '0.82cm' },
              { label: 'Poltronas', value: '6-unid.' }
            ]"
            :price="'R$ 3.100,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-mesa-angelin-rajado'"
            :buttonType="'button'"
          />
        </div>

        <!-- Call to Action -->
        <div id="call-to-action-sala" class="text-center mt-16">
          <div class="bg-primary-200 rounded-2xl p-8 text-primary-800 max-w-4xl mx-auto">
            <h3 class="text-3xl font-bold mb-4">Não encontrou o que procura?</h3>
            <p class="text-xl mb-6 text-primary-700">
              Temos opções personalizadas para qualquer necessidade. Entre em contato para um orçamento sob medida.
            </p>
            <button @click="$router.push('/encomendas-sala')" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">Fazer Orçamento Personalizado</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<style scoped>
/* Estilos específicos para a página de sala */
</style>
