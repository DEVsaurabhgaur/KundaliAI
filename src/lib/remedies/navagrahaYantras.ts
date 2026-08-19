/**
 * 9 Navagraha Magic Square Yantras
 * Surya Yantra: Magic constant 15 (6,1,8 / 7,5,3 / 2,9,4)
 */

export const SURYA_YANTRA_GRID = [
  [6, 1, 8],
  [7, 5, 3],
  [2, 9, 4]
];

export function verifyMagicSquare(grid: number[][], targetSum: number): boolean {
  for (let r = 0; r < 3; r++) {
    const rowSum = grid[r][0] + grid[r][1] + grid[r][2];
    if (rowSum !== targetSum) return false;
  }
  return true;
}
