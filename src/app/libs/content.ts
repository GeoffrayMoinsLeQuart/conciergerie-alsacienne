// src/app/libs/content.ts
import { pages } from '@/static-data/text-content/pages';

/**
 * Retrieves a value (string, object, array, etc.) from the JSON content.
 * Supports nested keys separated by dots.
 * Returns the default fallback string if the path does not exist.
 */
export function t(page: string, path: string): any {
  const dict = (pages as Record<string, any>)[page];
  if (!dict) {
    return `[${page}.${path}]`;
  }

  const keys = path.split('.');
  let value: any = dict;
  for (const key of keys) {
    if (value == null || typeof value !== 'object' && keys.length > 1) {
      return `[${page}.${path}]`;
    }
    value = value[key];
  }

  // If undefined or null, fallback
  if (value == null) {
    return `[${page}.${path}]`;
  }

  // Return the raw value (string, object, array, number, etc.)
  return value;
}
