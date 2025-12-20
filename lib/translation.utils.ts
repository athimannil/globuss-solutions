import type { Dictionary } from '@/types/dictionary';

/**
 * Get nested translation value using dot notation
 * @example getNestedValue(dict, 'services.manpower.title')
 */
export function getNestedValue(
  obj: Dictionary | Record<string, string>,
  path: string
): string {
  const keys = path.split('.');
  let result: unknown = obj;

  for (const key of keys) {
    if (
      result &&
      typeof result === 'object' &&
      key in (result as Record<string, unknown>)
    ) {
      result = (result as Record<string, unknown>)[key];
    } else {
      console.warn(`Translation key not found: ${path}`);
      return path; // fallback to key itself
    }
  }

  return typeof result === 'string' ? result : path;
}
