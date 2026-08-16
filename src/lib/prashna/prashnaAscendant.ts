/**
 * Prashna Kundali (Horary Astrology Query Ascendant)
 */

export function calculatePrashnaAscendant(queryEpochMs: number, latitude: number, longitude: number): number {
  const d = new Date(queryEpochMs);
  const hour = d.getUTCHours() + d.getUTCMinutes() / 60;
  // Dynamic sidereal approximation for interrogation moment
  const asc = ((hour * 15 + longitude + 70) % 360 + 360) % 360;
  return Number(asc.toFixed(2));
}
