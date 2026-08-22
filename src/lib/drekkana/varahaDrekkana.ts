export function isSarpaOrVarahaDrekkana(decanateIndex: number): boolean {
  return [1, 2].includes(decanateIndex % 3);
}
