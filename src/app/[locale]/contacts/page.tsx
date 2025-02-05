import { Map } from '@/components/atoms/Map/Map';
import { ContactForm } from '@/components/forms';
import Page from '@/components/pages/Page/Page';
import { SLUGS } from '@/constants/slugs';
import { getPage } from '@/lib/page';

const mapHeight = '450';

export default async function ContactsPage() {
  const page = await getPage(SLUGS.contacts);

  return (
    <>
      {page && <Page page={page} />}
      <Map height={mapHeight} />
      <ContactForm reCaptchaSiteKey={process.env.RE_CAPTCHA_SITE_KEY!} />
    </>
  );
}
