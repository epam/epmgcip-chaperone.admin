'use client';

import { useTransition } from 'react';

import { useLocale } from 'next-intl';

import { LocaleCode, locales } from '@/locales';
import { usePathname, useRouter } from '@/navigation';

import Dropdown from '../../atoms/Dropdown/Dropdown';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const changeLanguage = (lng: LocaleCode) => {
    startTransition(() => {
      router.replace(pathname, { locale: lng });
    });
  };

  const options = locales.map((lang) => ({
    id: lang,
    image: `/images/${lang}.png`,
    text: lang,
  }));

  return (
    <Dropdown
      options={options}
      defaultOptionId={locale}
      onChange={(option) => changeLanguage(option.id)}
    />
  );
}
