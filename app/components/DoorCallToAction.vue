<template>
  <div class="text-center mt-16">
    <div class="bg-primary-200 rounded-2xl p-8 text-primary-800 max-w-4xl mx-auto">
      <h3 class="text-3xl font-bold mb-4">Não encontrou o que procura?</h3>
      <p class="text-xl mb-6 text-primary-700">
        Temos opções personalizadas para qualquer necessidade. Entre em contato para um orçamento sob medida.
      </p>
      <ButtonPrimary @click="$router.push('/encomendas')">
        Fale Conosco
      </ButtonPrimary>
    </div>
  </div>
</template>

<script setup>
import ButtonPrimary from '~/components/ButtonPrimary.vue'
</script>
