import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './translations/en.json';
import translationPT from './translations/pt.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      pt: { translation: translationPT },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });
export default i18next;
