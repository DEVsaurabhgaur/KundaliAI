export function isAyudhaDrekkana(signIndex: number, decanate: number): boolean {
  return decanate === 1 && [0, 7].includes(signIndex); // Aries & Scorpio 1st Drekkana
}
