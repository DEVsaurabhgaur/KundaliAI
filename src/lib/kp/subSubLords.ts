/**
 * KP Sub-Sub Lord Calculator
 * Further sub-divides the Sub-Lord span proportional to Vimshottari Dasha years.
 */

export function calculateSubSubLord(subLord: string, minutesIntoSub: number): string {
  const PLANETS = ['Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury'];
  const startIdx = PLANETS.indexOf(subLord);
  const idx = Math.floor(minutesIntoSub / 10) % 9;
  return PLANETS[(startIdx + idx) % 9];
}
