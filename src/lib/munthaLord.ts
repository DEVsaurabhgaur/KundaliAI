/**
 * Muntha Sign & Varshapathi Selection Logic
 * Muntha advances 1 sign per year of life starting from birth Ascendant.
 */

export function getMunthaSignIndex(birthAscendantIndex: number, completedAge: number): number {
  return (birthAscendantIndex + completedAge) % 12;
}

export function evaluateVarshapathiStrength(planet: string, houseInAnnualChart: number): number {
  // Houses 1, 4, 7, 10, 5, 9 give high score to Year Lord
  if ([1, 4, 7, 10, 5, 9].includes(houseInAnnualChart)) return 85;
  if ([2, 3, 11].includes(houseInAnnualChart)) return 65;
  return 40;
}
