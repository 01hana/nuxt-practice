// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Marcellus",
        },
      ],
    },
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
    "@images": fileURLToPath(new URL("./assets/images", import.meta.url)),
  },
  modules: [
    "@pinia/nuxt",
    "@samk-dev/nuxt-vcalendar",
    "@vueuse/nuxt",
    "@vee-validate/nuxt",
    "@nuxtjs/i18n",
  ],
  vcalendar: {
    color: "green",
    titlePosition: "left",
    dot: false,
    datePicker: {
      popover: {
        visibility: "click",
      },
    },
    masks: {
      input: ["YYYY-MM-DD", "YYYY/MM/DD", "L"],
      inputDateTime: ["YYYY-MM-DD h:mm A", "YYYY/MM/DD h:mm A", "L h:mm A"],
      inputDateTime24hr: ["YYYY-MM-DD HH:mm", "YYYY/MM/DD HH:mm", "L HH:mm"],
      data: ["YYYY-MM-DD", "YYYY/MM/DD", "L"],
    },
  },
  i18n: { locales: ["en", "zh-tw"], defaultLocale: "zh-tw" },
  css: [
    "~/assets/css/main.css",
    "~/assets/scss/style.scss",
    "mdi/css/materialdesignicons.min.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["vuetify", "@vee-validate/rules"],
  },
});
