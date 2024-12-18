import React from 'react';

import { Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import logo from '@/assets/image/logo.png';
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher/LanguageSwitcher';
import { BASE_URL } from '@/constants/routes';
import { ILink } from '@/interfaces/ILink';
import { Link } from '@/navigation';

import styles from './Header.module.scss';
import { MobileSubLinks } from './MobileSubLinksLink';

interface Props {
  activeLink: string;
  links: ILink[];
  onClickLink: (url: string) => void;
}

export const MobileHeader: React.FC<Props> = (props) => {
  const t = useTranslations();

  const [isDrawerOpened, { toggle: onToggleDrawer, close: onCloseDrawer }] = useDisclosure(false);

  const onClickLink = (link: string) => (): void => {
    onCloseDrawer();

    props.onClickLink(link);
  };

  return (
    <>
      <Burger opened={isDrawerOpened} onClick={onToggleDrawer} size="sm" />

      <Link href={BASE_URL}>
        <Image src={logo} width={68} alt={t('logo')} />
      </Link>

      <LanguageSwitcher />

      <Drawer
        opened={isDrawerOpened}
        onClose={onCloseDrawer}
        size="100%"
        padding="md"
        zIndex={1000}
      >
        <div className={styles.drawer}>
          {props.links.map((link) => {
            const isSubMenuItem = !!link.subLinks;
            const isSelectedLink = props.activeLink === link.url;

            if (!isSubMenuItem) {
              return (
                <Link
                  key={link.label}
                  href={link.url}
                  onClick={onClickLink(link.url)}
                  className={clsx(styles.mobileLink, { [styles.mobileActiveLink]: isSelectedLink })}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <MobileSubLinks
                key={link.label}
                link={link}
                onClickLink={props.onClickLink}
                isSelected={isSelectedLink}
              />
            );
          })}
        </div>
      </Drawer>
    </>
  );
};
