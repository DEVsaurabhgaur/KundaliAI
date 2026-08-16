/**
 * Business Partnership Compatibility
 */

export function evaluateBusinessPartnership(rashiA: number, rashiB: number): number {
  const diff = Math.abs(rashiA - rashiB);
  if ([4, 8].includes(diff)) return 90; // Trine (1-5-9)
  if ([3, 9].includes(diff)) return 75; // Kendra (1-4-7-10)
  if ([2, 6, 8].includes(diff)) return 40; // 6-8 or 2-12
  return 65;
}
