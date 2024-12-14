import React from 'react';

import { Group, HoverCard } from '@mantine/core';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import logo from '@/assets/image/logo.png';
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher/LanguageSwitcher';
import { ILink } from '@/interfaces/ILink';
import { Link } from '@/navigation';

import styles from './Header.module.scss';

interface Props {
  activeLink: string;
  links: ILink[];
  onClickLink: (url: string) => void;
}

export const DesktopHeader: React.FC<Props> = (props) => {
  const t = useTranslations();

  const onClickLink = (link: string) => (): void => {
    props.onClickLink(link);
  };

  const onClickSubMenuLink =
    (link: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>): void => {
      e.preventDefault();

      props.onClickLink(link);
    };

  return (
    <>
      <Image src={logo} width={68} alt={t('logo')} />

      <Group gap={50} className={styles.desktopContainer}>
        {props.links.map((link) => {
          const isSubMenuItem = !!link.subLinks;
          const isSelectedLink = props.activeLink === link.url;

          if (!isSubMenuItem) {
            return (
              <Link
                key={link.label}
                href={link.url}
                onClick={onClickLink(link.url)}
                className={clsx(styles.link, { [styles.activeLink]: isSelectedLink })}
              >
                {link.label}
              </Link>
            );
          }

          return (
            <HoverCard key={link.label}>
              <HoverCard.Target>
                <Link
                  href={''}
                  onClick={onClickSubMenuLink(link.url)}
                  className={clsx(styles.link, { [styles.activeLink]: isSelectedLink })}
                >
                  {link.label}
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown className={styles.subLinksDropdown}>
                <ul className={styles.subLinksContainer}>
                  {link.subLinks!.map((item) => (
                    <li key={item.label} className={styles.subLinkItem}>
                      <Link key={item.label} href={item.url} className={styles.subLink}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </HoverCard.Dropdown>
            </HoverCard>
          );
        })}
      </Group>

      <div className={styles.dropdownContainer}>
        <LanguageSwitcher />
      </div>
    </>
  );
};
