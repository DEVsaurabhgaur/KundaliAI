/**
 * Upapada Lagna (UL) Synastry Engine
 * Rule: Boy's Lagna or Moon in trine (1, 5, 9) or 7th to Girl's UL ensures permanent marital harmony.
 */

export function evaluateULCompatibility(girlULSign: number, boyLagnaOrMoonSign: number): boolean {
  const diff = (boyLagnaOrMoonSign - girlULSign + 12) % 12;
  return [0, 4, 6, 8].includes(diff);
}
