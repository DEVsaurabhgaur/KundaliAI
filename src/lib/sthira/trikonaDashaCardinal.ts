/**
 * Jaimini Trikona Dasha Cardinal Progression
 */

export function getCardinalTrikonaSequence(startSign: number): number[] {
  return [startSign, (startSign + 4) % 12, (startSign + 8) % 12];
}
