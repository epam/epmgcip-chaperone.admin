import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default function middleware(req: NextRequest) {
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(req);

  const requestPathname = req.nextUrl.pathname;
  response.headers.set('x-pathname', requestPathname);

  return response;
}

export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|images|svg|favicon.ico).*)'],
};
