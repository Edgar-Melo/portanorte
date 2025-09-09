<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-5xl font-bold mb-6">Portas Sob Medida</h1>
          <p class="text-xl mb-8 text-primary-100">
            Portas de alta qualidade para sua casa ou negócio
          </p>
          <div class="flex justify-center space-x-4">
            <ButtonPrimary @click="scrollToCalculator">Calcular Preço</ButtonPrimary>
            <ButtonSecondary @click="scrollToContact">Fale Conosco</ButtonSecondary>
          </div>
        </div>
      </div>
    </section>

    <!-- Portas Section -->
    <DoorDetailsSection />

    <!-- Calculadora de Portas -->
    <section ref="calculatorSection" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-primary-800 mb-4">Calculadora de Portas</h2>
          <p class="text-xl text-primary-600">
            Calcule o preço da sua porta personalizada
          </p>
        </div>

        <DoorCalculator />
      </div>
    </section>

    <!-- Contact Section -->
    <section ref="contactSection" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-primary-800 mb-4">Entre em Contato</h2>
          <p class="text-xl text-primary-600">
            Solicite seu orçamento personalizado
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="bg-primary-200 rounded-2xl p-8 text-primary-800 text-center">
            <h3 class="text-3xl font-bold mb-4">Precisa de uma porta personalizada?</h3>
            <p class="text-xl mb-6 text-primary-700">
              Entre em contato conosco para um orçamento sob medida para suas portas.
            </p>
            <ButtonPrimary @click="$router.push('/encomendas')">
              Solicitar Orçamento
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import DoorDetailsSection from '~/components/DoorDetailsSection.vue'
import DoorCalculator from '~/components/DoorCalculator.vue'
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import ButtonSecondary from '~/components/ButtonSecondary.vue'

const calculatorSection = ref(null)
const contactSection = ref(null)

const scrollToCalculator = () => {
  calculatorSection.value?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToContact = () => {
  contactSection.value?.scrollIntoView({ behavior: 'smooth' })
}

// SEO
useHead({
  title: 'Portas Sob Medida | PortaNorte',
  meta: [
    { name: 'description', content: 'Portas de alta qualidade sob medida. Calcule o preço da sua porta personalizada com nossa calculadora online.' }
  ]
})
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style></content>
<parameter name="filePath">c:\portanorte\app\pages\portas.vue
