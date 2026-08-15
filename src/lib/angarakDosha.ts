/**
 * Angarak Dosha (Mars + Rahu/Ketu Conjunction)
 * Induces impulsiveness, explosive temper, or risky tendencies when unchannelled.
 */

export function checkAngarakDosha(marsLong: number, rahuLong: number) {
  const diff = Math.abs((marsLong - rahuLong + 360) % 360);
  const sep = diff > 180 ? 360 - diff : diff;
  const isActive = sep <= 10.0;

  return {
    isAngarakActive: isActive,
    separationDegrees: Number(sep.toFixed(2)),
    intensity: isActive ? (sep < 5 ? 'Extreme' : 'Moderate') : 'None',
    remedy: 'Recite Hanuman Chalisa daily and avoid rash driving or rash verbal confrontations.'
  };
}
