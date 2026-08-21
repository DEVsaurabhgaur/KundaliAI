export function calculateBSP14MoonLiquidity(moonHouse: number): number {
  return ((moonHouse) % 12) + 1;
}
