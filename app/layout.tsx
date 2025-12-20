import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { headers } from 'next/headers';

import { getDictionary } from '@/lib/dictionary';
import { i18n, Locale } from '@/lib/i18n.config';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Globuss Solutions',
  description: 'Professional staffing solutions',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Extract locale from pathname
  const headersList = await headers();
  const pathname = headersList.get('x-invoke-path') || '';
  const locale = (pathname.split('/')[1] || i18n.defaultLocale) as Locale;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header locale={locale} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
