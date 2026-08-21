export function calculateBSP15MercuryOccult(mercuryHouse: number): number {
  return ((mercuryHouse + 7) % 12) + 1;
}
