/**
 * Surya Kalanal Chakra (Solar Fire Grid)
 * Measures vitality shockwaves as Sun transits relative to Janma Nakshatra.
 */

export function checkSuryaKalanalRisk(sunNakshatra: number, birthNakshatra: number) {
  const dist = ((sunNakshatra - birthNakshatra + 27) % 27) + 1;
  const isHighRisk = [1, 9, 10, 18, 19, 27].includes(dist);

  return {
    distance: dist,
    isHighRisk,
    vitalityAdvisory: isHighRisk
      ? 'Sun transits sensitive Kalanal node; practice hydration and avoid burnout.'
      : 'Harmonious solar transit flow.'
  };
}
