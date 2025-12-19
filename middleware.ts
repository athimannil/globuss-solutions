import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from '@/lib/i18n.config';
import { isValidLocale } from '@/lib/dictionary';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Try to get the locale from the accept-language header
    const locale = getLocale(request) || i18n.defaultLocale;

    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // Check if the locale in the pathname is valid
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0];
  if (locale && !isValidLocale(locale)) {
    // Remove the invalid locale and create a clean path
    const pathWithoutInvalidLocale = segments.slice(1).join('/');
    const cleanPath = pathWithoutInvalidLocale
      ? `/${pathWithoutInvalidLocale}`
      : '';
    return NextResponse.redirect(
      new URL(`/${i18n.defaultLocale}${cleanPath}`, request.url)
    );
  }
}

function getLocale(request: NextRequest): string | undefined {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return undefined;

  // Simple locale detection from accept-language header
  const locales = acceptLanguage
    .split(',')
    .map((lang) => {
      const parts = lang.split(';')[0].trim().split('-');
      return parts[0].toLowerCase();
    })
    .filter((locale) => locale && locale.length > 0);

  for (const locale of locales) {
    if (isValidLocale(locale)) {
      return locale;
    }
  }

  return undefined;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static assets, etc.)
    '/((?!_next|api|favicon.ico|.*\\.(svg|png|jpg|jpeg|gif|webp|ico|css|js)|_vercel).*)',
  ],
};
