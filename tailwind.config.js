/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app/app.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Cores primárias: Tons de marrom para móveis e madeira
        primary: {
          50: '#fef7ed',   // Marrom muito claro
          100: '#fef3c7',  // Marrom claro
          200: '#fde68a',  // Marrom médio-claro
          300: '#fcd34d',  // Marrom médio
          400: '#fbbf24',  // Marrom escuro-claro
          500: '#f59e0b',  // Marrom principal
          600: '#d97706',  // Marrom escuro
          700: '#b45309',  // Marrom muito escuro
          800: '#92400e',  // Marrom quase preto
          900: '#78350f',  // Marrom preto
        },
        // Cores secundárias: Tons de preto para elegância
        secondary: {
          50: '#f9fafb',   // Preto muito claro (cinza claro)
          100: '#f3f4f6',  // Preto claro
          200: '#e5e7eb',  // Preto médio-claro
          300: '#d1d5db',  // Preto médio
          400: '#9ca3af',  // Preto escuro-claro
          500: '#6b7280',  // Preto principal
          600: '#4b5563',  // Preto escuro
          700: '#374151',  // Preto muito escuro
          800: '#1f2937',  // Preto quase total
          900: '#111827',  // Preto total
        },
        // Cores de destaque: Tons dourados para luxo
        accent: {
          50: '#fffbeb',   // Dourado muito claro
          100: '#fef3c7',  // Dourado claro
          200: '#fde68a',  // Dourado médio-claro
          300: '#fcd34d',  // Dourado médio
          400: '#fbbf24',  // Dourado escuro-claro
          500: '#f59e0b',  // Dourado principal
          600: '#d97706',  // Dourado escuro
          700: '#b45309',  // Dourado muito escuro
          800: '#92400e',  // Dourado quase marrom
          900: '#78350f',  // Dourado marrom
        },
        // Cores neutras: Branco e cinzas para fundo e texto
        neutral: {
          50: '#ffffff',   // Branco puro
          100: '#f9fafb',  // Branco off
          200: '#e5e7eb',  // Cinza muito claro
          300: '#d1d5db',  // Cinza claro
          400: '#9ca3af',  // Cinza médio
          500: '#6b7280',  // Cinza
          600: '#4b5563',  // Cinza escuro
          700: '#374151',  // Cinza muito escuro
          800: '#1f2937',  // Cinza quase preto
          900: '#111827',  // Cinza preto
        },
        // Cores de fundo: Branco e marrom claro
        background: {
          primary: '#ffffff',    // Branco
          secondary: '#fef7ed',  // Marrom muito claro
        },
        // Cores de texto: Preto e marrom
        text: {
          primary: '#111827',    // Preto
          secondary: '#78350f',  // Marrom escuro
          accent: '#b45309',     // Dourado escuro
        },
        // Cores de borda: Cinzas e marrons
        border: {
          light: '#e5e7eb',      // Cinza claro
          dark: '#78350f',       // Marrom escuro
        },
      },
    },
  },
  plugins: [],
}
