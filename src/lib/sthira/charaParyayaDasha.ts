/**
 * Chara Paryaya Dasha (Cyclic Rotation)
 */

export function calculateParyayaDashaSpan(cycleNumber: number, baseDuration: number): number {
  return baseDuration * cycleNumber;
}
