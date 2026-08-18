/**
 * Ayana Bala (Equinoctial / Declination Strength: 0 to 60 Virupas)
 */

export function calculateAyanaBala(declinationDeg: number, isNorthernDeclination: boolean, planet: string): number {
  const isSunOrMars = ['Sun', 'Mars', 'Jupiter', 'Venus'].includes(planet);
  const virupas = isSunOrMars === isNorthernDeclination ? 30 + Math.abs(declinationDeg) : 30 - Math.abs(declinationDeg);
  return Math.min(60, Math.max(0, Number(virupas.toFixed(2))));
}
