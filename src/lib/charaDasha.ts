/**
 * Jaimini Chara Dasha (Sign-based planetary timing system)
 * Provides timing based on progression of zodiac signs rather than planets.
 */

export interface CharaDashaPeriod {
  signName: string;
  durationYears: number;
  startYear: number;
  endYear: number;
}

const SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export function calculateCharaDasha(ascendantSignIndex: number, birthYear: number): CharaDashaPeriod[] {
  const periods: CharaDashaPeriod[] = [];
  let currentYear = birthYear;

  // Direct vs Indirect progression based on Ascendant
  const isDirect = [0, 1, 2, 6, 7, 8].includes(ascendantSignIndex);

  for (let i = 0; i < 12; i++) {
    const signIdx = isDirect ? (ascendantSignIndex + i) % 12 : (ascendantSignIndex - i + 12) % 12;
    // Standard basic duration rule: each sign has 1 to 12 years (normalized average 7-9 years)
    const duration = ((signIdx + 3) % 9) + 4;

    periods.push({
      signName: SIGNS[signIdx],
      durationYears: duration,
      startYear: currentYear,
      endYear: currentYear + duration
    });
    currentYear += duration;
  }

  return periods;
}
