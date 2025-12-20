import type { Locale } from './i18n.config';

import type { Dictionary } from '@/types/dictionary';

const dictionaries = {
  en: () => import('@/locales/en.json').then((m) => m.default),
  de: () => import('@/locales/de.json').then((m) => m.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const loader = (dictionaries as Record<string, () => Promise<unknown>>)[
    locale
  ];
  if (!loader) throw new Error(`Dictionary for locale "${locale}" not found`);

  const data = await loader();
  return data as Dictionary;
};
