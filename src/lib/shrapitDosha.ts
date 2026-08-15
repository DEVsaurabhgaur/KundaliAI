/**
 * Shrapit Dosha (Saturn + Rahu Conjunction / Mutual Aspect)
 * Reflects severe past karmic burdens causing delays and trials before breakthrough.
 */

export function checkShrapitDosha(saturnLong: number, rahuLong: number) {
  const diff = Math.abs((saturnLong - rahuLong + 360) % 360);
  const sep = diff > 180 ? 360 - diff : diff;
  const isPresent = sep <= 12.0;

  return {
    hasShrapitDosha: isPresent,
    separation: Number(sep.toFixed(2)),
    guidance: isPresent
      ? 'Practice relentless patience, serve underprivileged persons, and chant Maha Mrityunjaya mantra.'
      : 'No Shrapit Dosha found.'
  };
}
