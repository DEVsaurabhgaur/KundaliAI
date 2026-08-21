export function calculateBSP13SunZenith(sunHouse: number): number {
  return ((sunHouse + 9) % 12) + 1;
}
