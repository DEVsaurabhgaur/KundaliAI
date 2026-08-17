/**
 * Gulika Kalam (Son of Saturn Diurnal Segment)
 * Daytime portion index out of 8 segments by weekday:
 * Sunday: 7, Monday: 6, Tuesday: 5, Wednesday: 4, Thursday: 3, Friday: 2, Saturday: 1
 */

const GULIKA_SEGMENTS: Record<number, number> = { 0: 7, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 };

export function getGulikaSegment(dayOfWeek: number): number {
  return GULIKA_SEGMENTS[dayOfWeek % 7];
}
