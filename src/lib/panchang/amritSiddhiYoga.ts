/**
 * Amrit Siddhi & Sarvartha Siddhi Yogas
 * Formed by auspicious combinations of Weekday (Vara) and Lunar Mansion (Nakshatra).
 */

export function checkAmritSiddhiYoga(dayOfWeek: number, nakshatraIndex: number): boolean {
  // Sunday (0) + Hasta (12), Monday (1) + Mrigashira (4), Tuesday (2) + Ashwini (0),
  // Wednesday (3) + Anuradha (16), Thursday (4) + Pushya (7), Friday (5) + Revati (26), Saturday (6) + Rohini (3)
  const AMRIT_PAIRS: Record<number, number> = {
    0: 12, 1: 4, 2: 0, 3: 16, 4: 7, 5: 26, 6: 3
  };
  return AMRIT_PAIRS[dayOfWeek % 7] === (nakshatraIndex % 27);
}
