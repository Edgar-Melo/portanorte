<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-primary-800">Porta Norte - Móveis para Quartos</h1>
          <button
            @click="$router.push('/')"
            class="bg-primary-200 hover:bg-primary-300 text-primary-800 px-4 py-2 rounded-lg transition duration-300"
          >
            ← Voltar ao Início
          </button>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-6 py-12">
      <div class="max-w-6xl mx-auto">
        <!-- Título da Página -->
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Encomende seus Móveis para Quartos
          </h2>
          <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
            Transforme sua ideia em realidade. Solicite uma cotação personalizada para móveis que criam ambientes aconchegantes.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Formulário de Encomenda -->
          <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
            <h3 class="text-2xl font-bold text-primary-800 mb-6">Dados para Encomenda de Móveis</h3>

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
                  placeholder="Descreva detalhadamente o móvel desejado. Inclua medidas, tipo de madeira, acabamento, estilo, etc."
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
                  >
                  <div class="cursor-pointer" @click="$refs.fileInput.click()">
                    <svg class="w-12 h-12 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p class="text-primary-700 mb-2">Clique para fazer upload de uma foto</p>
                    <p class="text-sm text-primary-600">PNG, JPG até 10MB</p>
                  </div>
                </div>
                <!-- Preview da imagem -->
                <div v-if="imagePreview" class="mt-4">
                  <img :src="imagePreview" alt="Preview" class="max-w-full h-32 object-cover rounded-lg">
                  <button
                    @click="removeImage"
                    class="mt-2 text-red-600 hover:text-red-800 text-sm"
                  >
                    Remover imagem
                  </button>
                </div>
              </div>

              <!-- Botão de Envio -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-500 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg"
              >
                {{ isSubmitting ? 'Enviando...' : 'Enviar Encomenda de Móvel' }}
              </button>
            </form>
          </div>

          <!-- Calculadora e Informações -->
          <div class="space-y-8">
            <!-- Calculadora de Móveis -->
            <FurnitureCalculator />

            <!-- Informativos -->
            <div class="space-y-6">
              <!-- Prazo de Fabricação -->
              <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
                <div class="flex items-start space-x-4">
                  <div class="bg-primary-200 rounded-full p-3">
                    <svg class="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-primary-800 mb-2">Prazo de Fabricação</h4>
                    <p class="text-primary-700">
                      A fabricação do seu móvel leva em média <strong class="text-primary-800">15 a 20 dias</strong>
                      para ser concluída, dependendo da complexidade e disponibilidade dos materiais.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Condições de Pagamento -->
              <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
                <div class="flex items-start space-x-4">
                  <div class="bg-green-500 rounded-full p-3">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-primary-800 mb-2">Condições de Pagamento</h4>
                    <p class="text-primary-700 mb-3">
                      Para confirmar seu pedido, é necessário o pagamento de <strong class="text-primary-800">50%</strong>
                      do valor total antecipadamente.
                    </p>
                    <p class="text-primary-600 text-sm">
                      O restante (50%) será pago na entrega do móvel.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Informações de Contato -->
              <div class="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
                <div class="flex items-start space-x-4">
                  <div class="bg-primary-200 rounded-full p-3">
                    <svg class="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-primary-800 mb-2">Ficou com Dúvidas?</h4>
                    <p class="text-primary-700 mb-2">
                      Entre em contato conosco para tirar suas dúvidas sobre móveis:
                    </p>
                    <p class="text-primary-800 font-semibold">
                      📞 (96) 98137-9746<br>
                      📧 contato@portanorte.com.br
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import FurnitureCalculator from '~/components/FurnitureCalculator.vue'

// Dados do formulário
const formData = reactive({
  name: '',
  whatsapp: '',
  description: '',
  image: null
})

const fileInput = ref(null)
const imagePreview = ref('')
const isSubmitting = ref(false)

// Manipular upload de arquivo
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Validar tamanho do arquivo (10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('Arquivo muito grande. Máximo 10MB.')
      return
    }

    // Validar tipo do arquivo
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione apenas arquivos de imagem.')
      return
    }

    formData.image = file

    // Criar preview da imagem
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

// Remover imagem
const removeImage = () => {
  formData.image = null
  imagePreview.value = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Enviar encomenda
const submitOrder = async () => {
  if (!formData.name || !formData.whatsapp || !formData.description) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }

  isSubmitting.value = true

  try {
    // Aqui você pode implementar o envio dos dados para o backend
    // Por enquanto, vamos simular o envio
    console.log('Dados da encomenda:', formData)

    // Simular delay de envio
    await new Promise(resolve => setTimeout(resolve, 2000))

    alert('Encomenda enviada com sucesso! Entraremos em contato em breve.')

    // Limpar formulário
    formData.name = ''
    formData.whatsapp = ''
    formData.description = ''
    removeImage()

  } catch (error) {
    console.error('Erro ao enviar encomenda:', error)
    alert('Erro ao enviar encomenda. Tente novamente.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
