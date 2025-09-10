<template>
  <div v-if="isVisible" class="fixed bottom-6 right-6 z-50 group">
    <a
      href="https://wa.me/5596981379746?text=Olá! Gostaria de saber mais sobre os produtos da Porta Norte."
      target="_blank"
      rel="noopener noreferrer"
      class="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 block"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Icon icon="mdi:whatsapp" class="w-6 h-6" />
    </a>

    <!-- Tooltip -->
    <div class="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      Fale conosco!
      <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const isVisible = ref(false)

onMounted(() => {
  // Função para encontrar elementos de contato automaticamente
  const findContactElements = () => {
    const possibleSelectors = [
      '#contato-section', // Seção específica de contato (index)
      '#call-to-action-sala', // Call-to-action da página sala
      '#call-to-action-cozinha', // Call-to-action da página cozinha
      '#call-to-action-quartos', // Call-to-action da página quartos
      '#call-to-action-portas', // Call-to-action da página portas
      '#call-to-action-escritorio', // Call-to-action da página escritorio
      '#call-to-action-banheiro', // Call-to-action da página banheiro
      '#call-to-action-janelas', // Call-to-action da página janelas
      '#call-to-action-produtos', // Call-to-action da página produtos
      '#call-to-action-encomendas', // Call-to-action das páginas de encomendas
      '[class*="call-to-action"]', // Elementos com classe call-to-action
      '[class*="contact"]', // Elementos com classe contact
      'button:contains("Fale Conosco")', // Botões com "Fale Conosco"
      'a:contains("Fale Conosco")', // Links com "Fale Conosco"
      '.bg-primary-200', // Seções com fundo primary (muitas call-to-action usam isso)
      'h3:contains("Não encontrou o que procura")', // Título comum das call-to-action
      'h3:contains("Entre em contato")', // Outro título comum
      '.text-center.mt-16', // Padrão comum das seções finais
      '.text-center.mb-16' // Outro padrão comum
    ];

    for (const selector of possibleSelectors) {
      try {
        // Para seletores complexos, vamos usar uma abordagem diferente
        if (selector.includes(':contains')) {
          const text = selector.match(/:contains\("(.+)"\)/)?.[1];
          if (text) {
            const elements = document.querySelectorAll('*');
            for (const element of elements) {
              if (element.textContent?.includes(text) && element.offsetHeight > 0) {
                return element;
              }
            }
          }
        } else {
          const element = document.querySelector(selector);
          if (element && element.offsetHeight > 0) {
            return element;
          }
        }
      } catch (e) {
        // Ignora erros de seletor inválido
        continue;
      }
    }

    // Fallback: observa o final da página (último elemento visível)
    const allElements = document.querySelectorAll('*');
    for (let i = allElements.length - 1; i >= 0; i--) {
      const element = allElements[i];
      if (element.offsetHeight > 0 && element.getBoundingClientRect().top > 100) {
        return element;
      }
    }

    return null;
  };

  const target = findContactElements();
  if (target) {
    let hasBeenVisible = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasBeenVisible = true;
          }
          isVisible.value = hasBeenVisible;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(target);
  } else {
    // Fallback: mostra o botão após rolar 50% da página
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      if (scrollPercent > 0.5) {
        isVisible.value = true;
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }
})
</script>

<style scoped>
/* Animação personalizada para o botão */
@keyframes whatsapp-bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Aplicar animação personalizada */
.fixed a:hover {
  animation: whatsapp-bounce 1s infinite;
}

/* Remover animação padrão do hover para usar a personalizada */
.fixed a:hover {
  transform: scale(1.1);
  animation: whatsapp-bounce 1s infinite;
}
</style>
