'use client';

import { FC, useMemo, useRef, useState } from 'react';

import { Box, Button, Fieldset, Loader, Select, Textarea, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useTranslations } from 'next-intl';
import ReCAPTCHA from 'react-google-recaptcha';

import { sendContactForm } from '@/actions';
import { NotificationType } from '@/enums';
import { useShowNotification } from '@/hooks';
import { contactFormDataSchema } from '@/schemas/shared';

import styles from './ContactForm.module.scss';

const EMAIL_SUBJECT_KEYS = ['aboutSite', 'order', 'requestTour', 'cooperation', 'other'] as const;

type EmailSubject = (typeof EMAIL_SUBJECT_KEYS)[number];

interface FormValues {
  email: string;
  message: string;
  name: string;
  subject: string;
}

interface Props {
  reCaptchaSiteKey: string;
}

const ContactForm: FC<Props> = ({ reCaptchaSiteKey }) => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isCaptchaLoaded, setIsCaptchaLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reCaptchaRef = useRef<ReCAPTCHA | null>(null);
  const t = useTranslations();
  const showNotification = useShowNotification();

  const form = useForm<FormValues>({
    initialValues: {
      email: '',
      message: '',
      name: '',
      subject: '',
    },
    validate: zodResolver(contactFormDataSchema(t)),
  });

  const isSubmitEnabled = form.isDirty() && Boolean(captchaToken) && !isSubmitting;

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    if (!captchaToken) {
      showNotification({
        message: t('reCaptcha.message'),
        type: NotificationType.Error,
      });

      return;
    }

    const result = await sendContactForm(values);

    if (result.success) {
      showNotification({
        message: t('action.sendEmail.success'),
        type: NotificationType.Success,
      });
      form.reset();
      setCaptchaToken(null);
      reCaptchaRef.current?.reset();
    } else {
      if (result.messages?.length) {
        result.messages.forEach((message) => {
          showNotification({
            message,
            type: NotificationType.Error,
          });
        });
      } else {
        showNotification({
          message: t('action.sendEmail.error'),
          type: NotificationType.Error,
        });
      }
    }

    setIsSubmitting(false);
  };

  const translatedSubjects = useMemo(() => {
    return EMAIL_SUBJECT_KEYS.map((key: EmailSubject) => t(`contactForm.subjects.${key}`));
  }, [t]);

  return (
    <Box mx="auto" className={styles.formContainer}>
      <Fieldset legend={<h3>{t('contactForm.title')}</h3>} variant="filled">
        <form className={styles.form} onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            data-testid="contact-name"
            label={t('contactForm.fields.name.label')}
            placeholder={t('contactForm.fields.name.placeholder')}
            key={form.key('name')}
            {...form.getInputProps('name')}
          />

          <TextInput
            type="email"
            withAsterisk
            data-testid="contact-email"
            label={t('contactForm.fields.email.label')}
            placeholder={t('contactForm.fields.email.placeholder')}
            key={form.key('email')}
            {...form.getInputProps('email')}
          />

          <Select
            withAsterisk
            data-testid="contact-subject"
            label={t('contactForm.fields.subject.label')}
            comboboxProps={{ withinPortal: true }}
            data={translatedSubjects}
            placeholder={t('contactForm.fields.subject.placeholder')}
            key={form.key('subject')}
            {...form.getInputProps('subject')}
          />

          <Textarea
            withAsterisk
            data-testid="contact-message"
            label={t('contactForm.fields.message.label')}
            placeholder={t('contactForm.fields.message.placeholder')}
            key={form.key('message')}
            minRows={5}
            autosize
            {...form.getInputProps('message')}
          />

          <Box className={styles.reCaptcha}>
            {!isCaptchaLoaded && <Loader type="dots" />}
            <ReCAPTCHA
              ref={reCaptchaRef}
              size="normal"
              sitekey={reCaptchaSiteKey}
              onChange={handleCaptchaChange}
              asyncScriptOnLoad={() => setIsCaptchaLoaded(true)}
            />
          </Box>

          <Button
            type="submit"
            disabled={!isSubmitEnabled}
            loading={isSubmitting}
            data-testid="contact-submit-button"
            loaderProps={{ type: 'dots' }}
          >
            {t('submit')}
          </Button>
        </form>
      </Fieldset>
    </Box>
  );
};

export default ContactForm;
