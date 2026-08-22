/**
 * Kalachakra Dasha Rashi Durations (Years):
 * Aries: 7 | Taurus: 16 | Gemini: 9 | Cancer: 21 | Leo: 5 | Virgo: 9 |
 * Libra: 16 | Scorpio: 7 | Sagittarius: 10 | Capricorn: 4 | Aquarius: 4 | Pisces: 10
 * Total Paramayus Sum = 100 or 86 years based on cycle.
 */

export const KCD_RASHI_YEARS: Record<number, number> = {
  0: 7,   // Aries (Mars)
  1: 16,  // Taurus (Venus)
  2: 9,   // Gemini (Mercury)
  3: 21,  // Cancer (Moon)
  4: 5,   // Leo (Sun)
  5: 9,   // Virgo (Mercury)
  6: 16,  // Libra (Venus)
  7: 7,   // Scorpio (Mars)
  8: 10,  // Sagittarius (Jupiter)
  9: 4,   // Capricorn (Saturn)
  10: 4,  // Aquarius (Saturn)
  11: 10  // Pisces (Jupiter)
};

export function getKCDDuration(signIndex: number): number {
  return KCD_RASHI_YEARS[signIndex % 12] || 10;
}
