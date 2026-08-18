/**
 * Atmakaraka (AK) Drishti on Active Chara Dasha Sign
 */

export function checkAKDrishti(activeDashaSign: number, akSign: number): boolean {
  return activeDashaSign === akSign || [4, 7, 8].includes((akSign - activeDashaSign + 12) % 12);
}
