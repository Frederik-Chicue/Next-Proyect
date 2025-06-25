import {NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';
import {notFound} from 'next/navigation';
import {locales} from '@/i18n/routing';
import { loadMessages } from '@/i18n/loadMessages';
import './globals.css';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

function isValidLocale(locale: string): locale is (typeof locales)[number] {
  return locales.includes(locale as (typeof locales)[number]);
}

export default async function LocaleLayout({children, params: {locale}}: Props) {
  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = await loadMessages(locale);

  return (
    <html lang={locale}>
      <body className="bg-body text-heading-1 min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
