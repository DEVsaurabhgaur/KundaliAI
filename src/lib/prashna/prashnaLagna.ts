/**
 * Horary Prashna Lagna Engine
 */

export function calculatePrashnaLagna(timestamp: number, latitude: number, longitude: number): number {
  const date = new Date(timestamp);
  const hours = date.getUTCHours() + date.getUTCMinutes() / 60;
  const siderealTime = (hours * 15 + longitude + 360) % 360;
  return Number((siderealTime % 360).toFixed(2));
}
