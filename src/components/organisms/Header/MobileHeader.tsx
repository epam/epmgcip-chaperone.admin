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
  activeLinkIndex: number;
  links: ILink[];
  onClickLink: (linkIndex: number) => void;
}

export const MobileHeader: React.FC<Props> = (props) => {
  const t = useTranslations();

  const [isDrawerOpened, { toggle: onToggleDrawer, close: onCloseDrawer }] = useDisclosure(false);

  const onClickLink = (linkIndex: number) => (): void => {
    onCloseDrawer();

    props.onClickLink(linkIndex);
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
          {props.links.map((link, index) => {
            const isSubMenuItem = !!link.subLinks;
            const isSelectedLink = props.activeLinkIndex === index;

            if (!isSubMenuItem) {
              const linkUrl = link.url!;

              return (
                <Link
                  key={link.label}
                  href={linkUrl}
                  onClick={onClickLink(index)}
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
                onClickLink={() => props.onClickLink(index)}
                isSelected={isSelectedLink}
              />
            );
          })}
        </div>
      </Drawer>
    </>
  );
};
