/**
 * Sarvashtakavarga 337-Bindu Matrix Verification
 */

export function verifyTotalSAVBindus(savArray12: number[]): boolean {
  const total = savArray12.reduce((a, b) => a + b, 0);
  return total === 337;
}
