import React from 'react';

import { Group, HoverCard } from '@mantine/core';
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
  activeLinkIndex: number;
  links: ILink[];
  onClickLink: (linkIndex: number) => void;
}

export const DesktopHeader: React.FC<Props> = (props) => {
  const t = useTranslations();

  const onClickLink = (linkIndex: number) => (): void => {
    props.onClickLink(linkIndex);
  };

  const onClickSubMenuLink =
    (linkIndex: number) =>
    (e: React.MouseEvent<HTMLAnchorElement>): void => {
      e.preventDefault();

      props.onClickLink(linkIndex);
    };

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
                key={link.label}
                href={linkUrl}
                onClick={onClickLink(index)}
                className={clsx(styles.desktopLink, { [styles.desktopActiveLink]: isSelectedLink })}
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
                  onClick={onClickSubMenuLink(index)}
                  className={clsx(styles.desktopLink, {
                    [styles.desktopActiveLink]: isSelectedLink,
                  })}
                >
                  {link.label}
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown className={styles.subLinksDropdown}>
                <div className={styles.desktopSubLinksContainer}>
                  {link.subLinks!.map((subLink) => (
                    <Link key={subLink.label} href={subLink.url} className={styles.desktopSubLink}>
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
          );
        })}
      </Group>

      <LanguageSwitcher />
    </>
  );
};
