/**
 * Kalachakra Dasha (KCD): Savya (Direct) vs Apasavya (Indirect) Nakshatras
 * Savya: Ashwini, Krittika, Punarvasu, Ashlesha, Magha, Uttara Phalguni, Chitra, Vishakha, Jyeshtha, Moola, Uttara Ashadha, Shravana, Purva Bhadrapada, Revati.
 * Apasavya: Bharani, Rohini, Mrigashira, Ardra, Pushya, Purva Phalguni, Hasta, Swati, Anuradha, Purva Ashadha, Abhijit, Dhanishta, Shatabhisha, Uttara Bhadrapada.
 */

export const SAVYA_STARS = [0, 2, 6, 8, 9, 11, 13, 15, 17, 18, 20, 21, 24, 26];

export function isSavyaNakshatra(nakshatraIndex27: number): boolean {
  return SAVYA_STARS.includes(nakshatraIndex27 % 27);
}
