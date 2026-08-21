export function calculateBSP10JupiterGains(jupiterHouse: number): number {
  return ((jupiterHouse + 10) % 12) + 1;
}
