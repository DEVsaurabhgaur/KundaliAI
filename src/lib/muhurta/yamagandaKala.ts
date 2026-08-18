/**
 * Yamaganda Kalam Segments (1/8th of daytime)
 * Sun: 5th | Mon: 4th | Tue: 3rd | Wed: 2nd | Thu: 1st | Fri: 7th | Sat: 6th
 */

const YAMA_SEGMENTS: Record<number, number> = { 0: 5, 1: 4, 2: 3, 3: 2, 4: 1, 5: 7, 6: 6 };

export function getYamagandaSegment(dayOfWeek: number): number {
  return YAMA_SEGMENTS[dayOfWeek % 7];
}
