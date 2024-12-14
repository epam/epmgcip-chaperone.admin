'use client';

import React, { useMemo, useState } from 'react';

import { Routes } from '@/constants/routes';
import { useMobileView } from '@/hooks/use-mobile-view';

import { DesktopHeader } from './DesktopHeader';
import styles from './Header.module.scss';
import { MobileHeader } from './MobileHeader';

export default function Header() {
  const links = useMemo(() => Routes.filter((link) => link.isEnabled), []);

  const [activeLink, setActiveLink] = useState(links[0].url);
  const isMobile = useMobileView();

  const onClickLink = (link: string): void => {
    setActiveLink(link);
  };

  return (
    <header className={styles.header} data-testid="header-component">
      {isMobile ? (
        <MobileHeader activeLink={activeLink} links={links} onClickLink={onClickLink} />
      ) : (
        <DesktopHeader activeLink={activeLink} links={links} onClickLink={onClickLink} />
      )}
    </header>
  );
}
