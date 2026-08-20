/**
 * Nakshatra Latta (Planetary Kick Aspect)
 * Sun kicks 12th star forward | Mars kicks 3rd star forward | Jupiter kicks 6th star forward |
 * Saturn kicks 8th star backward | Rahu kicks 9th star backward
 */

export function calculateLattaStar(transitingStar: number, planet: string): number {
  if (planet === 'Sun') return (transitingStar + 12) % 28;
  if (planet === 'Mars') return (transitingStar + 3) % 28;
  if (planet === 'Jupiter') return (transitingStar + 6) % 28;
  if (planet === 'Saturn') return (transitingStar - 8 + 28) % 28;
  if (planet === 'Rahu') return (transitingStar - 9 + 28) % 28;
  return transitingStar;
}
