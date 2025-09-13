<template>
  <section class="lg:min-h-screen flex items-center justify-center py-16">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Lado esquerdo: Texto de apresentação -->
        <div class="text-left animate-fade-in">
          <h1 class="text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span class="block text-primary-800">Porta</span>
            <span class="block text-primary-600">Norte</span>
          </h1>
          <h2 class="text-3xl font-bold text-primary-800 mb-6">
            Móveis em Madeira de Qualidade
          </h2>
          <p class="text-xl text-primary-700 mb-10 leading-relaxed max-w-lg text-justify">
            Especialistas em portas, janelas e materiais para construção em Oiapoque.
            Transformamos madeira em arte, criando peças únicas para o seu lar.
            Oferecemos soluções personalizadas com dedicação e excelência.
          </p>
          <div class="flex flex-col sm:flex-row gap-6">
            <ButtonPrimary class="transform hover:scale-105 transition-transform duration-300 shadow-lg" @click="scrollToProducts">Ver Produtos</ButtonPrimary>
            <ButtonSecondary class="transform hover:scale-105 transition-transform duration-300 shadow-lg" @click="$router.push('/encomendas')">Faça um Orçamento</ButtonSecondary>
          </div>
        </div>

        <!-- Lado direito: Imagem do Moveleiro -->
        <div class="flex justify-center lg:justify-end animate-slide-in-right">
          <img src="/img/marceneiro-portanorte.png" alt="Marceneiro da Porta Norte" class="w-full max-w-lg h-80 object-cover rounded-2xl shadow-2xl border border-gray-200">
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

const openWhatsApp = () => {
  const phoneNumber = '5596981379746'
  const message = 'Olá! Gostaria de saber mais sobre os produtos da Porta Norte.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
