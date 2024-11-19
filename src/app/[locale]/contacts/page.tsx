import { ContactForm } from "@/components/forms";

export default function ContactsPage() {
  return <ContactForm reCaptchaSiteKey={process.env.RE_CAPTCHA_SITE_KEY!} />;
}
