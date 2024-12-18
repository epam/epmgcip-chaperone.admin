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
  const links = useMemo(() => props.links.filter((link) => link.isEnabled), [props.links]);

  const [activeLink, setActiveLink] = useState(links[0].url);
  const isMobile = useMobileView();

  const onClickLink = (link: string): void => {
    setActiveLink(link);
  };

  const headersBaseProps = {
    activeLink,
    links,
    onClickLink,
  };

  return (
    <header className={styles.header} data-testid="header-component">
      {isMobile ? <MobileHeader {...headersBaseProps} /> : <DesktopHeader {...headersBaseProps} />}
    </header>
  );
}
