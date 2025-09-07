<template>
  <section id="products" class="py-20 bg-gradient-to-br from-primary-800 via-primary-500 to-primary-200 relative">
    <!-- Elementos decorativos de fundo -->
    <div class="absolute inset-0 bg-black bg-opacity-5"></div>
    <div class="absolute top-20 left-20 w-40 h-40 bg-accent-300 rounded-full opacity-10 blur-2xl"></div>
    <div class="absolute bottom-20 right-20 w-60 h-60 bg-primary-400 rounded-full opacity-8 blur-3xl"></div>
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
        <div class="group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
          <div class="text-center">
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-300 transition-colors duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 drop-shadow-md">Portas</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed drop-shadow-sm">
              Portas de madeira maciça com design elegante e acabamento perfeito.
              Variedade de estilos e tamanhos para todos os ambientes.
            </p>
            <ButtonSecondary class="w-full">Ver Detalhes</ButtonSecondary>
          </div>
        </div>

        <!-- Janelas -->
        <div class="group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
          <div class="text-center">
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-300 transition-colors duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 drop-shadow-md">Janelas</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed drop-shadow-sm">
              Janelas artesanais que combinam funcionalidade e beleza.
              Iluminação natural e ventilação perfeita para seu conforto.
            </p>
            <ButtonSecondary class="w-full">Ver Detalhes</ButtonSecondary>
          </div>
        </div>

        <!-- Sala -->
        <div class="group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
          <div class="text-center">
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-300 transition-colors duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 drop-shadow-md">Sala</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed drop-shadow-sm">
              Móveis para sala de estar: sofás, mesas, estantes e muito mais.
              Conforto e elegância para receber seus convidados.
            </p>
            <ButtonSecondary class="w-full">Ver Detalhes</ButtonSecondary>
          </div>
        </div>

        <!-- Cozinha -->
        <div class="group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
          <div class="text-center">
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-300 transition-colors duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 drop-shadow-md">Cozinha</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed drop-shadow-sm">
              Móveis funcionais para cozinha: armários, mesas, cadeiras.
              Organização e praticidade para o seu dia a dia.
            </p>
            <ButtonSecondary class="w-full">Ver Detalhes</ButtonSecondary>
          </div>
        </div>

        <!-- Quartos -->
        <div class="group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
          <div class="text-center">
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-300 transition-colors duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 drop-shadow-md">Quartos</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed drop-shadow-sm">
              Conjuntos completos para quartos: camas, guarda-roupas, mesas.
              Criando ambientes aconchegantes para seu descanso.
            </p>
            <ButtonSecondary class="w-full">Ver Detalhes</ButtonSecondary>
          </div>
        </div>

        <!-- Escritório -->
        <div class="group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
          <div class="text-center">
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-300 transition-colors duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 drop-shadow-md">Escritório</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed drop-shadow-sm">
              Móveis para home office: mesas, cadeiras, estantes.
              Produtividade e conforto para seu trabalho diário.
            </p>
            <ButtonSecondary class="w-full">Ver Detalhes</ButtonSecondary>
          </div>
        </div>

        <!-- Banheiro -->
        <div class="group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20">
          <div class="text-center">
            <div class="w-20 h-20 bg-accent-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-300 transition-colors duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 drop-shadow-md">Banheiro</h3>
            <p class="text-neutral-100 mb-6 leading-relaxed drop-shadow-sm">
              Móveis para banheiro: armários, espelhos, prateleiras.
              Organização e estilo para seu espaço pessoal.
            </p>
            <ButtonSecondary class="w-full">Ver Detalhes</ButtonSecondary>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <h3 class="text-3xl font-bold mb-4">Precisa de Algo Específico?</h3>
          <p class="text-xl mb-6 opacity-90">
            Temos soluções personalizadas para todas as suas necessidades em madeira.
          </p>
          <ButtonPrimary class="bg-white text-primary-800 hover:bg-neutral-100">
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
