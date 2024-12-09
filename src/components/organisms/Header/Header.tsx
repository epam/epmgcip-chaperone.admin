'use client';

import React, { useState } from 'react';

import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import logo from '@/assets/image/logo.png';
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher/LanguageSwitcher';
import { Link } from '@/navigation';

import styles from './Header.module.scss';

const links = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Museum',
    link: 'museum',
  },
  {
    label: 'Exposition',
    link: 'exposition',
  },
  {
    label: 'News',
    link: 'news',
  },
];

export default function Header() {
  const t = useTranslations();

  const [opened, { toggle }] = useDisclosure(false);
  const [activeLink, setActiveLink] = useState(links[0].link);

  const onClickLink =
    (link: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>): void => {
      e.preventDefault();

      setActiveLink(link);
    };

  return (
    <header className={styles.header} data-testid="header-component">
      <Image src={logo} width={68} alt={t('logo')} />

      <Container size="sm" className={styles.desktopContainer}>
        <Group visibleFrom="sm" gap="50px">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.link}
              onClick={onClickLink(link.link)}
              className={clsx(styles.link, { [styles.activeLink]: activeLink === link.link })}
            >
              {link.label}
            </Link>
          ))}
        </Group>
      </Container>

      <div className={styles.dropdownContainer}>
        <LanguageSwitcher />
      </div>

      <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
    </header>
  );
}
