/**
 * Kunda Calculation (Birth Time Rectification Tool)
 * Ascendant Longitude in minutes multiplied by 81.
 */

export function calculateKundaSign(ascendantLongDeg: number): number {
  const totalMinutes = ascendantLongDeg * 60;
  const kundaMinutes = (totalMinutes * 81) % 21600; // 360 deg * 60 min
  const kundaDeg = kundaMinutes / 60;
  return Math.floor(kundaDeg / 30);
}
