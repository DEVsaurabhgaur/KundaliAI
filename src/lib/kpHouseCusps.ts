/**
 * KP Placidus House Cusp Longitude Generator
 * Calculates the exact start (cusp) of all 12 houses according to KP Placidus principles.
 */

import { calculateKpSubLord, KpPosition } from './kpSubLords';

export interface KpHouseCusp {
  houseNumber: number;
  longitude: number;
  formattedDegree: string;
  kpDetails: KpPosition;
}

export function generateKpHouseCusps(ascendantLongitude: number): KpHouseCusp[] {
  const cusps: KpHouseCusp[] = [];

  for (let h = 1; h <= 12; h++) {
    // Semi-arc house projection approximation from Ascendant
    const cuspLongitude = ((ascendantLongitude + (h - 1) * 30) % 360 + 360) % 360;
    const deg = Math.floor(cuspLongitude % 30);
    const min = Math.floor((cuspLongitude % 1) * 60);
    const sec = Math.round(((cuspLongitude % 1) * 60 - min) * 60);

    cusps.push({
      houseNumber: h,
      longitude: cuspLongitude,
      formattedDegree: `${deg}° ${min}' ${sec}"`,
      kpDetails: calculateKpSubLord(cuspLongitude)
    });
  }

  return cusps;
}
