import createMiddleware from "next-intl/middleware";
import { ENGLISH_LANGUAGE_CODE, locales } from "./locales";

export default createMiddleware({
  locales: locales,

  defaultLocale: ENGLISH_LANGUAGE_CODE,
});

export const config = {
  matcher: ["/", "/((?!_next/static|images|svg|favicon.ico).*)"],
};
