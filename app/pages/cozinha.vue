<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">Nossos Móveis para Cozinha</h2>
          <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
            Descubra nossa ampla gama de móveis funcionais para cozinha. Cada peça é feita com dedicação e atenção aos detalhes para o seu lar.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Móvel Modelo 1 -->
          <KitchenProductCard
            :image="'/img/Armario de Cozinha.png'"
            :title="'Armário de Cozinha'"
            :specs="[
              { label: 'Largura', value: '0.80m' },
              { label: 'Profundidade', value: '0.39m' },
              { label: 'Altura', value: '1.70m' }
            ]"
            :price="'R$ 2.000,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomenda-armario-cozinha'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 2 -->
          <KitchenProductCard
            :image="'/img/Mesa Cozinha Mogno.png'"
            :title="'Mesa Cozinha Mogno'"
            :specs="[
              { label: 'Comprimento', value: '1.47m' },
              { label: 'Largura', value: '0,77cm' },
              { label: 'Altura', value: '0,77cm' },
              { label: 'Poltronas', value: '6-unidades' }
            ]"
            :price="'R$ 3.000,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomendas-cozinha?product=Mesa%20Cozinha%20Mogno&price=3000&specs=1.47x0.77x0.77'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 3 -->
          <KitchenProductCard
            :image="'/img/Armario Maracatiara.png'"
            :title="'Armario Maracatiara'"
            :specs="[
              { label: 'Largura', value: '1.53m' },
              { label: 'Profundidade', value: '0.48cm' },
              { label: 'Altura', value: '1.82m' }
            ]"
            :price="'R$ 4.000,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomendas-cozinha?product=Armario%20Maracatiara&price=4000&specs=1.53x0.48x1.82'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 4 -->
          <KitchenProductCard
            :image="'/img/Cadeira de Cozinha.png'"
            :title="'Cadeira de Cozinha'"
            :specs="[
              { label: 'Largura', value: '0.45m' },
              { label: 'Profundidade', value: '0.50m' },
              { label: 'Altura', value: '0.85m' }
            ]"
            :price="'R$ 350,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomendas-cozinha?product=Cadeira%20de%20Cozinha&price=350&specs=0.45x0.50x0.85'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 5 -->
          <KitchenProductCard
            :image="'/img/Mesa Madeira Roxa.png'"
            :title="'Mesa Madeira Roxa'"
            :specs="[
              { label: 'Comprimento', value: '2m' },
              { label: 'Largura', value: '0,78cm' },
              { label: 'Altura', value: '0,76cm' },
              { label: 'Bancos', value: '4-unidades' }
            ]"
            :price="'R$ 3.700,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomendas-cozinha'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 6 -->
          <KitchenProductCard
            :image="'/img/Mesa-Macacaúba.png'"
            :title="'Mesa-Macacaúba'"
            :specs="[
              { label: 'Comprimento', value: '2m' },
              { label: 'Largura', value: '0,78cm' },
              { label: 'Altura', value: '0,76cm' },
              { label: 'Bancos', value: '4-unidades' }
            ]"
            :price="'R$ 3.700,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomendas-cozinha'"
            :buttonType="'button'"
          />

          <!-- Móvel Modelo 7 -->
          <KitchenProductCard
            :image="'/img/Mesa-Mista-com-Bancos.png'"
            :title="'Mesa-Mista-com-Bancos'"
            :specs="[
              { label: 'Comprimento', value: '1m' },
              { label: 'Largura', value: '0,78cm' },
              { label: 'Altura', value: '0,76cm' },
              { label: 'Bancos', value: '2-unidades' }
            ]"
            :price="'R$ 2.000,00'"
            :buttonText="'Comprar Agora'"
            :buttonLink="'/encomendas-cozinha'"
            :buttonType="'button'"
          />
        </div>

        <!-- Call to Action -->
        <div id="call-to-action-cozinha" class="text-center mt-16">
          <div class="bg-primary-200 rounded-2xl p-8 text-primary-800 max-w-4xl mx-auto">
            <h3 class="text-3xl font-bold mb-4">Não encontrou o que procura?</h3>
            <p class="text-xl mb-6 text-primary-700">
              Temos opções personalizadas para qualquer necessidade. Entre em contato para um orçamento sob medida.
            </p>
            <button @click="$router.push('/encomendas-cozinha')" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">Faça um Orçamento</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// const openWhatsApp = () => {
//   const phoneNumber = '5596981379746'
//   const message = 'Olá! Gostaria de saber mais sobre os móveis para cozinha da Porta Norte.'
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
//   window.open(whatsappUrl, '_blank')
// }
</script>

<style scoped>
/* Estilos específicos para a página de cozinha */
</style>
