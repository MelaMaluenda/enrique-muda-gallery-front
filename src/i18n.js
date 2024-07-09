import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import home_eng from "./translation/english/home.json";
import home_esp from "./translation/español/home.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        home: home_eng,
      },
      es: {
        home: home_esp,
      },
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
