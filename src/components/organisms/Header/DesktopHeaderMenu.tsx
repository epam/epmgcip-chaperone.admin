import React from 'react';

import { Group, HoverCard } from '@mantine/core';
import { clsx } from 'clsx';

import { ILink } from '@/interfaces/ILink';
import { Link } from '@/navigation';

import styles from './Header.module.scss';

interface Props {
  activeLink: string;
  links: ILink[];
  onClickLink: (url: string) => void;
}

const DesktopHeaderMenu: React.FC<Props> = (props) => {
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
    <Group visibleFrom="sm" gap="50px">
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
  );
};

export default DesktopHeaderMenu;
