import { i18n, type Locale } from './i18n.config';

export function getDictionary(locale: Locale) {
  const dictionaries = {
    en: () => import('@/locales/en.json').then((module) => module.default),
    de: () => import('@/locales/de.json').then((module) => module.default),
  };

  return dictionaries[locale]();
}

export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale);
}
