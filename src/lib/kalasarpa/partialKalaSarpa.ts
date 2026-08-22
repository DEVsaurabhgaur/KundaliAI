export function evaluatePartialKalaSarpa(planetsInsideNodalAxis: number): string {
  if (planetsInsideNodalAxis === 7) return 'Poorna Kala Sarpa Yoga (100% Enclosure)';
  if (planetsInsideNodalAxis === 6) return 'Anshik / Partial Kala Sarpa Yoga (One Planet Escaping Axis)';
  return 'No Kala Sarpa Enclosure (Free Planetary Distribution)';
}
