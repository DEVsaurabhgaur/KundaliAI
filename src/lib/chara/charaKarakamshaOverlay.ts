/**
 * Karakamsha Overlay in Chara Dasha
 */

export function checkKarakamshaDasha(activeSignIndex: number, karakamshaSignIndex: number): boolean {
  return activeSignIndex === karakamshaSignIndex || (activeSignIndex + 6) % 12 === karakamshaSignIndex;
}
