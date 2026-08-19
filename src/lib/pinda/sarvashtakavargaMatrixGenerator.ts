/**
 * Sarvashtakavarga 12x8 Matrix Builder
 */

export function buildSAVMatrix(bavMatrices: Record<string, number[]>): number[] {
  const sav = Array(12).fill(0);
  for (const arr of Object.values(bavMatrices)) {
    arr.forEach((bindu, idx) => {
      sav[idx] += bindu;
    });
  }
  return sav;
}
