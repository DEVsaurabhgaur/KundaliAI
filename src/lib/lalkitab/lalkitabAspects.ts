/**
 * Lal Kitab Special Aspect Principles
 * 100% sight: 1st house looks at 7th; 4th looks at 10th; 8th looks at 2nd; 3rd looks at 11th; 5th looks at 9th.
 */

export function checkLalKitabSight(fromHouse: number, toHouse: number): number {
  const SIGHT_MAP: Record<number, number> = { 1: 7, 4: 10, 8: 2, 3: 11, 5: 9, 2: 6, 6: 12 };
  if (SIGHT_MAP[fromHouse] === toHouse) return 100;
  return 0;
}
