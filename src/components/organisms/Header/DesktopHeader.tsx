import React from 'react';

import { Group } from '@mantine/core';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import logo from '@/assets/image/logo.png';
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher/LanguageSwitcher';
import { DesktopSubLinks } from '@/components/organisms/Header/DesktopSubLinks';
import { BASE_URL } from '@/constants/routes';
import { ILink } from '@/interfaces/ILink';
import { Link } from '@/navigation';

import styles from './Header.module.scss';

interface Props {
  activeLinkIndex: number | null;
  links: ILink[];
}

export const DesktopHeader: React.FC<Props> = (props) => {
  const t = useTranslations();

  return (
    <>
      <Link href={BASE_URL}>
        <Image src={logo} width={68} alt={t('logo')} />
      </Link>

      <Group gap={50} className={styles.desktopContainer}>
        {props.links.map((link, index) => {
          const isSubMenuItem = !!link.subLinks;
          const isSelectedLink = props.activeLinkIndex === index;

          if (!isSubMenuItem) {
            const linkUrl = link.url!;

            return (
              <Link
                data-testid="link"
                key={link.label}
                href={linkUrl}
                className={clsx(styles.desktopLink, { [styles.desktopActiveLink]: isSelectedLink })}
              >
                {t(`menu.${link.label}`)}
              </Link>
            );
          }

          return <DesktopSubLinks key={link.label} link={link} isSelected={isSelectedLink} />;
        })}
      </Group>

      <LanguageSwitcher />
    </>
  );
};
