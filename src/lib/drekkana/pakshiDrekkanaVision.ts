export function isPakshiDrekkana(signIndex: number, decanate: number): boolean {
  return decanate === 2 && [2, 5, 8, 11].includes(signIndex); // Dual signs 2nd Drekkana
}
