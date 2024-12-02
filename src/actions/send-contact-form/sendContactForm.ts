"use server";

import nodemailer from "nodemailer";
import { ZodError } from "zod";

import { ContactFormValidationErrors } from "@/enums";
import { contactFormDataSchema } from "@/schemas/shared";

interface SendEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactForm({ name, email, subject, message }: SendEmailProps) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SYSTEM_EMAIL,
      pass: process.env.SYSTEM_EMAIL_PASSWORD,
    },
    secure: true,
  });

  const schema = contactFormDataSchema();

  try {
    schema.parse({ name, email, subject, message });

    await transporter.sendMail({
      from: name,
      to: process.env.CONTACTS_EMAIL,
      subject,
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
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);

    const messages =
      error instanceof ZodError
        ? error.errors.map(({ message }) => message)
        : [ContactFormValidationErrors.GeneralError];

    return { success: false, messages };
  }
}
