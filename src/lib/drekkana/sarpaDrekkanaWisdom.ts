export function isSarpaDrekkana(signIndex: number, decanate: number): boolean {
  return (signIndex === 3 && decanate === 2) || (signIndex === 7 && decanate === 1) || (signIndex === 11 && decanate === 3);
}
