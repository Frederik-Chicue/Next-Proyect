import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { AuthProvider } from './store/AuthContext';

export default async function LocaleLayout({
    children,
    params
  }: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
  }) {

    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
      notFound();
    }
  
    return (
      <html lang={locale} suppressHydrationWarning>
        <body>
          <NextIntlClientProvider>  
            <AuthProvider>
              {children}
            </AuthProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    );
}