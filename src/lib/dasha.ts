/** Vimshottari Dasha system - 120-year planetary period cycle */

export const DASHA_YEARS: Record<string, number> = {
  'Sun':     6,
  'Moon':    10,
  'Mars':    7,
  'Rahu':    18,
  'Jupiter': 16,
  'Saturn':  19,
  'Mercury': 17,
  'Ketu':    7,
  'Venus':   20,
};

export const DASHA_TOTAL_YEARS = 120;

/** Sequence of dashas in the Vimshottari cycle */
export const DASHA_SEQUENCE = [
  'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter',
  'Saturn', 'Mercury', 'Ketu', 'Venus',
] as const;

export type DashaLord = (typeof DASHA_SEQUENCE)[number];

export interface DashaPeriod {
  lord: DashaLord;
  startDate: Date;
  endDate: Date;
  durationYears: number;
}

/**
 * Calculate remaining dasha balance at birth based on Moon nakshatra position.
 * @param moonLongitude - Moon's longitude in degrees (0-360)
 * @param birthDate - Date of birth
 * @returns Array of dasha periods starting from birth
 */
export function calculateDashaPeriods(moonLongitude: number, birthDate: Date): DashaPeriod[] {
  const NAKSHATRA_SPAN = 13 + 1 / 3;
  const nakshatraLords = [
    'Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury',
    'Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury',
    'Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury',
  ];

  const normalizedMoon = ((moonLongitude % 360) + 360) % 360;
  const nakshatraIndex = Math.floor(normalizedMoon / NAKSHATRA_SPAN) % 27;
  const positionInNakshatra = normalizedMoon - nakshatraIndex * NAKSHATRA_SPAN;
  const fractionElapsed = positionInNakshatra / NAKSHATRA_SPAN;

  const birthLord = nakshatraLords[nakshatraIndex] as DashaLord;
  const birthLordYears = DASHA_YEARS[birthLord];
  const remainingYears = birthLordYears * (1 - fractionElapsed);

  const periods: DashaPeriod[] = [];
  let currentDate = new Date(birthDate);
  const seqStart = DASHA_SEQUENCE.indexOf(birthLord);

  for (let i = 0; i < DASHA_SEQUENCE.length; i++) {
    const lordIndex = (seqStart + i) % DASHA_SEQUENCE.length;
    const lord = DASHA_SEQUENCE[lordIndex];
    const years = i === 0 ? remainingYears : DASHA_YEARS[lord];
    const endDate = new Date(currentDate);
    endDate.setFullYear(endDate.getFullYear() + Math.floor(years));
    endDate.setDate(endDate.getDate() + Math.round((years % 1) * 365.25));
    periods.push({ lord, startDate: new Date(currentDate), endDate, durationYears: years });
    currentDate = new Date(endDate);
  }

  return periods;
}
