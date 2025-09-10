<template>
  <section id="products" class="py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
          Nossos Produtos
        </h2>
        <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
          Descubra nossa ampla gama de produtos em madeira de alta qualidade.
          Cada peça é feita com dedicação e atenção aos detalhes para o seu lar.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <DoorCard />
        <WindowCard />
        <LivingRoomCard />
        <KitchenCard />
        <BedroomCard />
        <OfficeCard />
        <BathroomCard />
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-primary-200 rounded-2xl p-8 text-primary-800">
          <h3 class="text-3xl font-bold mb-4">Precisa de Algo Específico?</h3>
          <p class="text-xl mb-6 text-primary-700 text-justify">
            Temos soluções personalizadas para todas as suas necessidades em madeira.
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
import DoorCard from '~/components/DoorCard.vue'
import WindowCard from '~/components/WindowCard.vue'
import LivingRoomCard from '~/components/LivingRoomCard.vue'
import KitchenCard from '~/components/KitchenCard.vue'
import BedroomCard from '~/components/BedroomCard.vue'
import OfficeCard from '~/components/OfficeCard.vue'
import BathroomCard from '~/components/BathroomCard.vue'

const openWhatsApp = () => {
  const phoneNumber = '5596981379746'
  const message = 'Olá! Gostaria de saber mais sobre os produtos da Porta Norte.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
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
