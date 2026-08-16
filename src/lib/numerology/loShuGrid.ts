/**
 * Lo Shu 3x3 Magic Square Grid
 * Standard:
 * 4 9 2 (Mental Plane)
 * 3 5 7 (Emotional Plane)
 * 8 1 6 (Practical Plane)
 */

export function generateLoShuGrid(birthDateStr: string) {
  const digits = birthDateStr.replace(/[^0-9]/g, '').split('');
  const counts: Record<number, number> = {};

  for (let i = 1; i <= 9; i++) counts[i] = 0;
  digits.forEach(d => {
    const num = Number(d);
    if (num >= 1 && num <= 9) counts[num]++;
  });

  return {
    grid: [
      [counts[4], counts[9], counts[2]],
      [counts[3], counts[5], counts[7]],
      [counts[8], counts[1], counts[6]]
    ],
    counts
  };
}
