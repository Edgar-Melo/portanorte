import { defineNuxtPlugin } from '#app'
import Toast, { type PluginOptions } from 'vue-toastification'

export default defineNuxtPlugin((nuxtApp) => {
  const options: PluginOptions = {
    position: 'top-right',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false,
    transition: 'Vue-Toastification__bounce',
    maxToasts: 20,
    newestOnTop: true
  }

  nuxtApp.vueApp.use(Toast, options)
})
