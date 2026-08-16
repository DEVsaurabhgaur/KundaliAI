/**
 * Pranapada Lagna (Life-Breath Ascendant for Nativity Verification)
 */

export function calculatePranapada(sunLong: number, timeFromSunriseMin: number): number {
  const pranapada = (sunLong + (timeFromSunriseMin * 4) / 60 * 30) % 360;
  return Number(pranapada.toFixed(2));
}
