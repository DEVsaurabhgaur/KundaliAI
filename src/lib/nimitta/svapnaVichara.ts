/**
 * Svapna Vichara (Vedic Dream Analysis)
 * Fruition Times by Prahara (Night Watch):
 * 1st Watch (6-9 PM): 1 Year | 2nd Watch (9-12 PM): 6 Months |
 * 3rd Watch (12-3 AM): 3 Months | 4th Watch (3-6 AM): 10 Days to 1 Month | Brahma Muhurta: Immediate
 */

export function getDreamFruitionTimeline(watchNumber1to4: number): string {
  if (watchNumber1to4 === 4) return 'Immediate fruition within 10 to 30 days (Dawn Dream)';
  if (watchNumber1to4 === 3) return 'Fruition within 3 Months';
  if (watchNumber1to4 === 2) return 'Fruition within 6 Months';
  return 'Fruition within 1 Year (Early Night Dream)';
}
