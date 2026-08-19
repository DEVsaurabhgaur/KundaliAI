/**
 * Kuja Dosha (Manglik) 24 Classical Cancellation Exceptions
 * 1. Mars in Aries in 1st house
 * 2. Mars in Scorpio in 4th house
 * 3. Mars in Capricorn in 7th house
 * 4. Mars in Sagittarius/Pisces in 8th house
 * 5. Mars in Cancer/Leo in 12th house
 * 6. Mars conjoined Jupiter or Moon
 */

export function isKujaDoshaCancelled(marsHouse: number, marsSign: number, isConjoinedGuruOrChandra: boolean): boolean {
  if (isConjoinedGuruOrChandra) return true;
  if (marsHouse === 1 && marsSign === 0) return true; // Aries 1st
  if (marsHouse === 4 && marsSign === 7) return true; // Scorpio 4th
  if (marsHouse === 7 && marsSign === 9) return true; // Cap 7th
  if (marsHouse === 8 && (marsSign === 8 || marsSign === 11)) return true; // Sag/Pisces 8th
  if (marsHouse === 12 && (marsSign === 3 || marsSign === 4)) return true; // Cancer/Leo 12th
  return false;
}
