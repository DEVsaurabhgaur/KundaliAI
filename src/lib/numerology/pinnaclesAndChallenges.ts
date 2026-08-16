/**
 * 4 Life Pinnacles & 4 Challenge Numbers
 */

export function calculatePinnacles(day: number, month: number, year: number) {
  const p1 = (day + month) % 9 || 9;
  const p2 = (day + year) % 9 || 9;
  const p3 = (p1 + p2) % 9 || 9;
  const p4 = (month + year) % 9 || 9;

  return { pinnacle1: p1, pinnacle2: p2, pinnacle3: p3, pinnacle4: p4 };
}
