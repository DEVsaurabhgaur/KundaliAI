/**
 * Yogini Dasha (36-year repeating cycle)
 * 8 Yoginis: Mangala (1, Moon), Pingala (2, Sun), Dhanya (3, Jupiter),
 * Bhramari (4, Mars), Bhadrika (5, Mercury), Ulka (6, Saturn),
 * Siddha (7, Venus), Sankata (8, Rahu)
 */

export interface YoginiPeriod {
  name: string;
  rulingPlanet: string;
  durationYears: number;
  nature: 'Benefic' | 'Malefic';
  startYear: number;
  endYear: number;
}

export const YOGINI_DATA = [
  { name: 'Mangala', rulingPlanet: 'Moon', durationYears: 1, nature: 'Benefic' as const },
  { name: 'Pingala', rulingPlanet: 'Sun', durationYears: 2, nature: 'Malefic' as const },
  { name: 'Dhanya', rulingPlanet: 'Jupiter', durationYears: 3, nature: 'Benefic' as const },
  { name: 'Bhramari', rulingPlanet: 'Mars', durationYears: 4, nature: 'Malefic' as const },
  { name: 'Bhadrika', rulingPlanet: 'Mercury', durationYears: 5, nature: 'Benefic' as const },
  { name: 'Ulka', rulingPlanet: 'Saturn', durationYears: 6, nature: 'Malefic' as const },
  { name: 'Siddha', rulingPlanet: 'Venus', durationYears: 7, nature: 'Benefic' as const },
  { name: 'Sankata', rulingPlanet: 'Rahu', durationYears: 8, nature: 'Malefic' as const }
];

export function calculateYoginiDasha(nakshatraIndex: number, birthYear: number): YoginiPeriod[] {
  // Yogini index is determined by (NakshatraIndex + 3) % 8
  const startIndex = (nakshatraIndex + 3) % 8;
  const periods: YoginiPeriod[] = [];
  let currentYear = birthYear;

  for (let i = 0; i < 8; i++) {
    const yogini = YOGINI_DATA[(startIndex + i) % 8];
    periods.push({
      ...yogini,
      startYear: currentYear,
      endYear: currentYear + yogini.durationYears
    });
    currentYear += yogini.durationYears;
  }

  return periods;
}
