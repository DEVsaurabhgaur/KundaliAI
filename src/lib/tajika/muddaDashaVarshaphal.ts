/**
 * Mudda Dasha (Annual Vimshottari-like 365-Day Cycle)
 * Sun: 18.25 days | Moon: 30.42 days | Mars: 21.29 days | Rahu: 54.75 days |
 * Jupiter: 48.67 days | Saturn: 57.79 days | Mercury: 51.71 days | Ketu: 21.29 days | Venus: 60.83 days
 */

export const MUDDA_DAYS: Record<string, number> = {
  Sun: 18.25, Moon: 30.42, Mars: 21.29, Rahu: 54.75,
  Jupiter: 48.67, Saturn: 57.79, Mercury: 51.71, Ketu: 21.29, Venus: 60.83
};

export function getMuddaDuration(planet: string): number {
  return MUDDA_DAYS[planet] || 30.0;
}
