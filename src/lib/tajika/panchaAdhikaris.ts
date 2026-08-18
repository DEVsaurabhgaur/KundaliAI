/**
 * Pancha Adhikaris (5 Office-Bearers in Varshaphala)
 * 1. Janma Lagnesha (Natal Ascendant Lord)
 * 2. Varsha Lagnesha (Annual Chart Ascendant Lord)
 * 3. Munthesha (Muntha Lord)
 * 4. Dina/Ratri Lord (Sun/Moon Sign Lord in Annual Chart)
 * 5. Tri-Rashi Lord (Lord of the element triplicity)
 */

export interface PanchaAdhikaris {
  janmaLagnesha: string;
  varshaLagnesha: string;
  munthesha: string;
  dinaRatriLord: string;
  triRashiLord: string;
}

export function evaluatePanchaAdhikaris(
  janmaL: string,
  varshaL: string,
  munthesha: string,
  dinaRatri: string,
  triRashi: string
): PanchaAdhikaris {
  return {
    janmaLagnesha: janmaL,
    varshaLagnesha: varshaL,
    munthesha,
    dinaRatriLord: dinaRatri,
    triRashiLord: triRashi
  };
}
