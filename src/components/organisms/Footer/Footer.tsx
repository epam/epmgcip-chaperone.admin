import {
  IconBrandTelegram,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CircleLink } from '@/components/atoms/CircleLink/CircleLink';
import { APP_ROUTES } from '@/constants/routes';
import { RouteLabelsEnum } from '@/enums';

import styles from './Footer.module.scss';

export const Footer = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();
  const contactRoute = APP_ROUTES.find((r) => r.label === RouteLabelsEnum.Contacts);

  return (
    <div className={styles.footer}>
      <div className={styles.socialLinks}>
        <CircleLink
          link="https://www.facebook.com/savitskymuseum/"
          icon={<IconBrandTelegram color="white" size="20" data-testid="social-network" />}
        />
        <CircleLink
          link="https://www.instagram.com/museumsavitsky1/"
          icon={<IconBrandInstagram color="white" size="20" data-testid="social-network" />}
        />
        <CircleLink
          link="https://t.me/museumsavitsky"
          icon={<IconBrandFacebook color="white" size="20" data-testid="social-network" />}
        />
        <CircleLink
          link="https://www.youtube.com/channel/UCshZAh9gVGMv_gFQJo3IXyQ"
          icon={<IconBrandYoutube color="white" size="19" data-testid="social-network" />}
        />
      </div>
      <div className={styles.copyright}>
        &copy;{currentYear}. {t('copyright.message')}{' '}
        {contactRoute?.url && (
          <Link className={styles.contactsLink} href={contactRoute.url}>
            {t('copyright.contact')}
          </Link>
        )}
      </div>
    </div>
  );
};
