import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import EnFlag from './assets/images/EN.png'
import RuFlag from './assets/images/RU.png'
import UzFlag from './assets/images/UZ.png'
import KaFlag from './assets/images/KA.png'

import translationEN from '../locales/en.json'
import translationRU from '../locales/ru.json'
import translationUZ from '../locales/uz.json'
import translationKA from '../locales/ka.json'

export const ENGLISH_LANGUAGE_CODE = 'En' as const
export const RUSSIAN_LANGUAGE_CODE = 'Ru' as const
export const UZBEK_LANGUAGE_CODE = 'Uz' as const
export const KARAKALPAK_LANGUAGE_CODE = 'Ka' as const

export const languages = [
  ENGLISH_LANGUAGE_CODE,
  RUSSIAN_LANGUAGE_CODE,
  UZBEK_LANGUAGE_CODE,
  KARAKALPAK_LANGUAGE_CODE,
]

export type LanguageCode = (typeof languages)[number]

const resources = {
  [ENGLISH_LANGUAGE_CODE]: {
    translation: translationEN,
    flag: EnFlag,
  },
  [RUSSIAN_LANGUAGE_CODE]: {
    translation: translationRU,
    flag: RuFlag,
  },
  [UZBEK_LANGUAGE_CODE]: {
    translation: translationUZ,
    flag: UzFlag,
  },
  [KARAKALPAK_LANGUAGE_CODE]: {
    translation: translationKA,
    flag: KaFlag,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ENGLISH_LANGUAGE_CODE,
    supportedLngs: languages,
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: [],
    },
  })

export default i18n
