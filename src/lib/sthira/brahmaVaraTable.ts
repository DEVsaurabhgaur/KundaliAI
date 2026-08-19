/**
 * Brahma Vara Longevity Estimation
 */

export function getBrahmaVaraLifespanCategory(isShort: boolean, isMedium: boolean): string {
  if (isShort) return 'Alpayu (0 - 32 Years)';
  if (isMedium) return 'Madhyayu (33 - 66 Years)';
  return 'Purnayu (67 - 100 Years)';
}
