export function calculateActiveBSPYears(currentAge: number, planetaryAges: number[]): boolean {
  return planetaryAges.includes(currentAge);
}
