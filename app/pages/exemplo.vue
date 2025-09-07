<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-8">Exemplo de Ícones e Toasts</h1>

      <!-- Seção de Ícones Heroicons -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Ícones Heroicons - Opções para Porta</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center">
            <HomeIcon class="w-12 h-12 text-blue-500 mx-auto mb-2" />
            <p class="text-sm">HomeIcon (Casa)</p>
          </div>
          <div class="text-center">
            <BuildingOfficeIcon class="w-12 h-12 text-green-500 mx-auto mb-2" />
            <p class="text-sm">BuildingOfficeIcon</p>
          </div>
          <div class="text-center">
            <BuildingStorefrontIcon class="w-12 h-12 text-purple-500 mx-auto mb-2" />
            <p class="text-sm">BuildingStorefrontIcon</p>
          </div>
          <div class="text-center">
            <WindowIcon class="w-12 h-12 text-red-500 mx-auto mb-2" />
            <p class="text-sm">WindowIcon (Janela)</p>
          </div>
          <div class="text-center">
            <KeyIcon class="w-12 h-12 text-yellow-500 mx-auto mb-2" />
            <p class="text-sm">KeyIcon (Chave)</p>
          </div>
          <div class="text-center">
            <LockClosedIcon class="w-12 h-12 text-orange-500 mx-auto mb-2" />
            <p class="text-sm">LockClosedIcon</p>
          </div>
          <div class="text-center">
            <LockOpenIcon class="w-12 h-12 text-pink-500 mx-auto mb-2" />
            <p class="text-sm">LockOpenIcon</p>
          </div>
        </div>
        <div class="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 class="text-lg font-medium mb-2">Análise dos Ícones:</h3>
          <ul class="text-sm space-y-1">
            <li><strong>HomeIcon:</strong> Melhor representação para "Portas" (porta de casa)</li>
            <li><strong>BuildingOfficeIcon:</strong> Bom para escritórios/escritório</li>
            <li><strong>BuildingStorefrontIcon:</strong> Ideal para cozinha/loja</li>
            <li><strong>KeyIcon:</strong> Representa acesso/chaves</li>
            <li><strong>LockClosedIcon/LockOpenIcon:</strong> Representam fechaduras</li>
          </ul>
          <p class="text-sm mt-3 text-gray-600">
            <strong>Recomendação:</strong> O <code>HomeIcon</code> é a melhor opção para representar "Portas" pois simboliza entrada residencial.
          </p>
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
import { HomeIcon, BuildingOfficeIcon, BuildingStorefrontIcon, WindowIcon, KeyIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/vue/24/outline'
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
