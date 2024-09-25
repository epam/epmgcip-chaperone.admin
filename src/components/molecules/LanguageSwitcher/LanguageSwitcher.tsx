"use client";

import { useLocale } from "next-intl";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import { LocaleCode, locales } from "@/locales";
import { usePathname, useRouter } from "@/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (lng: LocaleCode) => {
    startTransition(() => {
      router.replace(pathname, { locale: lng });
    });
  };

  const options = locales.map((lang) => ({
    id: lang,
    text: lang,
    image: `/images/${lang}.png`,
  }));

  return (
    <Dropdown
      options={options}
      defaultOptionId={locale}
      onChange={(option) => changeLanguage(option.id)}
    />
  );
}
