<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div id="contato-section" class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
          Entre em Contato
        </h2>
        <p class="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed text-justify">
          Estamos aqui para ajudar. Entre em contato conosco para tirar dúvidas ou solicitar um orçamento personalizado.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Formulário de Contato -->
        <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
          <h3 class="text-2xl font-bold text-primary-800 mb-6">Envie sua Mensagem</h3>
          <form class="space-y-6">
            <!-- Nome -->
            <div>
              <label class="block text-primary-600 font-medium mb-2">Nome Completo *</label>
              <input
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500"
                placeholder="Digite seu nome completo"
              >
            </div>

            <!-- Telefone -->
            <div>
              <label class="block text-primary-600 font-medium mb-2">Telefone *</label>
              <input
                type="tel"
                required
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500"
                placeholder="(00) 00000-0000"
              >
            </div>

            <!-- Email -->
            <div>
              <label class="block text-primary-600 font-medium mb-2">E-mail</label>
              <input
                type="email"
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500"
                placeholder="seu@email.com"
              >
            </div>

            <!-- Endereço -->
            <div>
              <label class="block text-primary-600 font-medium mb-2">Endereço</label>
              <input
                type="text"
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500"
                placeholder="Rua, número, bairro, cidade"
              >
            </div>

            <!-- Assunto -->
            <div>
              <label class="block text-primary-600 font-medium mb-2">Assunto</label>
              <select class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900">
                <option value="">Selecione um assunto</option>
                <option value="orcamento">Solicitar Orçamento</option>
                <option value="duvida">Tirar Dúvida</option>
                <option value="visita">Agendar Visita</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <!-- Mensagem -->
            <div>
              <label class="block text-primary-600 font-medium mb-2">Mensagem</label>
              <textarea
                rows="5"
                class="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:outline-none bg-white bg-opacity-90 text-gray-900 placeholder-gray-500 resize-vertical"
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
            </div>

            <!-- Botão de Envio -->
            <button
              type="submit"
              class="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-500 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <!-- Mapa e Informações -->
        <div class="space-y-8">
          <!-- Mapa -->
          <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
            <h3 class="text-2xl font-bold text-primary-800 mb-6 text-center">Nossa Localização</h3>
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.789!2d-51.8375141!3d3.8455042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d6cc55e95924b25:0x2ec6bf5ca3687aa7!2sPorta%20Norte%20-%20Oiapoque!5e0!3m2!1sen!2sbr!4v1690000000000!5m2!1sen!2sbr"
                width="100%"
                height="300"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="rounded-lg"
              ></iframe>
            </div>
            <div class="mt-4 text-center">
              <p class="text-primary-700 font-medium">Porta Norte - Oiapoque</p>
              <p class="text-primary-600 text-sm">R. Joaquim Caetano da Silva, 680</p>
              <p class="text-primary-600 text-sm">Oiapoque - AP, 68980-000</p>
            </div>
          </div>

          <!-- Informações de Contato -->
          <div class="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
            <h3 class="text-2xl font-bold text-primary-800 mb-6 text-center">Informações de Contato</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div class="bg-primary-200 rounded-full p-3">
                  <svg class="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-primary-800">Telefone</h4>
                  <p class="text-primary-700">(96) 98137-9746</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="bg-primary-200 rounded-full p-3">
                  <svg class="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-primary-800">E-mail</h4>
                  <p class="text-primary-700">contato@portanorte.com.br</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="bg-primary-200 rounded-full p-3">
                  <svg class="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-primary-800">Endereço</h4>
                  <p class="text-primary-700">R. Joaquim Caetano da Silva, 680<br>Oiapoque - AP, 68980-000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Additional styles if needed */
</style>
