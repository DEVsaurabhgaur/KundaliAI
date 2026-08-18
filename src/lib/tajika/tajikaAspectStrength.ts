/**
 * Tajika Aspect Strengths
 * Trinal (5th/9th) = Friendly & Fruitful
 * Sextile (3rd/11th) = Secret / Supportive
 * Square/Opposition (4th/7th/10th) = Open Contention
 * Conjunction (1st) = Unified Force
 */

export function getTajikaAspectStrength(houseDistance: number): string {
  if ([5, 9].includes(houseDistance)) return 'Very Friendly & Fruitful (Trinal)';
  if ([3, 11].includes(houseDistance)) return 'Supportive / Semi-Friendly (Sextile)';
  if ([4, 7, 10].includes(houseDistance)) return 'Challenging / Tense (Square/Opposition)';
  return 'Conjoined';
}
