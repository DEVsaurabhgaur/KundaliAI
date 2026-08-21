export function calculateBSP12MarsProperty(marsHouse: number): number {
  return ((marsHouse + 3) % 12) + 1;
}
