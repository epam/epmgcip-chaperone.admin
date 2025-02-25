import { MessageKeys, NestedKeyOf } from 'next-intl';
import { z } from 'zod';

import { ContactFormValidationErrors } from '@/enums';

type TranslateFunction = (
  translationKey: MessageKeys<IntlMessages, NestedKeyOf<IntlMessages>>,
) => string;

export const contactFormDataSchema = (t?: TranslateFunction) =>
  z.object({
    email: z
      .string()
      .email(
        t?.('contactForm.fields.email.validation') || ContactFormValidationErrors.InvalidEmail,
      ),
    message: z
      .string()
      .min(
        1,
        t?.('contactForm.fields.message.validation') || ContactFormValidationErrors.MessageRequired,
      ),
    name: z
      .string()
      .min(
        1,
        t?.('contactForm.fields.name.validation') || ContactFormValidationErrors.NameRequired,
      ),
    subject: z
      .string()
      .min(
        1,
        t?.('contactForm.fields.subject.validation') || ContactFormValidationErrors.SubjectRequired,
      ),
  });
