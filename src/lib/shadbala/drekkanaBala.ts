/**
 * Drekkana Bala (0 to 15 Virupas based on 1st, 2nd, 3rd decanate)
 * Male planets: 1st Drekkana (0°-10°) = 15 Virupas
 * Neutral planets (Mercury, Saturn): 2nd Drekkana (10°-20°) = 15 Virupas
 * Female planets: 3rd Drekkana (20°-30°) = 15 Virupas
 */

export function calculateDrekkanaBala(gender: 'Male' | 'Female' | 'Neutral', degInSign: number): number {
  const decanate = Math.floor(degInSign / 10) + 1; // 1, 2, 3
  if (gender === 'Male' && decanate === 1) return 15;
  if (gender === 'Neutral' && decanate === 2) return 15;
  if (gender === 'Female' && decanate === 3) return 15;
  return 0;
}
