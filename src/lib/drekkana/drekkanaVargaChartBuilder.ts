export function calculateD3Sign(rashiSign: number, degreeInSign: number): number {
  const decanate = Math.floor(degreeInSign / 10); // 0, 1, 2
  return (rashiSign + decanate * 4) % 12; // 1st, 5th, 9th sign
}
