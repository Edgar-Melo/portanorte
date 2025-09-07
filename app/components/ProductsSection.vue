<template>
  <section id="products" class="py-20 relative">
    <!-- Gradiente de fundo -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-500 to-primary-200"></div>
    <!-- Elementos decorativos de fundo -->
    <div class="absolute inset-0 bg-black bg-opacity-5"></div>
    <div class="absolute top-20 left-20 w-40 h-40 bg-accent-300 rounded-full opacity-10 blur-2xl"></div>
    <div class="absolute bottom-20 right-20 w-60 h-60 bg-primary-400 rounded-full opacity-10 blur-3xl"></div>
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Nossos Produtos
        </h2>
        <p class="text-xl text-neutral-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Descubra nossa ampla gama de produtos em madeira de alta qualidade.
          Cada peça é feita com dedicação e atenção aos detalhes para o seu lar.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <!-- Porta -->
        <div class="bg-white bg-opacity-10 rounded-2xl p-8 shadow-lg border border-white border-opacity-20 min-h-[400px] flex flex-col justify-between">
          <div>
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <HomeIcon class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Portas</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed">
              Portas de madeira maciça com design elegante e acabamento perfeito.
              Variedade de estilos e tamanhos para todos os ambientes.
            </p>
          </div>
          <button class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full" @click="$router.push('/produtos')">Ver Detalhes</button>
        </div>

        <!-- Janelas -->
        <div class="bg-white bg-opacity-10 rounded-2xl p-8 shadow-lg border border-white border-opacity-20 min-h-[400px] flex flex-col justify-between">
          <div>
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <WindowIcon class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Janelas</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed">
              Janelas artesanais que combinam funcionalidade e beleza.
              Iluminação natural e ventilação perfeita para seu conforto.
            </p>
          </div>
          <button class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full" @click="$router.push('/produtos')">Ver Detalhes</button>
        </div>

        <!-- Sala -->
        <div class="bg-white bg-opacity-10 rounded-2xl p-8 shadow-lg border border-white border-opacity-20 min-h-[400px] flex flex-col justify-between">
          <div>
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <HomeIcon class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Sala</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed">
              Móveis para sala de estar: sofás, mesas, estantes e muito mais.
              Conforto e elegância para receber seus convidados.
            </p>
          </div>
          <button class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full" @click="$router.push('/produtos')">Ver Detalhes</button>
        </div>

        <!-- Cozinha -->
        <div class="bg-white bg-opacity-10 rounded-2xl p-8 shadow-lg border border-white border-opacity-20 min-h-[400px] flex flex-col justify-between">
          <div>
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <BuildingStorefrontIcon class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Cozinha</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed">
              Móveis funcionais para cozinha: armários, mesas, cadeiras.
              Organização e praticidade para o seu dia a dia.
            </p>
          </div>
          <button class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full" @click="$router.push('/produtos')">Ver Detalhes</button>
        </div>

        <!-- Quartos -->
        <div class="bg-white bg-opacity-10 rounded-2xl p-8 shadow-lg border border-white border-opacity-20 min-h-[400px] flex flex-col justify-between">
          <div>
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <HomeIcon class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Quartos</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed">
              Conjuntos completos para quartos: camas, guarda-roupas, mesas.
              Criando ambientes aconchegantes para seu descanso.
            </p>
          </div>
          <button class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full" @click="$router.push('/produtos')">Ver Detalhes</button>
        </div>

        <!-- Escritório -->
        <div class="bg-white bg-opacity-10 rounded-2xl p-8 shadow-lg border border-white border-opacity-20 min-h-[400px] flex flex-col justify-between">
          <div>
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <BuildingOfficeIcon class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Escritório</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed">
              Móveis para home office: mesas, cadeiras, estantes.
              Produtividade e conforto para seu trabalho diário.
            </p>
          </div>
          <button class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full" @click="$router.push('/produtos')">Ver Detalhes</button>
        </div>

        <!-- Banheiro -->
        <div class="bg-white bg-opacity-10 rounded-2xl p-8 shadow-lg border border-white border-opacity-20 min-h-[400px] flex flex-col justify-between">
          <div>
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <HomeIcon class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Banheiro</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed">
              Móveis para banheiro: armários, espelhos, prateleiras.
              Organização e estilo para seu espaço pessoal.
            </p>
          </div>
          <button class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 block mx-auto w-full" @click="$router.push('/produtos')">Ver Detalhes</button>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <h3 class="text-3xl font-bold mb-4">Precisa de Algo Específico?</h3>
          <p class="text-xl mb-6 opacity-90">
            Temos soluções personalizadas para todas as suas necessidades em madeira.
          </p>
          <ButtonPrimary>
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
import { HomeIcon, WindowIcon, BuildingOfficeIcon, BuildingStorefrontIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
/* Animações personalizadas */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-slide-in-right {
  animation: slide-in-right 1s ease-out 0.3s both;
}
</style>
