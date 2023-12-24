import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";

import * as AllRules from "@vee-validate/rules";

export const validatorPassword = (value) => {
  const regExp = /^(?=.*[A-Za-z])(?=.*[!@#$%^&*])(?=.*\d).{6,}$/;

  return regExp.test(value);
};

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("Form", Form);
  nuxtApp.vueApp.component("Field", Field);
  nuxtApp.vueApp.component("ErrorMessage", ErrorMessage);

  // Load validations rules
  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });

  defineRule("password", (value) => {
    return validatorPassword(value);
  });

  // Load validations messages
  // await import("~/locales/zh-hant.json").then((core) => {
  //   const messagges = {
  //     zh_TW: core.default,
  //   };

  //   configure({
  //     generateMessage: localize(messagges),
  //     validateOnInput: true,
  //     validateOnBlur: false,
  //   });

  //   setLocale("zh_TW");
  // });
});
