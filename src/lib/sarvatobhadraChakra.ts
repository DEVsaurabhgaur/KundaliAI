/**
 * Sarvatobhadra Chakra (81-square Sarvatobhadra Grid)
 * Used for financial, national, and critical transits across Nakshatras, vowels, and weekdays.
 */

export interface SBCVedha {
  transitPlanet: string;
  afflictedNakshatra: number;
  vedhaType: 'Front' | 'Right' | 'Left';
}

export function evaluateSBCVedhas(transitPlanets: { name: string; nakshatra: number }[]): SBCVedha[] {
  return transitPlanets.map(p => ({
    transitPlanet: p.name,
    afflictedNakshatra: (p.nakshatra + 14) % 27, // Opposite cross-vedha
    vedhaType: 'Front'
  }));
}
