// utils/formatting.ts

/**
 * Formats a number as currency in EUR for the French locale.
 * Uses Intl.NumberFormat for locale-aware formatting.
 *
 * @param value The number to format.
 * @param options Optional Intl.NumberFormatOptions to override defaults.
 * @returns The formatted currency string (e.g., "1 234,56 €").
 */
export function formatCurrency(
  value: number | null | undefined,
  options?: Intl.NumberFormatOptions,
): string {
  if (value == null || isNaN(value)) {
    return '0,00 €'; // Or return an empty string or placeholder
  }

  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options, // Allow overriding defaults
  };

  try {
    return new Intl.NumberFormat('fr-FR', defaultOptions).format(value);
  } catch (error) {
    console.error('Error formatting currency:', error);
    // Fallback formatting in case of error
    return `${value.toFixed(2).replace('.', ',')} €`;
  }
}

/**
 * Formats a number for the French locale with thousands separators.
 * Uses Intl.NumberFormat for locale-aware formatting.
 *
 * @param value The number to format.
 * @param options Optional Intl.NumberFormatOptions to override defaults.
 * @returns The formatted number string (e.g., "1 234,56").
 */
export function formatNumber(
  value: number | null | undefined,
  options?: Intl.NumberFormatOptions,
): string {
  if (value == null || isNaN(value)) {
    return '0'; // Or return an empty string or placeholder
  }

  const defaultOptions: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2, // Adjust as needed
    ...options,
  };

  try {
    return new Intl.NumberFormat('fr-FR', defaultOptions).format(value);
  } catch (error) {
    console.error('Error formatting number:', error);
    // Fallback formatting in case of error
    return String(value).replace('.', ',');
  }
}

/**
 * Formats a percentage string.
 * Currently just returns the string, but could be expanded.
 *
 * @param value The percentage string (e.g., "85%").
 * @returns The formatted percentage string.
 */
export function formatPercentage(value: string | null | undefined): string {
  return value || '0%';
}
