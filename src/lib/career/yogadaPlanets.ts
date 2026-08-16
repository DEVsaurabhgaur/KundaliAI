/**
 * Yogada Planets (Planets that aspect Lagna, Hora Lagna, and Ghatika Lagna)
 */

export function isYogadaPlanet(aspectsLagna: boolean, aspectsHoraLagna: boolean): boolean {
  return aspectsLagna && aspectsHoraLagna;
}
