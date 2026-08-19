/**
 * Prastarashtakavarga Single Degree Bindu Lookup
 */

export function hasKakshyaBindu(degreeInSign: number, kakshyaArray8: boolean[]): boolean {
  const kakshyaIdx = Math.min(7, Math.floor(degreeInSign / 3.75));
  return kakshyaArray8[kakshyaIdx] ?? false;
}
