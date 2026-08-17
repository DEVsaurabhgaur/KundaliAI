/**
 * Retrograde (Vakri) Transit Behavioral Multiplier
 * Retrograde planets double their chest power (Chesta Bala) and repeat past-life karmas.
 */

export function getRetrogradeIntensity(isRetrograde: boolean) {
  return {
    intensityMultiplier: isRetrograde ? 2.0 : 1.0,
    guidance: isRetrograde
      ? 'Intense reflective force: Review past decisions, re-evaluate strategies, expect sudden breakthroughs.'
      : 'Direct steady motion.'
  };
}
