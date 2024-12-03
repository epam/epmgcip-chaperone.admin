import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import Header from '@/components/organisms/Header/Header';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './globals.scss';

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  description: 'Museum',
  title: 'Museum',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={montserrat.variable}>
      <head>
        <ColorSchemeScript />
      </head>
      <GoogleTagManager gtmId={process.env.CONTENTFUL_GTAG_ID || ''} />
      <body>
        <MantineProvider>
          <Notifications />
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
