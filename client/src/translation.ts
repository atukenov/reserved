import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

// import translationEn from "./locales/en/translation.json";
import translationRu from "./locales/ru/translation.json";

i18n
  .use(XHR)
  //detect user language
  .use(LanguageDetector)
  //passing the i18n instance to react-i18next
  .use(initReactI18next)
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      // en: {
      //   translations: translationEn,
      // },
      ru: {
        translations: translationRu,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
