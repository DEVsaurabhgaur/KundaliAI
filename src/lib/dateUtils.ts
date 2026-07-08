/** Date utilities for Vedic astrology calculations */

export function formatDateDMY(date: Date): string {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return d + '/' + m + '/' + y;
}

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export function toDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}

export function normalizeDegrees(deg: number): number {
  return ((deg % 360) + 360) % 360;
}

/**
 * Add a given number of years (with fractional support) to a Date.
 */
export function addYears(date: Date, years: number): Date {
  const result = new Date(date);
  const wholeYears = Math.floor(years);
  const fractionalDays = Math.round((years - wholeYears) * 365.25);
  result.setFullYear(result.getFullYear() + wholeYears);
  result.setDate(result.getDate() + fractionalDays);
  return result;
}

/**
 * Get the difference in years between two dates (decimal).
 */
export function yearsBetween(start: Date, end: Date): number {
  return (end.getTime() - start.getTime()) / (365.25 * 24 * 3600 * 1000);
}

/**
 * Format a Date to ISO date string (YYYY-MM-DD).
 */
export function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Parse a date string in YYYY-MM-DD format safely.
 */
export function parseISODate(dateStr: string): Date | null {
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const d = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return isNaN(d.getTime()) ? null : d;
}
