import { defineRouting } from 'next-intl/routing';

import { ENGLISH_LANGUAGE_CODE, locales } from '@/locales';

export const routing = defineRouting({
  defaultLocale: ENGLISH_LANGUAGE_CODE,
  locales: locales,
});
