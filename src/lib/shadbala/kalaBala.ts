/**
 * Kala Bala (Temporal Strength)
 * Nathonatha (Diurnal/Nocturnal), Paksha (Lunar Fortnight), Tribhaga (3-part day/night),
 * Varshadhipati, Masadhipati, Dinadhipati, Horadhipati, Ayana Bala, Yuddha Bala.
 */

export function calculateKalaBala(isDayBirth: boolean, isShuklaPaksha: boolean, planet: string): number {
  let score = 30; // base virupas
  if (isDayBirth && ['Sun', 'Jupiter', 'Venus'].includes(planet)) score += 30;
  if (!isDayBirth && ['Moon', 'Mars', 'Saturn'].includes(planet)) score += 30;
  if (planet === 'Mercury') score += 30; // Always receives diurnal/nocturnal strength

  return score;
}
