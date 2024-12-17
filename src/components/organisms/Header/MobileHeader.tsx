import React from 'react';

import { Burger, Collapse, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import logo from '@/assets/image/logo.png';
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher/LanguageSwitcher';
import { BASE_URL } from '@/constants/routes';
import { ILink } from '@/interfaces/ILink';
import { Link } from '@/navigation';

import styles from './Header.module.scss';

interface Props {
  activeLink: string;
  links: ILink[];
  onClickLink: (url: string) => void;
}

export const MobileHeader: React.FC<Props> = (props) => {
  const t = useTranslations();

  const [isDrawerOpened, { toggle: onToggleDrawer, close: onCloseDrawer }] = useDisclosure(false);
  // todo: separate component
  const [isSubMenuOpened, { toggle: toggleSubMenu, close: onCloseSubMenu }] = useDisclosure(false);

  const onClickLink = (link: string) => (): void => {
    onCloseDrawer();

    onCloseSubMenu();

    props.onClickLink(link);
  };

  const onClickSubMenuLink =
    (link: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>): void => {
      e.preventDefault();

      toggleSubMenu();

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
              <React.Fragment key={link.label}>
                <div className={styles.mobileSubLinksTab}>
                  <Link
                    href={''}
                    onClick={onClickSubMenuLink(link.url)}
                    className={clsx(styles.mobileLink, {
                      [styles.mobileActiveLink]: isSelectedLink,
                    })}
                  >
                    {link.label}
                  </Link>

                  {isSubMenuOpened ? (
                    <IconChevronUp size={18} className={styles.expandChevronIcon} />
                  ) : (
                    <IconChevronDown size={18} className={styles.expandChevronIcon} />
                  )}
                </div>

                <Collapse in={isSubMenuOpened}>
                  <div className={styles.mobileSubLinksContainer}>
                    {link.subLinks!.map((subLink) => (
                      <Link key={subLink.label} href={subLink.url} className={styles.mobileSubLink}>
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </Collapse>
              </React.Fragment>
            );
          })}
        </div>
      </Drawer>
    </>
  );
};
