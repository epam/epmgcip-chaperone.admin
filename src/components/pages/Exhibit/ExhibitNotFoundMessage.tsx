import React from 'react';

import { useTranslations } from 'next-intl';

import IExhibit from '@/interfaces/IExhibit';
import { LocaleCodeCamelcase, localesCamelcase } from '@/locales';

import styles from './Exhibit.module.scss';

interface Props {
  exhibit: IExhibit;
  setLocale: (locale: LocaleCodeCamelcase) => void;
}

export const ExhibitNotFoundMessage: React.FC<Props> = (props) => {
  const t = useTranslations();

  const handleLinkOnClick =
    (lang: LocaleCodeCamelcase) =>
    (e: React.SyntheticEvent<HTMLButtonElement>): void => {
      e.preventDefault();

      props.setLocale(lang);
    };

  const links = localesCamelcase
    .filter((lang) => props.exhibit?.[`name${lang}`])
    .map((lang) => (
      <span key={lang}>
        <button className={styles.link} onClick={handleLinkOnClick(lang)}>
          {t(`exhibitNotFound${lang}`)}
        </button>{' '}
      </span>
    ));

  return (
    <div className={styles.error}>
      {t('exhibitNotFoundForLanguage')} {links}
    </div>
  );
};
