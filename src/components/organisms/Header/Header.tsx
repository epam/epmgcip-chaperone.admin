'use client';

import React, { useMemo, useState } from 'react';

import { useMobileView } from '@/hooks/use-mobile-view';
import { ILink } from '@/interfaces/ILink';

import { DesktopHeader } from './DesktopHeader';
import styles from './Header.module.scss';
import { MobileHeader } from './MobileHeader';

interface Props {
  links: ILink[];
}

export default function Header(props: Props) {
  const links = useMemo(
    () =>
      props.links.filter((link) => {
        if (link.subLinks?.length) {
          link.subLinks = link.subLinks.filter((subLink) => subLink.isEnabled);
        }

        return link.isEnabled;
      }),
    [props.links],
  );

  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const isMobile = useMobileView();

  const onClickLink = (linkIndex: number): void => {
    setActiveLinkIndex(linkIndex);
  };

  const headersBaseProps = {
    activeLinkIndex,
    links,
    onClickLink,
  };

  return (
    <header className={styles.header} data-testid="header-component">
      {isMobile ? <MobileHeader {...headersBaseProps} /> : <DesktopHeader {...headersBaseProps} />}
    </header>
  );
}
