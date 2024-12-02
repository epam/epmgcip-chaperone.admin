"use client";

import { Box, Button, Fieldset, Loader, Select, Textarea, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useTranslations } from "next-intl";
import { FC, useMemo, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { sendContactForm } from "@/actions";
import { NotificationType } from "@/enums";
import { useShowNotification } from "@/hooks";
import { contactFormDataSchema } from "@/schemas/shared";

import styles from "./ContactForm.module.scss";

const EMAIL_SUBJECT_KEYS = ["aboutSite", "order", "requestTour", "cooperation", "other"] as const;

type EmailSubject = (typeof EMAIL_SUBJECT_KEYS)[number];

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
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
      name: "",
      email: "",
      subject: "",
      message: "",
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
        type: NotificationType.Error,
        message: t("reCaptcha.message"),
      });

      return;
    }

    const result = await sendContactForm(values);

    if (result.success) {
      showNotification({
        type: NotificationType.Success,
        message: t("action.sendEmail.success"),
      });
      form.reset();
      setCaptchaToken(null);
      reCaptchaRef.current?.reset();
    } else {
      if (result.messages?.length) {
        result.messages.forEach((message) => {
          showNotification({
            type: NotificationType.Error,
            message,
          });
        });
      } else {
        showNotification({
          type: NotificationType.Error,
          message: t("action.sendEmail.error"),
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
      <Fieldset legend={<h3>{t("contactForm.title")}</h3>} variant="filled">
        <form className={styles.form} onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label={t("contactForm.fields.name.label")}
            placeholder={t("contactForm.fields.name.placeholder")}
            key={form.key("name")}
            {...form.getInputProps("name")}
          />

          <TextInput
            type="email"
            withAsterisk
            label={t("contactForm.fields.email.label")}
            placeholder={t("contactForm.fields.email.placeholder")}
            key={form.key("email")}
            {...form.getInputProps("email")}
          />

          <Select
            withAsterisk
            label={t("contactForm.fields.subject.label")}
            comboboxProps={{ withinPortal: true }}
            data={translatedSubjects}
            placeholder={t("contactForm.fields.subject.placeholder")}
            key={form.key("subject")}
            {...form.getInputProps("subject")}
          />

          <Textarea
            withAsterisk
            label={t("contactForm.fields.message.label")}
            placeholder={t("contactForm.fields.message.placeholder")}
            key={form.key("message")}
            minRows={5}
            autosize
            {...form.getInputProps("message")}
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
            loaderProps={{ type: "dots" }}
          >
            {t("submit")}
          </Button>
        </form>
      </Fieldset>
    </Box>
  );
};

export default ContactForm;
