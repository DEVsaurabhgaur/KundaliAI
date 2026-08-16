/**
 * Numerological Compatibility Matrix (1 to 9)
 */

export function getNumberCompatibility(numA: number, numB: number): number {
  if (numA === numB) return 95;
  const friendlyCombos: Record<number, number[]> = {
    1: [1, 2, 3, 5, 9],
    2: [1, 2, 4, 7],
    3: [1, 3, 5, 6, 9],
    4: [1, 2, 4, 6, 8],
    5: [1, 3, 5, 6],
    6: [3, 4, 5, 6, 9],
    7: [2, 7],
    8: [4, 8],
    9: [1, 3, 6, 9]
  };

  const isFriendly = (friendlyCombos[numA] || []).includes(numB);
  return isFriendly ? 85 : 55;
}
