/**
 * KP Ruling Planets (RP) Filter
 * Key indicators: Day Lord, Moon Sign Lord, Moon Star Lord, Ascendant Sign Lord, Ascendant Star Lord.
 */

export interface RulingPlanets {
  dayLord: string;
  moonSignLord: string;
  moonStarLord: string;
  ascendantSignLord: string;
  ascendantStarLord: string;
}

export function getRulingPlanets(
  dayLord: string,
  moonSignLord: string,
  moonStarLord: string,
  ascSignLord: string,
  ascStarLord: string
): RulingPlanets {
  return { dayLord, moonSignLord, moonStarLord, ascendantSignLord: ascSignLord, ascendantStarLord: ascStarLord };
}
