'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { i18n, type Locale } from '@/lib/i18n.config';

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname();

  const getNewPath = (newLocale: Locale) => {
    if (!pathname) return `/${newLocale}`;

    const segments = pathname.split('/').filter(Boolean);
    // Replace the locale segment
    segments[0] = newLocale;
    return `/${segments.join('/')}`;
  };

  return (
    <div className="flex gap-2">
      {i18n.locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={getNewPath(locale)}
            className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-black'
                : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50'
            }`}
            aria-label={`Switch to ${locale.toUpperCase()}`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
