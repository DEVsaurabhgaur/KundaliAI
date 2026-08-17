/**
 * Mandook Dasha (Frog-Leap Sequence for Dual Signs)
 * Advances by skipping every other sign (1st -> 3rd -> 5th...).
 */

export function generateMandookSequence(startSignIndex: number): number[] {
  const sequence: number[] = [];
  for (let i = 0; i < 12; i++) {
    sequence.push((startSignIndex + i * 2) % 12);
  }
  return sequence;
}
