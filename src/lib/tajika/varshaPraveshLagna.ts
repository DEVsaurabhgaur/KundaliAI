/**
 * Varsha Pravesh Lagna (Annual Chart Ascendant)
 */

export function calculateVarshaPraveshLagna(epochTimestamp: number, latitude: number, longitude: number): number {
  const hours = new Date(epochTimestamp).getUTCHours();
  const asc = (hours * 15 + longitude + latitude * 0.1) % 360;
  return Number(asc.toFixed(4));
}
