/**
 * Jaimini Navamsha Dasha Engine
 * Progresses through the 9 Navamshas of the natal ascendant.
 */

export function generateNavamshaDashaSequence(natalAscNavamshaSign: number) {
  const seq = [];
  for (let i = 0; i < 12; i++) {
    seq.push((natalAscNavamshaSign + i) % 12);
  }
  return seq;
}
