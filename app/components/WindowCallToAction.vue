<template>
  <div id="call-to-action-janelas" class="text-center mt-16">
    <div class="bg-primary-200 rounded-2xl p-8 text-primary-800 max-w-4xl mx-auto">
      <h3 class="text-3xl font-bold mb-4">Não encontrou a janela ideal?</h3>
      <p class="text-xl mb-6 text-primary-700">
        Temos opções personalizadas para qualquer necessidade. Entre em contato para um orçamento sob medida.
      </p>
      <ButtonPrimary @click="openWhatsApp">
        Fale Conosco
      </ButtonPrimary>
    </div>
  </div>
</template>

<script setup>
import ButtonPrimary from '~/components/ButtonPrimary.vue'

const openWhatsApp = () => {
  const phoneNumber = '5596981379746'
  const message = 'Olá! Gostaria de saber mais sobre as janelas da Porta Norte.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
</script>
