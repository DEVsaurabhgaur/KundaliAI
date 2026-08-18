/**
 * Rahu Kalam Diurnal Segments (1/8th of daytime)
 * Sun: 8th | Mon: 2nd | Tue: 7th | Wed: 5th | Thu: 6th | Fri: 4th | Sat: 3rd
 */

const RAHU_SEGMENTS: Record<number, number> = { 0: 8, 1: 2, 2: 7, 3: 5, 4: 6, 5: 4, 6: 3 };

export function getRahuKalamSegment(dayOfWeek: number): number {
  return RAHU_SEGMENTS[dayOfWeek % 7];
}
