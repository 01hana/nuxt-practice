export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      hello: (msg) => console.log(`Hello ${msg}!`),
    },
  };
});
