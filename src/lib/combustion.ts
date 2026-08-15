/**
 * Planetary Combustion (Asta) Evaluator
 * Classical limits:
 * Moon: 12°, Mars: 17°, Mercury (Direct): 14°, Mercury (Retro): 12°
 * Jupiter: 11°, Venus (Direct): 10°, Venus (Retro): 8°, Saturn: 15°
 */

export interface CombustionResult {
  planet: string;
  isCombust: boolean;
  distanceFromSun: number;
  thresholdDegrees: number;
}

const COMBUSTION_LIMITS: Record<string, { direct: number; retro: number }> = {
  Moon: { direct: 12, retro: 12 },
  Mars: { direct: 17, retro: 17 },
  Mercury: { direct: 14, retro: 12 },
  Jupiter: { direct: 11, retro: 11 },
  Venus: { direct: 10, retro: 8 },
  Saturn: { direct: 15, retro: 15 }
};

export function checkCombustion(
  planet: string,
  planetLongitude: number,
  sunLongitude: number,
  isRetrograde: boolean = false
): CombustionResult {
  if (planet === 'Sun' || planet.includes('Rahu') || planet.includes('Ketu')) {
    return { planet, isCombust: false, distanceFromSun: 0, thresholdDegrees: 0 };
  }

  const diff = Math.min(
    Math.abs((planetLongitude - sunLongitude + 360) % 360),
    Math.abs((sunLongitude - planetLongitude + 360) % 360)
  );

  const limits = COMBUSTION_LIMITS[planet] || { direct: 12, retro: 12 };
  const threshold = isRetrograde ? limits.retro : limits.direct;

  return {
    planet,
    isCombust: diff <= threshold,
    distanceFromSun: Number(diff.toFixed(2)),
    thresholdDegrees: threshold
  };
}
