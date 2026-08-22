/**
 * 22nd Drekkana (Kharesh) Locator
 * Exact 8th house in D-3 (Drekkana Chart).
 */

export function calculateKhareshLord(lagnaSignIndex: number): number {
  return (lagnaSignIndex + 7) % 12; // 8th house in D-3
}
