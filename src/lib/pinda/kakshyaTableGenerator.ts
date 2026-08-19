/**
 * Prastarashtakavarga 8-Kakshya Table (3° 45' sub-bands)
 */

export function generateKakshyaMatrix(activeBindus: boolean[]): { kakshya: number; hasBindu: boolean }[] {
  return Array.from({ length: 8 }, (_, i) => ({
    kakshya: i + 1,
    hasBindu: activeBindus[i] ?? false
  }));
}
