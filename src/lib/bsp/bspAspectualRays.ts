export function calculateBhriguRay(planetHouse: number, rayOffset: number): number {
  return ((planetHouse + rayOffset - 1) % 12) + 1;
}
