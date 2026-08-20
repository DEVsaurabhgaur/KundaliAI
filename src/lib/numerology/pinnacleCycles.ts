/**
 * 4 Pinnacle Life Cycles in Numerology
 */

export function calculatePinnacles(day: number, month: number, year: number) {
  const p1 = (month + day) % 9 || 9;
  const p2 = (day + (year % 9 || 9)) % 9 || 9;
  const p3 = (p1 + p2) % 9 || 9;
  const p4 = (month + (year % 9 || 9)) % 9 || 9;

  return { firstPinnacle: p1, secondPinnacle: p2, thirdPinnacle: p3, fourthPinnacle: p4 };
}
