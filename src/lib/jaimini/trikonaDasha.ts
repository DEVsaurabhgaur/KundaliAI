/**
 * Trikona Dasha (Trinal Sign Sequence: 1st -> 5th -> 9th...)
 */

export function generateTrikonaSequence(startSignIndex: number): number[] {
  return [
    startSignIndex,
    (startSignIndex + 4) % 12,
    (startSignIndex + 8) % 12
  ];
}
