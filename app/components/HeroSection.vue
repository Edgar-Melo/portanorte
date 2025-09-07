<template>
  <section class="lg:min-h-screen flex items-center justify-center py-16 relative overflow-hidden">
    <!-- Elemento decorativo de fundo -->
    <div class="absolute inset-0 bg-black bg-opacity-10"></div>
    <div class="absolute top-10 left-10 w-32 h-32 bg-accent-300 rounded-full opacity-20 blur-xl"></div>
    <div class="absolute bottom-10 right-10 w-48 h-48 bg-primary-400 rounded-full opacity-15 blur-2xl"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Lado esquerdo: Texto de apresentação -->
        <div class="text-left animate-fade-in">
          <h1 class="text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-200 mb-6 leading-tight drop-shadow-lg">
            <span class="block">Porta</span>
            <span class="block">Norte</span>
          </h1>
          <h2 class="text-3xl font-bold text-white mb-6 drop-shadow-md">
            Móveis em Madeira de Qualidade
          </h2>
          <p class="text-xl text-neutral-100 mb-10 leading-relaxed drop-shadow-sm max-w-lg">
            Especialistas em portas, janelas e materiais para construção em Oiapoque.
            Transformamos madeira em arte, criando peças únicas para o seu lar.
            Oferecemos soluções personalizadas com dedicação e excelência.
          </p>
          <div class="flex flex-col sm:flex-row gap-6">
            <ButtonPrimary class="transform hover:scale-105 transition-transform duration-300 shadow-lg" @click="scrollToProducts">Ver Produtos</ButtonPrimary>
            <ButtonSecondary class="transform hover:scale-105 transition-transform duration-300 shadow-lg">Fale Conosco</ButtonSecondary>
          </div>
        </div>

        <!-- Lado direito: Imagem do Moveleiro -->
        <div class="flex justify-center lg:justify-end animate-slide-in-right">
          <img src="/img/Marceneiro.png" alt="Marceneiro da Porta Norte" class="w-full max-w-lg h-80 object-cover rounded-2xl shadow-2xl border border-white border-opacity-20">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import ButtonSecondary from '~/components/ButtonSecondary.vue'

// Função para rolar suavemente até a seção de produtos
const scrollToProducts = () => {
  const productsSection = document.getElementById('products')
  if (productsSection) {
    productsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
