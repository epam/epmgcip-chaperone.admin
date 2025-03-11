import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

export default function middleware(req: NextRequest) {
  const handleI18nRouting = createMiddleware(routing);

  return handleI18nRouting(req);
}

export const config = {
  matcher: ['/', '/((?!_next/static|api|_next/image|images|svg|favicon.ico).*)'],
};
