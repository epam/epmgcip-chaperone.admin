import React from 'react';

import { Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { clsx } from 'clsx';

import { ILink } from '@/interfaces/ILink';
import { Link } from '@/navigation';

import styles from './Header.module.scss';

interface Props {
  link: ILink;
  isSelected: boolean;
  onCloseDrawer: () => void;
}

export const MobileSubLinks: React.FC<Props> = (props) => {
  const [isSubMenuOpened, { toggle: toggleSubMenu, close: closeSubMenu }] = useDisclosure(
    props.isSelected,
  );

  const onClickLink = (): void => {
    toggleSubMenu();
  };

  const onClickSubLink = (): void => {
    closeSubMenu();

    props.onCloseDrawer();
  };

  const iconChevronProps = {
    className: props.isSelected ? styles.activeChevronIcon : styles.chevronIcon,
    size: 20,
  };

  return (
    <React.Fragment>
      <div className={styles.mobileSubLinksTab} onClick={onClickLink}>
        <Link
          data-testid="link"
          href={''}
          className={clsx(styles.mobileLink, {
            [styles.mobileActiveLink]: props.isSelected,
          })}
        >
          {props.link.label}
        </Link>

        {isSubMenuOpened ? (
          <IconChevronUp {...iconChevronProps} />
        ) : (
          <IconChevronDown {...iconChevronProps} />
        )}
      </div>

      <Collapse in={isSubMenuOpened}>
        <div className={styles.mobileSubLinksContainer}>
          {props.link.subLinks!.map((subLink) => (
            <Link
              data-testid="sub-link"
              key={subLink.label}
              href={subLink.url}
              className={styles.mobileSubLink}
              onClick={onClickSubLink}
            >
              {subLink.label}
            </Link>
          ))}
        </div>
      </Collapse>
    </React.Fragment>
  );
};
