export const ENGLISH_LANGUAGE_CODE = "en" as const;
export const RUSSIAN_LANGUAGE_CODE = "ru" as const;
export const UZBEK_LANGUAGE_CODE = "uz" as const;
export const KARAKALPAK_LANGUAGE_CODE = "ka" as const;

export const locales = [
  ENGLISH_LANGUAGE_CODE,
  RUSSIAN_LANGUAGE_CODE,
  UZBEK_LANGUAGE_CODE,
  KARAKALPAK_LANGUAGE_CODE,
];

export type Locales = typeof locales;

export type LocaleCode = (typeof locales)[number];

export const ENGLISH_LANGUAGE_CODE_CAMELCASE = "En" as const;
export const RUSSIAN_LANGUAGE_CODE_CAMELCASE = "Ru" as const;
export const UZBEK_LANGUAGE_CODE_CAMELCASE = "Uz" as const;
export const KARAKALPAK_LANGUAGE_CODE_CAMELCASE = "Ka" as const;

export const localesCamelcase = [
  ENGLISH_LANGUAGE_CODE_CAMELCASE,
  RUSSIAN_LANGUAGE_CODE_CAMELCASE,
  UZBEK_LANGUAGE_CODE_CAMELCASE,
  KARAKALPAK_LANGUAGE_CODE_CAMELCASE,
];

export type LocalesCamelcase = typeof locales;

export type LocaleCodeCamelcase = (typeof localesCamelcase)[number];
