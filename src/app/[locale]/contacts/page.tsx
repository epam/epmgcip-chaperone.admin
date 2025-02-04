import { Map } from '@/components/atoms/Map/Map';
import { ContactForm } from '@/components/forms';

const mapHeight = '450';

export default function ContactsPage() {
  return (
    <>
      <Map height={mapHeight} />
      <ContactForm reCaptchaSiteKey={process.env.RE_CAPTCHA_SITE_KEY!} />
    </>
  );
}
