/**
 * Drik Bala (Aspect Strength)
 * Sum of benefic drishti minus malefic drishti received by a planet.
 */

export function calculateDrikBala(beneficRays: number, maleficRays: number): number {
  const net = beneficRays - maleficRays;
  return Number(net.toFixed(2));
}
