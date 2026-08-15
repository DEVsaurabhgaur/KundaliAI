/**
 * Nadi Koota (8 Points Max) - Most weighted Koota in Vedic Matching
 * Types: Aadi (Vata), Madhya (Pitta), Antya (Kapha)
 * Matching nadis cause Nadi Dosha (0 points). Different nadis grant full 8 points.
 */

const NAKSHATRA_NADI = [
  'Aadi', 'Madhya', 'Antya', 'Antya', 'Madhya', 'Aadi',
  'Aadi', 'Madhya', 'Antya', 'Antya', 'Madhya', 'Aadi',
  'Aadi', 'Madhya', 'Antya', 'Antya', 'Madhya', 'Aadi',
  'Aadi', 'Madhya', 'Antya', 'Antya', 'Madhya', 'Aadi',
  'Aadi', 'Madhya', 'Antya'
];

export function calculateNadiKoota(boyNak: number, girlNak: number) {
  const nadiBoy = NAKSHATRA_NADI[boyNak % 27];
  const nadiGirl = NAKSHATRA_NADI[girlNak % 27];

  const hasNadiDosha = nadiBoy === nadiGirl;
  const points = hasNadiDosha ? 0 : 8;

  return {
    koota: 'Nadi',
    maxPoints: 8,
    obtainedPoints: points,
    nadiBoy,
    nadiGirl,
    hasNadiDosha
  };
}
