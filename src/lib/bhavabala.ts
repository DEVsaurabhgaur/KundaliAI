/**
 * Bhavabala (House Potency Score Accumulator)
 * Measures aggregate strength of each of the 12 Bhavas based on lord strength, aspects, and occupancy.
 */

export interface BhavabalaEntry {
  houseNumber: number;
  bhavadhipatiStrength: number;
  bhavaDrishtiScore: number;
  occupancyMultiplier: number;
  totalBhavabalaRupas: number;
}

export function computeBhavabala(
  houseNumber: number,
  hasBeneficOccupants: boolean,
  hasMaleficOccupants: boolean
): BhavabalaEntry {
  const baseStrength = 300 + houseNumber * 10;
  const drishti = hasBeneficOccupants ? 60 : hasMaleficOccupants ? -30 : 20;
  const multiplier = hasBeneficOccupants ? 1.25 : 1.0;

  const totalVirupas = (baseStrength + drishti) * multiplier;

  return {
    houseNumber,
    bhavadhipatiStrength: baseStrength,
    bhavaDrishtiScore: drishti,
    occupancyMultiplier: multiplier,
    totalBhavabalaRupas: Number((totalVirupas / 60).toFixed(2))
  };
}
