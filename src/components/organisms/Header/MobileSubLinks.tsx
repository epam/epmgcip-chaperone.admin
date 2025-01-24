import React from 'react';

import { Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';

import { ILink } from '@/interfaces/ILink';
import { Link } from '@/navigation';

import styles from './Header.module.scss';

interface Props {
  link: ILink;
  isSelected: boolean;
  onCloseDrawer: () => void;
}

export const MobileSubLinks: React.FC<Props> = ({ link, isSelected, onCloseDrawer }: Props) => {
  const t = useTranslations();
  const linkUrl = link.url!;
  const [isSubMenuOpened, { toggle: toggleSubMenu, close: closeSubMenu }] =
    useDisclosure(isSelected);

  const onClickButton = (): void => {
    toggleSubMenu();
  };

  const onClickLink = (): void => {
    closeSubMenu();

    onCloseDrawer();
  };

  const iconChevronProps = {
    className: isSelected ? styles.activeChevronIcon : styles.chevronIcon,
    size: 20,
  };

  return (
    <React.Fragment>
      <div className={styles.mobileSubLinksTab}>
        <Link
          data-testid="link"
          href={linkUrl}
          className={clsx(styles.mobileLink, {
            [styles.mobileActiveLink]: isSelected,
          })}
          onClick={onClickLink}
        >
          {t(`menu.${link.label}`)}
        </Link>

        <button type="button" onClick={onClickButton} className={styles.mobuleSubMenuButton}>
          {isSubMenuOpened ? (
            <IconChevronUp {...iconChevronProps} />
          ) : (
            <IconChevronDown {...iconChevronProps} />
          )}
        </button>
      </div>

      <Collapse in={isSubMenuOpened}>
        <div className={styles.mobileSubLinksContainer}>
          {link.subLinks!.map((subLink) => (
            <Link
              data-testid="sub-link"
              key={subLink.label}
              href={subLink.url}
              className={styles.mobileSubLink}
              onClick={onClickLink}
            >
              {t(`menu.${subLink.label}`)}
            </Link>
          ))}
        </div>
      </Collapse>
    </React.Fragment>
  );
};
