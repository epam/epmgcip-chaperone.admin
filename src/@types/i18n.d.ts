import translationEN from '../../locales/en.json'
import EnFlag from './assets/images/EN.png'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof translationEN
      flag: typeof EnFlag
    }
  }
}

export {}
