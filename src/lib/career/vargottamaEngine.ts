/**
 * Vargottama Multiplier Engine
 * When a planet occupies the exact same sign in D1 (Rashi) and D9 (Navamsha).
 */

export function evaluateVargottamaPotency(isVargottama: boolean): number {
  return isVargottama ? 1.5 : 1.0;
}
