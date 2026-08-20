/**
 * Prashna Event Timing (Degrees to exact aspect)
 * Movable sign: Days | Dual sign: Weeks/Months | Fixed sign: Months/Years
 */

export function calculateEventTiming(degreesToAspect: number, signModality: 'Movable' | 'Fixed' | 'Dual'): string {
  const deg = Math.max(0.5, degreesToAspect);
  if (signModality === 'Movable') return `Within ${Math.ceil(deg)} Days`;
  if (signModality === 'Dual') return `Within ${Math.ceil(deg)} Weeks`;
  return `Within ${Math.ceil(deg)} Months`;
}
