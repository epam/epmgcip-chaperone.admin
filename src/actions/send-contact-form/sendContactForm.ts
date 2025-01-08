'use server';

import nodemailer from 'nodemailer';
import { ZodError } from 'zod';

import { ContactFormValidationErrors } from '@/enums';
import { contactFormDataSchema } from '@/schemas/shared';
import { Logger } from '@/utils/logger';

interface SendEmailProps {
  email: string;
  message: string;
  name: string;
  subject: string;
}

export async function sendContactForm({ email, message, name, subject }: SendEmailProps) {
  const transporter = nodemailer.createTransport({
    auth: {
      pass: process.env.SYSTEM_EMAIL_PASSWORD,
      user: process.env.SYSTEM_EMAIL,
    },
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
  });

  const schema = contactFormDataSchema();

  try {
    schema.parse({ email, message, name, subject });

    await transporter.sendMail({
      from: name,
      html: `
        <header>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        </header>
        <br />
        <main>
          <h2>Message:</h2>
          <p style="white-space: pre-wrap;">${message}</p>
        </main>
      `,
      subject,
      to: process.env.CONTACTS_EMAIL,
    });

    return { success: true };
  } catch (error) {
    Logger.logError('Error sending email:', error);

    const messages =
      error instanceof ZodError
        ? error.errors.map(({ message }) => message)
        : [ContactFormValidationErrors.GeneralError];

    return { messages, success: false };
  }
}
