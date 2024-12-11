'use client';

import React, { useMemo, useState } from 'react';

import { Burger, Container, Drawer, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import logo from '@/assets/image/logo.png';
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher/LanguageSwitcher';
import { Routes } from '@/constants/routes';

import DesktopHeaderMenu from './DesktopHeaderMenu';
import styles from './Header.module.scss';

export default function Header() {
  const t = useTranslations();

  const links = useMemo(() => Routes.filter((link) => link.isEnabled), []);

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [activeLink, setActiveLink] = useState(links[0].url);

  const onClickLink = (link: string): void => {
    setActiveLink(link);
  };

  return (
    <header className={styles.header} data-testid="header-component">
      <Image src={logo} width={68} alt={t('logo')} />

      <Container size="sm" className={styles.desktopContainer}>
        <Group visibleFrom="sm" gap="50px">
          <DesktopHeaderMenu activeLink={activeLink} links={links} onClickLink={onClickLink} />
        </Group>
      </Container>

      <div className={styles.dropdownContainer}>
        <LanguageSwitcher />
      </div>

      <Burger
        opened={drawerOpened}
        className={styles.burgerMenuIcon}
        onClick={toggleDrawer}
        hiddenFrom="sm"
        size="sm"
      />

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000}
      >
        <h1>test</h1>
      </Drawer>
    </header>
  );
}
