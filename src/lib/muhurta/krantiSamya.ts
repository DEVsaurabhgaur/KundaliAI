/**
 * Kranti Samya (Mahapata - Sun and Moon equal declination on opposite sides of equator)
 */

export function checkKrantiSamya(sunDeclination: number, moonDeclination: number): boolean {
  return Math.abs(Math.abs(sunDeclination) - Math.abs(moonDeclination)) <= 0.25;
}
