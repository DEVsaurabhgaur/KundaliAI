/**
 * Sthana Bala (Positional Strength) Breakdown
 * 1. Uccha Bala (Exaltation strength: 0 to 60 Virupas)
 * 2. Saptavargiya Bala (Strength in 7 divisions: Rashi, Hora, Drekkana, Saptamsha, Navamsha, Dwadamsha, Trimshamsha)
 * 3. Ojayugmarashi Bala (Odd/Even sign suitability)
 * 4. Kendradi Bala (Kendra 60, Panaphara 30, Apoklima 15)
 * 5. Drekkana Bala (Gender suitability by 1/3 decanate)
 */

export interface SthanaBalaComponents {
  ucchaBala: number;
  saptavargiyaBala: number;
  ojayugmaBala: number;
  kendradiBala: number;
  drekkanaBala: number;
  totalSthanaBala: number;
}

export function calculateSthanaBala(
  uccha: number,
  sapta: number,
  oja: number,
  kendra: number,
  drek: number
): SthanaBalaComponents {
  const total = uccha + sapta + oja + kendra + drek;
  return {
    ucchaBala: uccha,
    saptavargiyaBala: sapta,
    ojayugmaBala: oja,
    kendradiBala: kendra,
    drekkanaBala: drek,
    totalSthanaBala: Number(total.toFixed(2))
  };
}
