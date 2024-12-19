import createMiddleware from 'next-intl/middleware';

import { ENGLISH_LANGUAGE_CODE, locales } from './locales';

export default createMiddleware({
  defaultLocale: ENGLISH_LANGUAGE_CODE,
  locales: locales,
});

export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|images|svg|favicon.ico).*)'],
};
