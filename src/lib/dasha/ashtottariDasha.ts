/**
 * Ashtottari Dasha (108-year planetary cycle)
 * Order: Sun (6), Moon (15), Mars (8), Mercury (17), Saturn (10), Jupiter (19), Rahu (12), Venus (21)
 */

export interface AshtottariPeriod {
  planet: string;
  durationYears: number;
  startDate: string;
  endDate: string;
}

export const ASHTOTTARI_YEARS: Record<string, number> = {
  Sun: 6, Moon: 15, Mars: 8, Mercury: 17,
  Saturn: 10, Jupiter: 19, Rahu: 12, Venus: 21
};

export const ASHTOTTARI_ORDER = ['Sun', 'Moon', 'Mars', 'Mercury', 'Saturn', 'Jupiter', 'Rahu', 'Venus'];

export function calculateAshtottariDasha(startPlanet: string, birthYear: number): AshtottariPeriod[] {
  let startIndex = ASHTOTTARI_ORDER.indexOf(startPlanet);
  if (startIndex === -1) startIndex = 0;

  const periods: AshtottariPeriod[] = [];
  let currentYear = birthYear;

  for (let i = 0; i < 8; i++) {
    const planet = ASHTOTTARI_ORDER[(startIndex + i) % 8];
    const duration = ASHTOTTARI_YEARS[planet];
    periods.push({
      planet,
      durationYears: duration,
      startDate: `${currentYear}-01-01`,
      endDate: `${currentYear + duration}-01-01`
    });
    currentYear += duration;
  }

  return periods;
}
