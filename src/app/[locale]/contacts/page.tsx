import { ContactForm } from '@/components/forms';
import Page from '@/components/pages/Page/Page';
import { getPage } from '@/lib/page';
import getLastUrlSegment from '@/utils/getLastUrlSegment';

export default async function ContactsPage() {
  const lastUrlSegment = getLastUrlSegment();
  const page = await getPage(lastUrlSegment);

  return (
    <>
      {page && <Page page={page} />}
      <ContactForm reCaptchaSiteKey={process.env.RE_CAPTCHA_SITE_KEY!} />
    </>
  );
}
