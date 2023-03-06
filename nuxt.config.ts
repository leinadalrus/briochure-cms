// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://github.com/nuxt-modules/color-mode
    '@nuxtjs/color-mode',
    '@nuxtjs/supabase',
    '@nuxt/ui',
  ],
  typescript: {
    strict: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/_base.sass" as *\n',
        },
      },
    },
  },
})
