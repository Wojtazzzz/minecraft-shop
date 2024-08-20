// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  srcDir: "./src",
  css: ["~/assets/css/styles.css"],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],

  nitro: {
    esbuild: {
      options: {
        target: "es2022",
      },
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@tresjs/nuxt"],
});
