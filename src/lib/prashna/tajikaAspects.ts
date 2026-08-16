/**
 * Tajika Query Aspects
 * Ithasala (Applying friendly aspect / Mutha-shila - Success guaranteed)
 * Ishrafa (Separating aspect - Missed opportunity)
 * Nakta (Intermediary mediator planet brings resolution)
 */

export interface TajikaAspectResult {
  type: 'Ithasala (Success)' | 'Ishrafa (Separating)' | 'Nakta (Mediated)' | 'None';
  orbDegrees: number;
}

export function evaluateTajikaAspect(
  fasterPlanetLong: number,
  slowerPlanetLong: number,
  isApplying: boolean
): TajikaAspectResult {
  const diff = Math.abs((fasterPlanetLong - slowerPlanetLong + 360) % 360);
  const separation = diff > 180 ? 360 - diff : diff;

  if (separation <= 8.0) {
    return {
      type: isApplying ? 'Ithasala (Success)' : 'Ishrafa (Separating)',
      orbDegrees: Number(separation.toFixed(2))
    };
  }

  return { type: 'None', orbDegrees: Number(separation.toFixed(2)) };
}
