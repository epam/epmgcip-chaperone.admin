import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from '../locales/en.json'
import translationRU from '../locales/ru.json'
import translationUZ from '../locales/uz.json'
import translationKA from '../locales/ka.json'
import {
  ENGLISH_LANGUAGE_CODE,
  KARAKALPAK_LANGUAGE_CODE,
  RUSSIAN_LANGUAGE_CODE,
  UZBEK_LANGUAGE_CODE,
} from './constants/languages.ts'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      [ENGLISH_LANGUAGE_CODE]: {
        translation: translationEN,
      },
      [RUSSIAN_LANGUAGE_CODE]: {
        translation: translationRU,
      },
      [UZBEK_LANGUAGE_CODE]: {
        translation: translationUZ,
      },
      [KARAKALPAK_LANGUAGE_CODE]: {
        translation: translationKA,
      },
    },
    fallbackLng: ENGLISH_LANGUAGE_CODE,
    supportedLngs: [
      ENGLISH_LANGUAGE_CODE,
      RUSSIAN_LANGUAGE_CODE,
      UZBEK_LANGUAGE_CODE,
      KARAKALPAK_LANGUAGE_CODE,
    ],
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: [],
    },
  })

export default i18n
