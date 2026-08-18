/**
 * 3 Sub-types of Ithasala (Muthasila) Yoga
 * 1. Vartamana (Present): Applying within exact orb
 * 2. Purna (Complete): Applying within 1 degree
 * 3. Bhavishyat (Future): About to enter the orb
 */

export function getIthasalaSubType(separationDeg: number, maxOrb: number): string {
  if (separationDeg <= 1.0) return 'Purna Ithasala (Immediate Complete Fruition)';
  if (separationDeg <= maxOrb) return 'Vartamana Ithasala (Active Unfolding)';
  return 'Bhavishyat Ithasala (Future Potential)';
}
