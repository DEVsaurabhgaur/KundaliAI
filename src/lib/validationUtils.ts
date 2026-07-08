/** Validation utilities for birth detail inputs */

export function isValidYear(year: number): boolean {
  return Number.isInteger(year) && year >= 1900 && year <= 2100;
}

export function isValidMonth(month: number): boolean {
  return Number.isInteger(month) && month >= 1 && month <= 12;
}

export function isValidDay(day: number, month: number, year: number): boolean {
  if (!Number.isInteger(day) || day < 1) return false;
  const daysInMonth = new Date(year, month, 0).getDate();
  return day <= daysInMonth;
}

export function isValidTime(time: string): boolean {
  const match = time.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return false;
  const h = Number(match[1]);
  const m = Number(match[2]);
  return h >= 0 && h <= 23 && m >= 0 && m <= 59;
}

export function isValidLatitude(lat: number): boolean {
  return lat >= -90 && lat <= 90;
}

export function isValidLongitude(lng: number): boolean {
  return lng >= -180 && lng <= 180;
}

/**
 * Validate a complete birth date string (YYYY-MM-DD).
 * Returns null if valid, or an error message if invalid.
 */
export function validateBirthDate(dateStr: string): string | null {
  if (!dateStr) return 'Birth date is required.';
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return 'Date must be in YYYY-MM-DD format.';
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (!isValidYear(year)) return 'Year must be between 1900 and 2100.';
  if (!isValidMonth(month)) return 'Month must be between 1 and 12.';
  if (!isValidDay(day, month, year)) return 'Invalid day for the given month/year.';
  if (new Date(dateStr) > new Date()) return 'Birth date cannot be in the future.';
  return null;
}

/**
 * Validate a birth time string (HH:MM).
 */
export function validateBirthTime(time: string): string | null {
  if (!time) return 'Birth time is required.';
  if (!isValidTime(time)) return 'Time must be in HH:MM format (24-hour).';
  return null;
}

/**
 * Validate a birth place string.
 */
export function validateBirthPlace(place: string): string | null {
  if (!place || place.trim().length < 2) return 'Please enter a valid birth place (at least 2 characters).';
  if (place.trim().length > 200) return 'Birth place name is too long.';
  return null;
}

/**
 * Validate coordinates.
 */
export function validateCoordinates(lat: number, lng: number): string | null {
  if (isNaN(lat) || !isValidLatitude(lat)) return 'Latitude must be between -90 and 90.';
  if (isNaN(lng) || !isValidLongitude(lng)) return 'Longitude must be between -180 and 180.';
  return null;
}
