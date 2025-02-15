'use client';

import React, { useEffect, useMemo, useState } from 'react';

import { useMobileView, useTabletView } from '@/hooks';
import { ILink } from '@/interfaces/ILink';
import { usePathname } from '@/navigation';

import { DesktopHeader } from './DesktopHeader';
import styles from './Header.module.scss';
import { MobileHeader } from './MobileHeader';

interface Props {
  links: ILink[];
}

export default function Header(props: Props) {
  const pathname = usePathname();

  const isMobile = useMobileView();
  const isTablet = useTabletView();

  const [activeLinkIndex, setActiveLinkIndex] = useState<null | number>(null);

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

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const foundActiveLinkIndex = links.findIndex((link) => {
      return link.url === pathname || link.subLinks?.some((subLink) => subLink.url === pathname);
    });

    const activeLinkIndex = foundActiveLinkIndex === -1 ? 0 : foundActiveLinkIndex;

    setActiveLinkIndex(activeLinkIndex);
  }, [pathname, links]);

  const headersBaseProps = {
    activeLinkIndex,
    links,
  };

  return (
    <header className={styles.header} data-testid="header-component">
      {isMobile || isTablet ? (
        <MobileHeader {...headersBaseProps} />
      ) : (
        <DesktopHeader {...headersBaseProps} />
      )}
    </header>
  );
}
