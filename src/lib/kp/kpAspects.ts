/**
 * KP Western Aspect Engine
 */

export function evaluateKPAspect(degA: number, degB: number) {
  const diff = Math.abs((degA - degB + 360) % 360);
  const sep = diff > 180 ? 360 - diff : diff;

  if (sep <= 6) return { aspect: 'Conjunction', isBenefic: true };
  if (Math.abs(sep - 120) <= 6) return { aspect: 'Trine', isBenefic: true };
  if (Math.abs(sep - 60) <= 4) return { aspect: 'Sextile', isBenefic: true };
  if (Math.abs(sep - 90) <= 5) return { aspect: 'Square', isBenefic: false };
  if (Math.abs(sep - 180) <= 6) return { aspect: 'Opposition', isBenefic: false };

  return { aspect: 'None', isBenefic: true };
}
