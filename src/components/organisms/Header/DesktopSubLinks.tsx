import React from 'react';

import { HoverCard } from '@mantine/core';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';

import { ILink } from '@/interfaces/ILink';
import { Link } from '@/navigation';

import styles from './Header.module.scss';

interface Props {
  link: ILink;
  isSelected: boolean;
}

export const DesktopSubLinks: React.FC<Props> = ({ link, isSelected }: Props) => {
  const t = useTranslations();
  const linkUrl = link.url!;

  return (
    <HoverCard>
      <HoverCard.Target>
        <Link
          data-testid="link"
          href={linkUrl}
          className={clsx(styles.desktopLink, {
            [styles.desktopActiveLink]: isSelected,
          })}
        >
          {t(`menu.${link.label}`)}
        </Link>
      </HoverCard.Target>

      <HoverCard.Dropdown className={styles.subLinksDropdown}>
        <div className={styles.desktopSubLinksContainer}>
          {link.subLinks!.map((subLink) => (
            <Link
              data-testid="sub-link"
              key={subLink.label}
              href={subLink.url}
              className={styles.desktopSubLink}
            >
              {t(`menu.${subLink.label}`)}
            </Link>
          ))}
        </div>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};
