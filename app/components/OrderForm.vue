<template>
  <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
    <h3 class="text-2xl font-bold text-primary-800 mb-6">Dados para Encomenda de Portas</h3>
    <form @submit.prevent="submitOrder" class="space-y-6">
      <!-- Nome do Cliente -->
      <div>
        <label class="block text-primary-600 font-medium mb-2">Nome Completo *</label>
        <input
          v-model="formData.name"
          type="text"
          required
          class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500"
          placeholder="Digite seu nome completo"
        />
      </div>
      <!-- WhatsApp -->
      <div>
        <label class="block text-primary-600 font-medium mb-2">WhatsApp *</label>
        <input
          v-model="formData.whatsapp"
          type="tel"
          required
          class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500"
          placeholder="(00) 00000-0000"
        />
      </div>
      <!-- Descrição da Encomenda -->
      <div>
        <label class="block text-primary-600 font-medium mb-2">Descrição da Encomenda *</label>
        <textarea
          v-model="formData.description"
          required
          rows="6"
          class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 resize-vertical"
          placeholder="Descreva detalhadamente a porta desejada. Inclua medidas, tipo de madeira, acabamento, estilo, etc."
        ></textarea>
      </div>
      <!-- Upload de Foto -->
      <div>
        <label class="block text-primary-600 font-medium mb-2">Foto de Referência</label>
        <div class="border-2 border-dashed border-primary-400 rounded-lg p-6 text-center hover:border-primary-500 transition duration-300">
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            @change="handleFileUpload"
            class="hidden"
          />
          <div class="cursor-pointer" @click="$refs.fileInput.click()">
            <svg class="w-12 h-12 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <p class="text-primary-700 mb-2">Clique para fazer upload de uma foto</p>
            <p class="text-sm text-primary-600">PNG, JPG até 10MB</p>
          </div>
        </div>
      </div>
      <!-- Botão de Envio -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-500 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg"
      >
        {{ isSubmitting ? 'Enviando...' : 'Enviar Encomenda de Porta' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  whatsapp: '',
  description: '',
  photo: null
})

const isSubmitting = ref(false)
const fileInput = ref(null)

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    formData.value.photo = file
  }
}

const submitOrder = async () => {
  isSubmitting.value = true
  // Simulate submission
  setTimeout(() => {
    alert('Encomenda enviada com sucesso!')
    isSubmitting.value = false
  }, 2000)
}
</script>
