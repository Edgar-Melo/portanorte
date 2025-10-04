// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  
  // Configurações de produção
  nitro: {
    compressPublicAssets: true,
  },
  
  // Forçar HTTPS em produção
  runtimeConfig: {
    public: {
      baseURL: 'https://portanorte.com.br'
    }
  },

  // Headers de segurança
  routeRules: {
    '/**': {
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
      }
    }
  }
})
