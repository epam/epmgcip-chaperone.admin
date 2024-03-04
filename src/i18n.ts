import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translations
import translationEN from '../locales/en.json'
import translationRU from '../locales/ru.json'

const userLanguage = navigator.language.split('-')[0]

i18n.use(initReactI18next).init({
  resources: {
    en: translationEN,
    ru: translationRU,
  },
  lng: userLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
