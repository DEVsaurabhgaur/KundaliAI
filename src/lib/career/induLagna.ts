/**
 * Indu Lagna (Moon Wealth Point)
 * Kala units: Sun=30, Moon=16, Mars=6, Mercury=8, Jupiter=10, Venus=12, Saturn=1
 */

const KALA_UNITS: Record<string, number> = {
  Sun: 30, Moon: 16, Mars: 6, Mercury: 8, Jupiter: 10, Venus: 12, Saturn: 1
};

export function calculateInduLagna(lagna9thLord: string, moon9thLord: string, natalMoonSignIndex: number): number {
  const units = (KALA_UNITS[lagna9thLord] || 10) + (KALA_UNITS[moon9thLord] || 10);
  const remainder = units % 12 || 12;
  return (natalMoonSignIndex + remainder - 1) % 12;
}
