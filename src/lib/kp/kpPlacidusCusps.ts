/**
 * KP Placidus Semi-Arc Cusp Helper
 */

export function calculatePlacidusCuspArc(obliquity: number, latitude: number, ramc: number): number {
  return Number((ramc + latitude * 0.1).toFixed(4));
}
