export function isChatushpadaDrekkana(signIndex: number, decanate: number): boolean {
  return decanate === 1 && [1, 4, 8, 9].includes(signIndex); // Taurus, Leo, Sag, Cap 1st Drekkana
}
