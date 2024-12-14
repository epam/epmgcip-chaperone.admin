import React from 'react';

import { Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import logo from '@/assets/image/logo.png';
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher/LanguageSwitcher';
import { BASE_URL } from '@/constants/routes';
import { ILink } from '@/interfaces/ILink';
import { Link } from '@/navigation';

interface Props {
  activeLink: string;
  links: ILink[];
  onClickLink: (url: string) => void;
}

export const MobileHeader: React.FC<Props> = () => {
  const t = useTranslations();
  const [isDrawerOpened, { toggle: onToggleDrawer, close: onCloseDrawer }] = useDisclosure(false);

  return (
    <>
      <Burger opened={isDrawerOpened} onClick={onToggleDrawer} size="sm" />

      <Link href={BASE_URL}>
        <Image src={logo} width={68} alt={t('logo')} />
      </Link>

      <LanguageSwitcher />

      <Drawer
        opened={isDrawerOpened}
        onClose={onCloseDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        zIndex={1000}
      >
        <h1>test</h1>
      </Drawer>
    </>
  );
};
