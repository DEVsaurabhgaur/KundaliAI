/**
 * Vimshottari Antardasha & Pratyantardasha Calculator
 */

const VIMSHOTTARI_YEARS: Record<string, number> = {
  Ketu: 7, Venus: 20, Sun: 6, Moon: 10, Mars: 7,
  Rahu: 18, Jupiter: 16, Saturn: 19, Mercury: 17
};

const PLANET_ORDER = ['Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury'];

export interface SubPeriod {
  mahaDasha: string;
  antarDasha: string;
  durationMonths: number;
}

export function generateAntarDashas(mahaDashaLord: string): SubPeriod[] {
  const mahaYears = VIMSHOTTARI_YEARS[mahaDashaLord] || 10;
  const startIdx = PLANET_ORDER.indexOf(mahaDashaLord);

  return Array.from({ length: 9 }, (_, i) => {
    const antarLord = PLANET_ORDER[(startIdx + i) % 9];
    const antarYears = VIMSHOTTARI_YEARS[antarLord];
    const durationMonths = Number(((mahaYears * antarYears) / 120 * 12).toFixed(2));

    return {
      mahaDasha: mahaDashaLord,
      antarDasha: antarLord,
      durationMonths
    };
  });
}
