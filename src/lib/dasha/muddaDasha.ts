/**
 * Mudda Dasha (Tajika Annual 1-Year Varshaphala Dasha)
 * Proportions of 365.25 days divided among 9 planets.
 */

export interface MuddaPeriod {
  planet: string;
  durationDays: number;
}

const MUDDA_DAYS: Record<string, number> = {
  Sun: 18.25, Moon: 30.42, Mars: 21.29, Rahu: 54.75,
  Jupiter: 48.67, Saturn: 57.79, Mercury: 51.70, Ketu: 21.29, Venus: 60.83
};

export function calculateMuddaDasha(varshapathi: string): MuddaPeriod[] {
  const planets = ['Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury', 'Ketu', 'Venus'];
  let startIdx = planets.indexOf(varshapathi);
  if (startIdx === -1) startIdx = 0;

  return Array.from({ length: 9 }, (_, i) => {
    const p = planets[(startIdx + i) % 9];
    return {
      planet: p,
      durationDays: MUDDA_DAYS[p]
    };
  });
}
