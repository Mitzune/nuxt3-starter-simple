import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
	devtools: { enabled: true },
})
