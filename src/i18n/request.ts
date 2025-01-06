import { getRequestConfig } from 'next-intl/server';

import { LocaleCode, locales } from '@/locales';

import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as LocaleCode;

  if (!locale || !locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
