/**
 * Lunar (Chandra) Yogas
 * 1. Gajakesari Yoga: Jupiter in Kendra (1, 4, 7, 10) from Moon
 * 2. Sunapha: Non-sun planets in 2nd from Moon
 * 3. Anapha: Non-sun planets in 12th from Moon
 * 4. Durdhura: Non-sun planets in both 2nd and 12th from Moon
 * 5. Kemadruma: No planets in 2nd and 12th from Moon (Isolation)
 */

export function evaluateLunarYogas(
  planetsIn2ndFromMoon: number,
  planetsIn12thFromMoon: number,
  isJupiterInKendraFromMoon: boolean
): string[] {
  const yogas: string[] = [];

  if (isJupiterInKendraFromMoon) {
    yogas.push('Gajakesari Yoga (Virtue, lasting fame, invincible reputation)');
  }

  if (planetsIn2ndFromMoon > 0 && planetsIn12thFromMoon > 0) {
    yogas.push('Durdhura Yoga (Self-earned wealth, generous disposition, vehicles)');
  } else if (planetsIn2ndFromMoon > 0) {
    yogas.push('Sunapha Yoga (Acquisition of riches, sharp intelligence)');
  } else if (planetsIn12thFromMoon > 0) {
    yogas.push('Anapha Yoga (Sound health, refined manners, good reputation)');
  } else {
    yogas.push('Kemadruma Yoga (Requires check for cancellation / bhanga)');
  }

  return yogas;
}
