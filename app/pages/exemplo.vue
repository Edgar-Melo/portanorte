<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-8">Exemplo de Ícones e Toasts</h1>

      <!-- Seção de Ícones Heroicons -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Ícones Heroicons</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center">
            <HomeIcon class="w-12 h-12 text-blue-500 mx-auto mb-2" />
            <p class="text-sm">HomeIcon</p>
          </div>
          <div class="text-center">
            <UserIcon class="w-12 h-12 text-green-500 mx-auto mb-2" />
            <p class="text-sm">UserIcon</p>
          </div>
          <div class="text-center">
            <CogIcon class="w-12 h-12 text-purple-500 mx-auto mb-2" />
            <p class="text-sm">CogIcon</p>
          </div>
          <div class="text-center">
            <HeartIcon class="w-12 h-12 text-red-500 mx-auto mb-2" />
            <p class="text-sm">HeartIcon</p>
          </div>
        </div>
      </div>

      <!-- Seção de Toasts -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Notificações Toast</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            @click="showSuccessToast"
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Toast de Sucesso
          </button>
          <button
            @click="showErrorToast"
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Toast de Erro
          </button>
          <button
            @click="showWarningToast"
            class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Toast de Aviso
          </button>
          <button
            @click="showInfoToast"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Toast de Info
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon, UserIcon, CogIcon, HeartIcon } from '@heroicons/vue/24/outline'
import { useToast } from 'vue-toastification'

const toast = useToast()

const showSuccessToast = () => {
  toast.success('Operação realizada com sucesso!', {
    timeout: 3000,
    position: 'top-right'
  })
}

const showErrorToast = () => {
  toast.error('Ocorreu um erro na operação!', {
    timeout: 4000,
    position: 'top-right'
  })
}

const showWarningToast = () => {
  toast.warning('Atenção: Verifique os dados inseridos!', {
    timeout: 3500,
    position: 'top-right'
  })
}

const showInfoToast = () => {
  toast.info('Informação importante para o usuário!', {
    timeout: 3000,
    position: 'top-right'
  })
}
</script>
