/**
 * Bhava Chalit Chart Engine
 * Computes planetary occupancy based on House Sandhi (junctions) and Bhava Madhyas (midpoints).
 */

export interface BhavaChalitPlanet {
  planet: string;
  rashiHouse: number;
  chalitHouse: number;
  isShifted: boolean;
}

export function calculateBhavaChalit(
  ascendantLongitude: number,
  planets: { name: string; longitude: number }[]
): BhavaChalitPlanet[] {
  const houseMidpoints = Array.from({ length: 12 }, (_, i) =>
    ((ascendantLongitude + i * 30) % 360 + 360) % 360
  );

  return planets.map(p => {
    const norm = ((p.longitude % 360) + 360) % 360;
    const rashiHouse = Math.floor(((norm - ascendantLongitude + 360) % 360) / 30) + 1;

    // In Bhava Chalit, a house spans 15 deg before and 15 deg after its midpoint
    let chalitHouse = 1;
    for (let h = 0; h < 12; h++) {
      const mid = houseMidpoints[h];
      const start = ((mid - 15) % 360 + 360) % 360;
      const end = (mid + 15) % 360;

      const inHouse = start < end
        ? norm >= start && norm < end
        : norm >= start || norm < end;

      if (inHouse) {
        chalitHouse = h + 1;
        break;
      }
    }

    return {
      planet: p.name,
      rashiHouse,
      chalitHouse,
      isShifted: rashiHouse !== chalitHouse
    };
  });
}
