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
  onClickLink: () => void;
}

export const MobileSubLinks: React.FC<Props> = (props) => {
  const [isSubMenuOpened, { toggle: toggleSubMenu, close: closeSubMenu }] = useDisclosure(false);

  const onClickLink = (): void => {
    toggleSubMenu();

    props.onClickLink();
  };

  const onClickSubLink = (): void => {
    closeSubMenu();

    props.onClickLink();
  };

  const iconChevronProps = {
    className: props.isSelected ? styles.activeChevronIcon : styles.chevronIcon,
    size: 20,
  };

  return (
    <React.Fragment>
      <div className={styles.mobileSubLinksTab}>
        <Link
          href={''}
          onClick={onClickLink}
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
