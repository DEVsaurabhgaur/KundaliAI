/**
 * Lal Kitab Custom Symbolic Upayas
 */

export function getLalKitabRemedy(planet: string, house: number): string {
  if (planet === 'Sun' && house === 6) return 'Feed jaggery and wheat to brown monkeys.';
  if (planet === 'Moon' && house === 6) return 'Do not donate milk or water for free; dig a public well.';
  if (planet === 'Mars' && house === 8) return 'Bake sweet roti on iron pan and feed stray dogs.';
  if (planet === 'Saturn' && house === 1) return 'Do not consume alcohol or non-vegetarian food.';
  return 'Maintain high moral conduct and respect household elders.';
}
