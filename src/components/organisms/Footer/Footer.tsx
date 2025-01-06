import {
  IconBrandTelegram,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from '@tabler/icons-react';
import Link from 'next/link';

import CircleLink from '@/components/atoms/CircleLink/CircleLink';
import { APP_ROUTES } from '@/constants/routes';
import { RouteLabelsEnum } from '@/enums';

import styles from './Footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const contactRoute = APP_ROUTES.find((r) => r.label === RouteLabelsEnum.Contacts);

  return (
    <div className={styles.footer}>
      <div className={styles.socialLinks}>
        <CircleLink
          link="https://www.facebook.com/savitskymuseum/"
          icon={<IconBrandTelegram color="white" size="20" />}
        />
        <CircleLink
          link="https://www.instagram.com/museumsavitsky1/"
          icon={<IconBrandInstagram color="white" size="20" />}
        />
        <CircleLink
          link="https://t.me/museumsavitsky"
          icon={<IconBrandFacebook color="white" size="20" />}
        />
        <CircleLink
          link="https://www.youtube.com/channel/UCshZAh9gVGMv_gFQJo3IXyQ"
          icon={<IconBrandYoutube color="white" size="19" />}
        />
      </div>
      <div className={styles.copyright}>
        ©{currentYear}. All copyrights reserved. Copying website content allowed only on permission
        of the Museum&apos;s Administration.{' '}
        {contactRoute?.url && (
          <Link className={styles.contactsLink} href={contactRoute.url}>
            Contact details.
          </Link>
        )}
      </div>
    </div>
  );
}
