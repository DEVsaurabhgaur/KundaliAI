/**
 * Lal Kitab Varshaphal (Annual Progression Chart)
 */

export function generateLalKitabVarshaphal(natalHouses: Record<string, number>, age: number) {
  const shift = age % 12;
  const annualPositions: Record<string, number> = {};

  for (const [planet, house] of Object.entries(natalHouses)) {
    annualPositions[planet] = ((house - 1 + shift) % 12) + 1;
  }
  return annualPositions;
}
