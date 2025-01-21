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
import { MobileSubLinks } from './MobileSubLinks';

interface Props {
  activeLinkIndex: number;
  links: ILink[];
}

export const MobileHeader: React.FC<Props> = (props) => {
  const t = useTranslations();

  const [isDrawerOpened, { toggle: onToggleDrawer, close: onCloseDrawer }] = useDisclosure(false);

  return (
    <>
      <Burger
        data-testid="mobile-menu"
        opened={isDrawerOpened}
        onClick={onToggleDrawer}
        size="sm"
      />

      <Link href={BASE_URL}>
        <Image src={logo} width={68} alt={t('logo')} />
      </Link>

      <LanguageSwitcher />

      <Drawer
        opened={isDrawerOpened}
        onClose={onCloseDrawer}
        closeButtonProps={{ 'data-testid': 'close-drawer-button' }}
        size="100%"
        padding="md"
        zIndex={1000}
      >
        <div className={styles.drawer}>
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
                  onClick={onCloseDrawer}
                  className={clsx(styles.mobileLink, { [styles.mobileActiveLink]: isSelectedLink })}
                >
                  {t(`menu.${link.label}`)}
                </Link>
              );
            }

            return (
              <MobileSubLinks
                key={link.label}
                link={link}
                isSelected={isSelectedLink}
                onCloseDrawer={onCloseDrawer}
              />
            );
          })}
        </div>
      </Drawer>
    </>
  );
};
