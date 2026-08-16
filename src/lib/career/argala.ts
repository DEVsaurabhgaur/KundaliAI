/**
 * Jaimini Argala (Intervention) and Virodhargala (Obstruction)
 * Primary Argala: 2nd, 4th, 11th houses | Obstructing houses: 12th, 10th, 3rd
 */

export function calculateArgala(houseOccupancy: Record<number, number>) {
  const argala2 = (houseOccupancy[2] || 0) > (houseOccupancy[12] || 0);
  const argala4 = (houseOccupancy[4] || 0) > (houseOccupancy[10] || 0);
  const argala11 = (houseOccupancy[11] || 0) > (houseOccupancy[3] || 0);

  return { hasDhanaArgala: argala2, hasSukhaArgala: argala4, hasLabhaArgala: argala11 };
}
