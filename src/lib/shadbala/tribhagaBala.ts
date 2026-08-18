/**
 * Tribhaga Bala (3 Equal Divisions of Day and Night)
 * Day: Part 1 = Mercury, Part 2 = Sun, Part 3 = Saturn
 * Night: Part 1 = Moon, Part 2 = Venus, Part 3 = Mars
 * Jupiter always receives full Tribhaga strength (60 Virupas).
 */

export function calculateTribhagaBala(isDay: boolean, partNumber: 1 | 2 | 3, planet: string): number {
  if (planet === 'Jupiter') return 60;
  if (isDay) {
    if (partNumber === 1 && planet === 'Mercury') return 60;
    if (partNumber === 2 && planet === 'Sun') return 60;
    if (partNumber === 3 && planet === 'Saturn') return 60;
  } else {
    if (partNumber === 1 && planet === 'Moon') return 60;
    if (partNumber === 2 && planet === 'Venus') return 60;
    if (partNumber === 3 && planet === 'Mars') return 60;
  }
  return 0;
}
