import React from 'react';

import { HoverCard } from '@mantine/core';
import { clsx } from 'clsx';

import { ILink } from '@/interfaces/ILink';
import { Link } from '@/navigation';

import styles from './Header.module.scss';

interface Props {
  link: ILink;
  isSelected: boolean;
  onClickLink: () => void;
}

export const DesktopSubLinks: React.FC<Props> = (props) => {
  const onClickSubMenuLink = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();

    props.onClickLink();
  };

  return (
    <HoverCard>
      <HoverCard.Target>
        <Link
          data-testid="link"
          href={''}
          onClick={onClickSubMenuLink}
          className={clsx(styles.desktopLink, {
            [styles.desktopActiveLink]: props.isSelected,
          })}
        >
          {props.link.label}
        </Link>
      </HoverCard.Target>

      <HoverCard.Dropdown className={styles.subLinksDropdown}>
        <div className={styles.desktopSubLinksContainer}>
          {props.link.subLinks!.map((subLink) => (
            <Link
              data-testid="sub-link"
              key={subLink.label}
              href={subLink.url}
              className={styles.desktopSubLink}
              onClick={props.onClickLink}
            >
              {subLink.label}
            </Link>
          ))}
        </div>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};
